import * as React from "react";

/**
 * Props for the multi-step progress indicator.
 */
export interface StepIndicatorProps {
  /** Ordered step labels, e.g. ["기본 정보", "유학 희망 정보", …]. */
  steps: string[];
  /** Zero-based index of the current step. */
  current?: number;
  style?: React.CSSProperties;
}

/** Horizontal numbered stepper for the multi-step student profile form. */
export function StepIndicator(props: StepIndicatorProps): JSX.Element;
