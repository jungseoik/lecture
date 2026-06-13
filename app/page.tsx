import Image from "next/image";
import Link from "next/link";
import {
  Wallet,
  GraduationCap,
  CurrencyKrw,
  Buildings,
  ChatCircleDots,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBand, HeroVisual } from "@/components/site/visual";
import { LivingCostEstimator } from "@/components/site/LivingCostEstimator";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { createAdminClient } from "@/lib/supabase/admin";
import { KSM_IMG } from "@/lib/images";

// 지역 표시 순서 (data.js 기준)
const REGION_ORDER = [
  "서울",
  "경기·인천",
  "충청권",
  "전라권",
  "경상권",
  "강원권",
  "제주",
];

async function getRegions(): Promise<string[]> {
  const supabase = createAdminClient();
  const { data } = await supabase.from("living_costs").select("region");
  const regions = (data ?? []).map((r) => r.region as string);
  return regions.sort(
    (a, b) => REGION_ORDER.indexOf(a) - REGION_ORDER.indexOf(b),
  );
}

const FEATURES = [
  {
    icon: <Wallet weight="fill" />,
    color: "green" as const,
    title: "생활비 확인",
    description: "지역과 생활 방식에 따른 월별 생활비를 확인하세요.",
  },
  {
    icon: <GraduationCap weight="fill" />,
    color: "purple" as const,
    title: "장학금 비교",
    description: "대학별 장학금 제도와 수혜 조건을 비교하세요.",
  },
  {
    icon: <CurrencyKrw weight="fill" />,
    color: "blue" as const,
    title: "등록금 비교",
    description: "대학교별 등록금 정보를 한눈에 비교하세요.",
  },
  {
    icon: <Buildings weight="fill" />,
    color: "orange" as const,
    title: "기숙사 확인",
    description: "기숙사 비용, 시설, 신청 조건을 확인하세요.",
  },
  {
    icon: <ChatCircleDots weight="fill" />,
    color: "sky" as const,
    title: "유학 상담요청",
    description: "전문 상담사에게 유학 관련 상담을 요청하세요.",
  },
];

export default async function HomePage() {
  const regions = await getRegions();

  return (
    <>
      <Header />
      <main>
        {/* ───────── Hero ───────── */}
        <HeroBand tall>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="t-display">
                한국 유학,
                <br />
                막연하게 준비하지 마세요.
              </h1>
              <p className="mt-5 t-lead">
                등록금, 장학금, 기숙사, 생활비를 비교하고
                <br />
                내 조건에 맞는 한국 대학을 찾아보세요.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/match">
                  <Button size="lg" variant="primary">
                    내 조건에 맞는 학교 찾기
                  </Button>
                </Link>
                <Link href="/universities">
                  <Button size="lg" variant="secondary">
                    전체 대학 정보 보기
                  </Button>
                </Link>
              </div>
            </div>
            <div className="h-[360px]">
              <HeroVisual />
            </div>
          </div>
        </HeroBand>

        {/* ───────── Features ───────── */}
        <section className="container-page py-16 md:py-20">
          <h2 className="t-h2 text-center">
            이 사이트에서 무엇을 확인할 수 있나요?
          </h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </section>

        {/* ───────── 생활비 계산기 ───────── */}
        <section className="container-page pb-6">
          <LivingCostEstimator regions={regions} />
        </section>

        {/* ───────── 추천 유도 배너 ───────── */}
        <section className="container-page py-16 md:py-20">
          <div
            className="flex flex-col items-center justify-between gap-6 rounded-xl bg-blue-50 px-8 py-10 md:flex-row md:px-11 md:py-12"
            style={{ border: "1px solid var(--blue-100)" }}
          >
            <div className="max-w-xl">
              <h3 className="t-h3">
                내 성적과 어학점수로 지원 가능한 학교를 확인하세요.
              </h3>
              <p className="mt-3 t-body text-fg-secondary">
                GPA, TOPIK, IELTS 점수, 희망전공, 예산 정보를 입력하시면
                <br />
                내 조건에 맞는 대학을 맞춤 추천해 드려요.
              </p>
              <div className="mt-6">
                <Link href="/match">
                  <Button
                    size="lg"
                    variant="primary"
                    iconRight={<ArrowRight weight="bold" />}
                  >
                    무료로 맞춤 학교 확인하기
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src={KSM_IMG.students}
              alt=""
              width={180}
              height={116}
              className="h-[116px] w-[180px] flex-none rounded-lg object-cover"
              style={{ border: "1px solid var(--blue-100)" }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
