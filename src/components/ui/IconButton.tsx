import * as React from "react";
import { cn } from "@/lib/cn";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  variant?: "outline" | "ghost" | "solid";
  size?: "sm" | "md";
}

const VARIANTS: Record<NonNullable<IconButtonProps["variant"]>, string> = {
  outline: "bg-surface border border-border-strong text-fg-secondary hover:bg-surface-inset",
  ghost: "bg-transparent text-fg-secondary hover:bg-surface-inset",
  solid: "bg-brand text-fg-on-brand hover:bg-brand-hover",
};

/** 아이콘 전용 버튼 (북마크·펼치기 등). label 은 aria-label. */
export function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  className,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex items-center justify-center rounded-md shrink-0 cursor-pointer",
        "transition-[background-color] duration-[120ms] ease-standard",
        "focus-visible:outline-none focus-visible:shadow-focus",
        "disabled:opacity-50 disabled:pointer-events-none",
        size === "sm" ? "w-9 h-9 text-[16px]" : "w-11 h-11 text-[18px]",
        VARIANTS[variant],
        className,
      )}
      {...rest}
    >
      {icon}
    </button>
  );
}
