import React from "react";

/**
 * K-Study Match — Logo (wordmark)
 * "K-Study" set in brand blue, "Match" in ink. Typographic mark, no glyph.
 */
export function Logo({ size = 22, mono = false, onLight = true, style, ...rest }) {
  const blue = mono ? "currentColor" : "var(--brand)";
  const ink = mono ? "currentColor" : (onLight ? "var(--neutral-900)" : "#fff");
  return (
    <span style={{
      display: "inline-flex", alignItems: "baseline", gap: "0.32em",
      fontFamily: "var(--font-sans)", fontSize: size, fontWeight: 800,
      letterSpacing: "-0.03em", lineHeight: 1, userSelect: "none",
      ...style,
    }} {...rest}>
      <span style={{ color: blue }}>K-Study</span>
      <span style={{ color: ink, fontWeight: 700 }}>Match</span>
    </span>
  );
}
