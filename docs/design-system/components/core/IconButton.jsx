import React from "react";

/**
 * K-Study Match — IconButton
 * A square, icon-only control for compact actions (save, expand, close).
 */
export function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  active = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const sizes = { sm: 32, md: 38, lg: 44 };
  const dim = sizes[size] || sizes.md;

  const variants = {
    ghost: { background: "transparent", color: "var(--text-secondary)", border: "1px solid transparent" },
    outline: { background: "var(--neutral-0)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" },
    soft: { background: "var(--blue-50)", color: "var(--brand)", border: "1px solid transparent" },
  };
  const v = variants[variant] || variants.ghost;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: dim,
        height: dim,
        borderRadius: "var(--radius-sm)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontSize: dim * 0.5,
        transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
        ...v,
        ...(active ? { background: "var(--blue-50)", color: "var(--brand)" } : null),
        ...style,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = active ? "var(--blue-100)" : "var(--neutral-100)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = active ? "var(--blue-50)" : v.background; }}
      {...rest}
    >
      {icon}
    </button>
  );
}
