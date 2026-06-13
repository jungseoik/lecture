"use client";
import * as React from "react";

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  width?: number;
  closeOnBackdrop?: boolean;
}

/** 어두운/블러 배경 위 중앙 다이얼로그 — 페이드+스케일, Esc·백드롭 닫기, 스크롤 락. */
export function Modal({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,
  width = 480,
  closeOnBackdrop = true,
}: ModalProps) {
  const [mounted, setMounted] = React.useState(open);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    // 마운트/언마운트 애니메이션 동기화 — setState in effect 가 의도된 패턴.
    /* eslint-disable react-hooks/set-state-in-effect */
    if (open) {
      setMounted(true);
      const r = requestAnimationFrame(() => setActive(true));
      return () => cancelAnimationFrame(r);
    }
    setActive(false);
    const t = setTimeout(() => setMounted(false), 200);
    return () => clearTimeout(t);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <div
      onMouseDown={(e) => {
        if (closeOnBackdrop && e.target === e.currentTarget) onClose?.();
      }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-5 transition-opacity duration-200 ease-standard"
      style={{
        background: "rgba(18,26,43,0.45)",
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)",
        opacity: active ? 1 : 0,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-full bg-surface rounded-xl shadow-xl overflow-y-auto transition-[transform,opacity] duration-200 ease-out"
        style={{
          maxWidth: width,
          maxHeight: "90vh",
          transform: active ? "translateY(0) scale(1)" : "translateY(8px) scale(0.98)",
          opacity: active ? 1 : 0,
        }}
      >
        {title || onClose ? (
          <div className="flex items-start justify-between gap-4 px-6 pt-6">
            <div className="flex flex-col gap-1.5">
              {title ? <h3 className="text-[19px] font-bold text-fg-display leading-snug">{title}</h3> : null}
              {subtitle ? <p className="text-[13.5px] text-fg-secondary leading-relaxed">{subtitle}</p> : null}
            </div>
            {onClose ? (
              <button
                aria-label="닫기"
                onClick={onClose}
                className="shrink-0 w-[34px] h-[34px] rounded-sm inline-flex items-center justify-center text-fg-muted hover:bg-surface-inset -mt-0.5 cursor-pointer transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </button>
            ) : null}
          </div>
        ) : null}
        <div className="px-6 pt-[18px] pb-6">{children}</div>
        {footer ? <div className="px-6 pb-6 flex gap-2.5 justify-end">{footer}</div> : null}
      </div>
    </div>
  );
}
