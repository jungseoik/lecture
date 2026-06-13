import * as React from "react";
import { cn } from "@/lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

/** 화이트 표면: 14px 라운드, 헤어라인 보더, 낮고 차가운 그림자. */
export function Card({
  interactive = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface rounded-lg border border-border-subtle shadow-sm",
        interactive &&
          "transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-0.5 hover:shadow-lg",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
