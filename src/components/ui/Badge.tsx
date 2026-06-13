import * as React from "react";
import { cn } from "@/lib/cn";

export interface BadgeProps {
  children?: React.ReactNode;
  tone?: "solid" | "blue" | "green" | "neutral" | "orange" | "warning";
  icon?: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
}

const TONES: Record<NonNullable<BadgeProps["tone"]>, string> = {
  solid: "bg-brand text-fg-on-brand",
  blue: "bg-acc-blue-soft text-acc-blue",
  green: "bg-success-soft text-success",
  neutral: "bg-surface-inset text-fg-secondary",
  orange: "bg-acc-orange-soft text-acc-orange",
  warning: "bg-warning-soft text-warning",
};

/** 작은 상태/라벨 필 — 점수 칩, 학교유형, 매칭 사유. */
export function Badge({
  children,
  tone = "neutral",
  icon,
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-xs font-medium whitespace-nowrap",
        size === "sm" ? "px-2 py-0.5 text-[12px]" : "px-2.5 py-1 text-[13px]",
        TONES[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
