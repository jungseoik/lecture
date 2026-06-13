/* Shared visual helpers for the K-Study Match marketing site. */
(() => {
  const NS = window.KStudyMatchDesignSystem_624b2d;
  const { IconChip } = NS;

  // Full-width page container
  function Container({ children, style }) {
    return (
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)", ...style }}>
        {children}
      </div>
    );
  }

  // The soft sky band that sits behind hero areas, with an optional faded
  // campus image bleeding in from the right (matches the design mockups).
  function HeroBand({ children, tall = false, decor = null, style }) {
    return (
      <div style={{
        position: "relative", overflow: "hidden",
        background: "linear-gradient(180deg, var(--bg-hero) 0%, #F3F7FD 55%, var(--neutral-0) 100%)",
        paddingTop: tall ? 56 : 44,
        paddingBottom: tall ? 60 : 40,
        ...style,
      }}>
        {decor && (
          <div aria-hidden style={{
            position: "absolute", top: 0, right: 0, bottom: 0, width: "46%",
            backgroundImage: `url(${decor})`, backgroundSize: "cover", backgroundPosition: "center",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.55) 38%, rgba(0,0,0,0.85) 100%)",
            maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.55) 38%, rgba(0,0,0,0.85) 100%)",
            opacity: 0.9,
          }} />
        )}
        <Container style={{ position: "relative", zIndex: 1 }}>{children}</Container>
      </div>
    );
  }

  // A floating mini stat card (the white chips over the hero illustration)
  function FloatCard({ icon, color, label, value, style }) {
    return (
      <div style={{
        position: "absolute", display: "flex", alignItems: "center", gap: 10,
        background: "var(--neutral-0)", borderRadius: 14, padding: "10px 14px",
        boxShadow: "var(--shadow-lg)", border: "1px solid var(--border-subtle)",
        ...style,
      }}>
        <IconChip icon={icon} color={color} size={34} shape="rounded" />
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{label}</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text-display)" }} className="ksm-tnum">{value}</span>
        </div>
      </div>
    );
  }

  /* Hero visual: real campus/Korea photo panel with the signature floating
     data cards layered on top. */
  function HeroVisual({ withCards = true }) {
    const F = (n) => <i className={"ph-fill ph-" + n} />;
    const IMG = window.KSM_IMG || {};
    return (
      <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 300 }}>
        <div style={{
          position: "absolute", inset: 0, borderRadius: 20, overflow: "hidden",
          border: "1px solid rgba(47,107,230,0.12)", boxShadow: "var(--shadow-md)",
          backgroundImage: `linear-gradient(180deg, rgba(20,40,90,0.04) 0%, rgba(20,40,90,0.16) 100%), url(${IMG.heroPanel})`,
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        {withCards && (
          <React.Fragment>
            <FloatCard icon={F("currency-krw")} color="blue"   label="등록금(연)"  value="4,200,000원" style={{ top: 22, left: 6 }} />
            <FloatCard icon={F("house-line")}   color="orange" label="기숙사(월)"  value="350,000원"   style={{ top: 8, right: 8 }} />
            <FloatCard icon={F("graduation-cap")} color="purple" label="장학금(평균)" value="1,850,000원" style={{ bottom: 64, left: 0 }} />
            <FloatCard icon={F("wallet")} color="green" label="생활비(월)" value="650,000원" style={{ bottom: 18, right: 12 }} />
          </React.Fragment>
        )}
      </div>
    );
  }

  // A small labelled info column (icon + label + value) used inside university rows
  function InfoStat({ icon, color, label, value, sub }) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 9, minWidth: 0 }}>
        <IconChip icon={icon} color={color} size={32} shape="rounded" style={{ fontSize: 16 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 1, minWidth: 0 }}>
          <span style={{ fontSize: 11.5, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{label}</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text-heading)", whiteSpace: "nowrap" }} className="ksm-tnum">
            {value}{sub && <span style={{ fontSize: 11.5, fontWeight: 500, color: "var(--text-secondary)", marginLeft: 3 }}>{sub}</span>}
          </span>
        </div>
      </div>
    );
  }

  // University thumbnail — real campus photo when `src` is given, else a soft fallback.
  function CampusThumb({ initial, type, src, style }) {
    return (
      <div style={{
        position: "relative", borderRadius: 12, overflow: "hidden", flex: "0 0 auto",
        background: "linear-gradient(150deg, #E6EEFA 0%, #D7E6F8 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "rgba(47,107,230,0.5)", ...style,
      }}>
        {src
          ? <img src={src} alt={initial || "campus"} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          : <i className="ph-fill ph-buildings" style={{ fontSize: 30 }} />}
        {type && (
          <span style={{
            position: "absolute", top: 8, left: 8, background: "var(--brand)", color: "#fff",
            fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6, boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
          }}>{type}</span>
        )}
      </div>
    );
  }

  window.KSM_UI = { Container, HeroBand, HeroVisual, FloatCard, InfoStat, CampusThumb };
})();
