import type { UniversitySummary } from "@/lib/universities";

/** /match 폼이 수집하는 추천 입력 (필요한 항목만). */
export interface MatchProfile {
  desiredMajor?: string;
  desiredRegion?: string; // region group
  topik?: string; // "없음" | "TOPIK 3급" ...
  ielts?: string;
  gpa?: string; // 예: "3.4"
  gpaScale?: string; // "4.5 만점" 등
  financialProof?: string; // 가능/준비중/불가능
  scholarshipNeed?: string; // 필요/불필요/상관없음
  budget?: number; // 월 예산(원)
}

export interface RecReason {
  text: string;
}

export interface Recommendation extends UniversitySummary {
  score: number;
  scoreLabel: string;
  matchReasons: string[];
}

function scaleMax(scale?: string): number {
  if (!scale) return 4.5;
  if (scale.startsWith("100")) return 100;
  const m = parseFloat(scale);
  return Number.isFinite(m) ? m : 4.5;
}

function topikLevel(topik?: string): number {
  if (!topik || topik === "없음") return 0;
  const m = topik.match(/(\d)/);
  return m ? Number(m[1]) : 0;
}

function reqTopikLevel(req: string | null): number {
  if (!req) return 0;
  const m = req.match(/(\d)/);
  return m ? Number(m[1]) : 0;
}

function label(score: number): string {
  if (score >= 80) return "추천도 높음";
  if (score >= 60) return "추천 가능";
  if (score >= 40) return "보완 필요";
  return "추천 낮음";
}

/** 규칙기반 100점 (HANDOFF §2-3). */
export function scoreUniversity(
  u: UniversitySummary,
  p: MatchProfile,
): Recommendation {
  const reasons: string[] = [];
  let score = 0;

  // 1) 희망학과 일치도 (25)
  if (p.desiredMajor) {
    const key = p.desiredMajor.replace(/학(과|부)?$/, "");
    const hit = u.majors.some((m) => m.includes(key) || key.includes(m.replace(/학(과|부)?$/, "")));
    if (hit) {
      score += 25;
      reasons.push("희망전공 일치");
    } else {
      score += 8;
    }
  } else {
    score += 12;
  }

  // 2) TOPIK/영어 조건 충족 (20)
  const need = reqTopikLevel(u.topik);
  if (topikLevel(p.topik) >= need && need > 0) {
    score += 20;
    reasons.push("TOPIK 조건 충족");
  } else if (p.ielts && parseFloat(p.ielts) >= 5.5) {
    score += 18;
    reasons.push("IELTS 조건 충족");
  } else if (topikLevel(p.topik) > 0) {
    score += 12;
  } else {
    score += 6;
  }

  // 3) GPA 조건 (15)
  if (p.gpa) {
    const ratio = parseFloat(p.gpa) / scaleMax(p.gpaScale);
    if (ratio >= 0.7) {
      score += 15;
      reasons.push("성적 조건 충족");
    } else if (ratio >= 0.5) {
      score += 9;
    } else {
      score += 4;
    }
  } else {
    score += 8;
  }

  // 4) 재정증명 (15)
  if (p.financialProof === "가능") {
    score += 15;
  } else if (p.financialProof === "준비중") {
    score += 8;
  } else if (p.financialProof === "불가능") {
    score += 2;
  } else {
    score += 10;
  }

  // 5) 등록금·생활비 예산 적합 (10)
  if (p.budget) {
    score += u.monthlyCost <= p.budget ? 10 : 5;
  } else {
    score += 8;
  }

  // 6) 장학금 가능성 (10)
  if (u.scholarship >= 70) {
    score += 10;
    if (p.scholarshipNeed === "필요" || p.scholarshipNeed === "매우필요") reasons.push("장학금 가능성 높음");
  } else if (u.scholarship >= 50) {
    score += 7;
  } else {
    score += 4;
  }

  // 7) 희망 지역 일치 (5)
  if (p.desiredRegion && u.regionGroup === p.desiredRegion) {
    score += 5;
    reasons.push("희망 지역 일치");
  }

  if (u.dorm) reasons.push("기숙사 제공");

  score = Math.min(100, Math.round(score));
  return { ...u, score, scoreLabel: label(score), matchReasons: reasons.slice(0, 4) };
}

/** 전체 대학을 점수순 정렬해 추천 목록 반환. */
export function recommend(
  universities: UniversitySummary[],
  profile: MatchProfile,
): Recommendation[] {
  return universities
    .map((u) => scoreUniversity(u, profile))
    .sort((a, b) => b.score - a.score);
}
