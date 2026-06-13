import * as React from "react";

/**
 * Props for the primary action control.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "subtle" | "ghost" | "link";
  /** Control size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to fill container width. @default false */
  full?: boolean;
  disabled?: boolean;
  /** Element rendered before the label (e.g. an icon). */
  iconLeft?: React.ReactNode;
  /** Element rendered after the label (e.g. an arrow). */
  iconRight?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Primary action control for K-Study Match.
 */
export function Button(props: ButtonProps): JSX.Element;
