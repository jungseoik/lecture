import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";

/**
 * POST /api/consultations — 유학 상담요청 생성
 * body: { universityId, programId?, matchScore?, monthlyLivingCost?, contactMethod? }
 * 로그인 필요(비회원은 회원가입 유도). status='신규'.
 */
export async function POST(request: Request) {
  // 데모 모드(Supabase 미설정): 저장 없이 성공 응답으로 UI 흐름만 시연
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { ok: true, demo: true, consultation: { status: "신규(데모)" } },
      { status: 201 },
    );
  }

  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "로그인이 필요해요. 무료 프로필을 만들고 상담을 요청해 주세요." },
      { status: 401 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "잘못된 요청이에요." }, { status: 400 });
  }

  const universityId = body.universityId as string | undefined;
  if (!universityId) {
    return NextResponse.json({ error: "대학 정보가 필요해요." }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("consultation_requests")
    .insert({
      student_id: user.id,
      university_id: universityId,
      program_id: (body.programId as string) ?? null,
      match_score: (body.matchScore as number) ?? null,
      monthly_living_cost: (body.monthlyLivingCost as number) ?? null,
      contact_method: (body.contactMethod as string) ?? "이메일",
      status: "신규",
    })
    .select("id, status")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, consultation: data }, { status: 201 });
}
