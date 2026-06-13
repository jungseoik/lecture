import * as React from "react";
import { cn } from "@/lib/cn";

export interface FormFieldProps {
  label?: React.ReactNode;
  required?: boolean;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  htmlFor?: string;
  children?: React.ReactNode;
  className?: string;
}

/** 라벨 + 컨트롤 래퍼 (필수 표시, 힌트/에러 텍스트). */
export function FormField({
  label,
  required = false,
  hint,
  error,
  htmlFor,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5 w-full", className)}>
      {label ? (
        <label htmlFor={htmlFor} className="text-[14px] font-semibold text-fg-heading">
          {label}
          {required ? <span className="text-brand ml-1">*</span> : null}
        </label>
      ) : null}
      {children}
      {error || hint ? (
        <span className={cn("text-[13px] leading-snug", error ? "text-danger" : "text-fg-muted")}>
          {error || hint}
        </span>
      ) : null}
    </div>
  );
}
