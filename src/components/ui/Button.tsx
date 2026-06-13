import * as React from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "subtle" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  full?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const VARIANTS: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-brand text-fg-on-brand hover:bg-brand-hover shadow-xs active:translate-y-px",
  secondary:
    "bg-surface text-brand border border-border-strong hover:bg-brand-soft active:translate-y-px",
  subtle:
    "bg-brand-soft text-brand hover:bg-blue-100 active:translate-y-px",
  ghost: "bg-transparent text-fg-secondary hover:bg-surface-inset",
  link: "bg-transparent text-link hover:text-brand-hover underline-offset-4 hover:underline px-0",
};

const SIZES: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-[14px]",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-[16px]",
};

export function Button({
  variant = "primary",
  size = "md",
  full = false,
  iconLeft,
  iconRight,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold",
        "transition-[background-color,transform,box-shadow] duration-[120ms] ease-standard",
        "focus-visible:outline-none focus-visible:shadow-focus",
        "disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        VARIANTS[variant],
        variant !== "link" && SIZES[size],
        full && "w-full",
        className,
      )}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
