import * as React from "react";

export interface FeatureCardProps {
  icon: React.ReactNode;
  color?: "green" | "purple" | "blue" | "orange" | "sky";
  title: React.ReactNode;
  description: React.ReactNode;
  align?: "center" | "left";
  style?: React.CSSProperties;
}
/** Icon-chip + title + description tile for the landing feature grid. */
export function FeatureCard(props: FeatureCardProps): JSX.Element;
