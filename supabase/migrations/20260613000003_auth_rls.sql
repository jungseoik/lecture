-- ============================================================================
-- 인증 연동 + RLS 정책
-- - auth.users 생성 시 public.users(role=student) 자동 생성 트리거
-- - 카탈로그 테이블: 공개 읽기
-- - 사용자/거래 테이블: 본인 데이터만 (서버는 service_role 로 우회)
-- ============================================================================

-- auth.users → public.users 동기화
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.users (id, email, name, nationality, phone, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'name', ''),
    new.raw_user_meta_data ->> 'nationality',
    new.raw_user_meta_data ->> 'phone',
    'student'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---- 카탈로그(공개 읽기) ----
alter table public.universities        enable row level security;
alter table public.university_programs  enable row level security;
alter table public.scholarships         enable row level security;
alter table public.dormitories          enable row level security;
alter table public.living_costs         enable row level security;

create policy "catalog read" on public.universities       for select using (true);
create policy "catalog read" on public.university_programs for select using (true);
create policy "catalog read" on public.scholarships        for select using (true);
create policy "catalog read" on public.dormitories         for select using (true);
create policy "catalog read" on public.living_costs        for select using (true);

-- ---- 사용자/거래 (본인만) ----
alter table public.users               enable row level security;
alter table public.student_profiles    enable row level security;
alter table public.saved_universities  enable row level security;
alter table public.cost_calculation_logs    enable row level security;
alter table public.consultation_requests     enable row level security;
alter table public.consultation_transfer_logs enable row level security;
alter table public.consultation_notes  enable row level security;

-- users: 본인 행 조회/수정 (insert 는 트리거가 security definer 로 처리)
create policy "own row select" on public.users for select using (auth.uid() = id);
create policy "own row update" on public.users for update using (auth.uid() = id);

-- student_profiles: 본인 소유
create policy "own profiles" on public.student_profiles
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- saved_universities: 본인 소유
create policy "own saved" on public.saved_universities
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- cost_calculation_logs: 누구나 기록 가능, 본인 것만 조회
create policy "log insert" on public.cost_calculation_logs
  for insert with check (user_id is null or auth.uid() = user_id);
create policy "log select own" on public.cost_calculation_logs
  for select using (auth.uid() = user_id);

-- consultation_requests: 본인 소유 (조회/생성/수정)
create policy "own consultations" on public.consultation_requests
  for all using (auth.uid() = student_id) with check (auth.uid() = student_id);

-- consultation_notes / transfer_logs: 관리자(서버 service_role)만 → 정책 없음(클라 접근 차단)
