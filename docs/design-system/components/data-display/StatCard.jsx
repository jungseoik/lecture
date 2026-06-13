import React from "react";
import { IconChip } from "./IconChip.jsx";

/**
 * K-Study Match — StatCard
 * A summary tile: pastel icon chip + label + a large blue number.
 * Used in the recommendation summary row and the university-list counters.
 */
export function StatCard({ icon, color = "blue", label, value, unit, style }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 14,
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "16px 18px",
      boxShadow: "var(--shadow-sm)",
      ...style,
    }}>
      <IconChip icon={icon} color={color} size={44} shape="circle" />
      <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
        <span style={{ fontSize: "13px", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>{label}</span>
        <span style={{ fontSize: "22px", fontWeight: "var(--weight-bold)", color: "var(--text-stat)", letterSpacing: "var(--tracking-tight)", lineHeight: 1 }} className="ksm-tnum">
          {value}{unit && <span style={{ fontSize: "15px", marginLeft: 2 }}>{unit}</span>}
        </span>
      </div>
    </div>
  );
}
