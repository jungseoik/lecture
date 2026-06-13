import * as React from "react";
import { cn } from "@/lib/cn";

export type AccentColor = "green" | "purple" | "blue" | "orange" | "sky";

/** 개념별 파스텔 칩 색상 (bg-soft + fg) */
export const ACCENT_CLASS: Record<AccentColor, string> = {
  green: "bg-acc-green-soft text-acc-green",
  purple: "bg-acc-purple-soft text-acc-purple",
  blue: "bg-acc-blue-soft text-acc-blue",
  orange: "bg-acc-orange-soft text-acc-orange",
  sky: "bg-acc-sky-soft text-acc-sky",
};

export interface IconChipProps {
  icon: React.ReactNode;
  color?: AccentColor;
  size?: number;
  shape?: "rounded" | "circle";
  className?: string;
}

/** 파스텔 타일 안에 아이콘 하나 — 브랜드 시그니처 액센트. */
export function IconChip({
  icon,
  color = "blue",
  size = 52,
  shape = "rounded",
  className,
}: IconChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center shrink-0",
        ACCENT_CLASS[color],
        shape === "circle" ? "rounded-full" : "rounded-lg",
        className,
      )}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.52) }}
    >
      {icon}
    </span>
  );
}
