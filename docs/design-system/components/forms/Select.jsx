import React from "react";

/**
 * K-Study Match — Select
 * Native-backed dropdown with a custom chevron, matching Input styling.
 */
export function Select({
  value,
  defaultValue,
  onChange,
  children,
  placeholder,
  invalid = false,
  disabled = false,
  size = "md",
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const pads = { md: "11px 14px", lg: "13px 16px" };
  const fs = { md: "15px", lg: "16px" };
  const borderColor = invalid ? "var(--danger-fg)" : focused ? "var(--border-focus)" : "var(--border-subtle)";

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <select
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          appearance: "none",
          WebkitAppearance: "none",
          fontFamily: "var(--font-sans)",
          fontSize: fs[size] || fs.md,
          color: value === "" || value == null ? "var(--text-muted)" : "var(--text-body)",
          padding: pads[size] || pads.md,
          paddingRight: 40,
          background: disabled ? "var(--neutral-50)" : "var(--neutral-0)",
          border: `1px solid ${borderColor}`,
          borderRadius: "var(--radius-sm)",
          outline: "none",
          boxShadow: focused && !invalid ? "var(--shadow-focus)" : "none",
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
          ...style,
        }}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>
      <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--text-muted)", fontSize: 16, display: "inline-flex" }}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    </div>
  );
}
