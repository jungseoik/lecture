/* @ds-bundle: {"format":3,"namespace":"KStudyMatchDesignSystem_624b2d","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/data-display/FeatureCard.jsx"},{"name":"IconChip","sourcePath":"components/data-display/IconChip.jsx"},{"name":"StatCard","sourcePath":"components/data-display/StatCard.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"StepIndicator","sourcePath":"components/forms/StepIndicator.jsx"}],"sourceHashes":{"components/core/Button.jsx":"1ff7a8e8276f","components/core/IconButton.jsx":"42bf4c5bb85f","components/core/Logo.jsx":"be92a8fa982d","components/data-display/Badge.jsx":"c85a51b4bcd9","components/data-display/Card.jsx":"6f549279f7ed","components/data-display/FeatureCard.jsx":"8ab63f3573e2","components/data-display/IconChip.jsx":"27462c8a679c","components/data-display/StatCard.jsx":"8994cc566da7","components/feedback/Modal.jsx":"e7ecf1bf388d","components/forms/Checkbox.jsx":"0c1b58f999da","components/forms/FormField.jsx":"c9688b75f5d3","components/forms/Input.jsx":"326a0315664a","components/forms/Radio.jsx":"2632e41334c3","components/forms/Select.jsx":"c6329d8172fd","components/forms/StepIndicator.jsx":"03c9962d51be","ui_kits/marketing-website/Header.jsx":"fbf19d89509d","ui_kits/marketing-website/Landing.jsx":"807fb593cfde","ui_kits/marketing-website/Match.jsx":"e7a223dc7113","ui_kits/marketing-website/Modals.jsx":"d5345f31be49","ui_kits/marketing-website/Universities.jsx":"038386aa8596","ui_kits/marketing-website/data.js":"1e690736d037","ui_kits/marketing-website/shared.jsx":"7e05f8acd00c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KStudyMatchDesignSystem_624b2d = window.KStudyMatchDesignSystem_624b2d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * K-Study Match — Button
 * The primary action control. Royal-blue solid for primary actions,
 * white-with-blue-border for secondary, and quiet ghost/link variants.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 14px",
      fontSize: "14px",
      radius: "var(--radius-sm)",
      gap: "6px",
      icon: 16
    },
    md: {
      padding: "11px 20px",
      fontSize: "15px",
      radius: "var(--radius-md)",
      gap: "8px",
      icon: 18
    },
    lg: {
      padding: "15px 26px",
      fontSize: "16px",
      radius: "var(--radius-md)",
      gap: "10px",
      icon: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "1px solid var(--brand)",
      boxShadow: "var(--shadow-xs)"
    },
    secondary: {
      background: "var(--neutral-0)",
      color: "var(--brand)",
      border: "1px solid var(--blue-200)",
      boxShadow: "none"
    },
    subtle: {
      background: "var(--blue-50)",
      color: "var(--brand)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    link: {
      background: "transparent",
      color: "var(--text-link)",
      border: "1px solid transparent",
      boxShadow: "none",
      padding: 0
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: "var(--tracking-snug)",
      padding: variant === "link" ? 0 : s.padding,
      borderRadius: s.radius,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      width: full ? "100%" : "auto",
      whiteSpace: "nowrap",
      transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled && variant !== "link") e.currentTarget.style.transform = "translateY(1px)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "translateY(0)";
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === "primary") e.currentTarget.style.background = "var(--brand-hover)";else if (variant === "secondary") {
        e.currentTarget.style.background = "var(--blue-50)";
        e.currentTarget.style.borderColor = "var(--blue-300)";
      } else if (variant === "subtle") e.currentTarget.style.background = "var(--blue-100)";else if (variant === "ghost") e.currentTarget.style.background = "var(--neutral-100)";else if (variant === "link") e.currentTarget.style.color = "var(--brand-hover)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.background = v.background;
      e.currentTarget.style.borderColor = (v.border || "").includes("var") ? v.border.split(" ").pop() : v.border;
      if (variant === "secondary") e.currentTarget.style.borderColor = "var(--blue-200)";
      if (variant === "link") e.currentTarget.style.color = "var(--text-link)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * K-Study Match — IconButton
 * A square, icon-only control for compact actions (save, expand, close).
 */
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  active = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 38,
    lg: 44
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent"
    },
    outline: {
      background: "var(--neutral-0)",
      color: "var(--text-secondary)",
      border: "1px solid var(--border-subtle)"
    },
    soft: {
      background: "var(--blue-50)",
      color: "var(--brand)",
      border: "1px solid transparent"
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontSize: dim * 0.5,
      transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
      ...v,
      ...(active ? {
        background: "var(--blue-50)",
        color: "var(--brand)"
      } : null),
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = active ? "var(--blue-100)" : "var(--neutral-100)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = active ? "var(--blue-50)" : v.background;
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * K-Study Match — Logo (wordmark)
 * "K-Study" set in brand blue, "Match" in ink. Typographic mark, no glyph.
 */
function Logo({
  size = 22,
  mono = false,
  onLight = true,
  style,
  ...rest
}) {
  const blue = mono ? "currentColor" : "var(--brand)";
  const ink = mono ? "currentColor" : onLight ? "var(--neutral-900)" : "#fff";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: "0.32em",
      fontFamily: "var(--font-sans)",
      fontSize: size,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      userSelect: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: blue
    }
  }, "K-Study"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ink,
      fontWeight: 700
    }
  }, "Match"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
/**
 * K-Study Match — Badge
 * Compact status/label pill. `solid` for the score chip and type markers;
 * the soft tones (green/blue/neutral/orange) carry match reasons and tags.
 */
const TONES = {
  solid: {
    bg: "var(--brand)",
    fg: "#fff"
  },
  blue: {
    bg: "var(--accent-blue-bg)",
    fg: "var(--accent-blue-fg)"
  },
  green: {
    bg: "var(--accent-green-bg)",
    fg: "var(--success-strong)"
  },
  neutral: {
    bg: "var(--neutral-100)",
    fg: "var(--text-secondary)"
  },
  orange: {
    bg: "var(--accent-orange-bg)",
    fg: "var(--accent-orange-fg)"
  },
  warning: {
    bg: "var(--warning-bg)",
    fg: "var(--warning-fg)"
  }
};
function Badge({
  children,
  tone = "blue",
  icon = null,
  size = "md",
  style
}) {
  const t = TONES[tone] || TONES.blue;
  const sz = size === "sm" ? {
    padding: "3px 8px",
    fontSize: "12px"
  } : {
    padding: "5px 11px",
    fontSize: "13px"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: t.bg,
      color: t.fg,
      borderRadius: "var(--radius-xs)",
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...sz,
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * K-Study Match — Card
 * The base surface: white, softly rounded, hairline border, low shadow.
 * `interactive` adds a lift on hover for clickable cards.
 */
function Card({
  children,
  padding = "var(--pad-card)",
  radius = "var(--radius-lg)",
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: radius,
      padding,
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--duration-normal) var(--ease-standard), transform var(--duration-normal) var(--ease-standard)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/IconChip.jsx
try { (() => {
/**
 * K-Study Match — IconChip
 * A rounded pastel tile holding a single icon — the brand's signature for
 * feature cards, stat cards and info rows. Choose a color family per concept.
 */
const COLORS = {
  green: {
    bg: "var(--accent-green-bg)",
    fg: "var(--accent-green-fg)"
  },
  purple: {
    bg: "var(--accent-purple-bg)",
    fg: "var(--accent-purple-fg)"
  },
  blue: {
    bg: "var(--accent-blue-bg)",
    fg: "var(--accent-blue-fg)"
  },
  orange: {
    bg: "var(--accent-orange-bg)",
    fg: "var(--accent-orange-fg)"
  },
  sky: {
    bg: "var(--accent-sky-bg)",
    fg: "var(--accent-sky-fg)"
  }
};
function IconChip({
  icon,
  color = "blue",
  size = 52,
  radius,
  shape = "rounded",
  style
}) {
  const c = COLORS[color] || COLORS.blue;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flex: "0 0 auto",
      background: c.bg,
      color: c.fg,
      borderRadius: shape === "circle" ? "50%" : radius || Math.round(size * 0.32),
      fontSize: Math.round(size * 0.48),
      ...style
    }
  }, icon);
}
Object.assign(__ds_scope, { IconChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/IconChip.jsx", error: String((e && e.message) || e) }); }

// components/data-display/FeatureCard.jsx
try { (() => {
/**
 * K-Study Match — FeatureCard
 * Centered icon-chip + title + description tile used in the "what can you
 * check here?" grid on the landing page.
 */
function FeatureCard({
  icon,
  color = "blue",
  title,
  description,
  align = "center",
  style
}) {
  const centered = align === "center";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: centered ? "center" : "flex-start",
      textAlign: centered ? "center" : "left",
      gap: 14,
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "26px 20px",
      boxShadow: "var(--shadow-sm)",
      height: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconChip, {
    icon: icon,
    color: color,
    size: 52,
    shape: "circle"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "16px",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13.5px",
      color: "var(--text-secondary)",
      lineHeight: 1.55
    }
  }, description)));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatCard.jsx
try { (() => {
/**
 * K-Study Match — StatCard
 * A summary tile: pastel icon chip + label + a large blue number.
 * Used in the recommendation summary row and the university-list counters.
 */
function StatCard({
  icon,
  color = "blue",
  label,
  value,
  unit,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "16px 18px",
      boxShadow: "var(--shadow-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconChip, {
    icon: icon,
    color: color,
    size: 44,
    shape: "circle"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--text-secondary)",
      whiteSpace: "nowrap"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "22px",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-stat)",
      letterSpacing: "var(--tracking-tight)",
      lineHeight: 1
    },
    className: "ksm-tnum"
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "15px",
      marginLeft: 2
    }
  }, unit))));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/**
 * K-Study Match — Modal
 * Centered dialog over a dimmed, blurred backdrop. Smooth fade + scale on
 * open/close, Esc to close, backdrop click to close, body scroll lock.
 */
function Modal({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,
  width = 480,
  closeOnBackdrop = true
}) {
  const [mounted, setMounted] = React.useState(open);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    let t;
    if (open) {
      setMounted(true);
      const r = requestAnimationFrame(() => setActive(true));
      return () => cancelAnimationFrame(r);
    } else {
      setActive(false);
      t = setTimeout(() => setMounted(false), 200);
      return () => clearTimeout(t);
    }
  }, [open]);
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") onClose && onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);
  if (!mounted) return null;
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => {
      if (closeOnBackdrop && e.target === e.currentTarget) onClose && onClose();
    },
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      background: "rgba(18,26,43,0.45)",
      backdropFilter: "blur(3px)",
      WebkitBackdropFilter: "blur(3px)",
      opacity: active ? 1 : 0,
      transition: "opacity var(--duration-normal) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: "100%",
      maxWidth: width,
      maxHeight: "90vh",
      overflowY: "auto",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-xl)",
      transform: active ? "translateY(0) scale(1)" : "translateY(8px) scale(0.98)",
      opacity: active ? 1 : 0,
      transition: "transform var(--duration-normal) var(--ease-out), opacity var(--duration-normal) var(--ease-standard)"
    }
  }, (title || onClose) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      padding: "24px 26px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "19px",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-display)",
      letterSpacing: "var(--tracking-snug)",
      lineHeight: 1.35
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13.5px",
      color: "var(--text-secondary)",
      lineHeight: 1.55
    }
  }, subtitle)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "\uB2EB\uAE30",
    onClick: onClose,
    style: {
      flex: "0 0 auto",
      width: 34,
      height: 34,
      borderRadius: "var(--radius-sm)",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      fontSize: 20,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: -2,
      transition: "background var(--duration-fast)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--neutral-100)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 26px 24px"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 26px 24px",
      display: "flex",
      gap: 10,
      justifyContent: "flex-end"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * K-Study Match — Checkbox
 * Blue square check with an optional label. Controlled or uncontrolled.
 */
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  required = false,
  disabled = false,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 18,
      height: 18,
      margin: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 18,
      height: 18,
      borderRadius: 5,
      border: `1.5px solid ${on ? "var(--brand)" : "var(--border-strong)"}`,
      background: on ? "var(--brand)" : "var(--neutral-0)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2l2.2 2.2 4.6-4.8",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-body)",
      lineHeight: 1.4
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand)",
      marginLeft: 4,
      fontWeight: 600
    }
  }, "(\uD544\uC218)")));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
/**
 * K-Study Match — FormField
 * Label + control wrapper with optional required mark and helper/error text.
 */
function FormField({
  label,
  required = false,
  hint,
  error,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontSize: "14px",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-heading)",
      letterSpacing: "var(--tracking-snug)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand)",
      marginLeft: 4
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: error ? "var(--danger-fg)" : "var(--text-muted)",
      lineHeight: 1.4
    }
  }, error || hint));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * K-Study Match — Input
 * Single-line text field. Calm border, soft focus ring, optional leading icon.
 */
function Input({
  value,
  defaultValue,
  placeholder,
  type = "text",
  iconLeft = null,
  invalid = false,
  disabled = false,
  size = "md",
  onChange,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const pads = {
    md: "11px 14px",
    lg: "13px 16px"
  };
  const fs = {
    md: "15px",
    lg: "16px"
  };
  const borderColor = invalid ? "var(--danger-fg)" : focused ? "var(--border-focus)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100%"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      display: "inline-flex",
      color: "var(--text-muted)",
      fontSize: 18,
      pointerEvents: "none"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: "100%",
      fontFamily: "var(--font-sans)",
      fontSize: fs[size] || fs.md,
      color: "var(--text-body)",
      padding: pads[size] || pads.md,
      paddingLeft: iconLeft ? 40 : undefined,
      background: disabled ? "var(--neutral-50)" : "var(--neutral-0)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focused && !invalid ? "var(--shadow-focus)" : "none",
      transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
      cursor: disabled ? "not-allowed" : "text",
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/**
 * K-Study Match — Radio / RadioGroup
 * Blue dot radio. Use RadioGroup to render an inline set of options.
 */
function Radio({
  checked,
  onChange,
  label,
  name,
  value,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      userSelect: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 18,
      height: 18,
      margin: 0,
      cursor: "inherit"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      border: `1.5px solid ${checked ? "var(--brand)" : "var(--border-strong)"}`,
      background: "var(--neutral-0)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "border-color var(--duration-fast) var(--ease-standard)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--brand)"
    }
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, label));
}
function RadioGroup({
  options = [],
  value,
  onChange,
  name = "radiogroup",
  gap = 20,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap,
      alignItems: "center",
      ...style
    }
  }, options.map(opt => {
    const o = typeof opt === "string" ? {
      label: opt,
      value: opt
    } : opt;
    return /*#__PURE__*/React.createElement(Radio, {
      key: o.value,
      name: name,
      value: o.value,
      label: o.label,
      checked: value === o.value,
      onChange: () => onChange && onChange(o.value)
    });
  }));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * K-Study Match — Select
 * Native-backed dropdown with a custom chevron, matching Input styling.
 */
function Select({
  value,
  defaultValue,
  onChange,
  children,
  placeholder,
  invalid = false,
  disabled = false,
  size = "md",
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const pads = {
    md: "11px 14px",
    lg: "13px 16px"
  };
  const fs = {
    md: "15px",
    lg: "16px"
  };
  const borderColor = invalid ? "var(--danger-fg)" : focused ? "var(--border-focus)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: "100%",
      appearance: "none",
      WebkitAppearance: "none",
      fontFamily: "var(--font-sans)",
      fontSize: fs[size] || fs.md,
      color: value === "" || value == null ? "var(--text-muted)" : "var(--text-body)",
      padding: pads[size] || pads.md,
      paddingRight: 40,
      background: disabled ? "var(--neutral-50)" : "var(--neutral-0)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focused && !invalid ? "var(--shadow-focus)" : "none",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontSize: 16,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/StepIndicator.jsx
try { (() => {
/**
 * K-Study Match — StepIndicator
 * Horizontal numbered stepper. Completed steps show a check, the current step
 * is filled blue, upcoming steps are muted. Matches the multi-step profile form.
 */
function StepIndicator({
  steps = [],
  current = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      ...style
    }
  }, steps.map((label, i) => {
    const done = i < current;
    const active = i === current;
    const circleBg = done ? "var(--success-fg)" : active ? "var(--brand)" : "var(--neutral-0)";
    const circleBorder = done ? "var(--success-fg)" : active ? "var(--brand)" : "var(--border-strong)";
    const circleColor = done || active ? "#fff" : "var(--text-muted)";
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        flex: "0 0 auto"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: "50%",
        flex: "0 0 auto",
        background: circleBg,
        border: `1.5px solid ${circleBorder}`,
        color: circleColor,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        fontWeight: "var(--weight-bold)"
      }
    }, done ? /*#__PURE__*/React.createElement("svg", {
      width: "13",
      height: "13",
      viewBox: "0 0 12 12",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2.5 6.2l2.2 2.2 4.6-4.8",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "14px",
        whiteSpace: "nowrap",
        fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)",
        color: active ? "var(--text-heading)" : done ? "var(--text-secondary)" : "var(--text-muted)"
      }
    }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1.5,
        margin: "0 14px",
        background: i < current ? "var(--success-fg)" : "var(--border-subtle)",
        minWidth: 16
      }
    }));
  }));
}
Object.assign(__ds_scope, { StepIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/StepIndicator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/Header.jsx
try { (() => {
/* Header + Footer for the K-Study Match marketing site. */
(() => {
  const NS = window.KStudyMatchDesignSystem_624b2d;
  const {
    Logo,
    Button
  } = NS;
  function Header({
    active,
    onNavigate
  }) {
    const nav = [{
      id: "match",
      label: "맞춤 학교 찾기"
    }, {
      id: "universities",
      label: "전체 대학 보기"
    }];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        height: 68,
        display: "flex",
        alignItems: "center",
        gap: 36
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onNavigate("landing"),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 22
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        gap: 28,
        alignItems: "center",
        height: "100%"
      }
    }, nav.map(n => {
      const on = active === n.id;
      return /*#__PURE__*/React.createElement("button", {
        key: n.id,
        onClick: () => onNavigate(n.id),
        style: {
          background: "none",
          border: "none",
          cursor: "pointer",
          height: "100%",
          padding: "0 2px",
          fontSize: 15,
          fontFamily: "var(--font-sans)",
          fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)",
          color: on ? "var(--brand)" : "var(--text-body)",
          borderBottom: on ? "2.5px solid var(--brand)" : "2.5px solid transparent",
          transition: "color var(--duration-fast)"
        }
      }, n.label);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => window.KSM_MODAL && window.KSM_MODAL("login"),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: 15,
        color: "var(--text-body)",
        fontFamily: "var(--font-sans)"
      }
    }, "\uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      onClick: () => window.KSM_MODAL && window.KSM_MODAL("signup")
    }, "\uBB34\uB8CC \uD504\uB85C\uD544 \uB9CC\uB4E4\uAE30"))));
  }
  function Footer() {
    const links = ["개인정보 처리방침", "이용약관", "문의하기"];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--neutral-0)",
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "34px var(--container-pad)",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 0,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
        flexWrap: "wrap"
      }
    }, links.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: l
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--border-strong)",
        margin: "0 14px"
      }
    }, "|"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 13.5,
        color: "var(--text-secondary)"
      }
    }, l)))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, "\xA9 2024 K-Study Match. All rights reserved.")));
  }
  window.Header = Header;
  window.Footer = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/Landing.jsx
try { (() => {
/* Landing (메인페이지) — U-01 */
(() => {
  const NS = window.KStudyMatchDesignSystem_624b2d;
  const {
    Button,
    FeatureCard,
    Select
  } = NS;
  const {
    Container,
    HeroBand,
    HeroVisual
  } = window.KSM_UI;
  const D = window.KSM_DATA,
    WON = window.KSM_WON;
  const F = n => /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-" + n
  });
  const FEATURES = [{
    icon: "wallet",
    color: "green",
    title: "생활비 확인",
    desc: "지역과 생활 방식에 따른 월별 생활비를 확인하세요."
  }, {
    icon: "graduation-cap",
    color: "purple",
    title: "장학금 비교",
    desc: "대학별 장학금 제도와 수혜 조건을 비교하세요."
  }, {
    icon: "currency-krw",
    color: "blue",
    title: "등록금 비교",
    desc: "대학교별 등록금 정보를 한눈에 비교하세요."
  }, {
    icon: "buildings",
    color: "orange",
    title: "기숙사 확인",
    desc: "기숙사 비용, 시설, 신청 조건을 확인하세요."
  }, {
    icon: "chat-circle-dots",
    color: "sky",
    title: "유학 상담요청",
    desc: "전문 상담사에게 유학 관련 상담을 요청하세요."
  }];
  function Estimator() {
    const [region, setRegion] = React.useState("충청권");
    const [housing, setHousing] = React.useState("기숙사");
    const [life, setLife] = React.useState("보통형");
    const base = D.livingCost[region] && D.livingCost[region][housing] || 600000;
    const monthly = Math.round(base * D.lifeMultiplier[life] / 10000) * 10000;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: 18,
        boxShadow: "var(--shadow-sm)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.25fr 1fr"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 32
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22,
        fontWeight: 800,
        color: "var(--text-display)",
        marginBottom: 22
      }
    }, "\uD55C\uAD6D \uC720\uD559 \uAC00\uBA74 \uD55C \uB2EC \uC0DD\uD65C\uBE44\uAC00 \uC5BC\uB9C8\uB098 \uB4E4\uAE4C?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 14
      }
    }, [["희망 지역", region, setRegion, D.regions], ["주거 방식", housing, setHousing, ["기숙사", "월세", "고시원·원룸"]], ["생활 방식", life, setLife, ["절약형", "보통형", "여유형"]]].map(([label, val, set, opts]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: 13.5,
        fontWeight: 600,
        color: "var(--text-heading)"
      }
    }, label), /*#__PURE__*/React.createElement(Select, {
      value: val,
      onChange: e => set(e.target.value)
    }, opts.map(o => /*#__PURE__*/React.createElement("option", {
      key: o,
      value: o
    }, o)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 9,
        alignItems: "flex-start",
        marginTop: 18,
        background: "var(--blue-50)",
        borderRadius: 10,
        padding: "12px 14px"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-fill ph-info",
      style: {
        color: "var(--brand)",
        fontSize: 17,
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--text-secondary)",
        lineHeight: 1.5
      }
    }, "\uC120\uD0DD\uD558\uC2E0 \uC870\uAC74(", region, " / ", housing, " / ", life, ") \uAE30\uC900\uC73C\uB85C \uD55C\uAD6D \uC720\uD559 \uC0DD\uD65C\uBE44\uB97C \uC608\uC0C1\uD574 \uB4DC\uB9BD\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 32,
        borderLeft: "1px solid var(--border-subtle)",
        background: "var(--neutral-25)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 16
      }
    }, [["예상 월 생활비", monthly], ["6개월 예상 생활비", monthly * 6], ["1년 예상 생활비", monthly * 12]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        borderBottom: "1px solid var(--border-subtle)",
        paddingBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: "var(--text-secondary)"
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        fontWeight: 800,
        color: "var(--text-stat)"
      },
      className: "ksm-tnum"
    }, WON(v)))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      full: true,
      onClick: () => window.KSM_NAV("match")
    }, "\uB0B4 \uC870\uAC74\uC5D0 \uB9DE\uB294 \uD559\uAD50 \uCC3E\uAE30"))));
  }
  function Landing({
    onNavigate
  }) {
    window.KSM_NAV = onNavigate;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroBand, {
      tall: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 46,
        fontWeight: 800,
        lineHeight: 1.2,
        letterSpacing: "-0.03em",
        color: "var(--text-display)"
      }
    }, "\uD55C\uAD6D \uC720\uD559,", /*#__PURE__*/React.createElement("br", null), "\uB9C9\uC5F0\uD558\uAC8C \uC900\uBE44\uD558\uC9C0 \uB9C8\uC138\uC694."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        color: "var(--text-secondary)",
        lineHeight: 1.6,
        marginTop: 20
      }
    }, "\uB4F1\uB85D\uAE08, \uC7A5\uD559\uAE08, \uAE30\uC219\uC0AC, \uC0DD\uD65C\uBE44\uB97C \uBE44\uAD50\uD558\uACE0", /*#__PURE__*/React.createElement("br", null), "\uB0B4 \uC870\uAC74\uC5D0 \uB9DE\uB294 \uD55C\uAD6D \uB300\uD559\uC744 \uCC3E\uC544\uBCF4\uC138\uC694."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginTop: 30
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => onNavigate("match")
    }, "\uB0B4 \uC870\uAC74\uC5D0 \uB9DE\uB294 \uD559\uAD50 \uCC3E\uAE30"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => onNavigate("universities")
    }, "\uC804\uCCB4 \uB300\uD559 \uC815\uBCF4 \uBCF4\uAE30"))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 360
      }
    }, /*#__PURE__*/React.createElement(HeroVisual, null)))), /*#__PURE__*/React.createElement(Container, {
      style: {
        paddingTop: 72,
        paddingBottom: 24
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: 800,
        color: "var(--text-display)",
        marginBottom: 36
      }
    }, "\uC774 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uBB34\uC5C7\uC744 \uD655\uC778\uD560 \uC218 \uC788\uB098\uC694?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 16
      }
    }, FEATURES.map(f => /*#__PURE__*/React.createElement(FeatureCard, {
      key: f.title,
      icon: F(f.icon),
      color: f.color,
      title: f.title,
      description: f.desc
    })))), /*#__PURE__*/React.createElement(Container, {
      style: {
        paddingTop: 48,
        paddingBottom: 24
      }
    }, /*#__PURE__*/React.createElement(Estimator, null)), /*#__PURE__*/React.createElement(Container, {
      style: {
        paddingTop: 24,
        paddingBottom: 80
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--blue-50)",
        borderRadius: 18,
        padding: "40px 44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        border: "1px solid var(--blue-100)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 620
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 24,
        fontWeight: 800,
        color: "var(--text-display)"
      }
    }, "\uB0B4 \uC131\uC801\uACFC \uC5B4\uD559\uC810\uC218\uB85C \uC9C0\uC6D0 \uAC00\uB2A5\uD55C \uD559\uAD50\uB97C \uD655\uC778\uD558\uC138\uC694."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        color: "var(--text-secondary)",
        lineHeight: 1.6,
        marginTop: 12
      }
    }, "GPA, TOPIK, IELTS \uC810\uC218, \uD76C\uB9DD\uC804\uACF5, \uC608\uC0B0 \uC815\uBCF4\uB97C \uC785\uB825\uD558\uC2DC\uBA74", /*#__PURE__*/React.createElement("br", null), "\uB0B4 \uC870\uAC74\uC5D0 \uB9DE\uB294 \uB300\uD559\uC744 \uB9DE\uCDA4 \uCD94\uCC9C\uD574 \uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      }),
      onClick: () => onNavigate("match")
    }, "\uBB34\uB8CC\uB85C \uB9DE\uCDA4 \uD559\uAD50 \uD655\uC778\uD558\uAE30"))), /*#__PURE__*/React.createElement("img", {
      src: window.KSM_IMG.students,
      alt: "",
      style: {
        flex: "0 0 auto",
        width: 180,
        height: 116,
        borderRadius: 14,
        objectFit: "cover",
        border: "1px solid var(--blue-100)"
      }
    }))));
  }
  window.Landing = Landing;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/Match.jsx
try { (() => {
/* Match (맞춤 학교 찾기) — U-02 */
(() => {
  const NS = window.KStudyMatchDesignSystem_624b2d;
  const {
    Button,
    Input,
    Select,
    Checkbox,
    RadioGroup,
    FormField,
    StepIndicator,
    Badge,
    IconButton,
    StatCard
  } = NS;
  const {
    Container,
    HeroBand,
    InfoStat,
    CampusThumb
  } = window.KSM_UI;
  const D = window.KSM_DATA,
    WON = window.KSM_WON;
  const F = n => /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-" + n
  });
  const STEPS = ["기본 정보", "유학 희망 정보", "학업 정보", "어학 정보", "재정 및 서류 정보"];
  function ProfileForm() {
    const [fin, setFin] = React.useState("가능");
    const [sch, setSch] = React.useState("필요");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: 18,
        boxShadow: "var(--shadow-sm)",
        padding: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 26
      }
    }, /*#__PURE__*/React.createElement(StepIndicator, {
      steps: STEPS,
      current: 2
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(FormField, {
      label: "\uC774\uB984"
    }, /*#__PURE__*/React.createElement(Input, {
      defaultValue: "\uD64D\uAE38\uB3D9"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "\uC131\uBCC4"
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: "\uB0A8\uC131"
    }, /*#__PURE__*/React.createElement("option", null, "\uB0A8\uC131"), /*#__PURE__*/React.createElement("option", null, "\uC5EC\uC131"), /*#__PURE__*/React.createElement("option", null, "\uAE30\uD0C0"))), /*#__PURE__*/React.createElement(FormField, {
      label: "\uAD6D\uC801"
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: "\uBCA0\uD2B8\uB0A8"
    }, /*#__PURE__*/React.createElement("option", null, "\uBCA0\uD2B8\uB0A8"), /*#__PURE__*/React.createElement("option", null, "\uBABD\uACE8"), /*#__PURE__*/React.createElement("option", null, "\uC911\uAD6D"), /*#__PURE__*/React.createElement("option", null, "\uB124\uD314"))), /*#__PURE__*/React.createElement(FormField, {
      label: "\uD604\uC7AC \uAC70\uC8FC \uAD6D\uAC00"
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: "\uBCA0\uD2B8\uB0A8"
    }, /*#__PURE__*/React.createElement("option", null, "\uBCA0\uD2B8\uB0A8"), /*#__PURE__*/React.createElement("option", null, "\uD55C\uAD6D"))), /*#__PURE__*/React.createElement(FormField, {
      label: "\uC774\uBA54\uC77C"
    }, /*#__PURE__*/React.createElement(Input, {
      defaultValue: "gildong.hong@email.com"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "\uC804\uD654\uBC88\uD638"
    }, /*#__PURE__*/React.createElement(Input, {
      defaultValue: "+84 912 345 678"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "\uD76C\uB9DD \uD559\uC704"
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: "\uD559\uBD80"
    }, /*#__PURE__*/React.createElement("option", null, "\uC5B4\uD559\uC5F0\uC218"), /*#__PURE__*/React.createElement("option", null, "\uD559\uBD80"), /*#__PURE__*/React.createElement("option", null, "\uC11D\uC0AC"), /*#__PURE__*/React.createElement("option", null, "\uBC15\uC0AC"))), /*#__PURE__*/React.createElement(FormField, {
      label: "\uD76C\uB9DD \uC804\uACF5"
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: "\uACBD\uC601\uD559"
    }, /*#__PURE__*/React.createElement("option", null, "\uACBD\uC601\uD559"), /*#__PURE__*/React.createElement("option", null, "\uCEF4\uD4E8\uD130\uACF5\uD559"), /*#__PURE__*/React.createElement("option", null, "\uC804\uC790\uACF5\uD559"))), /*#__PURE__*/React.createElement(FormField, {
      label: "\uD76C\uB9DD \uC9C0\uC5ED"
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: "\uCDA9\uCCAD\uAD8C"
    }, D.regions.map(r => /*#__PURE__*/React.createElement("option", {
      key: r
    }, r)))), /*#__PURE__*/React.createElement(FormField, {
      label: "\uD76C\uB9DD \uC785\uD559 \uC2DC\uAE30"
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: "2025\uB144 9\uC6D4 (\uAC00\uC744\uD559\uAE30)"
    }, /*#__PURE__*/React.createElement("option", null, "2025\uB144 3\uC6D4 (\uBD04\uD559\uAE30)"), /*#__PURE__*/React.createElement("option", null, "2025\uB144 9\uC6D4 (\uAC00\uC744\uD559\uAE30)"))), /*#__PURE__*/React.createElement(FormField, {
      label: "\uCD5C\uC885\uD559\uB825"
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: "\uACE0\uB4F1\uD559\uAD50 \uC878\uC5C5"
    }, /*#__PURE__*/React.createElement("option", null, "\uACE0\uB4F1\uD559\uAD50 \uC878\uC5C5"), /*#__PURE__*/React.createElement("option", null, "\uC804\uBB38\uB300 \uC878\uC5C5"), /*#__PURE__*/React.createElement("option", null, "\uB300\uD559\uAD50 \uC878\uC5C5"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(FormField, {
      label: "GPA"
    }, /*#__PURE__*/React.createElement(Input, {
      defaultValue: "3.4 / 4.5"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "GPA \uAE30\uC900"
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: "4.5 \uB9CC\uC810"
    }, /*#__PURE__*/React.createElement("option", null, "4.0 \uB9CC\uC810"), /*#__PURE__*/React.createElement("option", null, "4.3 \uB9CC\uC810"), /*#__PURE__*/React.createElement("option", null, "4.5 \uB9CC\uC810"), /*#__PURE__*/React.createElement("option", null, "100\uC810 \uB9CC\uC810")))), /*#__PURE__*/React.createElement(FormField, {
      label: "TOPIK \uB4F1\uAE09"
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: "TOPIK 3\uAE09"
    }, /*#__PURE__*/React.createElement("option", null, "\uC5C6\uC74C"), /*#__PURE__*/React.createElement("option", null, "TOPIK 2\uAE09"), /*#__PURE__*/React.createElement("option", null, "TOPIK 3\uAE09"), /*#__PURE__*/React.createElement("option", null, "TOPIK 4\uAE09"))), /*#__PURE__*/React.createElement(FormField, {
      label: "IELTS \uC810\uC218"
    }, /*#__PURE__*/React.createElement(Input, {
      defaultValue: "5.5"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "\uC7AC\uC815\uC99D\uBA85 \uAC00\uB2A5 \uC5EC\uBD80"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 9
      }
    }, /*#__PURE__*/React.createElement(RadioGroup, {
      options: ["가능", "불가능"],
      value: fin,
      onChange: setFin,
      name: "fin"
    }))), /*#__PURE__*/React.createElement(FormField, {
      label: "\uC7A5\uD559\uAE08 \uD544\uC694 \uC5EC\uBD80"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 9
      }
    }, /*#__PURE__*/React.createElement(RadioGroup, {
      options: ["필요", "불필요"],
      value: sch,
      onChange: setSch,
      name: "sch"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginTop: 24,
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.",
      required: true,
      defaultChecked: true
    }), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 12.5,
        color: "var(--text-secondary)",
        border: "1px solid var(--border-subtle)",
        borderRadius: 6,
        padding: "3px 8px"
      }
    }, "\uC790\uC138\uD788 \uBCF4\uAE30")), /*#__PURE__*/React.createElement(Checkbox, {
      label: "\uB9DE\uCDA4 \uB300\uD559 \uCD94\uCC9C\uC744 \uC704\uD574 \uB0B4 \uC815\uBCF4\uB97C \uD65C\uC6A9\uD558\uB294 \uAC83\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.",
      required: true,
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "\uC774\uBCA4\uD2B8 \uBC0F \uC720\uD559 \uC815\uBCF4 \uC218\uC2E0\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4. (\uC120\uD0DD)"
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      })
    }, "\uB0B4 \uC870\uAC74\uC73C\uB85C \uD559\uAD50 \uCD94\uCC9C\uBC1B\uAE30")));
  }
  function CostCalculator({
    u
  }) {
    const [housing, setHousing] = React.useState("기숙사");
    const [food, setFood] = React.useState("보통형");
    const rows = {
      주거: u.dorm ? 250000 : 450000,
      식비: food === "절약형" ? 300000 : food === "여유형" ? 450000 : 350000,
      교통비: 60000,
      통신비: 30000,
      보험료: 30000,
      기타: 120000
    };
    const monthly = Object.values(rows).reduce((a, b) => a + b, 0);
    const semester = monthly * 6 + u.tuition;
    const annual = monthly * 12 + u.tuition * 2;
    const withSch = Math.round((semester - u.tuition * u.scholarship / 100) / 10000) * 10000;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 24,
        borderTop: "1px solid var(--border-subtle)",
        padding: "22px 24px",
        background: "var(--neutral-25)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 10,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        fontSize: 17,
        fontWeight: 800,
        color: "var(--text-display)"
      }
    }, "\uD559\uAD50\uBCC4 \uC0DD\uD65C\uBE44 \uACC4\uC0B0\uAE30"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, "\uC120\uD0DD \uD559\uAD50"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        fontWeight: 700,
        color: "var(--brand)"
      }
    }, u.name, " / ", u.region.split(",")[0])), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(SmallField, {
      label: "\uC8FC\uAC70 \uBC29\uC2DD"
    }, /*#__PURE__*/React.createElement(Select, {
      value: housing,
      onChange: e => setHousing(e.target.value)
    }, /*#__PURE__*/React.createElement("option", null, "\uAE30\uC219\uC0AC"), /*#__PURE__*/React.createElement("option", null, "\uC6D4\uC138"), /*#__PURE__*/React.createElement("option", null, "\uACE0\uC2DC\uC6D0\xB7\uC6D0\uB8F8"))), /*#__PURE__*/React.createElement(SmallField, {
      label: "\uC2DD\uBE44 \uC218\uC900"
    }, /*#__PURE__*/React.createElement(Select, {
      value: food,
      onChange: e => setFood(e.target.value)
    }, /*#__PURE__*/React.createElement("option", null, "\uC808\uC57D\uD615"), /*#__PURE__*/React.createElement("option", null, "\uBCF4\uD1B5\uD615"), /*#__PURE__*/React.createElement("option", null, "\uC5EC\uC720\uD615"))), /*#__PURE__*/React.createElement(SmallField, {
      label: "\uAD50\uD1B5\uBE44"
    }, /*#__PURE__*/React.createElement(Input, {
      defaultValue: "60,000\uC6D0"
    })), /*#__PURE__*/React.createElement(SmallField, {
      label: "\uD1B5\uC2E0\uBE44"
    }, /*#__PURE__*/React.createElement(Input, {
      defaultValue: "30,000\uC6D0"
    })), /*#__PURE__*/React.createElement(SmallField, {
      label: "\uBCF4\uD5D8\uB8CC"
    }, /*#__PURE__*/React.createElement(Input, {
      defaultValue: "30,000\uC6D0"
    })), /*#__PURE__*/React.createElement(SmallField, {
      label: "\uAE30\uD0C0 \uC0DD\uD65C\uBE44"
    }, /*#__PURE__*/React.createElement(Input, {
      defaultValue: "120,000\uC6D0"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "flex-start",
        marginTop: 16,
        background: "var(--blue-50)",
        borderRadius: 10,
        padding: "10px 13px"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-fill ph-info",
      style: {
        color: "var(--brand)",
        fontSize: 16,
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-secondary)",
        lineHeight: 1.5
      }
    }, "\uACC4\uC0B0 \uACB0\uACFC\uB294 \uD3C9\uADE0\uAC12\uC744 \uAE30\uC900\uC73C\uB85C \uC0B0\uCD9C\uB418\uBA70 \uAC1C\uC778 \uC0DD\uD65C \uD328\uD134\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: 14,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 11
      }
    }, [["월 예상 생활비", monthly, false], ["1학기 예상 비용", semester, false], ["1년 예상 비용", annual, false], ["장학금 반영 시 예상 비용", withSch, true]].map(([l, v, hl]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        paddingBottom: 9,
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: hl ? 18 : 16,
        fontWeight: 800,
        color: hl ? "var(--success-strong)" : "var(--text-stat)"
      },
      className: "ksm-tnum"
    }, WON(v)))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      full: true,
      style: {
        marginTop: 4
      },
      onClick: () => window.KSM_MODAL("consult", u)
    }, "\uC774 \uD559\uAD50 \uC720\uD559 \uC0C1\uB2F4\uC694\uCCAD"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      full: true
    }, "\uAD00\uC2EC\uD559\uAD50 \uC800\uC7A5")));
  }
  function SmallField({
    label,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: 12.5,
        fontWeight: 600,
        color: "var(--text-heading)"
      }
    }, label), children);
  }
  function RecCard({
    u,
    expanded,
    onToggle
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: `1px solid ${expanded ? "var(--blue-200)" : "var(--border-subtle)"}`,
        borderRadius: 14,
        boxShadow: expanded ? "var(--shadow-md)" : "var(--shadow-sm)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        flex: "0 0 auto"
      }
    }, /*#__PURE__*/React.createElement(CampusThumb, {
      initial: u.initial,
      src: u.image,
      style: {
        width: 150,
        height: 104
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 8,
        left: 8,
        background: "var(--brand)",
        color: "#fff",
        fontSize: 12,
        fontWeight: 800,
        padding: "4px 9px",
        borderRadius: 7
      }
    }, "\uCD94\uCC9C\uB3C4 ", u.score, "\uC810")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 auto",
        width: 220
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        fontSize: 18,
        fontWeight: 800,
        color: "var(--text-display)"
      }
    }, u.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, u.region)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap",
        marginTop: 9
      }
    }, u.matchTags.map(t => /*#__PURE__*/React.createElement(Badge, {
      key: t,
      tone: "green",
      size: "sm"
    }, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        gap: 16,
        justifyContent: "space-between",
        paddingLeft: 6
      }
    }, /*#__PURE__*/React.createElement(InfoStat, {
      icon: F("currency-krw"),
      color: "blue",
      label: "\uD559\uAE30\uB2F9 \uB4F1\uB85D\uAE08",
      value: WON(u.tuition)
    }), /*#__PURE__*/React.createElement(InfoStat, {
      icon: F("seal-percent"),
      color: "purple",
      label: "\uC7A5\uD559\uAE08 \uAC00\uB2A5\uC131",
      value: u.scholarship >= 70 ? "높음" : "중간",
      sub: "(" + u.scholarship + "%)"
    }), /*#__PURE__*/React.createElement(InfoStat, {
      icon: F("buildings"),
      color: "orange",
      label: "\uAE30\uC219\uC0AC",
      value: u.dorm ? "제공" : "미제공"
    }), /*#__PURE__*/React.createElement(InfoStat, {
      icon: F("wallet"),
      color: "green",
      label: "\uC608\uC0C1 \uC6D4 \uC0DD\uD65C\uBE44",
      value: WON(u.monthlyCost)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 auto",
        display: "flex",
        gap: 7,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "\uC0C1\uC138\uBCF4\uAE30"), /*#__PURE__*/React.createElement(Button, {
      variant: "subtle",
      size: "sm",
      onClick: onToggle
    }, "\uC0DD\uD65C\uBE44 \uACC4\uC0B0"), /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-bookmark-simple"
      }),
      label: "\uAD00\uC2EC \uC800\uC7A5",
      variant: "outline"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-chat-circle-dots"
      }),
      onClick: () => window.KSM_MODAL("consult", u)
    }, "\uC720\uD559 \uC0C1\uB2F4\uC694\uCCAD"), /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-caret-" + (expanded ? "up" : "down")
      }),
      label: "\uD3BC\uCE58\uAE30",
      variant: "ghost",
      onClick: onToggle
    }))), expanded && /*#__PURE__*/React.createElement(CostCalculator, {
      u: u
    }));
  }
  function Match({
    onNavigate
  }) {
    window.KSM_NAV = onNavigate;
    const recs = D.universities.slice(0, 3);
    const [expanded, setExpanded] = React.useState(recs[0].id);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroBand, {
      decor: window.KSM_IMG.heroDecor
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 36,
        fontWeight: 800,
        letterSpacing: "-0.03em",
        color: "var(--text-display)"
      }
    }, "\uB0B4 \uC870\uAC74\uC5D0 \uB9DE\uB294 \uD55C\uAD6D \uB300\uD559\uC744 \uCC3E\uC544\uBCF4\uC138\uC694."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: "var(--text-secondary)",
        lineHeight: 1.6,
        marginTop: 14
      }
    }, "GPA, TOPIK, IELTS, \uD76C\uB9DD\uC804\uACF5, \uC608\uC0B0 \uC815\uBCF4\uB97C \uC785\uB825\uD558\uBA74", /*#__PURE__*/React.createElement("br", null), "\uC9C0\uC6D0 \uC801\uD569\uB3C4\uAC00 \uB192\uC740 \uD55C\uAD6D \uB300\uD559\uACFC \uC7A5\uD559\uAE08 \uAC00\uB2A5\uC131\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        lineHeight: 1.55,
        marginTop: 12
      }
    }, "\uCD94\uCC9C \uACB0\uACFC\uB294 \uC785\uB825\uD55C \uC815\uBCF4\uC640 \uB300\uD559\uBCC4 \uB4F1\uB85D \uC815\uBCF4\uB97C \uAE30\uC900\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement(Container, {
      style: {
        paddingBottom: 80,
        marginTop: -8
      }
    }, /*#__PURE__*/React.createElement(ProfileForm, null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 40,
        marginBottom: 18,
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 26,
        fontWeight: 800,
        color: "var(--text-display)",
        flex: "0 0 auto"
      }
    }, "\uB9DE\uCDA4 \uCD94\uCC9C \uACB0\uACFC"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      icon: F("graduation-cap"),
      color: "purple",
      label: "\uCD94\uCC9C \uAC00\uB2A5 \uB300\uD559",
      value: "12",
      unit: "\uAC1C"
    }), /*#__PURE__*/React.createElement(StatCard, {
      icon: F("money"),
      color: "orange",
      label: "\uC7A5\uD559\uAE08 \uAC80\uD1A0 \uAC00\uB2A5",
      value: "5",
      unit: "\uAC1C"
    }), /*#__PURE__*/React.createElement(StatCard, {
      icon: F("buildings"),
      color: "blue",
      label: "\uAE30\uC219\uC0AC \uC81C\uACF5 \uB300\uD559",
      value: "8",
      unit: "\uAC1C"
    }), /*#__PURE__*/React.createElement(StatCard, {
      icon: F("piggy-bank"),
      color: "green",
      label: "\uD3C9\uADE0 \uC608\uC0C1 \uC6D4 \uC0DD\uD65C\uBE44",
      value: "750,000",
      unit: "\uC6D0"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, recs.map(u => /*#__PURE__*/React.createElement(RecCard, {
      key: u.id,
      u: u,
      expanded: expanded === u.id,
      onToggle: () => setExpanded(expanded === u.id ? null : u.id)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--blue-50)",
        borderRadius: 18,
        padding: "28px 36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        marginTop: 26,
        border: "1px solid var(--blue-100)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.KSM_IMG.students,
      alt: "",
      style: {
        flex: "0 0 auto",
        width: 92,
        height: 64,
        borderRadius: 12,
        objectFit: "cover",
        border: "1px solid var(--blue-100)"
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 20,
        fontWeight: 800,
        color: "var(--text-display)"
      }
    }, "\uCD94\uCC9C \uACB0\uACFC\uB97C \uC800\uC7A5\uD558\uACE0 \uC0C1\uB2F4\uC744 \uBC1B\uC544\uBCF4\uC138\uC694."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: "var(--text-secondary)",
        marginTop: 6
      }
    }, "\uB0B4 \uC870\uAC74\uACFC \uCD94\uCC9C \uACB0\uACFC\uB97C \uC800\uC7A5\uD558\uBA74 \uB098\uC911\uC5D0 \uB2E4\uC2DC \uD655\uC778\uD560 \uC218 \uC788\uACE0, \uC804\uBB38 \uC0C1\uB2F4\uC744 \uD1B5\uD574 \uB354 \uC790\uC138\uD55C \uC720\uD559 \uC815\uBCF4\uB97C \uBC1B\uC544\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      })
    }, "\uBB34\uB8CC \uD504\uB85C\uD544 \uC800\uC7A5\uD558\uAE30"))));
  }
  window.Match = Match;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/Match.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/Modals.jsx
try { (() => {
/* Auth + consultation modals for the K-Study Match marketing site. */
(() => {
  const NS = window.KStudyMatchDesignSystem_624b2d;
  const {
    Modal,
    Button,
    Input,
    FormField,
    Select,
    Checkbox
  } = NS;
  const D = window.KSM_DATA,
    WON = window.KSM_WON;
  const GoogleMark = () => /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 18 18",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 01-1.8 2.72v2.26h2.92c1.71-1.57 2.68-3.89 2.68-6.62z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 009 18z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M3.97 10.72A5.4 5.4 0 013.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 000 9c0 1.45.35 2.83.96 4.05l3.01-2.33z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 00.96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"
  }));
  function Row({
    k,
    v
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-secondary)"
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--text-heading)"
      }
    }, v));
  }
  function LoginBody({
    openModal
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(FormField, {
      label: "\uC774\uBA54\uC77C"
    }, /*#__PURE__*/React.createElement(Input, {
      type: "email",
      placeholder: "you@email.com"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "\uBE44\uBC00\uBC88\uD638"
    }, /*#__PURE__*/React.createElement(Input, {
      type: "password",
      placeholder: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: -4
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      full: true,
      size: "lg"
    }, "\uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        color: "var(--text-muted)",
        fontSize: 12.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-subtle)"
      }
    }), "\uB610\uB294", /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-subtle)"
      }
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      full: true,
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(GoogleMark, null)
    }, "Google\uB85C \uACC4\uC18D\uD558\uAE30"), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: "center",
        fontSize: 13.5,
        color: "var(--text-secondary)",
        marginTop: 4
      }
    }, "\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694? ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        openModal("signup");
      },
      style: {
        fontWeight: 700
      }
    }, "\uD68C\uC6D0\uAC00\uC785")));
  }
  function SignupBody({
    openModal,
    navigate,
    close
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(FormField, {
      label: "\uC774\uB984"
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "\uC774\uB984 \uC785\uB825"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "\uC774\uBA54\uC77C"
    }, /*#__PURE__*/React.createElement(Input, {
      type: "email",
      placeholder: "you@email.com"
    })), /*#__PURE__*/React.createElement(FormField, {
      label: "\uBE44\uBC00\uBC88\uD638",
      hint: "8\uC790 \uC774\uC0C1, \uC601\uBB38/\uC22B\uC790 \uC870\uD569"
    }, /*#__PURE__*/React.createElement(Input, {
      type: "password",
      placeholder: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(FormField, {
      label: "\uAD6D\uC801"
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "\uC120\uD0DD"
    }, /*#__PURE__*/React.createElement("option", null, "\uBCA0\uD2B8\uB0A8"), /*#__PURE__*/React.createElement("option", null, "\uBABD\uACE8"), /*#__PURE__*/React.createElement("option", null, "\uC911\uAD6D"), /*#__PURE__*/React.createElement("option", null, "\uB124\uD314"))), /*#__PURE__*/React.createElement(FormField, {
      label: "\uC804\uD654\uBC88\uD638"
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "+__ ___ ___"
    }))), /*#__PURE__*/React.createElement(Checkbox, {
      label: "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.",
      required: true,
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      full: true,
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      }),
      onClick: () => {
        close();
        navigate("match");
      }
    }, "\uAC00\uC785\uD558\uACE0 \uB9DE\uCDA4 \uD559\uAD50 \uCC3E\uAE30"), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: "center",
        fontSize: 13.5,
        color: "var(--text-secondary)",
        marginTop: 4
      }
    }, "\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC73C\uC2E0\uAC00\uC694? ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        openModal("login");
      },
      style: {
        fontWeight: 700
      }
    }, "\uB85C\uADF8\uC778")));
  }
  function ConsultBody({
    u,
    openModal
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--neutral-50)",
        borderRadius: 12,
        padding: "14px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Row, {
      k: "\uC0C1\uB2F4 \uC694\uCCAD \uD559\uAD50",
      v: u.name
    }), /*#__PURE__*/React.createElement(Row, {
      k: "\uC0C1\uB2F4 \uC694\uCCAD \uD559\uACFC",
      v: u.majors && u.majors[0] || "희망학과"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "\uCD94\uCC9C\uB3C4",
      v: u.score ? u.score + "점" : "-"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "\uC608\uC0C1 \uC6D4 \uC0DD\uD65C\uBE44",
      v: WON(u.monthlyCost)
    }), /*#__PURE__*/React.createElement(Row, {
      k: "\uC5F0\uB77D \uC608\uC815 \uC218\uB2E8",
      v: "\uC774\uBA54\uC77C / WhatsApp"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        lineHeight: 1.55,
        marginBottom: 14
      }
    }, "\uCD5C\uC885 \uC785\uD559 \uAC00\uB2A5 \uC5EC\uBD80\uC640 \uC7A5\uD559\uAE08 \uC218\uD61C \uC5EC\uBD80\uB294 \uAC01 \uB300\uD559\uC758 \uC2EC\uC0AC \uACB0\uACFC\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "\uC0C1\uB2F4 \uC9C4\uD589\uC744 \uC704\uD574 \uC720\uD559 \uD504\uB85C\uD544 \uC815\uBCF4\uB97C \uAD00\uB9AC\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uAC83\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.",
      required: true,
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "\uC774\uBA54\uC77C\xB7\uC804\uD654\xB7WhatsApp\xB7Telegram\uC73C\uB85C \uC0C1\uB2F4 \uC548\uB0B4\uB97C \uBC1B\uB294 \uAC83\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.",
      required: true,
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "\uD544\uC694\uD55C \uACBD\uC6B0 \uD574\uB2F9 \uD559\uAD50 \uAD00\uACC4\uC790\uC5D0\uAC8C \uB0B4 \uC815\uBCF4\uB97C \uC804\uB2EC\uD558\uB294 \uAC83\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4. (\uC120\uD0DD)"
    })));
  }
  function DoneBody({
    u,
    navigate,
    close
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "var(--success-bg)",
        color: "var(--success-fg)",
        fontSize: 34,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-fill ph-check-circle"
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 20,
        fontWeight: 800,
        color: "var(--text-display)",
        marginBottom: 8
      }
    }, "\uC0C1\uB2F4 \uC694\uCCAD\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: "var(--text-secondary)",
        lineHeight: 1.6,
        marginBottom: 18
      }
    }, "\uAD00\uB9AC\uC790\uAC00 \uD559\uC0DD\uC758 \uC815\uBCF4\uC640 \uC120\uD0DD\uD55C \uD559\uAD50\uB97C \uD655\uC778\uD55C \uD6C4", /*#__PURE__*/React.createElement("br", null), "\uC0C1\uB2F4 \uC548\uB0B4\uB97C \uB4DC\uB9B4 \uC608\uC815\uC785\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--neutral-50)",
        borderRadius: 12,
        padding: "14px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginBottom: 18,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement(Row, {
      k: "\uC0C1\uB2F4 \uC694\uCCAD \uD559\uAD50",
      v: u.name
    }), /*#__PURE__*/React.createElement(Row, {
      k: "\uC608\uC0C1 \uC6D4 \uC0DD\uD65C\uBE44",
      v: WON(u.monthlyCost)
    }), /*#__PURE__*/React.createElement(Row, {
      k: "\uC5F0\uB77D \uC608\uC815 \uC218\uB2E8",
      v: "\uC774\uBA54\uC77C / WhatsApp"
    })));
  }

  // payload: { type, university }
  function AppModals({
    modal,
    openModal,
    close,
    navigate
  }) {
    if (!Modal) return null; // design-system bundle not yet recompiled with Modal
    if (!modal) return /*#__PURE__*/React.createElement(Modal, {
      open: false,
      onClose: close
    });
    const u = modal.university || D.universities[0];
    const map = {
      login: {
        title: "로그인",
        subtitle: "K-Study Match 계정으로 로그인하세요.",
        width: 420,
        body: /*#__PURE__*/React.createElement(LoginBody, {
          openModal: openModal
        })
      },
      signup: {
        title: "무료 프로필 만들기",
        subtitle: "가입하면 맞춤 추천 결과 저장과 상담요청을 이용할 수 있어요.",
        width: 460,
        body: /*#__PURE__*/React.createElement(SignupBody, {
          openModal: openModal,
          navigate: navigate,
          close: close
        })
      },
      consult: {
        title: "이 학교에 대해 유학 상담을 요청하시겠습니까?",
        subtitle: "상담을 요청하면 입력하신 유학 프로필 정보와 선택한 학교 정보가 플랫폼 관리자에게 전달됩니다.",
        width: 480,
        body: /*#__PURE__*/React.createElement(ConsultBody, {
          u: u,
          openModal: openModal
        }),
        footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
          variant: "ghost",
          onClick: close,
          style: {
            border: "1px solid var(--border-subtle)"
          }
        }, "\uCDE8\uC18C"), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          onClick: () => openModal("consultDone", u)
        }, "\uC0C1\uB2F4 \uC694\uCCAD\uD558\uAE30"))
      },
      consultDone: {
        width: 440,
        body: /*#__PURE__*/React.createElement(DoneBody, {
          u: u,
          navigate: navigate,
          close: close
        }),
        footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          onClick: close,
          style: {
            flex: 1
          }
        }, "\uB2E4\uB978 \uCD94\uCC9C \uD559\uAD50 \uBCF4\uAE30"), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          onClick: () => {
            close();
            navigate("match");
          },
          style: {
            flex: 1
          }
        }, "\uB0B4 \uC0C1\uB2F4 \uC694\uCCAD \uBCF4\uAE30"))
      }
    };
    const cfg = map[modal.type] || map.login;
    return /*#__PURE__*/React.createElement(Modal, {
      open: true,
      onClose: close,
      title: cfg.title,
      subtitle: cfg.subtitle,
      width: cfg.width,
      footer: cfg.footer
    }, cfg.body);
  }
  window.AppModals = AppModals;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/Modals.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/Universities.jsx
try { (() => {
/* Universities (전체 대학 보기) — U-03 */
(() => {
  const NS = window.KStudyMatchDesignSystem_624b2d;
  const {
    Button,
    Input,
    Select,
    Badge,
    IconButton,
    StatCard
  } = NS;
  const {
    Container,
    HeroBand,
    InfoStat,
    CampusThumb
  } = window.KSM_UI;
  const D = window.KSM_DATA,
    WON = window.KSM_WON;
  const F = n => /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-" + n
  });
  const FILTERS = [["지역", ["전체", ...D.regions]], ["학교 유형", ["전체", "국립대", "사립대", "전문대", "대학원대학"]], ["학위과정", ["전체", "어학연수", "학부", "석사", "박사"]], ["전공", ["전체 전공", "경영·경제", "공학·IT", "자연과학", "예체능", "인문·사회"]], ["수업 언어", ["전체", "한국어", "영어", "혼합"]]];
  const FILTERS2 = [["장학금 여부", ["전체", "있음", "없음"]], ["장학금 감면율", ["전체", "30% 이상", "50% 이상", "100%"]], ["기숙사 제공 여부", ["전체", "제공", "미제공"]], ["TOPIK 조건", ["전체", "없음", "3급 이하", "4급 이상"]], ["IELTS 조건", ["전체", "5.5 이상", "6.0 이상"]]];
  const SORTS = ["등록금 낮은순", "장학금 높은순", "생활비 낮은순", "외국인학생 비율 높은순", "최신 등록순"];
  function FilterField({
    label,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--text-heading)"
      }
    }, label), children);
  }
  function UniversityRow({
    u,
    expanded,
    onToggle
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: `1px solid ${expanded ? "var(--blue-200)" : "var(--border-subtle)"}`,
        borderRadius: 14,
        boxShadow: expanded ? "var(--shadow-md)" : "var(--shadow-sm)",
        overflow: "hidden",
        transition: "border-color var(--duration-fast), box-shadow var(--duration-fast)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: 18
      }
    }, /*#__PURE__*/React.createElement(CampusThumb, {
      initial: u.initial,
      type: u.type,
      src: u.image,
      style: {
        width: 132,
        height: 96
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 auto",
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        width: 230
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "0 0 auto",
        width: 38,
        height: 38,
        borderRadius: "50%",
        background: "var(--neutral-100)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        fontWeight: 800,
        color: "var(--text-secondary)"
      }
    }, u.initial), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        fontSize: 17,
        fontWeight: 800,
        color: "var(--text-display)"
      }
    }, u.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, u.region)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap",
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      size: "sm"
    }, u.type), u.tags.slice(0, 4).map(t => /*#__PURE__*/React.createElement(Badge, {
      key: t,
      tone: t.includes("장학") ? "green" : "blue",
      size: "sm"
    }, t))))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        gap: 18,
        justifyContent: "space-between",
        paddingLeft: 6
      }
    }, /*#__PURE__*/React.createElement(InfoStat, {
      icon: F("currency-krw"),
      color: "blue",
      label: "\uD559\uAE30\uB2F9 \uB4F1\uB85D\uAE08",
      value: WON(u.tuition)
    }), /*#__PURE__*/React.createElement(InfoStat, {
      icon: F("seal-percent"),
      color: "purple",
      label: "\uC7A5\uD559\uAE08 \uCD5C\uB300 \uAC10\uBA74\uC728",
      value: u.scholarship + "%"
    }), /*#__PURE__*/React.createElement(InfoStat, {
      icon: F("buildings"),
      color: "orange",
      label: "\uAE30\uC219\uC0AC",
      value: u.dorm ? "제공" : "미제공"
    }), /*#__PURE__*/React.createElement(InfoStat, {
      icon: F("wallet"),
      color: "green",
      label: "\uC608\uC0C1 \uC6D4 \uC0DD\uD65C\uBE44",
      value: WON(u.monthlyCost)
    }), /*#__PURE__*/React.createElement(InfoStat, {
      icon: F("users-three"),
      color: "sky",
      label: "\uC678\uAD6D\uC778\uD559\uC0DD \uBE44\uC728",
      value: u.foreign + "%"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 7,
        width: 130
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      full: true
    }, "\uC0C1\uC138\uBCF4\uAE30"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      full: true,
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-bookmark-simple"
      }),
      style: {
        border: "1px solid var(--border-subtle)"
      }
    }, "\uAD00\uC2EC \uC800\uC7A5"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      full: true,
      onClick: () => window.KSM_NAV("match")
    }, "\uB0B4 \uC870\uAC74\uC73C\uB85C \uD655\uC778")), /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-caret-" + (expanded ? "up" : "down")
      }),
      label: "\uD3BC\uCE58\uAE30",
      variant: "ghost",
      onClick: onToggle
    })), expanded && /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--border-subtle)",
        padding: "22px 24px",
        background: "var(--neutral-25)",
        display: "grid",
        gridTemplateColumns: "1.3fr 1fr 1fr 1fr 1fr",
        gap: 26
      }
    }, /*#__PURE__*/React.createElement(DetailCol, {
      title: "\uD559\uAD50 \uC18C\uAC1C"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--text-secondary)",
        lineHeight: 1.6
      }
    }, u.intro)), /*#__PURE__*/React.createElement(DetailCol, {
      title: "\uC8FC\uC694 \uC804\uACF5",
      link: "\uC804\uCCB4 \uC804\uACF5 \uBCF4\uAE30"
    }, /*#__PURE__*/React.createElement(DList, {
      items: u.majors.slice(0, 5)
    })), /*#__PURE__*/React.createElement(DetailCol, {
      title: "\uC785\uD559 \uC870\uAC74"
    }, /*#__PURE__*/React.createElement(DList, {
      items: u.admission
    })), /*#__PURE__*/React.createElement(DetailCol, {
      title: "\uC7A5\uD559\uAE08 \uC815\uBCF4",
      link: "\uC7A5\uD559\uAE08 \uC138\uBD80 \uC815\uBCF4 \uBCF4\uAE30"
    }, /*#__PURE__*/React.createElement(DList, {
      items: u.scholarshipInfo
    })), /*#__PURE__*/React.createElement(DetailCol, {
      title: "\uAD6D\uC81C\uAD50\uB958\uCC98 \uC5F0\uB77D\uCC98"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        fontSize: 13,
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-phone",
      style: {
        color: "var(--brand)"
      }
    }), u.contact.phone), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-envelope-simple",
      style: {
        color: "var(--brand)"
      }
    }), u.contact.email), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-globe",
      style: {
        color: "var(--brand)"
      }
    }), u.contact.web)))));
  }
  function DetailCol({
    title,
    link,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "var(--text-heading)",
        marginBottom: 10
      }
    }, title), children, link && /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontSize: 12.5,
        color: "var(--text-link)",
        marginTop: 10,
        fontWeight: 600
      }
    }, link, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-caret-right",
      style: {
        fontSize: 11
      }
    })));
  }
  function DList({
    items
  }) {
    return /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, items.map((t, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        fontSize: 13,
        color: "var(--text-secondary)",
        display: "flex",
        gap: 7,
        lineHeight: 1.45
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--blue-300)",
        flex: "0 0 auto"
      }
    }, "\u2022"), t)));
  }
  function Universities({
    onNavigate
  }) {
    window.KSM_NAV = onNavigate;
    const [sort, setSort] = React.useState(SORTS[0]);
    const [expanded, setExpanded] = React.useState("jbnu");
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroBand, {
      decor: window.KSM_IMG.heroDecor
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 36,
        fontWeight: 800,
        letterSpacing: "-0.03em",
        color: "var(--text-display)"
      }
    }, "\uD55C\uAD6D \uB300\uD559 \uC815\uBCF4\uB97C \uD55C\uB208\uC5D0 \uBE44\uAD50\uD558\uC138\uC694."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: "var(--text-secondary)",
        lineHeight: 1.6,
        marginTop: 14
      }
    }, "\uC9C0\uC5ED, \uC804\uACF5, \uB4F1\uB85D\uAE08, \uC7A5\uD559\uAE08, \uAE30\uC219\uC0AC, \uC0DD\uD65C\uBE44 \uC870\uAC74\uC73C\uB85C", /*#__PURE__*/React.createElement("br", null), "\uD55C\uAD6D \uB300\uD559 \uC815\uBCF4\uB97C \uAC80\uC0C9\uD558\uACE0 \uBE44\uAD50\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement(Container, {
      style: {
        paddingBottom: 80,
        marginTop: -8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: 16,
        boxShadow: "var(--shadow-sm)",
        padding: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(FilterField, {
      label: "\uB300\uD559\uBA85 \uAC80\uC0C9"
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "\uB300\uD559\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-magnifying-glass"
      })
    })), FILTERS.map(([label, opts]) => /*#__PURE__*/React.createElement(FilterField, {
      key: label,
      label: label
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: opts[0]
    }, opts.map(o => /*#__PURE__*/React.createElement("option", {
      key: o
    }, o))))), /*#__PURE__*/React.createElement(FilterField, {
      label: "\uB4F1\uB85D\uAE08 \uBC94\uC704 (\uD559\uAE30\uB2F9)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "\uCD5C\uC18C \uC120\uD0DD"
    }, /*#__PURE__*/React.createElement("option", null, "200\uB9CC\uC6D0"), /*#__PURE__*/React.createElement("option", null, "300\uB9CC\uC6D0")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, "~"), /*#__PURE__*/React.createElement(Select, {
      placeholder: "\uCD5C\uB300 \uC120\uD0DD"
    }, /*#__PURE__*/React.createElement("option", null, "400\uB9CC\uC6D0"), /*#__PURE__*/React.createElement("option", null, "500\uB9CC\uC6D0")))), FILTERS2.map(([label, opts]) => /*#__PURE__*/React.createElement(FilterField, {
      key: label,
      label: label
    }, /*#__PURE__*/React.createElement(Select, {
      defaultValue: opts[0]
    }, opts.map(o => /*#__PURE__*/React.createElement("option", {
      key: o
    }, o)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-counter-clockwise"
      }),
      style: {
        border: "1px solid var(--border-subtle)"
      }
    }, "\uCD08\uAE30\uD654"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-magnifying-glass"
      }),
      style: {
        minWidth: 260
      }
    }, "\uAC80\uC0C9"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: 12,
        padding: "12px 18px",
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "var(--text-heading)",
        flex: "0 0 auto",
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-arrows-down-up"
    }), "\uC815\uB82C \uC21C\uC11C"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap"
      }
    }, SORTS.map(s => {
      const on = sort === s;
      return /*#__PURE__*/React.createElement("button", {
        key: s,
        onClick: () => setSort(s),
        style: {
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-sans)",
          fontSize: 13.5,
          fontWeight: on ? 700 : 500,
          padding: "8px 14px",
          borderRadius: 8,
          background: on ? "var(--blue-50)" : "transparent",
          color: on ? "var(--brand)" : "var(--text-secondary)"
        }
      }, s);
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30,
        marginBottom: 16,
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 24,
        fontWeight: 800,
        color: "var(--text-display)",
        display: "flex",
        alignItems: "baseline",
        gap: 12
      }
    }, "\uC804\uCCB4 \uB300\uD559 \uB9AC\uC2A4\uD2B8 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: "var(--text-secondary)"
      }
    }, "\uCD1D 128\uAC1C \uB300\uD559")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      icon: F("graduation-cap"),
      color: "purple",
      label: "\uC7A5\uD559\uAE08 \uC81C\uACF5 \uB300\uD559",
      value: "96",
      unit: "\uAC1C"
    }), /*#__PURE__*/React.createElement(StatCard, {
      icon: F("buildings"),
      color: "orange",
      label: "\uAE30\uC219\uC0AC \uC81C\uACF5 \uB300\uD559",
      value: "102",
      unit: "\uAC1C"
    }), /*#__PURE__*/React.createElement(StatCard, {
      icon: F("wallet"),
      color: "green",
      label: "\uC0DD\uD65C\uBE44 \uB0AE\uC740 \uC9C0\uC5ED \uB300\uD559",
      value: "55",
      unit: "\uAC1C"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, D.universities.map(u => /*#__PURE__*/React.createElement(UniversityRow, {
      key: u.id,
      u: u,
      expanded: expanded === u.id,
      onToggle: () => setExpanded(expanded === u.id ? null : u.id)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--blue-50)",
        borderRadius: 18,
        padding: "30px 36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        marginTop: 26,
        border: "1px solid var(--blue-100)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.KSM_IMG.grads,
      alt: "",
      style: {
        flex: "0 0 auto",
        width: 92,
        height: 64,
        borderRadius: 12,
        objectFit: "cover",
        border: "1px solid var(--blue-100)"
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 21,
        fontWeight: 800,
        color: "var(--text-display)"
      }
    }, "\uB0B4 \uC870\uAC74\uC73C\uB85C \uC9C0\uC6D0 \uAC00\uB2A5\uD55C \uD559\uAD50\uB97C \uCD94\uCC9C\uBC1B\uC544\uBCF4\uC138\uC694."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: "var(--text-secondary)",
        marginTop: 6
      }
    }, "GPA, TOPIK, IELTS, \uD76C\uB9DD\uC804\uACF5 \uC815\uBCF4\uB97C \uC785\uB825\uD558\uBA74 \uB098\uC5D0\uAC8C \uB9DE\uB294 \uD559\uAD50\uC640 \uC7A5\uD559\uAE08 \uAC00\uB2A5\uC131\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-right"
      }),
      onClick: () => onNavigate("match")
    }, "\uB9DE\uCDA4 \uD559\uAD50 \uCC3E\uAE30"))));
  }
  window.Universities = Universities;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/Universities.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/data.js
try { (() => {
/* K-Study Match — sample data for the marketing website UI kit.
   Figures are illustrative, mirroring the values shown in the design mockups. */
window.KSM_DATA = {
  regions: ["서울", "경기·인천", "충청권", "전라권", "경상권", "강원권", "제주"],
  universities: [{
    id: "cbnu",
    name: "충북대학교",
    nameEn: "Chungbuk National University",
    region: "청주, 충청북도",
    type: "국립대",
    initial: "충북",
    tuition: 2980000,
    scholarship: 70,
    dorm: true,
    monthlyCost: 840000,
    foreign: 8.2,
    score: 86,
    scoreLabel: "추천도 높음",
    tags: ["기숙사 제공", "TOPIK 3급", "영어트랙", "장학금 있음"],
    matchTags: ["희망전공 일치", "기숙사 제공", "TOPIK 조건 충족"],
    majors: ["경영학과", "컴퓨터공학부", "전자공학부", "신소재공학부", "식품생명공학과"],
    intro: "충북대학교는 1951년에 설립된 충청북도 대표 국립대학교로, 9개 단과대학과 다수의 대학원을 운영하며 지역 거점 국립대학입니다.",
    admission: ["TOPIK 3급 이상 또는 IELTS 5.5 이상", "고등학교 졸업(예정)자", "학업성적 70% 이상"],
    scholarshipInfo: ["성적우수장학금: 최대 70%", "외국인특별장학: 40~60%", "재학 중 성적장학금 지급"],
    dormInfo: ["1인실, 2인실, 4인실 운영", "학기당 약 750,000원~", "식비 별도", "도보 통학 가능"],
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80&auto=format&fit=crop",
    contact: {
      phone: "043-261-2114",
      email: "oia@chungbuk.ac.kr",
      web: "oia.chungbuk.ac.kr"
    }
  }, {
    id: "jbnu",
    name: "전북대학교",
    nameEn: "Jeonbuk National University",
    region: "전주, 전라북도",
    type: "국립대",
    initial: "전북",
    tuition: 2850000,
    scholarship: 80,
    dorm: true,
    monthlyCost: 760000,
    foreign: 10.5,
    score: 78,
    scoreLabel: "추천 가능",
    tags: ["기숙사 제공", "TOPIK 3급", "영어트랙", "장학금 있음"],
    matchTags: ["희망전공 일치", "기숙사 제공", "IELTS 조건 충족"],
    majors: ["경영학과", "컴퓨터공학부", "전자공학부", "신소재공학부", "식품생명공학과"],
    intro: "전북대학교는 1947년에 설립된 전라북도 대표 국립대학교로, 11개의 단과대학과 전문대학원을 운영하고 있으며 연구와 교육 그리고 지역사회 발전에 기여하는 거점 국립대학입니다.",
    admission: ["TOPIK 3급 이상 또는 IELTS 5.5 이상", "고등학교 졸업(예정)자", "학업성적 70% 이상"],
    scholarshipInfo: ["성적우수장학금: 최대 80%", "외국인특별장학: 40~60%", "재학 중 성적장학금 지급"],
    dormInfo: ["1인실, 2인실, 4인실 운영", "학기당 약 850,000원~", "식비 별도", "도보 통학 가능"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80&auto=format&fit=crop",
    contact: {
      phone: "063-270-3641",
      email: "oia@jbnu.ac.kr",
      web: "oia.jbnu.ac.kr"
    }
  }, {
    id: "kmu",
    name: "계명대학교",
    nameEn: "Keimyung University",
    region: "대구, 경상북도",
    type: "사립대",
    initial: "계명",
    tuition: 3120000,
    scholarship: 75,
    dorm: true,
    monthlyCost: 820000,
    foreign: 9.1,
    score: 72,
    scoreLabel: "추천 가능",
    tags: ["기숙사 제공", "TOPIK 3급", "영어트랙", "장학금 있음"],
    matchTags: ["희망전공 일치", "기숙사 제공", "TOPIK 조건 충족"],
    majors: ["경영학과", "국제통상학과", "컴퓨터공학과", "시각디자인학과", "관광경영학과"],
    intro: "계명대학교는 대구 지역의 대표 사립대학으로, 아름다운 캠퍼스와 활발한 국제교류 프로그램으로 잘 알려져 있습니다.",
    admission: ["TOPIK 3급 이상", "고등학교 졸업(예정)자", "학업성적 60% 이상"],
    scholarshipInfo: ["외국인 신입생 장학: 최대 75%", "성적우수장학금 별도 운영"],
    dormInfo: ["2인실, 4인실 운영", "학기당 약 900,000원~", "식사 포함 옵션"],
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600&q=80&auto=format&fit=crop",
    contact: {
      phone: "053-580-5114",
      email: "intl@kmu.ac.kr",
      web: "international.kmu.ac.kr"
    }
  }, {
    id: "hyu-erica",
    name: "한양대학교 ERICA",
    nameEn: "Hanyang University ERICA",
    region: "안산, 경기도",
    type: "사립대",
    initial: "한양",
    tuition: 3400000,
    scholarship: 60,
    dorm: true,
    monthlyCost: 780000,
    foreign: 12.3,
    score: 69,
    scoreLabel: "추천 가능",
    tags: ["기숙사 제공", "TOPIK 3급", "영어트랙", "장학금 있음"],
    matchTags: ["희망전공 일치", "기숙사 제공"],
    majors: ["경영학부", "소프트웨어학부", "전자공학부", "디자인대학", "국제문화대학"],
    intro: "한양대학교 ERICA는 산학협력 중심의 캠퍼스로, 수도권 접근성과 풍부한 현장 실습 기회를 제공합니다.",
    admission: ["TOPIK 3급 이상 또는 영어 트랙 지원 가능", "고등학교 졸업(예정)자"],
    scholarshipInfo: ["외국인 장학: 최대 60%", "어학성적 우수자 추가 감면"],
    dormInfo: ["2인실 위주", "학기당 약 950,000원~", "기숙사 신청 경쟁 있음"],
    image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=600&q=80&auto=format&fit=crop",
    contact: {
      phone: "031-400-4114",
      email: "oia@hanyang.ac.kr",
      web: "erica.hanyang.ac.kr"
    }
  }, {
    id: "pnu",
    name: "부산대학교",
    nameEn: "Pusan National University",
    region: "부산, 부산광역시",
    type: "국립대",
    initial: "부산",
    tuition: 3060000,
    scholarship: 70,
    dorm: true,
    monthlyCost: 850000,
    foreign: 11.7,
    score: 75,
    scoreLabel: "추천 가능",
    tags: ["기숙사 제공", "TOPIK 3급", "영어트랙", "장학금 있음"],
    matchTags: ["희망전공 일치", "TOPIK 조건 충족"],
    majors: ["경영학과", "기계공학부", "전기컴퓨터공학부", "국어국문학과", "해양학과"],
    intro: "부산대학교는 부산·경남 지역 거점 국립대학으로, 폭넓은 전공과 활발한 국제교류를 자랑합니다.",
    admission: ["TOPIK 3급 이상 또는 IELTS 5.5 이상", "고등학교 졸업(예정)자"],
    scholarshipInfo: ["외국인 신입생 장학: 최대 70%", "성적장학 별도"],
    dormInfo: ["1인실, 2인실 운영", "학기당 약 800,000원~", "식비 별도"],
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&q=80&auto=format&fit=crop",
    contact: {
      phone: "051-510-1199",
      email: "intl@pusan.ac.kr",
      web: "ie.pusan.ac.kr"
    }
  }, {
    id: "knu",
    name: "경북대학교",
    nameEn: "Kyungpook National University",
    region: "대구, 경상북도",
    type: "국립대",
    initial: "경북",
    tuition: 2890000,
    scholarship: 65,
    dorm: true,
    monthlyCost: 800000,
    foreign: 7.8,
    score: 71,
    scoreLabel: "추천 가능",
    tags: ["기숙사 제공", "TOPIK 4급", "장학금 있음"],
    matchTags: ["희망전공 일치", "기숙사 제공"],
    majors: ["경상대학", "IT대학", "공과대학", "자연과학대학", "사회과학대학"],
    intro: "경북대학교는 대구·경북 지역 거점 국립대학으로, 우수한 이공계 연구 역량을 갖추고 있습니다.",
    admission: ["TOPIK 4급 이상 권장", "고등학교 졸업(예정)자"],
    scholarshipInfo: ["외국인 장학: 최대 65%", "성적우수 추가 감면"],
    dormInfo: ["2인실, 4인실 운영", "학기당 약 780,000원~"],
    image: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=600&q=80&auto=format&fit=crop",
    contact: {
      phone: "053-950-5114",
      email: "oia@knu.ac.kr",
      web: "oia.knu.ac.kr"
    }
  }],
  // simple living-cost lookup for the homepage estimator (KRW / month, 보통형)
  livingCost: {
    "서울": {
      기숙사: 720000,
      월세: 1050000,
      "고시원·원룸": 880000
    },
    "경기·인천": {
      기숙사: 650000,
      월세: 880000,
      "고시원·원룸": 760000
    },
    "충청권": {
      기숙사: 560000,
      월세: 720000,
      "고시원·원룸": 640000
    },
    "전라권": {
      기숙사: 540000,
      월세: 690000,
      "고시원·원룸": 610000
    },
    "경상권": {
      기숙사: 580000,
      월세: 760000,
      "고시원·원룸": 670000
    },
    "강원권": {
      기숙사: 530000,
      월세: 680000,
      "고시원·원룸": 600000
    },
    "제주": {
      기숙사: 600000,
      월세: 800000,
      "고시원·원룸": 700000
    }
  },
  lifeMultiplier: {
    절약형: 0.85,
    보통형: 1,
    여유형: 1.25
  }
};
window.KSM_WON = n => n.toLocaleString("ko-KR") + "원";

/* Imagery — real stock photos (Unsplash) used as on-brand placeholders for the
   hero scene and CTA banners. Swap for licensed brand artwork when available. */
window.KSM_IMG = {
  heroPanel: "https://images.unsplash.com/photo-1538669715315-155098f0fb1d?w=1100&q=80&auto=format&fit=crop",
  // Seoul + cherry blossoms
  heroDecor: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=900&q=80&auto=format&fit=crop",
  // bright campus
  blossom: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=900&q=80&auto=format&fit=crop",
  students: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80&auto=format&fit=crop",
  // students on campus
  grads: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=700&q=80&auto=format&fit=crop" // graduation
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/shared.jsx
try { (() => {
/* Shared visual helpers for the K-Study Match marketing site. */
(() => {
  const NS = window.KStudyMatchDesignSystem_624b2d;
  const {
    IconChip
  } = NS;

  // Full-width page container
  function Container({
    children,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        ...style
      }
    }, children);
  }

  // The soft sky band that sits behind hero areas, with an optional faded
  // campus image bleeding in from the right (matches the design mockups).
  function HeroBand({
    children,
    tall = false,
    decor = null,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, var(--bg-hero) 0%, #F3F7FD 55%, var(--neutral-0) 100%)",
        paddingTop: tall ? 56 : 44,
        paddingBottom: tall ? 60 : 40,
        ...style
      }
    }, decor && /*#__PURE__*/React.createElement("div", {
      "aria-hidden": true,
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        width: "46%",
        backgroundImage: `url(${decor})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.55) 38%, rgba(0,0,0,0.85) 100%)",
        maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.55) 38%, rgba(0,0,0,0.85) 100%)",
        opacity: 0.9
      }
    }), /*#__PURE__*/React.createElement(Container, {
      style: {
        position: "relative",
        zIndex: 1
      }
    }, children));
  }

  // A floating mini stat card (the white chips over the hero illustration)
  function FloatCard({
    icon,
    color,
    label,
    value,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "var(--neutral-0)",
        borderRadius: 14,
        padding: "10px 14px",
        boxShadow: "var(--shadow-lg)",
        border: "1px solid var(--border-subtle)",
        ...style
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: icon,
      color: color,
      size: 34,
      shape: "rounded"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--text-muted)"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "var(--text-display)"
      },
      className: "ksm-tnum"
    }, value)));
  }

  /* Hero visual: real campus/Korea photo panel with the signature floating
     data cards layered on top. */
  function HeroVisual({
    withCards = true
  }) {
    const F = n => /*#__PURE__*/React.createElement("i", {
      className: "ph-fill ph-" + n
    });
    const IMG = window.KSM_IMG || {};
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 300
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid rgba(47,107,230,0.12)",
        boxShadow: "var(--shadow-md)",
        backgroundImage: `linear-gradient(180deg, rgba(20,40,90,0.04) 0%, rgba(20,40,90,0.16) 100%), url(${IMG.heroPanel})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }
    }), withCards && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FloatCard, {
      icon: F("currency-krw"),
      color: "blue",
      label: "\uB4F1\uB85D\uAE08(\uC5F0)",
      value: "4,200,000\uC6D0",
      style: {
        top: 22,
        left: 6
      }
    }), /*#__PURE__*/React.createElement(FloatCard, {
      icon: F("house-line"),
      color: "orange",
      label: "\uAE30\uC219\uC0AC(\uC6D4)",
      value: "350,000\uC6D0",
      style: {
        top: 8,
        right: 8
      }
    }), /*#__PURE__*/React.createElement(FloatCard, {
      icon: F("graduation-cap"),
      color: "purple",
      label: "\uC7A5\uD559\uAE08(\uD3C9\uADE0)",
      value: "1,850,000\uC6D0",
      style: {
        bottom: 64,
        left: 0
      }
    }), /*#__PURE__*/React.createElement(FloatCard, {
      icon: F("wallet"),
      color: "green",
      label: "\uC0DD\uD65C\uBE44(\uC6D4)",
      value: "650,000\uC6D0",
      style: {
        bottom: 18,
        right: 12
      }
    })));
  }

  // A small labelled info column (icon + label + value) used inside university rows
  function InfoStat({
    icon,
    color,
    label,
    value,
    sub
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: icon,
      color: color,
      size: 32,
      shape: "rounded",
      style: {
        fontSize: 16
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: "var(--text-muted)",
        whiteSpace: "nowrap"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "var(--text-heading)",
        whiteSpace: "nowrap"
      },
      className: "ksm-tnum"
    }, value, sub && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        fontWeight: 500,
        color: "var(--text-secondary)",
        marginLeft: 3
      }
    }, sub))));
  }

  // University thumbnail — real campus photo when `src` is given, else a soft fallback.
  function CampusThumb({
    initial,
    type,
    src,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
        flex: "0 0 auto",
        background: "linear-gradient(150deg, #E6EEFA 0%, #D7E6F8 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(47,107,230,0.5)",
        ...style
      }
    }, src ? /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: initial || "campus",
      loading: "lazy",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }) : /*#__PURE__*/React.createElement("i", {
      className: "ph-fill ph-buildings",
      style: {
        fontSize: 30
      }
    }), type && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 8,
        left: 8,
        background: "var(--brand)",
        color: "#fff",
        fontSize: 11,
        fontWeight: 700,
        padding: "3px 8px",
        borderRadius: 6,
        boxShadow: "0 1px 4px rgba(0,0,0,0.25)"
      }
    }, type));
  }
  window.KSM_UI = {
    Container,
    HeroBand,
    HeroVisual,
    FloatCard,
    InfoStat,
    CampusThumb
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.IconChip = __ds_scope.IconChip;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.StepIndicator = __ds_scope.StepIndicator;

})();
