import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBand } from "@/components/site/visual";
import { MatchClient } from "@/components/site/MatchClient";
import { getUniversities } from "@/lib/universities";
import { recommend } from "@/lib/recommend";
import { KSM_IMG } from "@/lib/images";

export const metadata = {
  title: "맞춤 학교 찾기 — K-Study Match",
  description:
    "GPA, TOPIK, IELTS, 희망전공, 예산 정보를 입력하면 지원 적합도가 높은 한국 대학과 장학금 가능성을 확인할 수 있어요.",
};

export default async function MatchPage() {
  const universities = await getUniversities();
  const initialRecs = recommend(universities, {});

  return (
    <>
      <Header />
      <main>
        <HeroBand decor={KSM_IMG.heroDecor}>
          <h1 className="t-h1 text-fg-display">
            내 조건에 맞는 한국 대학을 찾아보세요.
          </h1>
          <p className="t-lead text-fg-secondary mt-3.5 leading-relaxed">
            GPA, TOPIK, IELTS, 희망전공, 예산 정보를 입력하면
            <br />
            지원 적합도가 높은 한국 대학과 장학금 가능성을 확인할 수 있어요.
          </p>
          <p className="t-sm text-fg-muted mt-3 leading-snug">
            추천 결과는 입력한 정보와 대학별 등록 정보를 기준으로 제공돼요.
          </p>
        </HeroBand>
        <MatchClient initialRecs={initialRecs} />
      </main>
      <Footer />
    </>
  );
}
