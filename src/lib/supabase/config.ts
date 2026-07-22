/** Supabase(클라이언트) 환경변수가 설정돼 있는지. 없으면 데모 모드(샘플 데이터). */
export function isSupabaseConfigured(): boolean {
  return (
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

/** 서버(service_role) 환경변수가 설정돼 있는지. */
export function isSupabaseAdminConfigured(): boolean {
  return (
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}
