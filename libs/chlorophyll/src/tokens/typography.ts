export interface Font {
  family: string
  weight: string
}
export type Weight = 'light' | 'regular' | 'medium' | 'bold'

export const fonts: Record<Weight, Font> = {
  light: {
    family: 'SEBSansSerif',
    weight: '300',
  },
  regular: {
    family: 'SEBSansSerif',
    weight: '400',
  },
  medium: {
    family: 'SEBSansSerif',
    weight: '500',
  },
  bold: {
    family: 'SEBSansSerif',
    weight: '700',
  },
}

export interface TypeScale {
  family: string
  size: string
  weight: string
  lineHeight: string
}
export interface Typography {
  display: TypeScale
  h1: TypeScale
  h2: TypeScale
  h3: TypeScale
  h4: TypeScale
  h5: TypeScale
  h6: TypeScale
  body: TypeScale
  link: TypeScale
}
export type Screen = 'desktop' | 'tablet' | 'mobile'

export const typography: Record<Screen, Typography> = {
  desktop: {
    display: {
      ...fonts.regular,
      size: '96px',
      lineHeight: '100px',
    },
    h1: {
      ...fonts.regular,
      size: '48px',
      lineHeight: '56px',
    },
    h2: {
      ...fonts.regular,
      size: '32px',
      lineHeight: '40px',
    },
    h3: {
      ...fonts.regular,
      size: '24px',
      lineHeight: '32px',
    },
    h4: {
      ...fonts.regular,
      size: '20px',
      lineHeight: '28px',
    },
    h5: {
      ...fonts.medium,
      size: '16px',
      lineHeight: '24px',
    },
    h6: {
      ...fonts.medium,
      size: '14px',
      lineHeight: '20px',
    },
    body: {
      ...fonts.regular,
      size: '16px',
      lineHeight: '24px',
    },
    link: {
      ...fonts.medium,
      size: '16px',
      lineHeight: '24px',
    },
  },
  tablet: {
    display: {
      ...fonts.regular,
      size: '64px',
      lineHeight: '72px',
    },
    h1: {
      ...fonts.regular,
      size: '40px',
      lineHeight: '48px',
    },
    h2: {
      ...fonts.regular,
      size: '24px',
      lineHeight: '32px',
    },
    h3: {
      ...fonts.regular,
      size: '20px',
      lineHeight: '28px',
    },
    h4: {
      ...fonts.regular,
      size: '20px',
      lineHeight: '28px',
    },
    h5: {
      ...fonts.medium,
      size: '16px',
      lineHeight: '24px',
    },
    h6: {
      ...fonts.medium,
      size: '14px',
      lineHeight: '20px',
    },
    body: {
      ...fonts.regular,
      size: '16px',
      lineHeight: '24px',
    },
    link: {
      ...fonts.medium,
      size: '16px',
      lineHeight: '24px',
    },
  },
  mobile: {
    display: {
      ...fonts.regular,
      size: '48px',
      lineHeight: '56px',
    },
    h1: {
      ...fonts.regular,
      size: '32px',
      lineHeight: '40px',
    },
    h2: {
      ...fonts.regular,
      size: '24px',
      lineHeight: '32px',
    },
    h3: {
      ...fonts.regular,
      size: '20px',
      lineHeight: '28px',
    },
    h4: {
      ...fonts.regular,
      size: '20px',
      lineHeight: '28px',
    },
    h5: {
      ...fonts.medium,
      size: '16px',
      lineHeight: '24px',
    },
    h6: {
      ...fonts.medium,
      size: '14px',
      lineHeight: '20px',
    },
    body: {
      ...fonts.regular,
      size: '16px',
      lineHeight: '24px',
    },
    link: {
      ...fonts.medium,
      size: '16px',
      lineHeight: '24px',
    },
  },
}
