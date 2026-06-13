import * as React from "react";
import { cn } from "@/lib/cn";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
  selectSize?: "md" | "lg";
}

/** 커스텀 쉐브론 셀렉트 — Input과 동일 스타일(8px 라운드, 헤어라인, 포커스 글로우). */
export function Select({
  invalid = false,
  selectSize = "md",
  className,
  children,
  ...rest
}: SelectProps) {
  return (
    <div className="relative w-full">
      <select
        className={cn(
          "w-full appearance-none bg-surface text-fg rounded-sm border",
          "pr-10 pl-3.5 outline-none cursor-pointer",
          "transition-[border-color,box-shadow] duration-[120ms] ease-standard",
          "focus:border-border-focus focus:shadow-focus",
          "disabled:opacity-50 disabled:pointer-events-none",
          invalid ? "border-danger" : "border-border-subtle",
          selectSize === "lg" ? "h-12 text-[15px]" : "h-11 text-[15px]",
          className,
        )}
        {...rest}
      >
        {children}
      </select>
      {/* chevron */}
      <svg
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-fg-muted"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 6l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
