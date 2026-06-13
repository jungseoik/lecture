import * as React from "react";

export interface FormFieldProps {
  label?: React.ReactNode;
  required?: boolean;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  htmlFor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Label + control wrapper with required mark and helper/error text. */
export function FormField(props: FormFieldProps): JSX.Element;
