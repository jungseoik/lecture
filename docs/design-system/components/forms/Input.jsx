import React from "react";

/**
 * K-Study Match — Input
 * Single-line text field. Calm border, soft focus ring, optional leading icon.
 */
export function Input({
  value,
  defaultValue,
  placeholder,
  type = "text",
  iconLeft = null,
  invalid = false,
  disabled = false,
  size = "md",
  onChange,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const pads = { md: "11px 14px", lg: "13px 16px" };
  const fs = { md: "15px", lg: "16px" };

  const borderColor = invalid
    ? "var(--danger-fg)"
    : focused
    ? "var(--border-focus)"
    : "var(--border-subtle)";

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", width: "100%" }}>
      {iconLeft && (
        <span style={{ position: "absolute", left: 13, display: "inline-flex", color: "var(--text-muted)", fontSize: 18, pointerEvents: "none" }}>
          {iconLeft}
        </span>
      )}
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          fontFamily: "var(--font-sans)",
          fontSize: fs[size] || fs.md,
          color: "var(--text-body)",
          padding: pads[size] || pads.md,
          paddingLeft: iconLeft ? 40 : undefined,
          background: disabled ? "var(--neutral-50)" : "var(--neutral-0)",
          border: `1px solid ${borderColor}`,
          borderRadius: "var(--radius-sm)",
          outline: "none",
          boxShadow: focused && !invalid ? "var(--shadow-focus)" : "none",
          transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
          cursor: disabled ? "not-allowed" : "text",
          ...style,
        }}
        {...rest}
      />
    </div>
  );
}
