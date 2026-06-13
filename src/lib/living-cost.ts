// 생활비 계산 도메인 상수 — 출처: docs/design-system/.../data.js (KSM_DATA)

/** 주거 유형 → living_costs 컬럼 매핑 */
export const HOUSING_OPTIONS = [
  { label: "기숙사", value: "기숙사", column: "dormitory_monthly_cost" },
  { label: "월세", value: "월세", column: "rent_monthly_cost" },
  { label: "고시원·원룸", value: "고시원·원룸", column: "gosiwon_monthly_cost" },
] as const;

export type HousingValue = (typeof HOUSING_OPTIONS)[number]["value"];

/** 생활 방식 배수 (절약형/보통형/여유형) */
export const LIFE_MULTIPLIER: Record<string, number> = {
  절약형: 0.85,
  보통형: 1,
  여유형: 1.25,
};

export const LIFE_OPTIONS = Object.keys(LIFE_MULTIPLIER);

/** living_costs 행에서 주거 유형에 해당하는 컬럼 키 */
export function housingColumn(housing: string): string | null {
  return HOUSING_OPTIONS.find((o) => o.value === housing)?.column ?? null;
}

export interface CostResult {
  monthly: number;
  semester: number; // 6개월
  annual: number; // 12개월
}

/** 기준 월 비용 + 생활방식 배수 → 월/6개월/1년 */
export function computeCost(baseMonthly: number, lifeStyle: string): CostResult {
  const multiplier = LIFE_MULTIPLIER[lifeStyle] ?? 1;
  const monthly = Math.round(baseMonthly * multiplier);
  return { monthly, semester: monthly * 6, annual: monthly * 12 };
}
