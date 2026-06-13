import { NextResponse } from "next/server";
import { getUniversity } from "@/lib/universities";

/** GET /api/universities/:id — 단일 대학 상세. */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const university = await getUniversity(id);
  if (!university) {
    return NextResponse.json({ error: "대학을 찾을 수 없어요." }, { status: 404 });
  }
  return NextResponse.json({ university });
}
