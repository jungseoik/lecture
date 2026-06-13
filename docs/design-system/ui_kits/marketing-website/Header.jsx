/* Header + Footer for the K-Study Match marketing site. */
(() => {
  const NS = window.KStudyMatchDesignSystem_624b2d;
  const { Logo, Button } = NS;

  function Header({ active, onNavigate }) {
    const nav = [
      { id: "match", label: "맞춤 학교 찾기" },
      { id: "universities", label: "전체 대학 보기" },
    ];
    return (
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--border-subtle)",
      }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)", height: 68, display: "flex", alignItems: "center", gap: 36 }}>
          <button onClick={() => onNavigate("landing")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}>
            <Logo size={22} />
          </button>
          <nav style={{ display: "flex", gap: 28, alignItems: "center", height: "100%" }}>
            {nav.map((n) => {
              const on = active === n.id;
              return (
                <button key={n.id} onClick={() => onNavigate(n.id)} style={{
                  background: "none", border: "none", cursor: "pointer", height: "100%",
                  padding: "0 2px", fontSize: 15, fontFamily: "var(--font-sans)",
                  fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)",
                  color: on ? "var(--brand)" : "var(--text-body)",
                  borderBottom: on ? "2.5px solid var(--brand)" : "2.5px solid transparent",
                  transition: "color var(--duration-fast)",
                }}>{n.label}</button>
              );
            })}
          </nav>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 18 }}>
            <button onClick={() => window.KSM_MODAL && window.KSM_MODAL("login")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 15, color: "var(--text-body)", fontFamily: "var(--font-sans)" }}>로그인</button>
            <Button variant="primary" size="md" onClick={() => window.KSM_MODAL && window.KSM_MODAL("signup")}>무료 프로필 만들기</Button>
          </div>
        </div>
      </header>
    );
  }

  function Footer() {
    const links = ["개인정보 처리방침", "이용약관", "문의하기"];
    return (
      <footer style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--neutral-0)", marginTop: 8 }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "34px var(--container-pad)", textAlign: "center" }}>
          <div style={{ display: "flex", gap: 0, justifyContent: "center", alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
            {links.map((l, i) => (
              <React.Fragment key={l}>
                {i > 0 && <span style={{ color: "var(--border-strong)", margin: "0 14px" }}>|</span>}
                <a href="#" style={{ fontSize: 13.5, color: "var(--text-secondary)" }}>{l}</a>
              </React.Fragment>
            ))}
          </div>
          <p style={{ fontSize: 12.5, color: "var(--text-muted)" }}>© 2024 K-Study Match. All rights reserved.</p>
        </div>
      </footer>
    );
  }

  window.Header = Header;
  window.Footer = Footer;
})();
