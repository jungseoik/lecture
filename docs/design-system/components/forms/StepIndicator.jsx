import React from "react";

/**
 * K-Study Match — StepIndicator
 * Horizontal numbered stepper. Completed steps show a check, the current step
 * is filled blue, upcoming steps are muted. Matches the multi-step profile form.
 */
export function StepIndicator({ steps = [], current = 0, style }) {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%", ...style }}>
      {steps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        const circleBg = done ? "var(--success-fg)" : active ? "var(--brand)" : "var(--neutral-0)";
        const circleBorder = done ? "var(--success-fg)" : active ? "var(--brand)" : "var(--border-strong)";
        const circleColor = done || active ? "#fff" : "var(--text-muted)";
        return (
          <React.Fragment key={i}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, flex: "0 0 auto" }}>
              <span style={{
                width: 26, height: 26, borderRadius: "50%", flex: "0 0 auto",
                background: circleBg, border: `1.5px solid ${circleBorder}`, color: circleColor,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: "var(--weight-bold)",
              }}>
                {done ? (
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.2l2.2 2.2 4.6-4.8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (i + 1)}
              </span>
              <span style={{
                fontSize: "14px", whiteSpace: "nowrap",
                fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)",
                color: active ? "var(--text-heading)" : done ? "var(--text-secondary)" : "var(--text-muted)",
              }}>{label}</span>
            </div>
            {i < steps.length - 1 && (
              <span style={{ flex: 1, height: 1.5, margin: "0 14px", background: i < current ? "var(--success-fg)" : "var(--border-subtle)", minWidth: 16 }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
