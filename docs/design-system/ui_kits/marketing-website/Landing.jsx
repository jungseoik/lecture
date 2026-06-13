/* Landing (메인페이지) — U-01 */
(() => {
  const NS = window.KStudyMatchDesignSystem_624b2d;
  const { Button, FeatureCard, Select } = NS;
  const { Container, HeroBand, HeroVisual } = window.KSM_UI;
  const D = window.KSM_DATA, WON = window.KSM_WON;
  const F = (n) => <i className={"ph-fill ph-" + n} />;

  const FEATURES = [
    { icon: "wallet", color: "green", title: "생활비 확인", desc: "지역과 생활 방식에 따른 월별 생활비를 확인하세요." },
    { icon: "graduation-cap", color: "purple", title: "장학금 비교", desc: "대학별 장학금 제도와 수혜 조건을 비교하세요." },
    { icon: "currency-krw", color: "blue", title: "등록금 비교", desc: "대학교별 등록금 정보를 한눈에 비교하세요." },
    { icon: "buildings", color: "orange", title: "기숙사 확인", desc: "기숙사 비용, 시설, 신청 조건을 확인하세요." },
    { icon: "chat-circle-dots", color: "sky", title: "유학 상담요청", desc: "전문 상담사에게 유학 관련 상담을 요청하세요." },
  ];

  function Estimator() {
    const [region, setRegion] = React.useState("충청권");
    const [housing, setHousing] = React.useState("기숙사");
    const [life, setLife] = React.useState("보통형");
    const base = (D.livingCost[region] && D.livingCost[region][housing]) || 600000;
    const monthly = Math.round(base * D.lifeMultiplier[life] / 10000) * 10000;
    return (
      <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 18, boxShadow: "var(--shadow-sm)", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr" }}>
          {/* inputs */}
          <div style={{ padding: 32 }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--text-display)", marginBottom: 22 }}>한국 유학 가면 한 달 생활비가 얼마나 들까?</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
              {[["희망 지역", region, setRegion, D.regions],
                ["주거 방식", housing, setHousing, ["기숙사", "월세", "고시원·원룸"]],
                ["생활 방식", life, setLife, ["절약형", "보통형", "여유형"]]].map(([label, val, set, opts]) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <label style={{ fontSize: 13.5, fontWeight: 600, color: "var(--text-heading)" }}>{label}</label>
                  <Select value={val} onChange={(e) => set(e.target.value)}>
                    {opts.map((o) => <option key={o} value={o}>{o}</option>)}
                  </Select>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 9, alignItems: "flex-start", marginTop: 18, background: "var(--blue-50)", borderRadius: 10, padding: "12px 14px" }}>
              <i className="ph-fill ph-info" style={{ color: "var(--brand)", fontSize: 17, marginTop: 1 }} />
              <span style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                선택하신 조건({region} / {housing} / {life}) 기준으로 한국 유학 생활비를 예상해 드립니다.
              </span>
            </div>
          </div>
          {/* result */}
          <div style={{ padding: 32, borderLeft: "1px solid var(--border-subtle)", background: "var(--neutral-25)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
            {[["예상 월 생활비", monthly], ["6개월 예상 생활비", monthly * 6], ["1년 예상 생활비", monthly * 12]].map(([l, v]) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--border-subtle)", paddingBottom: 12 }}>
                <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{l}</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: "var(--text-stat)" }} className="ksm-tnum">{WON(v)}</span>
              </div>
            ))}
            <Button variant="primary" size="lg" full onClick={() => window.KSM_NAV("match")}>내 조건에 맞는 학교 찾기</Button>
          </div>
        </div>
      </div>
    );
  }

  function Landing({ onNavigate }) {
    window.KSM_NAV = onNavigate;
    return (
      <div>
        {/* Hero */}
        <HeroBand tall>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
            <div>
              <h1 style={{ fontSize: 46, fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.03em", color: "var(--text-display)" }}>
                한국 유학,<br />막연하게 준비하지 마세요.
              </h1>
              <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.6, marginTop: 20 }}>
                등록금, 장학금, 기숙사, 생활비를 비교하고<br />내 조건에 맞는 한국 대학을 찾아보세요.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 30 }}>
                <Button variant="primary" size="lg" onClick={() => onNavigate("match")}>내 조건에 맞는 학교 찾기</Button>
                <Button variant="secondary" size="lg" onClick={() => onNavigate("universities")}>전체 대학 정보 보기</Button>
              </div>
            </div>
            <div style={{ height: 360 }}><HeroVisual /></div>
          </div>
        </HeroBand>

        {/* Features */}
        <Container style={{ paddingTop: 72, paddingBottom: 24 }}>
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, color: "var(--text-display)", marginBottom: 36 }}>이 사이트에서 무엇을 확인할 수 있나요?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {FEATURES.map((f) => <FeatureCard key={f.title} icon={F(f.icon)} color={f.color} title={f.title} description={f.desc} />)}
          </div>
        </Container>

        {/* Estimator */}
        <Container style={{ paddingTop: 48, paddingBottom: 24 }}>
          <Estimator />
        </Container>

        {/* Match CTA banner */}
        <Container style={{ paddingTop: 24, paddingBottom: 80 }}>
          <div style={{ background: "var(--blue-50)", borderRadius: 18, padding: "40px 44px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, border: "1px solid var(--blue-100)" }}>
            <div style={{ maxWidth: 620 }}>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "var(--text-display)" }}>내 성적과 어학점수로 지원 가능한 학교를 확인하세요.</h3>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6, marginTop: 12 }}>
                GPA, TOPIK, IELTS 점수, 희망전공, 예산 정보를 입력하시면<br />내 조건에 맞는 대학을 맞춤 추천해 드립니다.
              </p>
              <div style={{ marginTop: 22 }}>
                <Button variant="primary" size="lg" iconRight={<i className="ph ph-arrow-right" />} onClick={() => onNavigate("match")}>무료로 맞춤 학교 확인하기</Button>
              </div>
            </div>
            <img src={window.KSM_IMG.students} alt="" style={{ flex: "0 0 auto", width: 180, height: 116, borderRadius: 14, objectFit: "cover", border: "1px solid var(--blue-100)" }} />
          </div>
        </Container>
      </div>
    );
  }

  window.Landing = Landing;
})();
