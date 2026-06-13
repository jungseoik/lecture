-- ============================================================================
-- K-Study Match — 초기 스키마 (HANDOFF.md §4 의 12개 테이블)
-- 외국인 유학생용 한국 대학 비교·추천·상담 플랫폼.
-- 참고: 인증은 Supabase Auth(auth.users)가 담당. public.users 는 앱 프로필.
-- ============================================================================

-- 공통: updated_at 자동 갱신 트리거 함수
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ----------------------------------------------------------------------------
-- 1. users — 앱 사용자(학생/관리자). 추후 auth.users(id) 와 1:1 연결 가능.
-- ----------------------------------------------------------------------------
create table public.users (
  id           uuid primary key default gen_random_uuid(),
  email        text unique not null,
  name         text,
  nationality  text,                              -- 국가코드
  phone        text,                              -- 국가번호 포함
  role         text not null default 'student' check (role in ('student','admin')),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- 2. student_profiles — 맞춤 학교 찾기 단계형 폼(U-02) 입력
-- ----------------------------------------------------------------------------
create table public.student_profiles (
  id                     uuid primary key default gen_random_uuid(),
  user_id                uuid references public.users(id) on delete cascade,
  gender                 text check (gender in ('남성','여성','기타','미응답')),
  birth_date             date,
  residence_country      text,
  whatsapp_available     boolean default false,
  telegram_id            text,
  desired_degree         text check (desired_degree in ('어학연수','학부','석사','박사')),
  desired_major          text,
  desired_region         text[],                  -- 복수 선택
  desired_semester       text,
  dormitory_preference   text check (dormitory_preference in ('희망','비희망','상관없음')),
  budget_min             integer,                 -- 월 생활비 예산(원)
  budget_max             integer,
  current_education      text,                    -- 최종학력
  graduation_status      text check (graduation_status in ('졸업','졸업예정','재학중')),
  gpa                    numeric,
  gpa_scale              text check (gpa_scale in ('4.0','4.3','4.5','5.0','100')),
  topik_level            text,                    -- 없음/1~6급
  ielts_score            numeric,
  toefl_score            numeric,
  financial_proof_status text check (financial_proof_status in ('가능','준비중','불가능')),
  scholarship_need       text check (scholarship_need in ('매우필요','필요','상관없음')),
  created_at             timestamptz not null default now(),
  updated_at             timestamptz not null default now()
);
create index on public.student_profiles(user_id);

-- ----------------------------------------------------------------------------
-- 3. universities — 대학 기본 정보 (id 는 안정적 slug)
-- ----------------------------------------------------------------------------
create table public.universities (
  id                    text primary key,         -- slug, e.g. 'cbnu'
  name                  text not null,
  name_en               text,
  region                text,                      -- "청주, 충청북도"
  region_group          text,                      -- "충청권" (living_costs.region 과 매칭)
  type                  text check (type in ('국립대','사립대')),
  initial               text,
  foreign_student_ratio numeric,                   -- 외국인학생 비율(%)
  intro                 text,
  image_url             text,
  contact_phone         text,
  contact_email         text,
  contact_web           text,
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now()
);
create index on public.universities(region_group);
create index on public.universities(type);

-- ----------------------------------------------------------------------------
-- 4. university_programs — 학과/전공 과정 (등록금 포함)
-- ----------------------------------------------------------------------------
create table public.university_programs (
  id                   uuid primary key default gen_random_uuid(),
  university_id        text not null references public.universities(id) on delete cascade,
  major                text not null,
  degree               text,                       -- 학부/석사/박사/어학연수
  language             text,                       -- 한국어/영어트랙
  tuition_per_semester integer,                    -- 학기 등록금(원)
  topik_requirement    text,
  created_at           timestamptz not null default now()
);
create index on public.university_programs(university_id);
create index on public.university_programs(major);

-- ----------------------------------------------------------------------------
-- 5. scholarships — 장학금
-- ----------------------------------------------------------------------------
create table public.scholarships (
  id             uuid primary key default gen_random_uuid(),
  university_id  text not null references public.universities(id) on delete cascade,
  name           text,
  reduction_rate integer,                          -- 감면율(%)
  description    text,
  created_at     timestamptz not null default now()
);
create index on public.scholarships(university_id);

-- ----------------------------------------------------------------------------
-- 6. dormitories — 기숙사
-- ----------------------------------------------------------------------------
create table public.dormitories (
  id             uuid primary key default gen_random_uuid(),
  university_id  text not null references public.universities(id) on delete cascade,
  room_types     text,
  monthly_cost   integer,                          -- 월 환산(원)
  meal_included  boolean default false,
  notes          text,
  created_at     timestamptz not null default now()
);
create index on public.dormitories(university_id);

-- ----------------------------------------------------------------------------
-- 7. living_costs — 지역별 생활비 (메인페이지 간단 계산기의 기준)
--    region 은 region_group 단위("서울","충청권"…). 주거 유형별 월 기준액.
-- ----------------------------------------------------------------------------
create table public.living_costs (
  id                     uuid primary key default gen_random_uuid(),
  region                 text not null unique,
  dormitory_monthly_cost integer,                  -- 기숙사
  rent_monthly_cost      integer,                  -- 월세
  gosiwon_monthly_cost   integer,                  -- 고시원·원룸
  food_cost              integer,
  transportation_cost    integer,
  communication_cost     integer,
  insurance_cost         integer,
  etc_cost               integer,
  created_at             timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- 8. saved_universities — 관심 대학 저장 (로그인 필요)
-- ----------------------------------------------------------------------------
create table public.saved_universities (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references public.users(id) on delete cascade,
  university_id text not null references public.universities(id) on delete cascade,
  created_at    timestamptz not null default now(),
  unique (user_id, university_id)
);

-- ----------------------------------------------------------------------------
-- 9. cost_calculation_logs — 생활비 계산기 이용 기록
-- ----------------------------------------------------------------------------
create table public.cost_calculation_logs (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid references public.users(id) on delete set null,
  university_id text references public.universities(id) on delete set null,
  region        text,
  housing_type  text,
  life_style    text,                              -- 절약형/보통형/여유형
  monthly       integer,
  semester      integer,
  annual        integer,
  created_at    timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- 10. consultation_requests — 유학 상담요청 (핵심 흐름 테이블)
-- ----------------------------------------------------------------------------
create table public.consultation_requests (
  id                  uuid primary key default gen_random_uuid(),
  student_id          uuid references public.users(id) on delete set null,
  university_id       text references public.universities(id) on delete set null,
  program_id          uuid references public.university_programs(id) on delete set null,
  match_score         integer,
  monthly_living_cost integer,
  contact_method      text,                        -- 이메일/WhatsApp/Telegram…
  status              text not null default '신규'
                        check (status in ('신규','상담확인중','학생연락중','상담완료',
                                          '학교이관준비','학교이관완료','학교검토중',
                                          '지원진행','상담종료','보류','취소')),
  assigned_admin_id   uuid references public.users(id) on delete set null,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);
create index on public.consultation_requests(status);
create index on public.consultation_requests(student_id);

-- ----------------------------------------------------------------------------
-- 11. consultation_transfer_logs — 학교 이관 이력
-- ----------------------------------------------------------------------------
create table public.consultation_transfer_logs (
  id                      uuid primary key default gen_random_uuid(),
  consultation_request_id uuid not null references public.consultation_requests(id) on delete cascade,
  from_status             text,
  to_status               text,
  note                    text,
  created_by              uuid references public.users(id) on delete set null,
  created_at              timestamptz not null default now()
);
create index on public.consultation_transfer_logs(consultation_request_id);

-- ----------------------------------------------------------------------------
-- 12. consultation_notes — 상담 메모
-- ----------------------------------------------------------------------------
create table public.consultation_notes (
  id                      uuid primary key default gen_random_uuid(),
  consultation_request_id uuid not null references public.consultation_requests(id) on delete cascade,
  author_id               uuid references public.users(id) on delete set null,
  body                    text,
  created_at              timestamptz not null default now()
);
create index on public.consultation_notes(consultation_request_id);

-- ---- updated_at 트리거 부착 ----
create trigger trg_users_updated        before update on public.users               for each row execute function public.set_updated_at();
create trigger trg_profiles_updated      before update on public.student_profiles    for each row execute function public.set_updated_at();
create trigger trg_universities_updated  before update on public.universities        for each row execute function public.set_updated_at();
create trigger trg_consultations_updated before update on public.consultation_requests for each row execute function public.set_updated_at();
