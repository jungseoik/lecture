import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * 서버 전용 Supabase 클라이언트 (service_role).
 * RLS를 우회하므로 절대 클라이언트로 노출하지 마세요. 서버 컴포넌트/route handler에서만 사용.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      "Supabase 환경변수가 없습니다. .env.local 의 NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY 를 설정하세요.",
    );
  }
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
