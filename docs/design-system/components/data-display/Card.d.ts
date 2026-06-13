import * as React from "react";

export interface CardProps {
  children?: React.ReactNode;
  padding?: string | number;
  radius?: string | number;
  /** Adds a hover lift for clickable cards. */
  interactive?: boolean;
  style?: React.CSSProperties;
}
/** Base white surface: rounded, hairline border, low cool shadow. */
export function Card(props: CardProps): JSX.Element;
