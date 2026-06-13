/* Match (맞춤 학교 찾기) — U-02 */
(() => {
  const NS = window.KStudyMatchDesignSystem_624b2d;
  const { Button, Input, Select, Checkbox, RadioGroup, FormField, StepIndicator, Badge, IconButton, StatCard } = NS;
  const { Container, HeroBand, InfoStat, CampusThumb } = window.KSM_UI;
  const D = window.KSM_DATA, WON = window.KSM_WON;
  const F = (n) => <i className={"ph-fill ph-" + n} />;
  const STEPS = ["기본 정보", "유학 희망 정보", "학업 정보", "어학 정보", "재정 및 서류 정보"];

  function ProfileForm() {
    const [fin, setFin] = React.useState("가능");
    const [sch, setSch] = React.useState("필요");
    return (
      <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 18, boxShadow: "var(--shadow-sm)", padding: 30 }}>
        <div style={{ marginBottom: 26 }}><StepIndicator steps={STEPS} current={2} /></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          <FormField label="이름"><Input defaultValue="홍길동" /></FormField>
          <FormField label="성별"><Select defaultValue="남성"><option>남성</option><option>여성</option><option>기타</option></Select></FormField>
          <FormField label="국적"><Select defaultValue="베트남"><option>베트남</option><option>몽골</option><option>중국</option><option>네팔</option></Select></FormField>
          <FormField label="현재 거주 국가"><Select defaultValue="베트남"><option>베트남</option><option>한국</option></Select></FormField>

          <FormField label="이메일"><Input defaultValue="gildong.hong@email.com" /></FormField>
          <FormField label="전화번호"><Input defaultValue="+84 912 345 678" /></FormField>
          <FormField label="희망 학위"><Select defaultValue="학부"><option>어학연수</option><option>학부</option><option>석사</option><option>박사</option></Select></FormField>
          <FormField label="희망 전공"><Select defaultValue="경영학"><option>경영학</option><option>컴퓨터공학</option><option>전자공학</option></Select></FormField>

          <FormField label="희망 지역"><Select defaultValue="충청권">{D.regions.map((r) => <option key={r}>{r}</option>)}</Select></FormField>
          <FormField label="희망 입학 시기"><Select defaultValue="2025년 9월 (가을학기)"><option>2025년 3월 (봄학기)</option><option>2025년 9월 (가을학기)</option></Select></FormField>
          <FormField label="최종학력"><Select defaultValue="고등학교 졸업"><option>고등학교 졸업</option><option>전문대 졸업</option><option>대학교 졸업</option></Select></FormField>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <FormField label="GPA"><Input defaultValue="3.4 / 4.5" /></FormField>
            <FormField label="GPA 기준"><Select defaultValue="4.5 만점"><option>4.0 만점</option><option>4.3 만점</option><option>4.5 만점</option><option>100점 만점</option></Select></FormField>
          </div>

          <FormField label="TOPIK 등급"><Select defaultValue="TOPIK 3급"><option>없음</option><option>TOPIK 2급</option><option>TOPIK 3급</option><option>TOPIK 4급</option></Select></FormField>
          <FormField label="IELTS 점수"><Input defaultValue="5.5" /></FormField>
          <FormField label="재정증명 가능 여부"><div style={{ paddingTop: 9 }}><RadioGroup options={["가능", "불가능"]} value={fin} onChange={setFin} name="fin" /></div></FormField>
          <FormField label="장학금 필요 여부"><div style={{ paddingTop: 9 }}><RadioGroup options={["필요", "불필요"]} value={sch} onChange={setSch} name="sch" /></div></FormField>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 24, gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Checkbox label="개인정보 수집 및 이용에 동의합니다." required defaultChecked />
              <a href="#" style={{ fontSize: 12.5, color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", borderRadius: 6, padding: "3px 8px" }}>자세히 보기</a>
            </div>
            <Checkbox label="맞춤 대학 추천을 위해 내 정보를 활용하는 것에 동의합니다." required defaultChecked />
            <Checkbox label="이벤트 및 유학 정보 수신에 동의합니다. (선택)" />
          </div>
          <Button variant="primary" size="lg" iconRight={<i className="ph ph-arrow-right" />}>내 조건으로 학교 추천받기</Button>
        </div>
      </div>
    );
  }

  function CostCalculator({ u }) {
    const [housing, setHousing] = React.useState("기숙사");
    const [food, setFood] = React.useState("보통형");
    const rows = { 주거: u.dorm ? 250000 : 450000, 식비: food === "절약형" ? 300000 : food === "여유형" ? 450000 : 350000, 교통비: 60000, 통신비: 30000, 보험료: 30000, 기타: 120000 };
    const monthly = Object.values(rows).reduce((a, b) => a + b, 0);
    const semester = monthly * 6 + u.tuition;
    const annual = monthly * 12 + u.tuition * 2;
    const withSch = Math.round((semester - u.tuition * u.scholarship / 100) / 10000) * 10000;
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24, borderTop: "1px solid var(--border-subtle)", padding: "22px 24px", background: "var(--neutral-25)" }}>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 16 }}>
            <h4 style={{ fontSize: 17, fontWeight: 800, color: "var(--text-display)" }}>학교별 생활비 계산기</h4>
            <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>선택 학교</span>
            <span style={{ fontSize: 13.5, fontWeight: 700, color: "var(--brand)" }}>{u.name} / {u.region.split(",")[0]}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            <SmallField label="주거 방식"><Select value={housing} onChange={(e) => setHousing(e.target.value)}><option>기숙사</option><option>월세</option><option>고시원·원룸</option></Select></SmallField>
            <SmallField label="식비 수준"><Select value={food} onChange={(e) => setFood(e.target.value)}><option>절약형</option><option>보통형</option><option>여유형</option></Select></SmallField>
            <SmallField label="교통비"><Input defaultValue="60,000원" /></SmallField>
            <SmallField label="통신비"><Input defaultValue="30,000원" /></SmallField>
            <SmallField label="보험료"><Input defaultValue="30,000원" /></SmallField>
            <SmallField label="기타 생활비"><Input defaultValue="120,000원" /></SmallField>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: 16, background: "var(--blue-50)", borderRadius: 10, padding: "10px 13px" }}>
            <i className="ph-fill ph-info" style={{ color: "var(--brand)", fontSize: 16, marginTop: 1 }} />
            <span style={{ fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.5 }}>계산 결과는 평균값을 기준으로 산출되며 개인 생활 패턴에 따라 달라질 수 있습니다.</span>
          </div>
        </div>
        <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 14, padding: 20, display: "flex", flexDirection: "column", gap: 11 }}>
          {[["월 예상 생활비", monthly, false], ["1학기 예상 비용", semester, false], ["1년 예상 비용", annual, false], ["장학금 반영 시 예상 비용", withSch, true]].map(([l, v, hl]) => (
            <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 9, borderBottom: "1px solid var(--border-subtle)" }}>
              <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{l}</span>
              <span style={{ fontSize: hl ? 18 : 16, fontWeight: 800, color: hl ? "var(--success-strong)" : "var(--text-stat)" }} className="ksm-tnum">{WON(v)}</span>
            </div>
          ))}
          <Button variant="primary" full style={{ marginTop: 4 }} onClick={() => window.KSM_MODAL("consult", u)}>이 학교 유학 상담요청</Button>
          <Button variant="secondary" full>관심학교 저장</Button>
        </div>
      </div>
    );
  }
  function SmallField({ label, children }) {
    return <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><label style={{ fontSize: 12.5, fontWeight: 600, color: "var(--text-heading)" }}>{label}</label>{children}</div>;
  }

  function RecCard({ u, expanded, onToggle }) {
    return (
      <div style={{ background: "var(--surface-card)", border: `1px solid ${expanded ? "var(--blue-200)" : "var(--border-subtle)"}`, borderRadius: 14, boxShadow: expanded ? "var(--shadow-md)" : "var(--shadow-sm)", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, padding: 18 }}>
          <div style={{ position: "relative", flex: "0 0 auto" }}>
            <CampusThumb initial={u.initial} src={u.image} style={{ width: 150, height: 104 }} />
            <span style={{ position: "absolute", top: 8, left: 8, background: "var(--brand)", color: "#fff", fontSize: 12, fontWeight: 800, padding: "4px 9px", borderRadius: 7 }}>추천도 {u.score}점</span>
          </div>
          <div style={{ flex: "0 0 auto", width: 220 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <h4 style={{ fontSize: 18, fontWeight: 800, color: "var(--text-display)" }}>{u.name}</h4>
              <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{u.region}</span>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 9 }}>
              {u.matchTags.map((t) => <Badge key={t} tone="green" size="sm">{t}</Badge>)}
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", gap: 16, justifyContent: "space-between", paddingLeft: 6 }}>
            <InfoStat icon={F("currency-krw")} color="blue" label="학기당 등록금" value={WON(u.tuition)} />
            <InfoStat icon={F("seal-percent")} color="purple" label="장학금 가능성" value={u.scholarship >= 70 ? "높음" : "중간"} sub={"(" + u.scholarship + "%)"} />
            <InfoStat icon={F("buildings")} color="orange" label="기숙사" value={u.dorm ? "제공" : "미제공"} />
            <InfoStat icon={F("wallet")} color="green" label="예상 월 생활비" value={WON(u.monthlyCost)} />
          </div>
          <div style={{ flex: "0 0 auto", display: "flex", gap: 7, alignItems: "center" }}>
            <Button variant="secondary" size="sm">상세보기</Button>
            <Button variant="subtle" size="sm" onClick={onToggle}>생활비 계산</Button>
            <IconButton icon={<i className="ph ph-bookmark-simple" />} label="관심 저장" variant="outline" />
            <Button variant="primary" size="sm" iconLeft={<i className="ph ph-chat-circle-dots" />} onClick={() => window.KSM_MODAL("consult", u)}>유학 상담요청</Button>
            <IconButton icon={<i className={"ph ph-caret-" + (expanded ? "up" : "down")} />} label="펼치기" variant="ghost" onClick={onToggle} />
          </div>
        </div>
        {expanded && <CostCalculator u={u} />}
      </div>
    );
  }

  function Match({ onNavigate }) {
    window.KSM_NAV = onNavigate;
    const recs = D.universities.slice(0, 3);
    const [expanded, setExpanded] = React.useState(recs[0].id);
    return (
      <div>
        <HeroBand decor={window.KSM_IMG.heroDecor}>
          <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-display)" }}>내 조건에 맞는 한국 대학을 찾아보세요.</h1>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, marginTop: 14 }}>
            GPA, TOPIK, IELTS, 희망전공, 예산 정보를 입력하면<br />지원 적합도가 높은 한국 대학과 장학금 가능성을 확인할 수 있습니다.
          </p>
          <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.55, marginTop: 12 }}>
            추천 결과는 입력한 정보와 대학별 등록 정보를 기준으로 제공됩니다.
          </p>
        </HeroBand>

        <Container style={{ paddingBottom: 80, marginTop: -8 }}>
          <ProfileForm />

          {/* Result summary */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 40, marginBottom: 18, gap: 16 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "var(--text-display)", flex: "0 0 auto" }}>맞춤 추천 결과</h2>
            <div style={{ display: "flex", gap: 12 }}>
              <StatCard icon={F("graduation-cap")} color="purple" label="추천 가능 대학" value="12" unit="개" />
              <StatCard icon={F("money")} color="orange" label="장학금 검토 가능" value="5" unit="개" />
              <StatCard icon={F("buildings")} color="blue" label="기숙사 제공 대학" value="8" unit="개" />
              <StatCard icon={F("piggy-bank")} color="green" label="평균 예상 월 생활비" value="750,000" unit="원" />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {recs.map((u) => <RecCard key={u.id} u={u} expanded={expanded === u.id} onToggle={() => setExpanded(expanded === u.id ? null : u.id)} />)}
          </div>

          {/* Bottom CTA */}
          <div style={{ background: "var(--blue-50)", borderRadius: 18, padding: "28px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, marginTop: 26, border: "1px solid var(--blue-100)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <img src={window.KSM_IMG.students} alt="" style={{ flex: "0 0 auto", width: 92, height: 64, borderRadius: 12, objectFit: "cover", border: "1px solid var(--blue-100)" }} />
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--text-display)" }}>추천 결과를 저장하고 상담을 받아보세요.</h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 6 }}>내 조건과 추천 결과를 저장하면 나중에 다시 확인할 수 있고, 전문 상담을 통해 더 자세한 유학 정보를 받아보실 수 있습니다.</p>
              </div>
            </div>
            <Button variant="primary" size="lg" iconRight={<i className="ph ph-arrow-right" />}>무료 프로필 저장하기</Button>
          </div>
        </Container>
      </div>
    );
  }

  window.Match = Match;
})();
