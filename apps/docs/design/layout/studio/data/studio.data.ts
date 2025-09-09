import * as Core from '@sebgroup/green-core/react'

export interface StudioPage {
  key: string
  slug: string
  label: string
  title: string
  description: string
  icon: keyof typeof Core
  category: string
}

export interface StudioCategory {
  key: string
  title: string
  description: string
  pages: StudioPage[]
}

export const studioData: StudioCategory[] = [
  {
    key: 'tools',
    title: 'Tools & Assets',
    description: 'Utilities and assets for building with Green',
    pages: [
      {
        key: 'icons',
        slug: '/play/icons',
        label: 'Icons',
        title: 'Icon Library',
        description: 'Browse and use our collection of icons',
        icon: 'IconShapes',
        category: 'tools',
      },
      {
        key: 'compose',
        slug: '/play/compose',
        label: 'Compose',
        title: 'Component Composer',
        description: 'Build and preview component combinations',
        icon: 'IconPencilSparkle',
        category: 'tools',
      },
    ],
  },
  {
    key: 'tokens',
    title: 'Tokens',
    description: 'Design tokens and system variables',
    pages: [
      {
        key: 'colors',
        slug: '/play/colors',
        label: 'Colors',
        title: 'Color System',
        description: 'Color palette and usage guidelines',
        icon: 'IconBrush',
        category: 'tokens',
      },
      {
        key: 'spacing',
        slug: '/play/spacing',
        label: 'Spacing',
        title: 'Spacing System',
        description: 'Spacing scales and layout metrics',
        icon: 'IconFullscreen',
        category: 'tokens',
      },
      {
        key: 'typography',
        slug: '/play/typography',
        label: 'Typography',
        title: 'Typography System',
        description: 'Font styles and text treatments',
        icon: 'IconTextEdit',
        category: 'tokens',
      },
      {
        key: 'radius',
        slug: '/play/radius',
        label: 'Radius',
        title: 'Border Radius',
        description: 'Corner radius tokens and usage',
        icon: 'IconCirclePlaceholderOn',
        category: 'tokens',
      },
      {
        key: 'shadows',
        slug: '/play/shadows',
        label: 'Shadows',
        title: 'Shadow System',
        description: 'Elevation and shadow styles',
        icon: 'IconSolar',
        category: 'tokens',
      },
      {
        key: 'viewport',
        slug: '/play/viewport',
        label: 'Viewport',
        title: 'Viewport Breakpoints',
        description: 'Responsive design breakpoints',
        icon: 'IconDevices',
        category: 'tokens',
      },
      {
        key: 'motion',
        slug: '/play/motion',
        label: 'Motion',
        title: 'Motion System',
        description: 'Animation and transition tokens',
        icon: 'IconZap',
        category: 'tokens',
      },
    ],
  },
]

// Utility functions
export const getPageBySlug = (slug: string): StudioPage | undefined => {
  return studioData
    .flatMap((category) => category.pages)
    .find((page) => page.slug === slug)
}

export const getCategoryByKey = (key: string): StudioCategory | undefined => {
  return studioData.find((category) => category.key === key)
}
