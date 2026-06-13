import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * 서버용 Supabase 클라이언트 (anon key + 쿠키 세션).
 * 인증이 붙으면 이 클라이언트로 로그인 사용자 컨텍스트를 읽습니다.
 */
export async function createServerSupabase() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // 서버 컴포넌트에서 set 호출 시 무시 (미들웨어에서 갱신)
          }
        },
      },
    },
  );
}
