import * as React from "react";

export interface LogoProps {
  /** Font size of the wordmark in px. @default 22 */
  size?: number;
  /** Render in a single currentColor (for footers / dark bars). */
  mono?: boolean;
  /** Ink color tuned for light backgrounds when not mono. @default true */
  onLight?: boolean;
  style?: React.CSSProperties;
}
/** The K-Study Match wordmark. */
export function Logo(props: LogoProps): JSX.Element;
