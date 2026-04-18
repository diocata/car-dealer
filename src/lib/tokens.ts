// ──────────────────────────────────────────────
// Design tokens — single source of truth
// ──────────────────────────────────────────────

export const tokens = {
  colors: {
    primary: 'hsl(220, 90%, 56%)',
    primaryDark: 'hsl(220, 90%, 42%)',
    primaryLight: 'hsl(220, 90%, 70%)',
    accent: 'hsl(38, 92%, 50%)',
    accentLight: 'hsl(38, 92%, 65%)',
    background: 'hsl(225, 15%, 8%)',
    surface: 'hsl(225, 15%, 12%)',
    surfaceHover: 'hsl(225, 15%, 16%)',
    card: 'hsl(225, 12%, 14%)',
    border: 'hsl(225, 10%, 20%)',
    textPrimary: 'hsl(0, 0%, 95%)',
    textSecondary: 'hsl(0, 0%, 65%)',
    textMuted: 'hsl(0, 0%, 45%)',
    success: 'hsl(145, 65%, 42%)',
    warning: 'hsl(38, 92%, 50%)',
    error: 'hsl(0, 72%, 51%)',
    info: 'hsl(200, 80%, 55%)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  radius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
} as const;
