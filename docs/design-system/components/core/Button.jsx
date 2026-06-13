import React from "react";

/**
 * K-Study Match — Button
 * The primary action control. Royal-blue solid for primary actions,
 * white-with-blue-border for secondary, and quiet ghost/link variants.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 14px", fontSize: "14px", radius: "var(--radius-sm)", gap: "6px", icon: 16 },
    md: { padding: "11px 20px", fontSize: "15px", radius: "var(--radius-md)", gap: "8px", icon: 18 },
    lg: { padding: "15px 26px", fontSize: "16px", radius: "var(--radius-md)", gap: "10px", icon: 20 },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "1px solid var(--brand)",
      boxShadow: "var(--shadow-xs)",
    },
    secondary: {
      background: "var(--neutral-0)",
      color: "var(--brand)",
      border: "1px solid var(--blue-200)",
      boxShadow: "none",
    },
    subtle: {
      background: "var(--blue-50)",
      color: "var(--brand)",
      border: "1px solid transparent",
      boxShadow: "none",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent",
      boxShadow: "none",
    },
    link: {
      background: "transparent",
      color: "var(--text-link)",
      border: "1px solid transparent",
      boxShadow: "none",
      padding: 0,
    },
  };
  const v = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--weight-semibold)",
        fontSize: s.fontSize,
        lineHeight: 1,
        letterSpacing: "var(--tracking-snug)",
        padding: variant === "link" ? 0 : s.padding,
        borderRadius: s.radius,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        width: full ? "100%" : "auto",
        whiteSpace: "nowrap",
        transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled && variant !== "link") e.currentTarget.style.transform = "translateY(1px)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === "primary") e.currentTarget.style.background = "var(--brand-hover)";
        else if (variant === "secondary") { e.currentTarget.style.background = "var(--blue-50)"; e.currentTarget.style.borderColor = "var(--blue-300)"; }
        else if (variant === "subtle") e.currentTarget.style.background = "var(--blue-100)";
        else if (variant === "ghost") e.currentTarget.style.background = "var(--neutral-100)";
        else if (variant === "link") e.currentTarget.style.color = "var(--brand-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = v.background;
        e.currentTarget.style.borderColor = (v.border || "").includes("var") ? v.border.split(" ").pop() : v.border;
        if (variant === "secondary") e.currentTarget.style.borderColor = "var(--blue-200)";
        if (variant === "link") e.currentTarget.style.color = "var(--text-link)";
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
