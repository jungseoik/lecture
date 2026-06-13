import * as React from "react";

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  invalid?: boolean;
  disabled?: boolean;
  size?: "md" | "lg";
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Dropdown select with custom chevron, styled to match Input. */
export function Select(props: SelectProps): JSX.Element;
