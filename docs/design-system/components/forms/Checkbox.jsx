import React from "react";

/**
 * K-Study Match — Checkbox
 * Blue square check with an optional label. Controlled or uncontrolled.
 */
export function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  required = false,
  disabled = false,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;

  const toggle = (e) => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };

  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 9, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.55 : 1, userSelect: "none", ...style }}>
      <span style={{ position: "relative", display: "inline-flex", flex: "0 0 auto" }}>
        <input type="checkbox" checked={isControlled ? checked : undefined} defaultChecked={isControlled ? undefined : defaultChecked} onChange={toggle} disabled={disabled}
          style={{ position: "absolute", opacity: 0, width: 18, height: 18, margin: 0, cursor: "inherit" }} {...rest} />
        <span aria-hidden style={{
          width: 18, height: 18, borderRadius: 5,
          border: `1.5px solid ${on ? "var(--brand)" : "var(--border-strong)"}`,
          background: on ? "var(--brand)" : "var(--neutral-0)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
        }}>
          {on && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.2l2.2 2.2 4.6-4.8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
        </span>
      </span>
      {label && (
        <span style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: 1.4 }}>
          {label}
          {required && <span style={{ color: "var(--brand)", marginLeft: 4, fontWeight: 600 }}>(필수)</span>}
        </span>
      )}
    </label>
  );
}
