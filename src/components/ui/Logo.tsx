import * as React from "react";

export interface LogoProps {
  size?: number;
  mono?: boolean;
}

/** K-Study Match 워드마크 — "K-Study"(브랜드 블루) + "Match"(잉크). */
export function Logo({ size = 22, mono = false }: LogoProps) {
  return (
    <span
      className="font-extrabold tracking-tight select-none"
      style={{ fontSize: size, letterSpacing: "-0.02em" }}
    >
      <span className={mono ? "" : "text-brand"}>K-Study</span>
      <span className={mono ? "" : "text-ink"}> Match</span>
    </span>
  );
}
