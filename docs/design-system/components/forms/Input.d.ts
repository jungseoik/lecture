import * as React from "react";

export interface InputProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  iconLeft?: React.ReactNode;
  invalid?: boolean;
  disabled?: boolean;
  size?: "md" | "lg";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

/** Single-line text field with soft focus ring and optional leading icon. */
export function Input(props: InputProps): JSX.Element;
