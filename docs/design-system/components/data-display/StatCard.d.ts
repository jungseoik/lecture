import * as React from "react";

/**
 * Props for the summary stat tile.
 */
export interface StatCardProps {
  icon: React.ReactNode;
  color?: "green" | "purple" | "blue" | "orange" | "sky";
  label: React.ReactNode;
  value: React.ReactNode;
  /** Trailing unit shown smaller, e.g. "개" or "원". */
  unit?: React.ReactNode;
  style?: React.CSSProperties;
}
/** Summary tile: pastel chip + label + large blue number. */
export function StatCard(props: StatCardProps): JSX.Element;
