import { NextResponse } from "next/server";
import { getUniversities } from "@/lib/universities";

/** GET /api/universities — 전체 대학 요약 목록(필터/정렬은 클라이언트에서). */
export async function GET() {
  const universities = await getUniversities();
  return NextResponse.json({ universities });
}
