import React from "react";
import { IconChip } from "./IconChip.jsx";

/**
 * K-Study Match — FeatureCard
 * Centered icon-chip + title + description tile used in the "what can you
 * check here?" grid on the landing page.
 */
export function FeatureCard({ icon, color = "blue", title, description, align = "center", style }) {
  const centered = align === "center";
  return (
    <div style={{
      display: "flex", flexDirection: "column",
      alignItems: centered ? "center" : "flex-start",
      textAlign: centered ? "center" : "left",
      gap: 14,
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "26px 20px",
      boxShadow: "var(--shadow-sm)",
      height: "100%",
      ...style,
    }}>
      <IconChip icon={icon} color={color} size={52} shape="circle" />
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <h4 style={{ fontSize: "16px", fontWeight: "var(--weight-bold)", color: "var(--text-heading)" }}>{title}</h4>
        <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.55 }}>{description}</p>
      </div>
    </div>
  );
}
