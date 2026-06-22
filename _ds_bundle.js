/* @ds-bundle: {"format":3,"namespace":"DesignSystem_84165a","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"a15f5d8a9d7b","components/core/Badge.jsx":"fec28cf16693","components/core/Button.jsx":"0228a94584ab","components/core/Card.jsx":"63ad2ab5981c","components/core/Divider.jsx":"9aafe7310e9c","components/core/Eyebrow.jsx":"a48b16f9b9ca","components/core/IconButton.jsx":"fb046c2a87dc","components/core/Stat.jsx":"961459f5c35b","components/feedback/Alert.jsx":"ba0500183bca","components/feedback/Progress.jsx":"a1020fd5f5d0","components/forms/Checkbox.jsx":"d064b32f7ffe","components/forms/Input.jsx":"50b28331fae8","components/forms/Radio.jsx":"cbe2b00c4f4c","components/forms/Select.jsx":"757f5ca8d97d","components/forms/Switch.jsx":"36c7fc1dc8c1","components/forms/Textarea.jsx":"39e517c84519","components/navigation/Tabs.jsx":"b875538425e2","ui_kits/app/AppShell.jsx":"7ebe00aa4c90","ui_kits/app/Screens.jsx":"4eb3d74b8faf","ui_kits/conecta/Conecta.jsx":"75c1bed88a37","ui_kits/salud-landing/Salud.jsx":"681327a9cd2b","ui_kits/website/Chrome.jsx":"31742b8628ca","ui_kits/website/Home.jsx":"68e3512887dc","ui_kits/website/Join.jsx":"635a570a3316","ui_kits/website/Programs.jsx":"56a468df82bd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_84165a = window.DesignSystem_84165a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Avatar
 * Round user image with initials fallback. Calm pine ring optional.
 */
function Avatar({
  src = null,
  name = '',
  size = 40,
  ring = false,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      background: 'var(--pine-100)',
      color: 'var(--pine-700)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: size * 0.38,
      boxShadow: ring ? '0 0 0 2px var(--surface-card), 0 0 0 4px var(--pine-300)' : 'none',
      flexShrink: 0,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Badge
 * Small status/category pill. Soft tinted by default.
 */
function Badge({
  tone = 'neutral',
  variant = 'soft',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ['var(--sand-200)', 'var(--ink-700)'],
      solid: ['var(--ink-700)', 'var(--sand-100)']
    },
    brand: {
      soft: ['var(--pine-100)', 'var(--pine-700)'],
      solid: ['var(--pine-700)', 'var(--sand-100)']
    },
    accent: {
      soft: ['var(--gold-100)', 'var(--gold-700)'],
      solid: ['var(--gold-500)', 'var(--ink-900)']
    },
    success: {
      soft: ['var(--leaf-soft)', 'var(--leaf)'],
      solid: ['var(--leaf)', 'var(--white)']
    },
    warning: {
      soft: ['var(--amber-soft)', 'var(--amber)'],
      solid: ['var(--amber)', 'var(--white)']
    },
    danger: {
      soft: ['var(--clay-soft)', 'var(--clay)'],
      solid: ['var(--clay)', 'var(--white)']
    },
    info: {
      soft: ['var(--sky-soft)', 'var(--sky)'],
      solid: ['var(--sky)', 'var(--white)']
    }
  };
  const [bg, fg] = (tones[tone] || tones.neutral)[variant] || tones.neutral.soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.02em',
      lineHeight: 1,
      padding: '5px 10px',
      borderRadius: 'var(--radius-full)',
      background: bg,
      color: fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Button
 * Primary action control. Pine-filled by default; calm hover/press, no bounce.
 */
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 14,
      gap: 7,
      radius: 'var(--radius-sm)',
      icon: 16
    },
    md: {
      padding: '11px 20px',
      fontSize: 15,
      gap: 8,
      radius: 'var(--radius-sm)',
      icon: 18
    },
    lg: {
      padding: '15px 28px',
      fontSize: 17,
      gap: 10,
      radius: 'var(--radius-md)',
      icon: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--pine-700)',
      color: 'var(--sand-100)',
      border: '1px solid var(--pine-700)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--pine-700)',
      border: '1px solid var(--pine-200)'
    },
    accent: {
      background: 'var(--gold-500)',
      color: 'var(--ink-900)',
      border: '1px solid var(--gold-500)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--pine-700)',
      border: '1px solid transparent'
    },
    inverse: {
      background: 'var(--sand-100)',
      color: 'var(--pine-800)',
      border: '1px solid var(--sand-100)'
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverBg = {
    primary: 'var(--pine-800)',
    secondary: 'var(--pine-50)',
    accent: 'var(--gold-600)',
    ghost: 'var(--pine-50)',
    inverse: 'var(--white)'
  };
  const css = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1,
    letterSpacing: '0.005em',
    padding: s.padding,
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
    transform: active && !disabled ? 'translateY(1px)' : 'none',
    boxShadow: hover && !disabled && variant === 'primary' ? 'var(--shadow-sm)' : 'none',
    ...v,
    background: hover && !disabled ? hoverBg[variant] : v.background,
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Card
 * Warm content container. Soft radius, low ink-tinted shadow.
 */
function Card({
  as = 'div',
  padding = 'md',
  tone = 'default',
  interactive = false,
  style = {},
  children,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)'
  };
  const tones = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)'
    },
    canvas: {
      background: 'var(--surface-canvas)',
      border: '1px solid var(--border-subtle)'
    },
    brand: {
      background: 'var(--pine-700)',
      border: '1px solid var(--pine-700)',
      color: 'var(--sand-100)'
    },
    soft: {
      background: 'var(--pine-50)',
      border: '1px solid var(--pine-100)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)'
    }
  };
  const t = tones[tone] || tones.default;
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding],
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--duration-normal) var(--ease-standard), box-shadow var(--duration-normal) var(--ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      ...t,
      ...style
    },
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Divider
 * Hairline separator. Optional centered brass dot/label.
 */
function Divider({
  label = null,
  tone = 'subtle',
  spacing = 'var(--space-5)',
  style = {},
  ...rest
}) {
  const colors = {
    subtle: 'var(--border-subtle)',
    default: 'var(--border-default)',
    accent: 'var(--gold-300)'
  };
  const line = colors[tone] || colors.subtle;
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        margin: `${spacing} 0`,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: line
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-eyebrow)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: line
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      height: 1,
      background: line,
      margin: `${spacing} 0`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Eyebrow
 * Letter-spaced caps overline, echoing the wordmark tagline. Optional lead rule.
 */
function Eyebrow({
  tone = 'accent',
  rule = false,
  style = {},
  children,
  ...rest
}) {
  const colors = {
    accent: 'var(--gold-600)',
    brand: 'var(--pine-600)',
    muted: 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, rest), rule ? /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      width: 40,
      background: 'currentColor',
      color: colors[tone],
      opacity: 0.7
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: colors[tone] || colors.accent
    }
  }, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — IconButton
 * Square/round button holding a single icon. Mirrors Button variants.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  round = false,
  label = '',
  disabled = false,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--pine-700)',
      color: 'var(--sand-100)',
      border: '1px solid var(--pine-700)',
      hover: 'var(--pine-800)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--pine-700)',
      border: '1px solid var(--pine-200)',
      hover: 'var(--pine-50)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-700)',
      border: '1px solid transparent',
      hover: 'var(--pine-50)'
    },
    accent: {
      background: 'var(--gold-500)',
      color: 'var(--ink-900)',
      border: '1px solid var(--gold-500)',
      hover: 'var(--gold-600)'
    }
  };
  const v = variants[variant] || variants.ghost;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      padding: 0,
      borderRadius: round ? 'var(--radius-full)' : 'var(--radius-sm)',
      background: hover && !disabled ? v.hover : v.background,
      color: v.color,
      border: v.border,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: dim * 0.5,
      height: dim * 0.5
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Stat
 * Big editorial number with a label. Used in dashboards and marketing.
 */
function Stat({
  value,
  label,
  sublabel = null,
  tone = 'brand',
  align = 'left',
  style = {},
  ...rest
}) {
  const colors = {
    brand: 'var(--pine-700)',
    accent: 'var(--gold-600)',
    ink: 'var(--ink-900)',
    inverse: 'var(--sand-100)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 44,
      lineHeight: 1,
      color: colors[tone] || colors.brand,
      letterSpacing: '-0.01em'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      marginTop: 8,
      color: 'var(--text-strong)'
    }
  }, label), sublabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, sublabel) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Alert
 * Inline message banner. Soft tinted surface, optional title, icon and dismiss.
 */
function Alert({
  tone = 'info',
  title = null,
  icon = null,
  onClose = null,
  style = {},
  children,
  ...rest
}) {
  const tones = {
    info: {
      bg: 'var(--sky-soft)',
      fg: 'var(--sky)',
      text: 'var(--ink-800)'
    },
    success: {
      bg: 'var(--leaf-soft)',
      fg: 'var(--leaf)',
      text: 'var(--ink-800)'
    },
    warning: {
      bg: 'var(--amber-soft)',
      fg: 'var(--amber)',
      text: 'var(--ink-800)'
    },
    danger: {
      bg: 'var(--clay-soft)',
      fg: 'var(--clay)',
      text: 'var(--ink-800)'
    },
    brand: {
      bg: 'var(--pine-50)',
      fg: 'var(--pine-600)',
      text: 'var(--ink-800)'
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      background: t.bg,
      border: `1px solid ${t.fg}22`,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 20,
      height: 20,
      color: t.fg,
      flexShrink: 0,
      marginTop: 1
    }
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14.5,
      color: t.text,
      marginBottom: children ? 3 : 0
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, children) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      color: t.fg,
      padding: 0,
      width: 20,
      height: 20,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Progress
 * Linear progress bar. Pine fill by default; optional label & value.
 */
function Progress({
  value = 0,
  max = 100,
  tone = 'brand',
  size = 'md',
  label = null,
  showValue = false,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const heights = {
    sm: 6,
    md: 9,
    lg: 12
  };
  const h = heights[size] || heights.md;
  const fills = {
    brand: 'var(--pine-600)',
    accent: 'var(--gold-500)',
    success: 'var(--leaf)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), label || showValue ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 7,
      fontSize: 13
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label) : /*#__PURE__*/React.createElement("span", null), showValue ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, Math.round(pct), "%") : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: 'var(--radius-full)',
      background: 'var(--sand-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      borderRadius: 'var(--radius-full)',
      background: fills[tone] || fills.brand,
      transition: 'width var(--duration-slow) var(--ease-emphasized)'
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Checkbox
 * Checkbox with label. Pine fill + check glyph when selected.
 */
function Checkbox({
  label = null,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(defaultChecked);
  const on = isControlled ? checked : inner;
  const reactId = React.useId();
  const fieldId = id || reactId;
  const handle = e => {
    if (!isControlled) setInner(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 20,
      height: 20,
      flexShrink: 0,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${on ? 'var(--pine-700)' : 'var(--border-strong)'}`,
      background: on ? 'var(--pine-700)' : 'var(--surface-card)',
      transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: fieldId,
    checked: on,
    onChange: handle,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), on ? /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--sand-100)",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  })) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Input
 * Text field with optional label, hint, error, and leading/trailing adornments.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  leading = null,
  trailing = null,
  size = 'md',
  id,
  style = {},
  disabled = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: {
      h: 38,
      fs: 14,
      px: 12
    },
    md: {
      h: 46,
      fs: 15,
      px: 14
    },
    lg: {
      h: 54,
      fs: 16,
      px: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const reactId = React.useId();
  const fieldId = id || reactId;
  const borderColor = error ? 'var(--clay)' : focus ? 'var(--pine-500)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
      opacity: disabled ? 0.6 : 1
    }
  }, leading ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 18,
      height: 18,
      color: 'var(--text-muted)'
    }
  }, leading) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: s.fs,
      color: 'var(--text-strong)',
      minWidth: 0
    }
  }, rest)), trailing ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 18,
      height: 18,
      color: 'var(--text-muted)'
    }
  }, trailing) : null), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--clay)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Radio
 * Single radio with label. Use matching `name` to group.
 */
function Radio({
  label = null,
  checked,
  defaultChecked = false,
  onChange,
  name,
  value,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(defaultChecked);
  const on = isControlled ? checked : inner;
  const reactId = React.useId();
  const fieldId = id || reactId;
  const handle = e => {
    if (!isControlled) setInner(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 20,
      height: 20,
      flexShrink: 0,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-full)',
      border: `1.5px solid ${on ? 'var(--pine-700)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: fieldId,
    name: name,
    value: value,
    checked: on,
    onChange: handle,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), on ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--pine-700)'
    }
  }) : null), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Select
 * Native select styled to match Input, with chevron and label/hint/error.
 */
function Select({
  label = null,
  hint = null,
  error = null,
  options = [],
  size = 'md',
  id,
  style = {},
  disabled = false,
  children,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: {
      h: 38,
      fs: 14
    },
    md: {
      h: 46,
      fs: 15
    },
    lg: {
      h: 54,
      fs: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const reactId = React.useId();
  const fieldId = id || reactId;
  const borderColor = error ? 'var(--clay)' : focus ? 'var(--pine-500)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-sans)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: s.h,
      padding: '0 38px 0 14px',
      appearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: s.fs,
      color: 'var(--text-strong)',
      background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    }
  }, rest), options.length ? options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  }) : children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--clay)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Switch
 * Toggle for on/off settings. Pine track when on.
 */
function Switch({
  label = null,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(defaultChecked);
  const on = isControlled ? checked : inner;
  const reactId = React.useId();
  const fieldId = id || reactId;
  const handle = e => {
    if (!isControlled) setInner(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 44,
      height: 26,
      flexShrink: 0,
      borderRadius: 'var(--radius-full)',
      background: on ? 'var(--pine-600)' : 'var(--sand-300)',
      transition: 'background var(--duration-normal) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: fieldId,
    checked: on,
    onChange: handle,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transform: on ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--duration-normal) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Textarea
 * Multi-line field with label/hint/error, matching Input styling.
 */
function Textarea({
  label = null,
  hint = null,
  error = null,
  rows = 4,
  id,
  style = {},
  disabled = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  const borderColor = error ? 'var(--clay)' : focus ? 'var(--pine-500)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-sans)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-strong)',
      padding: '12px 14px',
      borderRadius: 'var(--radius-sm)',
      resize: 'vertical',
      background: disabled ? 'var(--sand-100)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      lineHeight: 1.6,
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--clay)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vida Plena — Tabs
 * Horizontal tab bar. Underline (default) or pill style.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const first = defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0]));
  const [inner, setInner] = React.useState(first);
  const active = isControlled ? value : inner;
  const select = v => {
    if (!isControlled) setInner(v);
    onChange && onChange(v);
  };
  if (variant === 'pill') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'inline-flex',
        gap: 4,
        padding: 4,
        background: 'var(--sand-100)',
        borderRadius: 'var(--radius-full)',
        ...style
      }
    }, rest), tabs.map(t => {
      const v = t.value ?? t;
      const label = t.label ?? t;
      const on = v === active;
      return /*#__PURE__*/React.createElement("button", {
        key: v,
        onClick: () => select(v),
        style: {
          border: 0,
          cursor: 'pointer',
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          fontSize: 14,
          padding: '8px 16px',
          borderRadius: 'var(--radius-full)',
          background: on ? 'var(--surface-card)' : 'transparent',
          color: on ? 'var(--pine-700)' : 'var(--text-muted)',
          boxShadow: on ? 'var(--shadow-xs)' : 'none',
          transition: 'background var(--duration-fast), color var(--duration-fast)'
        }
      }, label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 26,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), tabs.map(t => {
    const v = t.value ?? t;
    const label = t.label ?? t;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => select(v),
      style: {
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontWeight: on ? 700 : 600,
        fontSize: 15,
        padding: '12px 0',
        color: on ? 'var(--pine-700)' : 'var(--text-muted)',
        borderBottom: `2px solid ${on ? 'var(--gold-500)' : 'transparent'}`,
        marginBottom: -1,
        transition: 'color var(--duration-fast), border-color var(--duration-fast)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
/* Vida Plena app — shared: icons, phone frame, tab bar */

function AIcon({
  path,
  size = 24,
  stroke = 2,
  fill = 'none'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, path);
}
const ai = {
  home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5L12 3l9 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9.5V21h14V9.5"
  })),
  grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7",
    rx: "1.5"
  })),
  user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 21a7 7 0 0 1 14 0"
  })),
  moon: /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
  }),
  leaf: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2.5 1.5 9-3 13.5A7 7 0 0 1 11 20z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 22c5.5-5 8-9 9-13"
  })),
  sun: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  })),
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"
  }),
  play: /*#__PURE__*/React.createElement("path", {
    d: "M7 5v14l11-7z"
  }),
  back: /*#__PURE__*/React.createElement("path", {
    d: "M15 18l-6-6 6-6"
  }),
  bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }),
  arrow: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }),
  flame: /*#__PURE__*/React.createElement("path", {
    d: "M12 2s5 4 5 9a5 5 0 0 1-10 0c0-1.5.6-2.8 1.4-3.8C9 9 9 7.5 12 2z"
  })
};
const APP_PROGRAMS = [{
  id: 'sueno',
  icon: 'moon',
  name: 'Sueño reparador',
  desc: 'Duerme profundo, despierta con energía.',
  days: 21,
  done: 14,
  tone: 'var(--pine-700)'
}, {
  id: 'mente',
  icon: 'heart',
  name: 'Mente en calma',
  desc: 'Respira, suelta, vuelve a ti.',
  days: 21,
  done: 6,
  tone: 'var(--sky)'
}, {
  id: 'movimiento',
  icon: 'sun',
  name: 'Movimiento diario',
  desc: 'Diez minutos que cambian tu día.',
  days: 14,
  done: 3,
  tone: 'var(--leaf)'
}, {
  id: 'nutricion',
  icon: 'leaf',
  name: 'Nutrición consciente',
  desc: 'Come con calma, nutre tu cuerpo.',
  days: 28,
  done: 0,
  tone: 'var(--gold-600)'
}];
const TABS = [{
  id: 'today',
  label: 'Hoy',
  icon: 'home'
}, {
  id: 'programs',
  label: 'Programas',
  icon: 'grid'
}, {
  id: 'profile',
  label: 'Perfil',
  icon: 'user'
}];
function StatusBar({
  dark
}) {
  const c = dark ? 'var(--sand-100)' : 'var(--ink-900)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: c,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      fontFamily: 'var(--font-sans)'
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12",
    fill: c
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7",
    width: "3",
    height: "5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "4.5",
    width: "3",
    height: "7.5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "2",
    width: "3",
    height: "10",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.5",
    y: "0",
    width: "3",
    height: "12",
    rx: "1"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "12",
    viewBox: "0 0 24 12",
    fill: "none",
    stroke: c,
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "19",
    height: "10",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "2.5",
    width: "14",
    height: "7",
    rx: "1.2",
    fill: c,
    stroke: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "21",
    y: "4",
    width: "2",
    height: "4",
    rx: "1",
    fill: c,
    stroke: "none"
  }))));
}
function TabBar({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      display: 'flex',
      borderTop: '1px solid var(--border-subtle)',
      background: 'rgba(251,249,243,0.92)',
      backdropFilter: 'blur(8px)',
      padding: '8px 12px 26px'
    }
  }, TABS.map(t => {
    const on = route === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => go(t.id),
      style: {
        flex: 1,
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        color: on ? 'var(--pine-700)' : 'var(--text-subtle)',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement(AIcon, {
      path: ai[t.icon],
      size: 23,
      stroke: on ? 2.4 : 1.9
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: on ? 700 : 500
      }
    }, t.label));
  }));
}
Object.assign(window, {
  AIcon,
  ai,
  APP_PROGRAMS,
  TABS,
  StatusBar,
  TabBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Screens.jsx
try { (() => {
/* Vida Plena app — screens: Login, Today, Programs, ProgramDetail, Profile */

const {
  Button,
  Eyebrow,
  Badge,
  Card,
  Stat,
  Progress,
  Avatar,
  Switch,
  Divider
} = window.DesignSystem_84165a;
function Login({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--pine-700)',
      color: 'var(--sand-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-transparent.png",
    alt: "Vida Plena",
    style: {
      width: 96,
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 40,
      lineHeight: 1.1,
      margin: '0 0 14px'
    }
  }, "Vida Plena"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 19,
      color: 'var(--sand-300)',
      margin: 0
    }
  }, "Bienestar para toda la vida")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    fullWidth: true,
    onClick: onEnter
  }, "Comenzar"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    fullWidth: true,
    style: {
      color: 'var(--sand-100)'
    },
    onClick: onEnter
  }, "Ya tengo cuenta")));
}
function ScreenScroll({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch'
    }
  }, children);
}
function Today({
  go
}) {
  const featured = window.APP_PROGRAMS[0];
  return /*#__PURE__*/React.createElement(ScreenScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 22px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Martes, 19 de junio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 32,
      margin: '4px 0 0',
      color: 'var(--text-strong)'
    }
  }, "Hola, Luc\xEDa")), /*#__PURE__*/React.createElement(Avatar, {
    name: "Luc\xEDa M\xE9ndez",
    size: 44,
    ring: true
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "brand",
    padding: "md",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    path: ai.flame,
    size: 26,
    fill: "var(--gold-400)",
    stroke: "none"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      color: 'var(--sand-100)',
      lineHeight: 1
    }
  }, "14 d\xEDas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--sand-300)'
    }
  }, "Racha de bienestar"))), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, "Tu r\xE9cord")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, ['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 30,
      borderRadius: 'var(--radius-sm)',
      background: i < 5 ? 'var(--gold-400)' : 'rgba(255,255,255,0.15)',
      display: 'grid',
      placeItems: 'center',
      color: i < 5 ? 'var(--pine-800)' : 'var(--sand-300)'
    }
  }, i < 5 ? /*#__PURE__*/React.createElement(AIcon, {
    path: ai.check,
    size: 15,
    stroke: 3
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--sand-300)',
      marginTop: 5
    }
  }, d))))), /*#__PURE__*/React.createElement(Eyebrow, null, "Tu sesi\xF3n de hoy"), /*#__PURE__*/React.createElement(Card, {
    tone: "default",
    padding: "none",
    interactive: true,
    onClick: () => go('detail', featured),
    style: {
      overflow: 'hidden',
      margin: '12px 0 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      background: featured.tone,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sand-100)'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    path: ai[featured.icon],
    size: 40,
    stroke: 1.6
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 14,
      bottom: 14,
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: 'var(--sand-100)',
      color: 'var(--pine-700)',
      display: 'grid',
      placeItems: 'center',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    path: ai.play,
    size: 20,
    fill: "var(--pine-700)",
    stroke: "none"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 4
    }
  }, "D\xEDa 15 \xB7 12 min"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, "Respiraci\xF3n para dormir"))), /*#__PURE__*/React.createElement(Eyebrow, null, "\xBFC\xF3mo te sientes?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      margin: '12px 0 0'
    }
  }, [['Genial', 'var(--leaf)'], ['Bien', 'var(--pine-500)'], ['Regular', 'var(--gold-500)'], ['Bajo', 'var(--clay)']].map(([m, c]) => /*#__PURE__*/React.createElement("button", {
    key: m,
    style: {
      flex: 1,
      border: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 4px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: c
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-body)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600
    }
  }, m))))));
}
function Programs({
  go
}) {
  return /*#__PURE__*/React.createElement(ScreenScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 22px 28px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 32,
      margin: '0 0 18px',
      color: 'var(--text-strong)'
    }
  }, "Programas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, window.APP_PROGRAMS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    tone: "default",
    padding: "md",
    interactive: true,
    onClick: () => go('detail', p)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-md)',
      background: p.tone,
      color: 'var(--sand-100)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    path: ai[p.icon],
    size: 26,
    stroke: 1.7
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      margin: '0 0 3px',
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, p.done > 0 ? `Día ${p.done} de ${p.days}` : `${p.days} días · nuevo`)), p.done > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    path: ai.arrow,
    size: 20
  })) : /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Nuevo")), p.done > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: p.done,
    max: p.days,
    size: "sm"
  })) : null)))));
}
function ProgramDetail({
  program,
  go
}) {
  const p = program || window.APP_PROGRAMS[0];
  const sessions = Array.from({
    length: 6
  }, (_, i) => ({
    n: p.done - 1 + i,
    title: ['Respiración para dormir', 'Relajación corporal', 'Mente tranquila', 'Visualización', 'Sonidos del bosque', 'Descanso profundo'][i],
    min: 8 + i * 2,
    state: i === 0 ? 'today' : i < 0 ? 'done' : p.done + i <= p.done ? 'done' : 'locked'
  }));
  return /*#__PURE__*/React.createElement(ScreenScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: p.tone,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sand-100)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('programs'),
    style: {
      position: 'absolute',
      top: 12,
      left: 16,
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: 0,
      background: 'rgba(251,249,243,0.2)',
      color: 'var(--sand-100)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(AIcon, {
    path: ai.back,
    size: 22
  })), /*#__PURE__*/React.createElement(AIcon, {
    path: ai[p.icon],
    size: 64,
    stroke: 1.4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 22px 28px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, p.days, " d\xEDas"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      margin: '12px 0 6px',
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: 'var(--text-body)',
      lineHeight: 1.6,
      margin: '0 0 18px'
    }
  }, p.desc, " Sesiones guiadas, cortas y a tu ritmo."), p.done > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: p.done,
    max: p.days,
    label: "Tu progreso",
    showValue: true
  })) : null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(AIcon, {
      path: ai.play,
      size: 18,
      fill: "currentColor",
      stroke: "none"
    })
  }, p.done > 0 ? 'Continuar día ' + (p.done + 1) : 'Empezar programa'), /*#__PURE__*/React.createElement(Divider, {
    label: "Sesiones",
    spacing: "var(--space-5)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, sessions.map((s, i) => {
    const done = i === 0 ? false : i < 1;
    const isToday = i === 0;
    const locked = i > 0;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '12px 4px',
        borderBottom: i < 5 ? '1px solid var(--border-subtle)' : 'none',
        opacity: locked ? 0.55 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: '50%',
        flexShrink: 0,
        display: 'grid',
        placeItems: 'center',
        background: isToday ? 'var(--pine-700)' : 'var(--sand-200)',
        color: isToday ? 'var(--sand-100)' : 'var(--text-muted)'
      }
    }, isToday ? /*#__PURE__*/React.createElement(AIcon, {
      path: ai.play,
      size: 15,
      fill: "currentColor",
      stroke: "none"
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700
      }
    }, p.done + i + 1)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, s.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)'
      }
    }, "D\xEDa ", p.done + i + 1, " \xB7 ", s.min, " min")), isToday ? /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      variant: "solid"
    }, "Hoy") : null);
  }))));
}
function Profile() {
  return /*#__PURE__*/React.createElement(ScreenScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 22px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '12px 0 22px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Luc\xEDa M\xE9ndez",
    size: 84,
    ring: true
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 28,
      margin: '14px 0 2px',
      color: 'var(--text-strong)'
    }
  }, "Luc\xEDa M\xE9ndez"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Miembro desde octubre 2025"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, "Plan anual"))), /*#__PURE__*/React.createElement(Card, {
    tone: "canvas",
    padding: "md",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "14",
    label: "Racha",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "86",
    label: "Sesiones",
    tone: "accent",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "3",
    label: "Programas",
    align: "center"
  }))), /*#__PURE__*/React.createElement(Eyebrow, null, "Ajustes"), /*#__PURE__*/React.createElement(Card, {
    tone: "default",
    padding: "md",
    style: {
      margin: '12px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Recordatorio diario",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-1)"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Descargar sesiones (sin conexi\xF3n)"
  }), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--space-1)"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Resumen semanal por correo",
    defaultChecked: true
  })))));
}
Object.assign(window, {
  Login,
  Today,
  Programs,
  ProgramDetail,
  Profile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conecta/Conecta.jsx
try { (() => {
/* Vida Plena Conecta — plataforma de comunicación para personas mayores.
   Diseño accesible: tipografía grande, alto contraste, objetivos amplios,
   control de tamaño de texto (A−/A+), opción de escuchar. */

const {
  Button,
  Eyebrow,
  Badge,
  Card,
  Avatar,
  Divider,
  IconButton
} = window.DesignSystem_84165a;
function CIcon({
  path,
  size = 24,
  stroke = 2,
  fill = 'none'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, path);
}
const ci = {
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"
  }),
  leaf: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2.5 1.5 9-3 13.5A7 7 0 0 1 11 20z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 22c5.5-5 8-9 9-13"
  })),
  walk: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "13",
    cy: "4",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21l2-5 2 2v4M11 16l-1-5 4-1 2 3 2 1"
  })),
  users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 20a6 6 0 0 1 12 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 5.2a3.2 3.2 0 0 1 0 6M21 20a6 6 0 0 0-4-5.7"
  })),
  play: /*#__PURE__*/React.createElement("path", {
    d: "M7 5v14l11-7z"
  }),
  sound: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 9v6h4l5 4V5L8 9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 8.5a4 4 0 0 1 0 7M19.5 6a7.5 7.5 0 0 1 0 12"
  })),
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4-4"
  })),
  back: /*#__PURE__*/React.createElement("path", {
    d: "M15 18l-6-6 6-6"
  }),
  bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }),
  arrow: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }),
  clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })),
  phone: /*#__PURE__*/React.createElement("path", {
    d: "M5 3h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"
  })
};
const CATS = {
  salud: {
    label: 'Salud',
    tone: 'var(--pine-700)',
    icon: 'heart'
  },
  nutricion: {
    label: 'Nutrición',
    tone: 'var(--gold-600)',
    icon: 'leaf'
  },
  actividad: {
    label: 'Actividad',
    tone: 'var(--leaf)',
    icon: 'walk'
  },
  comunidad: {
    label: 'Comunidad',
    tone: 'var(--sky)',
    icon: 'users'
  }
};
const ARTICLES = [{
  id: 'a1',
  cat: 'salud',
  title: 'Cómo cuidar tu presión arterial cada día',
  mins: 6,
  excerpt: 'Pasos sencillos para medir y mantener tu presión en casa, sin complicaciones.',
  body: ['La presión arterial nos dice cuánto esfuerzo hace tu corazón para mover la sangre. Vigilarla es una de las formas más simples de cuidar tu salud.', 'Mídela siempre a la misma hora, sentado y relajado, con el brazo apoyado. Anota el resultado en una libreta o en la app.', 'Camina 30 minutos al día, reduce la sal y bebe agua. Si los números suben de forma seguida, habla con tu médico sin esperar.']
}, {
  id: 'a2',
  cat: 'nutricion',
  title: 'Comidas fáciles y nutritivas para la semana',
  mins: 5,
  excerpt: 'Ideas simples, económicas y buenas para tu cuerpo, listas en pocos minutos.',
  body: []
}, {
  id: 'a3',
  cat: 'actividad',
  title: 'Ejercicios suaves para mantenerte ágil',
  mins: 4,
  excerpt: 'Movimientos seguros que puedes hacer en casa, sentado o de pie.',
  body: []
}, {
  id: 'a4',
  cat: 'comunidad',
  title: 'Encuentros de Vida Plena cerca de ti',
  mins: 3,
  excerpt: 'Conoce a otras personas, comparte y aprende en grupo. Esta semana hay tres encuentros.',
  body: []
}];
function ScaleControl({
  scale,
  setScale
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-full)',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setScale(Math.max(1, +(scale - 0.1).toFixed(2))),
    "aria-label": "Reducir texto",
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--pine-700)'
    }
  }, "A\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      minWidth: 34,
      textAlign: 'center'
    }
  }, "Texto"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setScale(Math.min(1.5, +(scale + 0.1).toFixed(2))),
    "aria-label": "Aumentar texto",
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--pine-700)'
    }
  }, "A+"));
}
function Topbar({
  route,
  go,
  scale,
  setScale
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-transparent.png",
    alt: "Vida Plena",
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--pine-700)'
    }
  }, "Conecta")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 8,
      marginLeft: 8
    }
  }, Object.entries(CATS).map(([id, c]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--text-body)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-sm)'
    }
  }, c.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(ScaleControl, {
    scale: scale,
    setScale: setScale
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Carmen Ruiz",
    size: 46,
    ring: true
  }))));
}
function ArticleCard({
  a,
  go,
  big
}) {
  const c = CATS[a.cat];
  return /*#__PURE__*/React.createElement(Card, {
    tone: "default",
    padding: "none",
    interactive: true,
    onClick: () => go('article', a),
    style: {
      overflow: 'hidden',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: big ? 220 : 150,
      background: c.tone,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sand-100)'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    path: ci[c.icon],
    size: big ? 64 : 44,
    stroke: 1.6
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: big ? '28px 30px' : '20px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    path: ci.clock,
    size: 17
  }), " ", a.mins, " min de lectura")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: big ? 36 : 24,
      lineHeight: 1.15,
      margin: '0 0 10px',
      color: 'var(--text-strong)'
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: big ? 20 : 17,
      color: 'var(--text-body)',
      lineHeight: 1.6
    }
  }, a.excerpt), big ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(CIcon, {
      path: ci.arrow,
      size: 20
    })
  }, "Leer art\xEDculo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(CIcon, {
      path: ci.sound,
      size: 20
    })
  }, "Escuchar")) : null));
}
function Home({
  go
}) {
  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '40px 32px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 40,
      margin: '0 0 6px',
      color: 'var(--text-strong)'
    }
  }, "Hola, Carmen"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "Informaci\xF3n clara para vivir con vitalidad cada d\xEDa.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(ArticleCard, {
    a: featured,
    go: go,
    big: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "brand",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Consejo del d\xEDa"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 26,
      lineHeight: 1.35,
      color: 'var(--sand-100)',
      margin: '14px 0 20px'
    }
  }, "Bebe un vaso de agua al despertar. Tu cuerpo lo agradece despu\xE9s de toda la noche."), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(CIcon, {
      path: ci.sound,
      size: 20
    })
  }, "Escuchar consejo")), /*#__PURE__*/React.createElement(Card, {
    tone: "default",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--clay-soft)',
      color: 'var(--clay)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    path: ci.phone,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, "\xBFNecesitas ayuda?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--text-body)',
      lineHeight: 1.6,
      margin: '0 0 14px'
    }
  }, "Habla con una persona del equipo de Vida Plena, de lunes a s\xE1bado."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(CIcon, {
      path: ci.phone,
      size: 20
    })
  }, "Llamar ahora")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '54px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 32,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, "Hoy para ti")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, rest.map(a => /*#__PURE__*/React.createElement(ArticleCard, {
    key: a.id,
    a: a,
    go: go
  }))));
}
function Article({
  article,
  go,
  scale
}) {
  const a = article || ARTICLES[0];
  const c = CATS[a.cat];
  const body = a.body.length ? a.body : ARTICLES[0].body;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 240,
      background: c.tone,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sand-100)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    "aria-label": "Volver",
    style: {
      position: 'absolute',
      top: 24,
      left: 'max(24px, calc((100% - 1120px)/2 + 24px))',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 20px',
      borderRadius: 'var(--radius-full)',
      border: 0,
      background: 'rgba(251,249,243,0.92)',
      color: 'var(--pine-700)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 17
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    path: ci.back,
    size: 22
  }), " Volver"), /*#__PURE__*/React.createElement(CIcon, {
    path: ci[c.icon],
    size: 72,
    stroke: 1.4
  })), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '40px 32px 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 16,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    path: ci.clock,
    size: 18
  }), " ", a.mins, " min de lectura")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 46,
      lineHeight: 1.12,
      margin: '0 0 24px',
      color: 'var(--text-strong)'
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      paddingBottom: 22,
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dr. Mateo Salas",
    size: 48
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-strong)'
    }
  }, "Dr. Mateo Salas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, "Equipo m\xE9dico de Vida Plena")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(CIcon, {
      path: ci.sound,
      size: 20
    })
  }, "Escuchar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      zoom: scale
    }
  }, body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: 21,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      margin: '0 0 22px'
    }
  }, p)), /*#__PURE__*/React.createElement(Card, {
    tone: "soft",
    padding: "lg",
    style: {
      margin: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      margin: '0 0 16px',
      color: 'var(--pine-800)'
    }
  }, "Recuerda"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, ['Mide a la misma hora cada día', 'Camina 30 minutos', 'Reduce la sal en tus comidas'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontSize: 19,
      color: 'var(--text-strong)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--leaf)',
      flexShrink: 0,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    path: ci.check,
    size: 24,
    stroke: 2.6
  })), t)))))));
}
Object.assign(window, {
  Home,
  Article,
  Topbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conecta/Conecta.jsx", error: String((e && e.message) || e) }); }

// ui_kits/salud-landing/Salud.jsx
try { (() => {
/* Vida Plena — Landing de salud clara para personas mayores.
   Una sola página, lenguaje sencillo, tipografía muy grande, alto contraste,
   botones amplios, datos de salud presentados con claridad. */

const {
  Button,
  Eyebrow,
  Badge,
  Card
} = window.DesignSystem_84165a;
function LIcon({
  path,
  size = 24,
  stroke = 2,
  fill = 'none'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, path);
}
const li = {
  walk: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "13",
    cy: "4",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21l2-5 2 2v4M11 16l-1-5 4-1 2 3 2 1"
  })),
  moon: /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
  }),
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"
  }),
  water: /*#__PURE__*/React.createElement("path", {
    d: "M12 2.7s6 6.6 6 10.6a6 6 0 0 1-12 0c0-4 6-10.6 6-10.6z"
  }),
  phone: /*#__PURE__*/React.createElement("path", {
    d: "M5 3h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"
  }),
  alert: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l9 16H3l9-16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 10v4M12 17.5v.2"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }),
  arrow: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })
};
const DATA = [{
  icon: 'walk',
  big: '30',
  unit: 'minutos',
  label: 'Camina cada día',
  desc: 'Un paseo tranquilo cuenta. Mueve tu cuerpo a tu ritmo.',
  tone: 'var(--leaf)',
  soft: 'var(--leaf-soft)'
}, {
  icon: 'moon',
  big: '7–8',
  unit: 'horas',
  label: 'Duerme bien',
  desc: 'El descanso repara tu cuerpo y tu mente.',
  tone: 'var(--pine-600)',
  soft: 'var(--pine-100)'
}, {
  icon: 'water',
  big: '6–8',
  unit: 'vasos',
  label: 'Bebe agua',
  desc: 'Aunque no tengas sed, tu cuerpo la necesita.',
  tone: 'var(--sky)',
  soft: 'var(--sky-soft)'
}, {
  icon: 'heart',
  big: '120/80',
  unit: 'presión',
  label: 'Vigila tu presión',
  desc: 'Mídela en casa y anótala. Es fácil y rápido.',
  tone: 'var(--gold-600)',
  soft: 'var(--gold-100)'
}];
const SIGNALS = ['Dolor fuerte en el pecho o el brazo', 'Mareos o pérdida de equilibrio repentina', 'Dificultad para hablar o ver con claridad', 'Falta de aire al hacer cosas sencillas'];
function HealthLanding() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '18px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-transparent.png",
    alt: "Vida Plena",
    style: {
      height: 46
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--pine-700)'
    }
  }, "Vida Plena")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(LIcon, {
      path: li.phone,
      size: 20
    })
  }, "900 123 456"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '64px 32px 56px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Tu salud, en claro"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 60,
      lineHeight: 1.06,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)',
      margin: '20px 0 22px'
    }
  }, "Cuidar tu salud puede ser ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--pine-600)'
    }
  }, "sencillo")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 23,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '0 0 32px',
      maxWidth: 440
    }
  }, "Cuatro h\xE1bitos claros que marcan la diferencia cada d\xEDa. Sin prisa, sin complicaciones."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(LIcon, {
      path: li.arrow,
      size: 22
    }),
    style: {
      fontSize: 20,
      padding: '18px 34px'
    }
  }, "Ver los 4 h\xE1bitos")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      borderRadius: 'var(--radius-2xl)',
      background: 'var(--pine-700)',
      display: 'grid',
      placeItems: 'center',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-transparent.png",
    alt: "",
    style: {
      width: '56%'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-canvas)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Datos importantes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 42,
      margin: '12px 0 0',
      color: 'var(--text-strong)'
    }
  }, "4 h\xE1bitos para tu salud")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 24
    }
  }, DATA.map(d => /*#__PURE__*/React.createElement(Card, {
    key: d.label,
    tone: "default",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 76,
      height: 76,
      borderRadius: 'var(--radius-lg)',
      background: d.soft,
      color: d.tone,
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    path: li[d.icon],
    size: 40,
    stroke: 1.8
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 44,
      lineHeight: 1,
      color: 'var(--text-strong)'
    }
  }, d.big), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, d.unit)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 25,
      margin: '6px 0 8px',
      color: 'var(--pine-700)'
    }
  }, d.label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      margin: 0
    }
  }, d.desc)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--clay)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    path: li.alert,
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, "Importante")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 40,
      lineHeight: 1.1,
      margin: '0 0 16px',
      color: 'var(--text-strong)'
    }
  }, "Se\xF1ales que no debes ignorar"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "Si notas alguna de estas se\xF1ales, llama de inmediato al ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--clay)'
    }
  }, "112"), " o a tu m\xE9dico.")), /*#__PURE__*/React.createElement(Card, {
    tone: "default",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, SIGNALS.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      padding: '18px 0',
      borderBottom: i < SIGNALS.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--clay-soft)',
      color: 'var(--clay)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    path: li.alert,
    size: 24
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      color: 'var(--text-strong)',
      lineHeight: 1.4
    }
  }, s))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pine-700)',
      color: 'var(--sand-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '80px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Estamos contigo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 46,
      lineHeight: 1.1,
      margin: '16px 0 18px'
    }
  }, "\xBFTienes dudas? Habla con nosotros"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 21,
      lineHeight: 1.6,
      color: 'var(--sand-300)',
      margin: '0 0 32px'
    }
  }, "Una persona del equipo te atiende de lunes a s\xE1bado, de 9 a 19 h. Con calma y sin prisa."), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(LIcon, {
      path: li.phone,
      size: 22
    }),
    style: {
      fontSize: 22,
      padding: '20px 40px'
    }
  }, "Llamar al 900 123 456"))));
}
Object.assign(window, {
  HealthLanding
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/salud-landing/Salud.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
/* Vida Plena website — shared chrome (Nav, Footer) + small helpers.
   Exposes components on window for the other kit scripts. */

const {
  Button,
  Eyebrow,
  Badge
} = window.DesignSystem_84165a;
const NAV = [{
  id: 'home',
  label: 'Inicio'
}, {
  id: 'programs',
  label: 'Programas'
}, {
  id: 'join',
  label: 'Únete'
}];
function Icon({
  path,
  size = 20,
  stroke = 2
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, path);
}
const icons = {
  moon: /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
  }),
  leaf: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2.5 1.5 9-3 13.5A7 7 0 0 1 11 20z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 22c5.5-5 8-9 9-13"
  })),
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"
  }),
  sun: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  })),
  arrow: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }),
  star: /*#__PURE__*/React.createElement("path", {
    d: "M12 3l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.6 9.1l5.8-.8z"
  })
};
function Nav({
  route,
  go
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('site-scroll');
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 8);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: scrolled ? 'rgba(251,249,243,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
      transition: 'background var(--duration-normal), border-color var(--duration-normal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-transparent.png",
    alt: "Vida Plena",
    style: {
      height: 38
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--pine-700)',
      letterSpacing: '0.02em'
    }
  }, "Vida Plena")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    onClick: () => go(n.id),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: route === n.id ? 700 : 500,
      color: route === n.id ? 'var(--pine-700)' : 'var(--text-body)'
    }
  }, n.label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => go('join')
  }, "Comenzar"))));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--pine-800)',
      color: 'var(--sand-200)',
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '64px 32px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-transparent.png",
    alt: "",
    style: {
      height: 44,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 20,
      color: 'var(--sand-100)',
      margin: 0,
      maxWidth: 240,
      lineHeight: 1.3
    }
  }, "Bienestar para toda la vida.")), [['Programas', ['Sueño', 'Nutrición', 'Movimiento', 'Mente']], ['Compañía', ['Sobre nosotros', 'Equipo', 'Ciencia', 'Contacto']], ['Recursos', ['Blog', 'Guías', 'Preguntas', 'Soporte']]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'var(--sand-200)',
      fontSize: 14,
      cursor: 'pointer',
      opacity: 0.85
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '20px 32px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: 'var(--sand-300)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Vida Plena. Todos los derechos reservados."), /*#__PURE__*/React.createElement("span", null, "Privacidad \xB7 T\xE9rminos")));
}
Object.assign(window, {
  Nav,
  Footer,
  Icon,
  icons
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* Vida Plena website — Home screen */

const {
  Button,
  Eyebrow,
  Badge,
  Card,
  Stat,
  Divider,
  Avatar
} = window.DesignSystem_84165a;
const PROGRAMS = [{
  id: 'sueno',
  icon: 'moon',
  name: 'Sueño reparador',
  desc: 'Duerme profundo y despierta con energía.',
  days: 21,
  tone: 'var(--pine-700)'
}, {
  id: 'nutricion',
  icon: 'leaf',
  name: 'Nutrición consciente',
  desc: 'Come con calma, nutre tu cuerpo.',
  days: 28,
  tone: 'var(--gold-600)'
}, {
  id: 'movimiento',
  icon: 'sun',
  name: 'Movimiento diario',
  desc: 'Diez minutos que cambian tu día.',
  days: 14,
  tone: 'var(--leaf)'
}, {
  id: 'mente',
  icon: 'heart',
  name: 'Mente en calma',
  desc: 'Respira, suelta, vuelve a ti.',
  days: 21,
  tone: 'var(--sky)'
}];
function ProgramTile({
  p,
  go
}) {
  return /*#__PURE__*/React.createElement(Card, {
    tone: "default",
    padding: "none",
    interactive: true,
    onClick: () => go('programs'),
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 116,
      background: p.tone,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sand-100)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    path: icons[p.icon],
    size: 40,
    stroke: 1.6
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, p.days, " d\xEDas"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 23,
      margin: '12px 0 6px',
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, p.desc)));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '64px 32px 80px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Bienestar para toda la vida"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 64,
      lineHeight: 1.04,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)',
      margin: '20px 0 22px'
    }
  }, "Bienestar que se construye ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--pine-600)'
    }
  }, "d\xEDa a d\xEDa")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '0 0 32px',
      maxWidth: 460
    }
  }, "Unimos sue\xF1o, nutrici\xF3n, movimiento y mente en un solo plan, ajustado a tu vida real. Empieza donde est\xE1s y avanza a tu ritmo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      path: icons.arrow,
      size: 20
    }),
    onClick: () => go('join')
  }, "Comenzar mi plan"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => go('programs')
  }, "Ver programas"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/5',
      borderRadius: 'var(--radius-2xl)',
      background: 'var(--pine-700)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-transparent.png",
    alt: "",
    style: {
      width: '52%',
      filter: 'brightness(1.05)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      bottom: 22,
      right: 22,
      background: 'rgba(251,249,243,0.94)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, ['Ana', 'Beto', 'Cleo'].map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      marginLeft: i ? -10 : 0
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: 34,
    ring: true
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, "+12.000 personas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "ya viven m\xE1s pleno"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-canvas)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '40px 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "12k+",
    label: "Personas acompa\xF1adas",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "92%",
    label: "Mejor descanso en 3 semanas",
    tone: "accent",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "4.9",
    label: "Valoraci\xF3n media",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "10 min",
    label: "Al d\xEDa, sin prisa",
    tone: "ink",
    align: "center"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Programas"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 42,
      margin: '12px 0 0',
      color: 'var(--text-strong)'
    }
  }, "Cuatro pilares, un solo plan")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('programs')
  }, "Ver todos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, PROGRAMS.map(p => /*#__PURE__*/React.createElement(ProgramTile, {
    key: p.id,
    p: p,
    go: go
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pine-700)',
      color: 'var(--sand-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      margin: '0 auto',
      padding: '88px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gold-400)',
      display: 'flex',
      justifyContent: 'center',
      gap: 4,
      marginBottom: 24
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    path: icons.star,
    size: 20,
    stroke: 0
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontStyle: 'italic',
      fontSize: 34,
      lineHeight: 1.35,
      margin: '0 0 28px'
    }
  }, "\u201CPor primera vez siento que cuidarme no es una tarea m\xE1s. Es parte de mi d\xEDa, y se siente bien.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Luc\xEDa M\xE9ndez",
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "Luc\xEDa M\xE9ndez"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--sand-300)'
    }
  }, "Con Vida Plena hace 8 meses"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '88px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Empieza hoy"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 48,
      margin: '16px 0 18px',
      color: 'var(--text-strong)'
    }
  }, "Tu vida plena empieza con un paso"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-body)',
      maxWidth: 520,
      margin: '0 auto 30px',
      lineHeight: 1.6
    }
  }, "Sin prisa, sin culpa. Solo pasos claros, acompa\xF1ados de cerca por nuestro equipo."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => go('join')
  }, "Comenzar gratis 14 d\xEDas")));
}
Object.assign(window, {
  Home,
  PROGRAMS,
  ProgramTile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Join.jsx
try { (() => {
/* Vida Plena website — Join / pricing + signup */

const {
  Button,
  Eyebrow,
  Badge,
  Card,
  Input,
  Select,
  Checkbox,
  Divider,
  Alert
} = window.DesignSystem_84165a;
const PLANS = [{
  id: 'mensual',
  name: 'Mensual',
  price: '€12',
  per: '/mes',
  note: 'Flexible, cancela cuando quieras',
  featured: false,
  feats: ['Los 4 programas', 'Sesiones sin conexión', 'Seguimiento de hábitos']
}, {
  id: 'anual',
  name: 'Anual',
  price: '€8',
  per: '/mes',
  note: 'Facturado €96 al año · ahorra 33%',
  featured: true,
  feats: ['Todo lo del plan mensual', 'Acompañamiento del equipo', 'Contenido exclusivo', 'Plan personalizado']
}];
function Plan({
  p,
  selected,
  onSelect
}) {
  return /*#__PURE__*/React.createElement(Card, {
    tone: p.featured ? 'brand' : 'default',
    padding: "lg",
    interactive: true,
    onClick: () => onSelect(p.id),
    style: {
      position: 'relative',
      outline: selected ? '2px solid var(--gold-500)' : 'none',
      outlineOffset: 2
    }
  }, p.featured ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -12,
      left: 28
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, "M\xE1s elegido")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: p.featured ? 'var(--gold-400)' : 'var(--pine-600)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      margin: '14px 0 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 54,
      lineHeight: 1,
      color: p.featured ? 'var(--sand-100)' : 'var(--text-strong)'
    }
  }, p.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: p.featured ? 'var(--sand-300)' : 'var(--text-muted)'
    }
  }, p.per)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: p.featured ? 'var(--sand-300)' : 'var(--text-muted)',
      marginBottom: 20
    }
  }, p.note), /*#__PURE__*/React.createElement(Divider, {
    tone: p.featured ? 'accent' : 'subtle',
    spacing: "var(--space-4)"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '4px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, p.feats.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 14.5,
      color: p.featured ? 'var(--sand-200)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: p.featured ? 'var(--gold-400)' : 'var(--leaf)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    path: icons.check,
    size: 18
  })), f))));
}
function Join() {
  const [plan, setPlan] = React.useState('anual');
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: '56px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "\xDAnete"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 52,
      margin: '16px 0 12px',
      color: 'var(--text-strong)'
    }
  }, "Elige tu plan y empieza hoy"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "14 d\xEDas gratis. Sin tarjeta para empezar.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22,
      marginBottom: 40
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement(Plan, {
    key: p.id,
    p: p,
    selected: plan === p.id,
    onSelect: setPlan
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "canvas",
    padding: "lg",
    style: {
      maxWidth: 560,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      margin: '0 0 18px',
      color: 'var(--text-strong)'
    }
  }, "Crea tu cuenta"), sent ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "\xA1Bienvenido a Vida Plena!",
    icon: /*#__PURE__*/React.createElement(Icon, {
      path: icons.check,
      size: 20
    })
  }, "Tu prueba de 14 d\xEDas (", plan === 'anual' ? 'plan anual' : 'plan mensual', ") est\xE1 activa. Revisa tu correo.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "\xBFC\xF3mo te llamas?"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    type: "email",
    placeholder: "tu@correo.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\xBFQu\xE9 quieres mejorar primero?",
    options: ['Dormir mejor', 'Reducir estrés', 'Comer mejor', 'Más energía']
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Quiero recibir consejos semanales de bienestar",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Comenzar mis 14 d\xEDas gratis"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      textAlign: 'center',
      margin: 0
    }
  }, "Al continuar aceptas nuestros T\xE9rminos y Pol\xEDtica de privacidad."))));
}
Object.assign(window, {
  Join
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Join.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Programs.jsx
try { (() => {
/* Vida Plena website — Programs listing */

const {
  Button,
  Eyebrow,
  Badge,
  Card,
  Tabs
} = window.DesignSystem_84165a;
function Programs({
  go
}) {
  const [filter, setFilter] = React.useState('Todos');
  const tabs = ['Todos', 'Sueño', 'Nutrición', 'Movimiento', 'Mente'];
  const all = window.PROGRAMS;
  const map = {
    'Sueño': 'sueno',
    'Nutrición': 'nutricion',
    'Movimiento': 'movimiento',
    'Mente': 'mente'
  };
  const shown = filter === 'Todos' ? all : all.filter(p => p.id === map[filter]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '56px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Programas"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 52,
      margin: '16px 0 14px',
      color: 'var(--text-strong)'
    }
  }, "Encuentra tu punto de partida"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-body)',
      maxWidth: 540,
      margin: '0 0 32px',
      lineHeight: 1.6
    }
  }, "Cada programa es una secuencia guiada de sesiones cortas. Sigue uno o comb\xEDnalos a tu ritmo."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    tabs: tabs,
    value: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    tone: "default",
    padding: "none",
    interactive: true,
    onClick: () => go('join'),
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: p.tone,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sand-100)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    path: icons[p.icon],
    size: 48,
    stroke: 1.5
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, p.days, " d\xEDas"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 25,
      margin: '0 0 8px',
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 18px',
      fontSize: 15,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14,
      color: 'var(--pine-700)',
      fontWeight: 600
    }
  }, "Empezar programa ", /*#__PURE__*/React.createElement(Icon, {
    path: icons.arrow,
    size: 17
  })))))));
}
Object.assign(window, {
  Programs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Programs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
