/* Universities (전체 대학 보기) — U-03 */
(() => {
  const NS = window.KStudyMatchDesignSystem_624b2d;
  const { Button, Input, Select, Badge, IconButton, StatCard } = NS;
  const { Container, HeroBand, InfoStat, CampusThumb } = window.KSM_UI;
  const D = window.KSM_DATA, WON = window.KSM_WON;
  const F = (n) => <i className={"ph-fill ph-" + n} />;

  const FILTERS = [
    ["지역", ["전체", ...D.regions]],
    ["학교 유형", ["전체", "국립대", "사립대", "전문대", "대학원대학"]],
    ["학위과정", ["전체", "어학연수", "학부", "석사", "박사"]],
    ["전공", ["전체 전공", "경영·경제", "공학·IT", "자연과학", "예체능", "인문·사회"]],
    ["수업 언어", ["전체", "한국어", "영어", "혼합"]],
  ];
  const FILTERS2 = [
    ["장학금 여부", ["전체", "있음", "없음"]],
    ["장학금 감면율", ["전체", "30% 이상", "50% 이상", "100%"]],
    ["기숙사 제공 여부", ["전체", "제공", "미제공"]],
    ["TOPIK 조건", ["전체", "없음", "3급 이하", "4급 이상"]],
    ["IELTS 조건", ["전체", "5.5 이상", "6.0 이상"]],
  ];
  const SORTS = ["등록금 낮은순", "장학금 높은순", "생활비 낮은순", "외국인학생 비율 높은순", "최신 등록순"];

  function FilterField({ label, children }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text-heading)" }}>{label}</label>
        {children}
      </div>
    );
  }

  function UniversityRow({ u, expanded, onToggle }) {
    return (
      <div style={{ background: "var(--surface-card)", border: `1px solid ${expanded ? "var(--blue-200)" : "var(--border-subtle)"}`, borderRadius: 14, boxShadow: expanded ? "var(--shadow-md)" : "var(--shadow-sm)", overflow: "hidden", transition: "border-color var(--duration-fast), box-shadow var(--duration-fast)" }}>
        {/* main row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, padding: 18 }}>
          <CampusThumb initial={u.initial} type={u.type} src={u.image} style={{ width: 132, height: 96 }} />
          {/* logo + identity */}
          <div style={{ flex: "0 0 auto", display: "flex", alignItems: "flex-start", gap: 12, width: 230 }}>
            <span style={{ flex: "0 0 auto", width: 38, height: 38, borderRadius: "50%", background: "var(--neutral-100)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "var(--text-secondary)" }}>{u.initial}</span>
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <h4 style={{ fontSize: 17, fontWeight: 800, color: "var(--text-display)" }}>{u.name}</h4>
                <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{u.region}</span>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                <Badge tone="neutral" size="sm">{u.type}</Badge>
                {u.tags.slice(0, 4).map((t) => <Badge key={t} tone={t.includes("장학") ? "green" : "blue"} size="sm">{t}</Badge>)}
              </div>
            </div>
          </div>
          {/* stats */}
          <div style={{ flex: 1, display: "flex", gap: 18, justifyContent: "space-between", paddingLeft: 6 }}>
            <InfoStat icon={F("currency-krw")} color="blue" label="학기당 등록금" value={WON(u.tuition)} />
            <InfoStat icon={F("seal-percent")} color="purple" label="장학금 최대 감면율" value={u.scholarship + "%"} />
            <InfoStat icon={F("buildings")} color="orange" label="기숙사" value={u.dorm ? "제공" : "미제공"} />
            <InfoStat icon={F("wallet")} color="green" label="예상 월 생활비" value={WON(u.monthlyCost)} />
            <InfoStat icon={F("users-three")} color="sky" label="외국인학생 비율" value={u.foreign + "%"} />
          </div>
          {/* actions */}
          <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", gap: 7, width: 130 }}>
            <Button variant="secondary" size="sm" full>상세보기</Button>
            <Button variant="ghost" size="sm" full iconLeft={<i className="ph ph-bookmark-simple" />} style={{ border: "1px solid var(--border-subtle)" }}>관심 저장</Button>
            <Button variant="primary" size="sm" full onClick={() => window.KSM_NAV("match")}>내 조건으로 확인</Button>
          </div>
          <IconButton icon={<i className={"ph ph-caret-" + (expanded ? "up" : "down")} />} label="펼치기" variant="ghost" onClick={onToggle} />
        </div>
        {/* expanded detail */}
        {expanded && (
          <div style={{ borderTop: "1px solid var(--border-subtle)", padding: "22px 24px", background: "var(--neutral-25)", display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr 1fr 1fr", gap: 26 }}>
            <DetailCol title="학교 소개"><p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>{u.intro}</p></DetailCol>
            <DetailCol title="주요 전공" link="전체 전공 보기"><DList items={u.majors.slice(0, 5)} /></DetailCol>
            <DetailCol title="입학 조건"><DList items={u.admission} /></DetailCol>
            <DetailCol title="장학금 정보" link="장학금 세부 정보 보기"><DList items={u.scholarshipInfo} /></DetailCol>
            <DetailCol title="국제교류처 연락처">
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "var(--text-body)" }}>
                <span style={{ display: "flex", gap: 8, alignItems: "center" }}><i className="ph ph-phone" style={{ color: "var(--brand)" }} />{u.contact.phone}</span>
                <span style={{ display: "flex", gap: 8, alignItems: "center" }}><i className="ph ph-envelope-simple" style={{ color: "var(--brand)" }} />{u.contact.email}</span>
                <span style={{ display: "flex", gap: 8, alignItems: "center" }}><i className="ph ph-globe" style={{ color: "var(--brand)" }} />{u.contact.web}</span>
              </div>
            </DetailCol>
          </div>
        )}
      </div>
    );
  }

  function DetailCol({ title, link, children }) {
    return (
      <div>
        <h5 style={{ fontSize: 14, fontWeight: 700, color: "var(--text-heading)", marginBottom: 10 }}>{title}</h5>
        {children}
        {link && <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12.5, color: "var(--text-link)", marginTop: 10, fontWeight: 600 }}>{link}<i className="ph ph-caret-right" style={{ fontSize: 11 }} /></a>}
      </div>
    );
  }
  function DList({ items }) {
    return (
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
        {items.map((t, i) => (
          <li key={i} style={{ fontSize: 13, color: "var(--text-secondary)", display: "flex", gap: 7, lineHeight: 1.45 }}>
            <span style={{ color: "var(--blue-300)", flex: "0 0 auto" }}>•</span>{t}
          </li>
        ))}
      </ul>
    );
  }

  function Universities({ onNavigate }) {
    window.KSM_NAV = onNavigate;
    const [sort, setSort] = React.useState(SORTS[0]);
    const [expanded, setExpanded] = React.useState("jbnu");
    return (
      <div>
        <HeroBand decor={window.KSM_IMG.heroDecor}>
          <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-display)" }}>한국 대학 정보를 한눈에 비교하세요.</h1>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, marginTop: 14 }}>
            지역, 전공, 등록금, 장학금, 기숙사, 생활비 조건으로<br />한국 대학 정보를 검색하고 비교할 수 있습니다.
          </p>
        </HeroBand>

        <Container style={{ paddingBottom: 80, marginTop: -8 }}>
          {/* Filter panel */}
          <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 16, boxShadow: "var(--shadow-sm)", padding: 26 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
              <FilterField label="대학명 검색"><Input placeholder="대학명을 입력하세요" iconLeft={<i className="ph ph-magnifying-glass" />} /></FilterField>
              {FILTERS.map(([label, opts]) => (
                <FilterField key={label} label={label}><Select defaultValue={opts[0]}>{opts.map((o) => <option key={o}>{o}</option>)}</Select></FilterField>
              ))}
              <FilterField label="등록금 범위 (학기당)">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Select placeholder="최소 선택"><option>200만원</option><option>300만원</option></Select>
                  <span style={{ color: "var(--text-muted)" }}>~</span>
                  <Select placeholder="최대 선택"><option>400만원</option><option>500만원</option></Select>
                </div>
              </FilterField>
              {FILTERS2.map(([label, opts]) => (
                <FilterField key={label} label={label}><Select defaultValue={opts[0]}>{opts.map((o) => <option key={o}>{o}</option>)}</Select></FilterField>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 22 }}>
              <Button variant="ghost" iconLeft={<i className="ph ph-arrow-counter-clockwise" />} style={{ border: "1px solid var(--border-subtle)" }}>초기화</Button>
              <Button variant="primary" iconLeft={<i className="ph ph-magnifying-glass" />} style={{ minWidth: 260 }}>검색</Button>
            </div>
          </div>

          {/* Sort tabs */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 12, padding: "12px 18px", marginTop: 18 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text-heading)", flex: "0 0 auto", display: "flex", alignItems: "center", gap: 6 }}><i className="ph ph-arrows-down-up" />정렬 순서</span>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {SORTS.map((s) => {
                const on = sort === s;
                return <button key={s} onClick={() => setSort(s)} style={{ border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: on ? 700 : 500, padding: "8px 14px", borderRadius: 8, background: on ? "var(--blue-50)" : "transparent", color: on ? "var(--brand)" : "var(--text-secondary)" }}>{s}</button>;
              })}
            </div>
          </div>

          {/* List header + counters */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 30, marginBottom: 16, gap: 16 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "var(--text-display)", display: "flex", alignItems: "baseline", gap: 12 }}>전체 대학 리스트 <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-secondary)" }}>총 128개 대학</span></h2>
            <div style={{ display: "flex", gap: 12 }}>
              <StatCard icon={F("graduation-cap")} color="purple" label="장학금 제공 대학" value="96" unit="개" />
              <StatCard icon={F("buildings")} color="orange" label="기숙사 제공 대학" value="102" unit="개" />
              <StatCard icon={F("wallet")} color="green" label="생활비 낮은 지역 대학" value="55" unit="개" />
            </div>
          </div>

          {/* Rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {D.universities.map((u) => (
              <UniversityRow key={u.id} u={u} expanded={expanded === u.id} onToggle={() => setExpanded(expanded === u.id ? null : u.id)} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ background: "var(--blue-50)", borderRadius: 18, padding: "30px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, marginTop: 26, border: "1px solid var(--blue-100)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <img src={window.KSM_IMG.grads} alt="" style={{ flex: "0 0 auto", width: 92, height: 64, borderRadius: 12, objectFit: "cover", border: "1px solid var(--blue-100)" }} />
              <div>
                <h3 style={{ fontSize: 21, fontWeight: 800, color: "var(--text-display)" }}>내 조건으로 지원 가능한 학교를 추천받아보세요.</h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 6 }}>GPA, TOPIK, IELTS, 희망전공 정보를 입력하면 나에게 맞는 학교와 장학금 가능성을 확인할 수 있습니다.</p>
              </div>
            </div>
            <Button variant="primary" size="lg" iconRight={<i className="ph ph-arrow-right" />} onClick={() => onNavigate("match")}>맞춤 학교 찾기</Button>
          </div>
        </Container>
      </div>
    );
  }

  window.Universities = Universities;
})();
