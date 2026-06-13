import React from "react";

/**
 * K-Study Match — IconChip
 * A rounded pastel tile holding a single icon — the brand's signature for
 * feature cards, stat cards and info rows. Choose a color family per concept.
 */
const COLORS = {
  green:  { bg: "var(--accent-green-bg)",  fg: "var(--accent-green-fg)" },
  purple: { bg: "var(--accent-purple-bg)", fg: "var(--accent-purple-fg)" },
  blue:   { bg: "var(--accent-blue-bg)",   fg: "var(--accent-blue-fg)" },
  orange: { bg: "var(--accent-orange-bg)", fg: "var(--accent-orange-fg)" },
  sky:    { bg: "var(--accent-sky-bg)",    fg: "var(--accent-sky-fg)" },
};

export function IconChip({ icon, color = "blue", size = 52, radius, shape = "rounded", style }) {
  const c = COLORS[color] || COLORS.blue;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: size, height: size, flex: "0 0 auto",
      background: c.bg, color: c.fg,
      borderRadius: shape === "circle" ? "50%" : (radius || Math.round(size * 0.32)),
      fontSize: Math.round(size * 0.48),
      ...style,
    }}>
      {icon}
    </span>
  );
}
