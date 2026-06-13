import React from "react";

/**
 * K-Study Match — Radio / RadioGroup
 * Blue dot radio. Use RadioGroup to render an inline set of options.
 */
export function Radio({ checked, onChange, label, name, value, disabled = false, style }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.55 : 1, userSelect: "none", ...style }}>
      <span style={{ position: "relative", display: "inline-flex" }}>
        <input type="radio" name={name} value={value} checked={checked} onChange={onChange} disabled={disabled}
          style={{ position: "absolute", opacity: 0, width: 18, height: 18, margin: 0, cursor: "inherit" }} />
        <span aria-hidden style={{
          width: 18, height: 18, borderRadius: "50%",
          border: `1.5px solid ${checked ? "var(--brand)" : "var(--border-strong)"}`,
          background: "var(--neutral-0)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          transition: "border-color var(--duration-fast) var(--ease-standard)",
        }}>
          {checked && <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--brand)" }} />}
        </span>
      </span>
      {label && <span style={{ fontSize: "14px", color: "var(--text-body)" }}>{label}</span>}
    </label>
  );
}

export function RadioGroup({ options = [], value, onChange, name = "radiogroup", gap = 20, style }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap, alignItems: "center", ...style }}>
      {options.map((opt) => {
        const o = typeof opt === "string" ? { label: opt, value: opt } : opt;
        return (
          <Radio key={o.value} name={name} value={o.value} label={o.label} checked={value === o.value}
            onChange={() => onChange && onChange(o.value)} />
        );
      })}
    </div>
  );
}
