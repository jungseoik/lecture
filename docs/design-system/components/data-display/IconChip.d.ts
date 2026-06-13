import * as React from "react";

export interface IconChipProps {
  icon: React.ReactNode;
  color?: "green" | "purple" | "blue" | "orange" | "sky";
  /** Square size in px. @default 52 */
  size?: number;
  radius?: number;
  shape?: "rounded" | "circle";
  style?: React.CSSProperties;
}
/** Pastel tile holding one icon — the brand's signature accent. */
export function IconChip(props: IconChipProps): JSX.Element;
