/** 통화 포맷: 천 단위 콤마 + "원" (디자인 규칙). */
export function won(value: number): string {
  return `${Math.round(value).toLocaleString("ko-KR")}원`;
}

/** 천 단위 콤마만 (단위 없이). */
export function comma(value: number): string {
  return Math.round(value).toLocaleString("ko-KR");
}
