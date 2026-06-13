"use client";
import * as React from "react";
import { cn } from "@/lib/cn";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: React.ReactNode;
  required?: boolean;
}

/** 블루 스퀘어 체크박스 + 라벨 + (필수) 표시. */
export function Checkbox({
  label,
  required = false,
  disabled = false,
  className,
  checked,
  defaultChecked,
  onChange,
  ...rest
}: CheckboxProps) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? !!checked : internal;

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };

  return (
    <label
      className={cn(
        "inline-flex items-center gap-2.5 select-none",
        disabled ? "cursor-not-allowed opacity-55" : "cursor-pointer",
        className,
      )}
    >
      <span className="relative inline-flex shrink-0">
        <input
          type="checkbox"
          checked={isControlled ? checked : undefined}
          defaultChecked={isControlled ? undefined : defaultChecked}
          onChange={handle}
          disabled={disabled}
          className="absolute opacity-0 w-[18px] h-[18px] m-0 cursor-[inherit]"
          {...rest}
        />
        <span
          aria-hidden
          className={cn(
            "w-[18px] h-[18px] rounded-[5px] inline-flex items-center justify-center border-[1.5px]",
            "transition-[background-color,border-color] duration-[120ms] ease-standard",
            on ? "bg-brand border-brand" : "bg-surface border-border-strong",
          )}
        >
          {on ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6.2l2.2 2.2 4.6-4.8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : null}
        </span>
      </span>
      {label ? (
        <span className="text-[14px] text-fg leading-snug">
          {label}
          {required ? <span className="text-brand ml-1 font-semibold">(필수)</span> : null}
        </span>
      ) : null}
    </label>
  );
}
