import * as React from "react";

export interface IconButtonProps {
  /** Icon node (e.g. a Phosphor `<i>` or SVG). */
  icon: React.ReactNode;
  /** Accessible label / tooltip. */
  label: string;
  variant?: "ghost" | "outline" | "soft";
  size?: "sm" | "md" | "lg";
  active?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Square, icon-only control for compact actions. */
export function IconButton(props: IconButtonProps): JSX.Element;
