import { NextResponse } from "next/server";
import { getUniversities } from "@/lib/universities";
import { recommend, type MatchProfile } from "@/lib/recommend";

/**
 * POST /api/universities/recommend
 * body: MatchProfile → 규칙기반 점수로 정렬된 추천 대학 목록.
 */
export async function POST(request: Request) {
  let profile: MatchProfile = {};
  try {
    profile = (await request.json()) as MatchProfile;
  } catch {
    // 빈 프로필이면 기본 추천
  }

  const universities = await getUniversities();
  const recs = recommend(universities, profile);

  const summary = {
    count: recs.length,
    scholarshipCount: recs.filter((r) => r.scholarship >= 50).length,
    dormCount: recs.filter((r) => r.dorm).length,
    avgMonthly: recs.length
      ? Math.round(recs.reduce((a, r) => a + r.monthlyCost, 0) / recs.length)
      : 0,
  };

  return NextResponse.json({ summary, recommendations: recs });
}
