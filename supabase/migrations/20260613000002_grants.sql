-- ============================================================================
-- API 롤 권한 부여
-- 최신 Supabase는 새 엔터티를 API 롤에 자동 노출하지 않으므로 명시적으로 부여한다.
-- service_role: 서버(관리자/route handler)에서 RLS 우회 접근.
-- anon/authenticated: 향후 클라이언트 직접 접근 대비(공개 읽기). 세부 제어는 RLS로.
-- ============================================================================

grant usage on schema public to anon, authenticated, service_role;

-- service_role: 전체 권한
grant all privileges on all tables    in schema public to service_role;
grant all privileges on all sequences in schema public to service_role;
grant all privileges on all functions in schema public to service_role;

-- anon/authenticated: 읽기 (RLS 미적용 상태에서의 공개 조회용)
grant select on all tables in schema public to anon, authenticated;

-- 이후 생성되는 객체에도 동일 기본 권한 적용
alter default privileges in schema public
  grant all privileges on tables to service_role;
alter default privileges in schema public
  grant all privileges on sequences to service_role;
alter default privileges in schema public
  grant select on tables to anon, authenticated;
