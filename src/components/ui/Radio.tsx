"use client";
import * as React from "react";
import { cn } from "@/lib/cn";

export interface RadioProps {
  checked?: boolean;
  label?: React.ReactNode;
  name?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/** 블루 닷 라디오. */
export function Radio({ checked, onChange, label, name, value, disabled = false }: RadioProps) {
  return (
    <label
      className={cn(
        "inline-flex items-center gap-2 select-none",
        disabled ? "cursor-not-allowed opacity-55" : "cursor-pointer",
      )}
    >
      <span className="relative inline-flex">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="absolute opacity-0 w-[18px] h-[18px] m-0 cursor-[inherit]"
        />
        <span
          aria-hidden
          className={cn(
            "w-[18px] h-[18px] rounded-full inline-flex items-center justify-center border-[1.5px] bg-surface",
            "transition-[border-color] duration-[120ms] ease-standard",
            checked ? "border-brand" : "border-border-strong",
          )}
        >
          {checked ? <span className="w-[9px] h-[9px] rounded-full bg-brand" /> : null}
        </span>
      </span>
      {label ? <span className="text-[14px] text-fg">{label}</span> : null}
    </label>
  );
}

export interface RadioGroupProps {
  options: Array<string | { label: string; value: string }>;
  value?: string;
  name?: string;
  onChange?: (value: string) => void;
  className?: string;
}

/** 인라인 라디오 묶음 (예: 가능 / 불가능). */
export function RadioGroup({
  options,
  value,
  onChange,
  name = "radiogroup",
  className,
}: RadioGroupProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-5", className)}>
      {options.map((opt) => {
        const o = typeof opt === "string" ? { label: opt, value: opt } : opt;
        return (
          <Radio
            key={o.value}
            name={name}
            value={o.value}
            label={o.label}
            checked={value === o.value}
            onChange={() => onChange?.(o.value)}
          />
        );
      })}
    </div>
  );
}
