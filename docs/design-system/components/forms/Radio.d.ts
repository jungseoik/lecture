import * as React from "react";

export interface RadioProps {
  checked?: boolean;
  label?: React.ReactNode;
  name?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;

export interface RadioGroupProps {
  options: Array<string | { label: string; value: string }>;
  value?: string;
  name?: string;
  gap?: number;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
/** Inline set of radio options (e.g. 가능 / 불가능). */
export function RadioGroup(props: RadioGroupProps): JSX.Element;
