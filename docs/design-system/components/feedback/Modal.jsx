import React from "react";

/**
 * K-Study Match — Modal
 * Centered dialog over a dimmed, blurred backdrop. Smooth fade + scale on
 * open/close, Esc to close, backdrop click to close, body scroll lock.
 */
export function Modal({ open, onClose, title, subtitle, children, footer, width = 480, closeOnBackdrop = true }) {
  const [mounted, setMounted] = React.useState(open);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    let t;
    if (open) {
      setMounted(true);
      const r = requestAnimationFrame(() => setActive(true));
      return () => cancelAnimationFrame(r);
    } else {
      setActive(false);
      t = setTimeout(() => setMounted(false), 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose && onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <div
      onMouseDown={(e) => { if (closeOnBackdrop && e.target === e.currentTarget) onClose && onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
        background: "rgba(18,26,43,0.45)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)",
        opacity: active ? 1 : 0,
        transition: "opacity var(--duration-normal) var(--ease-standard)",
      }}
    >
      <div
        role="dialog" aria-modal="true"
        style={{
          width: "100%", maxWidth: width, maxHeight: "90vh", overflowY: "auto",
          background: "var(--surface-card)", borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-xl)",
          transform: active ? "translateY(0) scale(1)" : "translateY(8px) scale(0.98)",
          opacity: active ? 1 : 0,
          transition: "transform var(--duration-normal) var(--ease-out), opacity var(--duration-normal) var(--ease-standard)",
        }}
      >
        {(title || onClose) && (
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, padding: "24px 26px 0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {title && <h3 style={{ fontSize: "19px", fontWeight: "var(--weight-bold)", color: "var(--text-display)", letterSpacing: "var(--tracking-snug)", lineHeight: 1.35 }}>{title}</h3>}
              {subtitle && <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.55 }}>{subtitle}</p>}
            </div>
            {onClose && (
              <button aria-label="닫기" onClick={onClose} style={{
                flex: "0 0 auto", width: 34, height: 34, borderRadius: "var(--radius-sm)", border: "none",
                background: "transparent", cursor: "pointer", color: "var(--text-muted)", fontSize: 20,
                display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: -2,
                transition: "background var(--duration-fast)",
              }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--neutral-100)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
              </button>
            )}
          </div>
        )}
        <div style={{ padding: "18px 26px 24px" }}>{children}</div>
        {footer && (
          <div style={{ padding: "0 26px 24px", display: "flex", gap: 10, justifyContent: "flex-end" }}>{footer}</div>
        )}
      </div>
    </div>
  );
}
