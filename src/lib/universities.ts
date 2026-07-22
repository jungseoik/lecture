import "server-only";
import { createAdminClient } from "@/lib/supabase/admin";
import { isSupabaseAdminConfigured } from "@/lib/supabase/config";
import { SAMPLE_UNIVERSITIES } from "@/lib/sample-data";
import { housingColumn } from "@/lib/living-cost";

/** 카드/리스트에서 쓰는 대학 요약 정보 (조인 결과를 평탄화). */
export interface UniversitySummary {
  id: string;
  name: string;
  nameEn: string | null;
  region: string | null;
  regionGroup: string | null;
  type: string | null;
  initial: string | null;
  foreign: number | null;
  intro: string | null;
  image: string | null;
  contact: { phone: string | null; email: string | null; web: string | null };
  tuition: number; // 최저 학기 등록금
  scholarship: number; // 최대 감면율(%)
  dorm: boolean;
  dormMonthly: number | null;
  monthlyCost: number; // 지역 기준 예상 월 생활비(기숙사 기준)
  majors: string[];
  languages: string[];
  topik: string | null;
  admission: string[];
  scholarshipInfo: string[];
  dormInfo: string[];
}

interface Row {
  id: string;
  name: string;
  name_en: string | null;
  region: string | null;
  region_group: string | null;
  type: string | null;
  initial: string | null;
  foreign_student_ratio: number | null;
  intro: string | null;
  image_url: string | null;
  contact_phone: string | null;
  contact_email: string | null;
  contact_web: string | null;
  university_programs: {
    major: string;
    language: string | null;
    tuition_per_semester: number | null;
    topik_requirement: string | null;
    degree: string | null;
  }[];
  scholarships: { name: string | null; reduction_rate: number | null; description: string | null }[];
  dormitories: { monthly_cost: number | null; room_types: string | null; meal_included: boolean | null; notes: string | null }[];
}

const SELECT = `
  id, name, name_en, region, region_group, type, initial, foreign_student_ratio,
  intro, image_url, contact_phone, contact_email, contact_web,
  university_programs ( major, language, tuition_per_semester, topik_requirement, degree ),
  scholarships ( name, reduction_rate, description ),
  dormitories ( monthly_cost, room_types, meal_included, notes )
`;

function flatten(row: Row, livingByRegion: Map<string, number>): UniversitySummary {
  const tuitions = row.university_programs
    .map((p) => p.tuition_per_semester)
    .filter((n): n is number => n != null);
  const tuition = tuitions.length ? Math.min(...tuitions) : 0;
  const scholarship = row.scholarships.reduce(
    (max, s) => Math.max(max, s.reduction_rate ?? 0),
    0,
  );
  const dorm = row.dormitories.length > 0;
  const dormMonthly = dorm ? (row.dormitories[0].monthly_cost ?? null) : null;
  const base = (row.region_group && livingByRegion.get(row.region_group)) || 600000;

  return {
    id: row.id,
    name: row.name,
    nameEn: row.name_en,
    region: row.region,
    regionGroup: row.region_group,
    type: row.type,
    initial: row.initial,
    foreign: row.foreign_student_ratio,
    intro: row.intro,
    image: row.image_url,
    contact: { phone: row.contact_phone, email: row.contact_email, web: row.contact_web },
    tuition,
    scholarship,
    dorm,
    dormMonthly,
    monthlyCost: base,
    majors: row.university_programs.map((p) => p.major),
    languages: Array.from(
      new Set(row.university_programs.map((p) => p.language).filter((l): l is string => !!l)),
    ),
    topik: row.university_programs.find((p) => p.topik_requirement)?.topik_requirement ?? null,
    admission: row.university_programs[0]?.topik_requirement
      ? [`${row.university_programs[0].topik_requirement} 이상 권장`, "고등학교 졸업(예정)자"]
      : ["고등학교 졸업(예정)자"],
    scholarshipInfo: row.scholarships
      .map((s) => s.description ?? s.name)
      .filter((x): x is string => !!x),
    dormInfo: row.dormitories
      .map((d) => d.notes ?? d.room_types)
      .filter((x): x is string => !!x),
  };
}

async function livingByRegion(): Promise<Map<string, number>> {
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("living_costs")
    .select("region, dormitory_monthly_cost");
  const map = new Map<string, number>();
  (data ?? []).forEach((r) => {
    if (r.dormitory_monthly_cost != null) map.set(r.region as string, r.dormitory_monthly_cost as number);
  });
  return map;
}

/** 전체 대학 요약 목록. Supabase 미설정/오류 시 샘플 데이터로 폴백(데모 모드). */
export async function getUniversities(): Promise<UniversitySummary[]> {
  if (!isSupabaseAdminConfigured()) return SAMPLE_UNIVERSITIES;
  try {
    const supabase = createAdminClient();
    const [{ data }, living] = await Promise.all([
      supabase.from("universities").select(SELECT).order("foreign_student_ratio", { ascending: false }),
      livingByRegion(),
    ]);
    const rows = (data as unknown as Row[]) ?? [];
    return rows.length ? rows.map((r) => flatten(r, living)) : SAMPLE_UNIVERSITIES;
  } catch {
    return SAMPLE_UNIVERSITIES;
  }
}

/** 단일 대학 요약. Supabase 미설정/오류 시 샘플 데이터로 폴백. */
export async function getUniversity(id: string): Promise<UniversitySummary | null> {
  if (!isSupabaseAdminConfigured()) {
    return SAMPLE_UNIVERSITIES.find((u) => u.id === id) ?? null;
  }
  try {
    const supabase = createAdminClient();
    const [{ data }, living] = await Promise.all([
      supabase.from("universities").select(SELECT).eq("id", id).single(),
      livingByRegion(),
    ]);
    if (!data) return SAMPLE_UNIVERSITIES.find((u) => u.id === id) ?? null;
    return flatten(data as unknown as Row, living);
  } catch {
    return SAMPLE_UNIVERSITIES.find((u) => u.id === id) ?? null;
  }
}

/** 생활비 컬럼 키 재노출 (route 에서 사용 가능). */
export { housingColumn };
