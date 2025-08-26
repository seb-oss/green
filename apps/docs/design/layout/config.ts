// layout/config.ts
export const LAYOUT_CLASSES = {
  root: '',
  page: 'page',
  home: 'home',
  wide: 'wide',
  narrow: 'narrow',
  centered: 'centered',
  blank: 'blank',
} as const

export const LAYOUT_STATES = {
  fluid: 'fluid',
  loading: 'loading',
} as const

export const LAYOUT_VARIANTS = {
  home: 'home',
  page: 'page',
} as const

export const LAYOUT_UTILS = {
  page: (
    variant?: keyof typeof LAYOUT_VARIANTS,
    layout?: keyof typeof LAYOUT_CLASSES,
  ) => {
    const classes = ['layout']

    if (layout && layout !== 'page') {
      classes.push(layout.toLowerCase())
    } else {
      classes.push(LAYOUT_CLASSES.page)
    }

    if (variant === 'home') {
      classes.push(variant.toLowerCase())
    }

    return classes.join(' ')
  },

  root: (fluid?: boolean) =>
    [LAYOUT_CLASSES.root, fluid && LAYOUT_STATES.fluid]
      .filter(Boolean)
      .join(' '),
} as const

export const LAYOUT_DIMENSIONS = {
  maxWidth: {
    content: '1200px',
    article: '800px',
    post: '65ch',
  },
  breakpoints: {
    wide: 1440,
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem',
  },
  animation: {
    duration: '0.2s',
    easing: 'ease-in-out',
  },
} as const
