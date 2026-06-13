import React from "react";

/**
 * K-Study Match — FormField
 * Label + control wrapper with optional required mark and helper/error text.
 */
export function FormField({ label, required = false, hint, error, htmlFor, children, style }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, width: "100%", ...style }}>
      {label && (
        <label htmlFor={htmlFor} style={{ fontSize: "14px", fontWeight: "var(--weight-semibold)", color: "var(--text-heading)", letterSpacing: "var(--tracking-snug)" }}>
          {label}
          {required && <span style={{ color: "var(--brand)", marginLeft: 4 }}>*</span>}
        </label>
      )}
      {children}
      {(error || hint) && (
        <span style={{ fontSize: "13px", color: error ? "var(--danger-fg)" : "var(--text-muted)", lineHeight: 1.4 }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
