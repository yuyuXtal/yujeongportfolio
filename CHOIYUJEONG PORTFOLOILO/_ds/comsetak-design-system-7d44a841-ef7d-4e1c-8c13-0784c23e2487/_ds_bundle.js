/* @ds-bundle: {"format":4,"namespace":"ComsetakDesignSystem_7d44a8","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"815b3d0d62f4","components/core/Button.jsx":"2f832e02f820","components/core/Card.jsx":"b8c249b70b0c","components/core/IconButton.jsx":"ee05faedf9b1","components/core/Tag.jsx":"a61b2889d3f8","components/feedback/Dialog.jsx":"577b38d995cc","components/feedback/Toast.jsx":"53f9865c9fa7","components/feedback/Tooltip.jsx":"7ab8fff60991","components/forms/Checkbox.jsx":"b729f8e4f5df","components/forms/Input.jsx":"75947ace8557","components/forms/Radio.jsx":"26c7b7abb5d5","components/forms/Select.jsx":"719c42e86e2f","components/forms/Switch.jsx":"2250b999eae3","components/navigation/Tabs.jsx":"ed2e146cd5bb","ui_kits/journal/Article.jsx":"86c75f3e5184","ui_kits/journal/Home.jsx":"254658579a31","ui_kits/journal/Icons.jsx":"dbc7fd2c6b06","ui_kits/journal/Parts.jsx":"ae045da694be"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ComsetakDesignSystem_7d44a8 = window.ComsetakDesignSystem_7d44a8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bg: "rgba(23,20,15,0.06)",
    fg: "var(--ink-2)"
  },
  accent: {
    bg: "var(--accent-tint)",
    fg: "var(--vermilion-ink)"
  },
  cobalt: {
    bg: "var(--cobalt-tint)",
    fg: "var(--cobalt-ink)"
  },
  ochre: {
    bg: "var(--ochre-tint)",
    fg: "var(--ochre-ink)"
  },
  success: {
    bg: "var(--success-tint)",
    fg: "var(--success)"
  },
  danger: {
    bg: "var(--danger-tint)",
    fg: "var(--danger)"
  }
};

/**
 * Small status/label chip. Two shapes: soft-rounded or pill.
 */
function Badge({
  children,
  tone = "neutral",
  solid = false,
  pill = false,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  const solidBg = {
    neutral: "var(--ink)",
    accent: "var(--accent)",
    cobalt: "var(--cobalt)",
    ochre: "var(--ochre)",
    success: "var(--success)",
    danger: "var(--danger)"
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--track-wide)",
      lineHeight: 1,
      padding: "5px 10px",
      borderRadius: pill ? "var(--radius-pill)" : "var(--radius-sm)",
      background: solid ? solidBg : t.bg,
      color: solid ? "#fff" : t.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    fontSize: "var(--text-sm)",
    padding: "7px 14px",
    gap: "6px",
    radius: "var(--radius-sm)"
  },
  md: {
    fontSize: "var(--text-base)",
    padding: "10px 20px",
    gap: "8px",
    radius: "var(--radius-md)"
  },
  lg: {
    fontSize: "var(--text-md)",
    padding: "14px 28px",
    gap: "10px",
    radius: "var(--radius-md)"
  }
};
function variantStyle(variant) {
  switch (variant) {
    case "secondary":
      return {
        background: "transparent",
        color: "var(--ink)",
        boxShadow: "inset 0 0 0 var(--border-w-strong) var(--ink)"
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--ink)",
        boxShadow: "none"
      };
    case "danger":
      return {
        background: "var(--danger)",
        color: "#fff",
        boxShadow: "none"
      };
    case "primary":
    default:
      return {
        background: "var(--accent)",
        color: "var(--accent-contrast)",
        boxShadow: "none"
      };
  }
}

/**
 * Comsetak primary control. Display-face label, soft-rounded, four variants.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    fontFamily: "var(--font-ui)",
    fontSize: s.fontSize,
    lineHeight: 1,
    padding: s.padding,
    borderRadius: s.radius,
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    letterSpacing: "var(--track-wide)",
    transition: "transform var(--dur-fast) var(--ease-standard), background var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
    transform: active && !disabled ? "translateY(1px) scale(0.99)" : "none",
    ...variantStyle(variant)
  };

  // hover treatments
  if (hover && !disabled) {
    if (variant === "primary") base.background = "var(--accent-hover)";
    if (variant === "danger") base.background = "#a5271a";
    if (variant === "secondary") base.background = "var(--ink)", base.color = "var(--paper)";
    if (variant === "ghost") base.background = "rgba(23,20,15,0.06)";
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...style
    }
  }, rest), leftIcon, children, rightIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. `variant` sets elevation; `interactive` adds hover lift.
 */
function Card({
  children,
  variant = "raised",
  interactive = false,
  padding = "var(--space-6)",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    flat: {
      background: "var(--surface)",
      boxShadow: "none",
      border: "var(--border-w) solid var(--border)"
    },
    raised: {
      background: "var(--surface)",
      boxShadow: "var(--shadow-sm)",
      border: "var(--border-w) solid var(--border)"
    },
    outline: {
      background: "transparent",
      boxShadow: "none",
      border: "var(--border-w-strong) solid var(--ink)"
    },
    signage: {
      background: "var(--surface)",
      boxShadow: "var(--shadow-offset)",
      border: "var(--border-w-strong) solid var(--ink)"
    }
  };
  const v = variants[variant] || variants.raised;
  const lift = interactive && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      cursor: interactive ? "pointer" : "default",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      transform: lift ? "translateY(-3px)" : "none",
      boxShadow: lift && variant !== "signage" ? "var(--shadow-md)" : v.boxShadow,
      background: v.background,
      border: v.border,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 30,
  md: 38,
  lg: 46
};

/**
 * Square icon-only button. Pass a single icon node as children.
 */
function IconButton({
  children,
  variant = "ghost",
  size = "md",
  disabled = false,
  label,
  onClick,
  style,
  ...rest
}) {
  const dim = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  let bg = "transparent",
    color = "var(--ink)",
    ring = "none";
  if (variant === "solid") {
    bg = "var(--accent)";
    color = "var(--accent-contrast)";
  }
  if (variant === "outline") ring = "inset 0 0 0 var(--border-w-strong) var(--ink)";
  if (hover && !disabled) {
    if (variant === "ghost") bg = "rgba(23,20,15,0.07)";
    if (variant === "outline") {
      bg = "var(--ink)";
      color = "var(--paper)";
    }
    if (variant === "solid") bg = "var(--accent-hover)";
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: "var(--radius-md)",
      border: "none",
      background: bg,
      color,
      boxShadow: ring,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "transform var(--dur-fast) var(--ease-standard), background var(--dur-base) var(--ease-standard)",
      transform: active && !disabled ? "scale(0.92)" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Interactive filter/keyword tag. Optionally selectable and removable.
 */
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-sm)",
      lineHeight: 1,
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      cursor: interactive ? "pointer" : "default",
      background: selected ? "var(--ink)" : hover && interactive ? "rgba(23,20,15,0.06)" : "transparent",
      color: selected ? "var(--paper)" : "var(--ink-2)",
      boxShadow: selected ? "none" : "inset 0 0 0 var(--border-w) var(--border-strong)",
      transition: "background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uC81C\uAC70",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: "inline-flex",
      border: "none",
      background: "none",
      cursor: "pointer",
      padding: 0,
      marginRight: "-2px",
      color: "inherit",
      opacity: 0.7,
      fontFamily: "var(--font-ui)",
      fontSize: "15px",
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Modal dialog with scrim, title, body, and footer actions.
 */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480,
  style,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") onClose && onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(23,20,15,0.42)",
      backdropFilter: "blur(2px)",
      padding: "var(--space-6)",
      animation: "cs-fade var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      maxHeight: "90vh",
      overflow: "auto",
      background: "var(--surface-pop)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-xl)",
      border: "var(--border-w) solid var(--border)",
      animation: "cs-pop var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "16px",
      padding: "var(--space-6) var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-xl)",
      color: "var(--ink)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uB2EB\uAE30",
    onClick: onClose,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: "22px",
      lineHeight: 1,
      color: "var(--ink-3)",
      fontFamily: "var(--font-ui)",
      padding: "2px 4px"
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-6)",
      fontFamily: "var(--font-body)",
      color: "var(--ink-2)",
      lineHeight: "var(--lh-relaxed)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "10px",
      padding: "var(--space-4) var(--space-6) var(--space-6)"
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `@keyframes cs-fade{from{opacity:0}to{opacity:1}}@keyframes cs-pop{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}`));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bar: "var(--ink)",
    glyph: "•"
  },
  success: {
    bar: "var(--success)",
    glyph: "✓"
  },
  danger: {
    bar: "var(--danger)",
    glyph: "!"
  },
  accent: {
    bar: "var(--accent)",
    glyph: "★"
  }
};

/**
 * Presentational toast card. Compose a stack yourself, or render one.
 */
function Toast({
  tone = "neutral",
  title,
  children,
  onClose,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      minWidth: 280,
      maxWidth: 400,
      background: "var(--surface-pop)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      border: "var(--border-w) solid var(--border)",
      borderLeft: `4px solid ${t.bar}`,
      padding: "14px 16px",
      animation: "cs-toast var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 22,
      height: 22,
      flexShrink: 0,
      borderRadius: "var(--radius-pill)",
      background: t.bar,
      color: "#fff",
      fontFamily: "var(--font-ui)",
      fontSize: "13px",
      lineHeight: 1
    }
  }, t.glyph), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-sm)",
      color: "var(--ink)",
      letterSpacing: "var(--track-wide)",
      marginBottom: children ? "3px" : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--ink-2)",
      lineHeight: 1.5
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uB2EB\uAE30",
    onClick: onClose,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--ink-3)",
      fontFamily: "var(--font-ui)",
      fontSize: "18px",
      lineHeight: 1,
      padding: 0,
      marginLeft: "2px"
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("style", null, `@keyframes cs-toast{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}`));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hover/focus tooltip wrapping a single trigger child.
 */
function Tooltip({
  label,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 900,
      ...pos,
      whiteSpace: "nowrap",
      pointerEvents: "none",
      background: "var(--ink)",
      color: "var(--paper)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--track-wide)",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-md)",
      animation: "cs-tip var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, label, /*#__PURE__*/React.createElement("style", null, `@keyframes cs-tip{from{opacity:0}to{opacity:1}}`)));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Check = () => /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));

/**
 * Checkbox with label. Controlled via `checked`/`onChange` or uncontrolled.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
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
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--ink)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    defaultChecked: isControlled ? undefined : defaultChecked,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: "var(--radius-xs)",
      background: on ? "var(--accent)" : "var(--card-2)",
      boxShadow: on ? "none" : "inset 0 0 0 var(--border-w-strong) var(--border-strong)",
      color: "#fff",
      transition: "background var(--dur-fast) var(--ease-standard)"
    }
  }, on && /*#__PURE__*/React.createElement(Check, null)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional label, hint, error, and adornments.
 */
function Input({
  label,
  hint,
  error,
  leftIcon,
  rightIcon,
  size = "md",
  id,
  style,
  disabled = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId ? React.useId() : "in";
  const inputId = id || autoId;
  const pad = size === "sm" ? "8px 12px" : size === "lg" ? "14px 16px" : "11px 14px";
  const fs = size === "sm" ? "var(--text-sm)" : size === "lg" ? "var(--text-md)" : "var(--text-base)";
  const ring = error ? "inset 0 0 0 var(--border-w-strong) var(--danger)" : focus ? "inset 0 0 0 var(--border-w-strong) var(--focus-ring)" : "inset 0 0 0 var(--border-w) var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-sm)",
      color: "var(--ink-2)",
      letterSpacing: "var(--track-wide)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      background: disabled ? "rgba(23,20,15,0.03)" : "var(--card-2)",
      borderRadius: "var(--radius-md)",
      boxShadow: ring,
      padding: pad,
      opacity: disabled ? 0.6 : 1,
      transition: "box-shadow var(--dur-base) var(--ease-standard)"
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--ink-3)"
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: fs,
      color: "var(--ink)",
      lineHeight: 1.4
    }
  }, rest)), rightIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--ink-3)"
    }
  }, rightIcon)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger)" : "var(--ink-3)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Radio button with label. Group them by sharing a `name`.
 */
function Radio({
  label,
  checked,
  defaultChecked,
  onChange,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--ink)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: on,
    defaultChecked: isControlled ? undefined : defaultChecked,
    onChange: handle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: "var(--radius-pill)",
      background: "var(--card-2)",
      boxShadow: on ? "inset 0 0 0 var(--border-w-strong) var(--accent)" : "inset 0 0 0 var(--border-w-strong) var(--border-strong)",
      transition: "box-shadow var(--dur-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "var(--radius-pill)",
      background: "var(--accent)",
      transform: on ? "scale(1)" : "scale(0)",
      transition: "transform var(--dur-fast) var(--ease-out)"
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));

/**
 * Styled wrapper around a native <select>.
 */
function Select({
  label,
  hint,
  error,
  options = [],
  size = "md",
  id,
  style,
  disabled = false,
  children,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId ? React.useId() : "sel";
  const selId = id || autoId;
  const pad = size === "sm" ? "8px 12px" : size === "lg" ? "14px 16px" : "11px 14px";
  const fs = size === "sm" ? "var(--text-sm)" : size === "lg" ? "var(--text-md)" : "var(--text-base)";
  const ring = error ? "inset 0 0 0 var(--border-w-strong) var(--danger)" : focus ? "inset 0 0 0 var(--border-w-strong) var(--focus-ring)" : "inset 0 0 0 var(--border-w) var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-sm)",
      color: "var(--ink-2)",
      letterSpacing: "var(--track-wide)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      background: disabled ? "rgba(23,20,15,0.03)" : "var(--card-2)",
      borderRadius: "var(--radius-md)",
      boxShadow: ring,
      opacity: disabled ? 0.6 : 1,
      transition: "box-shadow var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: fs,
      color: "var(--ink)",
      padding: pad,
      paddingRight: "40px",
      cursor: disabled ? "not-allowed" : "pointer",
      lineHeight: 1.4
    }
  }, rest), children || options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lbl = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "12px",
      display: "inline-flex",
      color: "var(--ink-2)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Chevron, null))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger)" : "var(--ink-3)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * On/off switch. Controlled via `checked`/`onChange` or uncontrolled.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  size = "md",
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const dims = size === "sm" ? {
    w: 36,
    h: 20,
    k: 14
  } : {
    w: 46,
    h: 26,
    k: 20
  };
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--ink)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    style: {
      position: "relative",
      flexShrink: 0,
      width: dims.w,
      height: dims.h,
      padding: 0,
      border: "none",
      borderRadius: "var(--radius-pill)",
      cursor: "inherit",
      background: on ? "var(--accent)" : "var(--line-strong)",
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: (dims.h - dims.k) / 2,
      left: on ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
      width: dims.k,
      height: dims.k,
      borderRadius: "var(--radius-pill)",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--dur-base) var(--ease-out)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Underline tab bar. Controlled via `value`/`onChange` or uncontrolled.
 * `items`: [{ value, label, badge? }]
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].value));
  const active = isControlled ? value : internal;
  const [hover, setHover] = React.useState(null);
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "var(--border-w) solid var(--border)",
      ...style
    }
  }, rest), items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.value),
      onMouseEnter: () => setHover(it.value),
      onMouseLeave: () => setHover(null),
      style: {
        position: "relative",
        border: "none",
        background: "none",
        cursor: "pointer",
        fontFamily: "var(--font-ui)",
        fontSize: "var(--text-base)",
        letterSpacing: "var(--track-wide)",
        padding: "12px 2px",
        marginBottom: "-1px",
        color: on ? "var(--ink)" : hover === it.value ? "var(--ink-2)" : "var(--ink-3)",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        transition: "color var(--dur-base) var(--ease-standard)"
      }
    }, it.label, it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-2xs)",
        padding: "2px 7px",
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--accent)" : "rgba(23,20,15,0.08)",
        color: on ? "#fff" : "var(--ink-2)"
      }
    }, it.badge), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 3,
        background: "var(--accent)",
        borderRadius: "3px 3px 0 0",
        transform: on ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "center",
        transition: "transform var(--dur-base) var(--ease-out)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/journal/Article.jsx
try { (() => {
// Comsetak journal — Article reading view
function Article({
  a,
  onBack
}) {
  const {
    Button,
    IconButton,
    Tag,
    Badge
  } = window.ComsetakDesignSystem_7d44a8;
  const {
    Footer,
    Kicker
  } = window;
  const [saved, setSaved] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: "40px 28px 0"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "var(--ink-3)",
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      padding: 0,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(window.IconArrowL, {
    size: 16
  }), " \uBAA9\uB85D\uC73C\uB85C"), /*#__PURE__*/React.createElement(Kicker, null, a.section), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 52,
      lineHeight: 1.04,
      letterSpacing: "-0.02em",
      margin: "12px 0 16px",
      color: "var(--ink)"
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 21,
      lineHeight: 1.55,
      color: "var(--ink-2)",
      margin: "0 0 24px"
    }
  }, a.dek), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      paddingBottom: 24,
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "999px",
      background: "var(--ink)",
      color: "var(--paper)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontSize: 18
    }
  }, "\uC815"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      color: "var(--ink)"
    }
  }, "\uC815\uC138\uB791"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      color: "var(--ink-3)",
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(window.IconClock, {
    size: 12
  }), " ", a.date, " \xB7 ", a.read, "\uBD84"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "\uBD81\uB9C8\uD06C",
    variant: saved ? "solid" : "ghost",
    onClick: () => setSaved(s => !s)
  }, /*#__PURE__*/React.createElement(window.IconBookmark, null)), /*#__PURE__*/React.createElement(IconButton, {
    label: "\uACF5\uC720",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(window.IconShare, null))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "28px auto 0",
      padding: "0 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 380,
      borderRadius: "var(--radius-lg)",
      background: a.bg,
      border: "1px solid var(--border)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      color: "var(--ink-3)",
      marginTop: 8,
      letterSpacing: "0.02em"
    }
  }, "\uC774\uBBF8\uC9C0 \uC790\uB9AC \u2014 \uC2E4\uC81C \uC0AC\uC9C4\uC73C\uB85C \uAD50\uCCB4\uD558\uC138\uC694.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      margin: "36px auto 0",
      padding: "0 28px",
      fontFamily: "var(--font-serif)",
      fontSize: 18,
      lineHeight: 1.8,
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      float: "left",
      fontFamily: "var(--font-display)",
      fontSize: 68,
      lineHeight: 0.82,
      paddingRight: 12,
      paddingTop: 6,
      color: "var(--vermilion)"
    }
  }, "\uB3D9"), "\uB124 \uC138\uD0C1\uC18C\uC758 \uC720\uB9AC\uBB38\uC744 \uBC00\uBA74, \uD68C\uC804\uD558\uB294 \uC637\uAC78\uC774\uAC00 \uAC00\uC7A5 \uBA3C\uC800 \uB208\uC5D0 \uB4E4\uC5B4\uC628\uB2E4. \uC154\uCE20\uC640 \uCF54\uD2B8\uAC00 \uCC9C\uCC9C\uD788 \uB3CC\uC544\uAC00\uB294 \uADF8 \uC6C0\uC9C1\uC784\uC5D0\uB294 \uC774\uC0C1\uD55C \uC548\uC815\uAC10\uC774 \uC788\uB2E4. \uBC18\uBCF5\uC740 \uC9C0\uB8E8\uD568\uC774 \uC544\uB2C8\uB77C \uB9AC\uB4EC\uC774\uB77C\uB294 \uAC83\uC744, \uB098\uB294 \uADF8 \uC55E\uC5D0\uC11C \uBC30\uC6E0\uB2E4."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px"
    }
  }, "\uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uB3C4 \uB9C8\uCC2C\uAC00\uC9C0\uB2E4. \uAC19\uC740 \uBC84\uD2BC, \uAC19\uC740 \uAC04\uACA9, \uAC19\uC740 \uC0C9\uC774 \uBC18\uBCF5\uB420 \uB54C \uBE44\uB85C\uC18C \uBAA9\uC18C\uB9AC\uAC00 \uC0DD\uAE34\uB2E4. \uADDC\uCE59\uC740 \uC790\uC720\uB97C \uC81C\uD55C\uD558\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C, \uB9E4\uBC88 \uCC98\uC74C\uBD80\uD130 \uACE0\uBBFC\uD558\uC9C0 \uC54A\uC544\uB3C4 \uB418\uAC8C \uD574 \uC900\uB2E4."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: "36px 0",
      padding: "4px 0 4px 24px",
      borderLeft: "4px solid var(--vermilion)",
      fontFamily: "var(--font-display)",
      fontSize: 28,
      lineHeight: 1.3,
      color: "var(--ink)"
    }
  }, "\u201C\uBC18\uBCF5\uC740 \uC9C0\uB8E8\uD568\uC774 \uC544\uB2C8\uB77C \uB9AC\uB4EC\uC774\uB2E4.\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px"
    }
  }, "\uC138\uD0C1\uC18C \uC8FC\uC778\uC740 \uC624\uB79C \uC2B5\uAD00\uC73C\uB85C \uC637\uC758 \uACB0\uC744 \uC77D\uB294\uB2E4. \uC5B4\uB5A4 \uC5BC\uB8E9\uC740 \uB728\uAC70\uC6B4 \uBB3C\uB85C, \uC5B4\uB5A4 \uC5BC\uB8E9\uC740 \uCC28\uAC00\uC6B4 \uBB3C\uB85C. \uC815\uD574\uC9C4 \uADDC\uCE59\uC774 \uC788\uC9C0\uB9CC, \uB9E4\uBC88 \uB208\uC55E\uC758 \uC637\uC5D0 \uB9DE\uCDB0 \uBBF8\uC138\uD558\uAC8C \uC870\uC815\uD55C\uB2E4. \uC88B\uC740 \uC2DC\uC2A4\uD15C\uC774\uB780 \uADF8\uB7F0 \uAC83\uC774\uB2E4 \u2014 \uB2E8\uB2E8\uD55C \uBF08\uB300 \uC704\uC758 \uC720\uC5F0\uD55C \uD310\uB2E8."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      margin: "36px 0 0"
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "\uC138\uD0C1"), /*#__PURE__*/React.createElement(Tag, null, "\uC77C\uC0C1"), /*#__PURE__*/React.createElement(Tag, null, "\uC5D0\uC138\uC774"), /*#__PURE__*/React.createElement(Tag, null, "\uC11C\uC6B8"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "48px auto 0",
      padding: "0 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border)",
      paddingTop: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    color: "var(--ink-3)"
  }, "\uB2E4\uC74C \uAE00"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      color: "var(--ink)",
      marginTop: 6
    }
  }, "\uC190\uC73C\uB85C \uC9D3\uB294 \uD65C\uC790")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    rightIcon: /*#__PURE__*/React.createElement(window.IconArrowR, {
      size: 16
    })
  }, "\uC774\uC5B4 \uC77D\uAE30"))), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  Article
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journal/Article.jsx", error: String((e && e.message) || e) }); }

// ui_kits/journal/Home.jsx
try { (() => {
// Comsetak journal — sample content + Home view
const ARTICLES = [{
  id: "a1",
  section: "에세이",
  tone: "accent",
  title: "세탁소의 시간",
  dek: "동네 세탁소의 회전하는 옷걸이에서 배우는 반복과 리듬에 관하여.",
  date: "7월 3일",
  read: 8,
  bg: "var(--vermilion-tint)"
}, {
  id: "a2",
  section: "인터뷰",
  tone: "cobalt",
  title: "손으로 짓는 활자",
  dek: "40년째 금속활자를 만드는 장인과 나눈 오후의 대화.",
  date: "6월 28일",
  read: 12,
  bg: "var(--cobalt-tint)"
}, {
  id: "a3",
  section: "리뷰",
  tone: "ochre",
  title: "여름의 종이들",
  dek: "계절마다 달라지는 종이의 감촉과 무게를 기록한다.",
  date: "6월 21일",
  read: 6,
  bg: "var(--ochre-tint)"
}, {
  id: "a4",
  section: "에세이",
  tone: "accent",
  title: "빨래를 널며",
  dek: "베란다에서 마주친 빛과 바람, 그리고 오래된 습관.",
  date: "6월 14일",
  read: 5,
  bg: "var(--paper-sink)"
}, {
  id: "a5",
  section: "인터뷰",
  tone: "cobalt",
  title: "글자를 고르는 사람",
  dek: "서체 디자이너가 하루에 내리는 수백 번의 결정들.",
  date: "6월 7일",
  read: 10,
  bg: "var(--success-tint)"
}, {
  id: "a6",
  section: "리뷰",
  tone: "ochre",
  title: "잉크의 온도",
  dek: "인쇄소에서 만난 붉은색, 그 미묘한 차이에 대하여.",
  date: "5월 31일",
  read: 7,
  bg: "var(--warning-tint)"
}];
function Home({
  onOpen
}) {
  const {
    Tabs,
    Tag
  } = window.ComsetakDesignSystem_7d44a8;
  const {
    Header,
    Footer,
    ArticleCard,
    Kicker
  } = window;
  const [tab, setTab] = React.useState("all");
  const [feat, ...rest] = ARTICLES;
  const list = tab === "all" ? rest : rest.filter(a => a.section === tab);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "48px 28px 0"
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Vol. 03 \xB7 \uC5EC\uB984\uD638"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 44,
      marginTop: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(ArticleCard, {
    a: feat,
    onOpen: onOpen,
    large: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, rest.slice(0, 3).map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    onClick: () => onOpen(a),
    style: {
      cursor: "pointer",
      display: "flex",
      gap: 16,
      paddingBottom: 22,
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 84px",
      height: 84,
      borderRadius: "var(--radius-md)",
      background: a.bg,
      border: "1px solid var(--border)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    color: "var(--ink-3)"
  }, a.section, " \xB7 ", a.read, "\uBD84"), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 19,
      lineHeight: 1.15,
      margin: "6px 0 0",
      color: "var(--ink)"
    }
  }, a.title))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "56px auto 0",
      padding: "0 28px"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "all",
      label: "전체"
    }, {
      value: "에세이",
      label: "에세이"
    }, {
      value: "인터뷰",
      label: "인터뷰"
    }, {
      value: "리뷰",
      label: "리뷰"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 36,
      marginTop: 32
    }
  }, list.map(a => /*#__PURE__*/React.createElement(ArticleCard, {
    key: a.id,
    a: a,
    onOpen: onOpen
  })))), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  Home,
  ARTICLES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journal/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/journal/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Comsetak journal — line icons (Lucide-geometry, 2px stroke).
// SUBSTITUTION: no icon set was supplied; these match Lucide's rounded
// 24px / 2px-stroke system. See readme.md → Iconography.
const _I = (paths, extra = {}) => p => /*#__PURE__*/React.createElement("svg", _extends({
  width: p.size || 20,
  height: p.size || 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: p.weight || 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, extra, {
  style: p.style
}), paths);
const IconSearch = _I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "m21 21-4.3-4.3"
})));
const IconMenu = _I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M4 6h16M4 12h16M4 18h16"
})));
const IconClose = _I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18M6 6l12 12"
})));
const IconBookmark = _I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
})));
const IconShare = _I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "5",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "19",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "m8.6 13.5 6.8 4M15.4 6.5 8.6 10.5"
})));
const IconArrowR = _I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
})));
const IconArrowL = _I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M19 12H5M11 18l-6-6 6-6"
})));
const IconClock = _I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 7v5l3 2"
})));
const IconMail = _I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3 7 9 6 9-6"
})));
Object.assign(window, {
  IconSearch,
  IconMenu,
  IconClose,
  IconBookmark,
  IconShare,
  IconArrowR,
  IconArrowL,
  IconClock,
  IconMail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journal/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/journal/Parts.jsx
try { (() => {
// Comsetak journal — shared surfaces (Header, Footer, ArticleCard, Kicker)
const {
  Button,
  IconButton,
  Tag,
  Badge
} = window.ComsetakDesignSystem_7d44a8;
function Kicker({
  children,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      fontSize: 12,
      color: color || "var(--vermilion-ink)"
    }
  }, children);
}
function Header({
  route,
  onNav
}) {
  const link = (label, r) => /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav(r),
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      padding: "6px 2px",
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      letterSpacing: "0.02em",
      whiteSpace: "nowrap",
      color: route === r ? "var(--ink)" : "var(--ink-3)",
      borderBottom: route === r ? "2px solid var(--vermilion)" : "2px solid transparent"
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(244,241,234,0.86)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "0 28px",
      height: 66,
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav("home"),
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-display)",
      fontSize: 26,
      letterSpacing: "-0.02em",
      color: "var(--ink)"
    }
  }, "Com", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--vermilion)"
    }
  }, "."), "setak"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 20,
      marginLeft: 8,
      flexShrink: 0
    }
  }, link("홈", "home"), link("에세이", "home"), link("인터뷰", "home"), link("아카이브", "home")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "\uAC80\uC0C9"
  }, /*#__PURE__*/React.createElement(window.IconSearch, null)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "\uAD6C\uB3C5\uD558\uAE30"))));
}
function ArticleCard({
  a,
  onOpen,
  large
}) {
  const {
    Card
  } = window.ComsetakDesignSystem_7d44a8;
  return /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    interactive: true,
    padding: "0",
    onClick: () => onOpen(a),
    style: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      background: "transparent",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: large ? 300 : 176,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      background: a.bg,
      border: "1px solid var(--border)",
      display: "flex",
      alignItems: "flex-end",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: a.tone,
    solid: true
  }, a.section)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 2px 0"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: "var(--ink-3)"
  }, a.date, " \xB7 ", a.read, "\uBD84"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: large ? 34 : 22,
      lineHeight: 1.08,
      margin: "8px 0 8px",
      color: "var(--ink)"
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: large ? 17 : 15,
      color: "var(--ink-2)",
      lineHeight: 1.6,
      margin: 0,
      maxWidth: "52ch"
    }
  }, a.dek)));
}
function Footer() {
  const {
    Input,
    Button
  } = window.ComsetakDesignSystem_7d44a8;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink)",
      color: "var(--paper)",
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "56px 28px",
      display: "flex",
      gap: 48,
      flexWrap: "wrap",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 30,
      letterSpacing: "-0.02em"
    }
  }, "Com", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--vermilion)"
    }
  }, "."), "setak"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      color: "rgba(244,241,234,0.6)",
      fontSize: 14,
      lineHeight: 1.7,
      marginTop: 10
    }
  }, "\uC77C\uC0C1\uC758 \uC0AC\uBB3C\uC744 \uB2E4\uC2DC \uBCF4\uB294 \uACC4\uAC04 \uC5D0\uC138\uC774. \uB9E4\uC8FC \uBAA9\uC694\uC77C \uC0C8 \uAE00\uC744 \uBCF4\uB0C5\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      fontSize: 12,
      color: "rgba(244,241,234,0.5)",
      marginBottom: 12
    }
  }, "\uB274\uC2A4\uB808\uD130"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\uC774\uBA54\uC77C \uC8FC\uC18C",
    style: {}
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "\uBC1B\uAE30")))));
}
Object.assign(window, {
  Header,
  Footer,
  ArticleCard,
  Kicker
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journal/Parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
