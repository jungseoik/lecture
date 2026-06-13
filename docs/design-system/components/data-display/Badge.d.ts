import * as React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  tone?: "solid" | "blue" | "green" | "neutral" | "orange" | "warning";
  icon?: React.ReactNode;
  size?: "sm" | "md";
  style?: React.CSSProperties;
}
/** Compact status/label pill — score chip, school-type marker, match tags. */
export function Badge(props: BadgeProps): JSX.Element;
