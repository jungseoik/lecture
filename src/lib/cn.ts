/** 가벼운 className 결합 헬퍼 (falsy 제거). */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
