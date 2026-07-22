"use client";
import { createBrowserClient } from "@supabase/ssr";
import { isSupabaseConfigured } from "./config";

/**
 * 브라우저용 Supabase 클라이언트 (anon key).
 * 환경변수가 없으면 null 을 반환한다(데모 모드 — 인증 기능 비활성).
 */
export function createClient() {
  if (!isSupabaseConfigured()) return null;
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
