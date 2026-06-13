import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  iconLeft?: React.ReactNode;
  invalid?: boolean;
  inputSize?: "md" | "lg";
}

/** 단일 행 텍스트 필드 — 차분한 보더, 부드러운 포커스 링, 좌측 아이콘(선택). */
export function Input({
  iconLeft,
  invalid = false,
  inputSize = "md",
  className,
  ...rest
}: InputProps) {
  return (
    <div className="relative flex items-center w-full">
      {iconLeft ? (
        <span className="pointer-events-none absolute left-3.5 inline-flex text-fg-muted text-[18px]">
          {iconLeft}
        </span>
      ) : null}
      <input
        className={cn(
          "w-full bg-surface text-fg rounded-sm border border-border-subtle outline-none",
          "transition-[border-color,box-shadow] duration-[120ms] ease-standard",
          "focus:border-border-focus focus:shadow-focus",
          "disabled:bg-surface-subtle disabled:cursor-not-allowed",
          "placeholder:text-fg-muted",
          invalid && "border-danger focus:border-danger",
          inputSize === "lg" ? "h-12 text-[16px]" : "h-11 text-[15px]",
          iconLeft ? "pl-10 pr-3.5" : "px-3.5",
          className,
        )}
        {...rest}
      />
    </div>
  );
}
