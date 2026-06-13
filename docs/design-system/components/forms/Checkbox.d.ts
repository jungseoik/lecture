import * as React from "react";

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  label?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

/** Blue square checkbox with optional label and (필수) marker. */
export function Checkbox(props: CheckboxProps): JSX.Element;
