import * as React from "react";
import { Card } from "./Card";
import { IconChip, type AccentColor } from "./IconChip";

export interface StatCardProps {
  icon: React.ReactNode;
  color?: AccentColor;
  label: React.ReactNode;
  value: React.ReactNode;
  /** 뒤에 작게 붙는 단위, 예: "개", "원" */
  unit?: React.ReactNode;
}

/** 요약 타일: 파스텔 칩 + 라벨 + 큰 블루 숫자. */
export function StatCard({ icon, color = "blue", label, value, unit }: StatCardProps) {
  return (
    <Card className="p-5 flex items-center gap-4">
      <IconChip icon={icon} color={color} size={44} />
      <div className="min-w-0">
        <div className="t-xs text-fg-muted">{label}</div>
        <div className="mt-0.5 flex items-baseline gap-1">
          <span className="t-h3 tnum text-brand font-bold">{value}</span>
          {unit ? <span className="t-sm text-fg-secondary">{unit}</span> : null}
        </div>
      </div>
    </Card>
  );
}
