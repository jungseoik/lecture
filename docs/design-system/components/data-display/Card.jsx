import React from "react";

/**
 * K-Study Match — Card
 * The base surface: white, softly rounded, hairline border, low shadow.
 * `interactive` adds a lift on hover for clickable cards.
 */
export function Card({ children, padding = "var(--pad-card)", radius = "var(--radius-lg)", interactive = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: radius,
        padding,
        boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
        transform: hover ? "translateY(-2px)" : "none",
        transition: "box-shadow var(--duration-normal) var(--ease-standard), transform var(--duration-normal) var(--ease-standard)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
