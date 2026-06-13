import React from "react";

/**
 * K-Study Match — Badge
 * Compact status/label pill. `solid` for the score chip and type markers;
 * the soft tones (green/blue/neutral/orange) carry match reasons and tags.
 */
const TONES = {
  solid:   { bg: "var(--brand)",          fg: "#fff" },
  blue:    { bg: "var(--accent-blue-bg)",  fg: "var(--accent-blue-fg)" },
  green:   { bg: "var(--accent-green-bg)", fg: "var(--success-strong)" },
  neutral: { bg: "var(--neutral-100)",     fg: "var(--text-secondary)" },
  orange:  { bg: "var(--accent-orange-bg)",fg: "var(--accent-orange-fg)" },
  warning: { bg: "var(--warning-bg)",      fg: "var(--warning-fg)" },
};

export function Badge({ children, tone = "blue", icon = null, size = "md", style }) {
  const t = TONES[tone] || TONES.blue;
  const sz = size === "sm"
    ? { padding: "3px 8px", fontSize: "12px" }
    : { padding: "5px 11px", fontSize: "13px" };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      background: t.bg, color: t.fg,
      borderRadius: "var(--radius-xs)",
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1, whiteSpace: "nowrap",
      ...sz, ...style,
    }}>
      {icon}
      {children}
    </span>
  );
}
