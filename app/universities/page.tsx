import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBand } from "@/components/site/visual";
import { UniversitiesClient } from "@/components/site/UniversitiesClient";
import { getUniversities } from "@/lib/universities";
import { KSM_IMG } from "@/lib/images";

export const metadata = {
  title: "전체 대학 보기 — K-Study Match",
  description:
    "지역, 전공, 등록금, 장학금, 기숙사, 생활비 조건으로 한국 대학 정보를 검색하고 비교할 수 있어요.",
};

export default async function UniversitiesPage() {
  const universities = await getUniversities();

  return (
    <>
      <Header />
      <main>
        <HeroBand decor={KSM_IMG.heroDecor}>
          <h1 className="t-h1 text-fg-display">
            한국 대학 정보를 한눈에 비교하세요.
          </h1>
          <p className="t-lead text-fg-secondary mt-3.5 leading-relaxed">
            지역, 전공, 등록금, 장학금, 기숙사, 생활비 조건으로
            <br />
            한국 대학 정보를 검색하고 비교할 수 있어요.
          </p>
        </HeroBand>
        <UniversitiesClient universities={universities} />
      </main>
      <Footer />
    </>
  );
}
