import * as React from "react";
import { cn } from "@/lib/cn";
import { Card } from "./Card";
import { IconChip, type AccentColor } from "./IconChip";

export interface FeatureCardProps {
  icon: React.ReactNode;
  color?: AccentColor;
  title: React.ReactNode;
  description: React.ReactNode;
  align?: "center" | "left";
}

/** 아이콘 칩 + 제목 + 설명 타일 (랜딩 기능 그리드). */
export function FeatureCard({
  icon,
  color = "blue",
  title,
  description,
  align = "left",
}: FeatureCardProps) {
  return (
    <Card
      interactive
      className={cn(
        "p-6 h-full flex flex-col gap-3",
        align === "center" && "items-center text-center",
      )}
    >
      <IconChip icon={icon} color={color} size={52} />
      <h3 className="t-h4">{title}</h3>
      <p className="t-sm text-fg-secondary">{description}</p>
    </Card>
  );
}
