import * as React from "react";
import { cn } from "@/lib/cn";

export interface StepIndicatorProps {
  steps: string[];
  current?: number;
  className?: string;
}

/** 가로 번호형 스테퍼 — 완료=그린 체크, 현재=블루 필, 예정=뮤트. */
export function StepIndicator({ steps, current = 0, className }: StepIndicatorProps) {
  return (
    <div className={cn("flex items-center w-full", className)}>
      {steps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <React.Fragment key={label}>
            <div className="inline-flex items-center gap-2.5 shrink-0">
              <span
                className={cn(
                  "w-[26px] h-[26px] rounded-full shrink-0 inline-flex items-center justify-center text-[13px] font-bold border-[1.5px]",
                  done
                    ? "bg-success border-success text-white"
                    : active
                      ? "bg-brand border-brand text-white"
                      : "bg-surface border-border-strong text-fg-muted",
                )}
              >
                {done ? (
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6.2l2.2 2.2 4.6-4.8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  i + 1
                )}
              </span>
              <span
                className={cn(
                  "text-[14px] whitespace-nowrap",
                  active
                    ? "font-semibold text-fg-heading"
                    : done
                      ? "font-medium text-fg-secondary"
                      : "font-medium text-fg-muted",
                )}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 ? (
              <span
                className={cn(
                  "flex-1 h-[1.5px] mx-3.5 min-w-4",
                  i < current ? "bg-success" : "bg-border-subtle",
                )}
              />
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}
