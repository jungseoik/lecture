import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isSupabaseAdminConfigured } from "@/lib/supabase/config";
import { SAMPLE_LIVING_COSTS } from "@/lib/sample-data";
import { housingColumn, computeCost, LIFE_MULTIPLIER } from "@/lib/living-cost";

// housing 컬럼 → 샘플 데이터 키 매핑
const SAMPLE_KEY: Record<string, "dormitory" | "rent" | "gosiwon"> = {
  dormitory_monthly_cost: "dormitory",
  rent_monthly_cost: "rent",
  gosiwon_monthly_cost: "gosiwon",
};

/**
 * GET /api/living-costs?region=서울&housing=기숙사&life=보통형
 * living_costs(DB)에서 region 행을 조회 → 주거 유형 컬럼 선택 → 생활방식 배수 적용.
 * 응답: { region, housing, life, base, monthly, semester, annual }
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get("region");
  const housing = searchParams.get("housing");
  const life = searchParams.get("life") ?? "보통형";

  if (!region || !housing) {
    return NextResponse.json(
      { error: "region 과 housing 은 필수입니다." },
      { status: 400 },
    );
  }

  const column = housingColumn(housing);
  if (!column) {
    return NextResponse.json(
      { error: `알 수 없는 주거 유형: ${housing}` },
      { status: 400 },
    );
  }
  if (!(life in LIFE_MULTIPLIER)) {
    return NextResponse.json(
      { error: `알 수 없는 생활 방식: ${life}` },
      { status: 400 },
    );
  }

  // 데모 모드(Supabase 미설정): 샘플 데이터로 계산
  if (!isSupabaseAdminConfigured()) {
    const sample = SAMPLE_LIVING_COSTS[region];
    const base = sample?.[SAMPLE_KEY[column]];
    if (base == null) {
      return NextResponse.json(
        { error: `'${region}' 지역의 생활비 데이터를 찾을 수 없습니다.` },
        { status: 404 },
      );
    }
    return NextResponse.json({ region, housing, life, base, ...computeCost(base, life), demo: true });
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("living_costs")
    .select(column)
    .eq("region", region)
    .single();

  if (error || !data) {
    return NextResponse.json(
      { error: `'${region}' 지역의 생활비 데이터를 찾을 수 없습니다.` },
      { status: 404 },
    );
  }

  const base = (data as unknown as Record<string, number>)[column];
  if (base == null) {
    return NextResponse.json(
      { error: `'${region}/${housing}' 기준 생활비가 없습니다.` },
      { status: 404 },
    );
  }

  const cost = computeCost(base, life);
  return NextResponse.json({ region, housing, life, base, ...cost });
}
