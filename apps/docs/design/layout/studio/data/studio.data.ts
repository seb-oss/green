import {
  ContentGroup,
  ContentItem,
  StudioCategory,
  StudioPage,
} from './studio.types'

export const studioData: StudioCategory[] = [
  {
    key: 'landing',
    title: 'Studio',
    description: 'Design tokens, tools, and assets for building with Green',
    pages: [
      {
        key: 'studio',
        type: 'landing', // new type
        slug: '/studio',
        label: 'Studio',
        title: 'Green Studio',
        description: 'Design tokens, tools, and assets for building with Green',
        icon: 'IconBrandGreen',
        category: 'landing',
        component: 'Main',
      },
    ],
  },
  {
    key: 'tools',
    title: 'Tools & Assets',
    description: 'Utilities and assets for building with Green',
    pages: [
      {
        key: 'icons',
        type: 'asset',
        slug: '/studio/icons',
        label: 'Icons',
        title: 'Icon Library',
        description: 'Browse and use our collection of icons',
        icon: 'IconShapes',
        category: 'tools',
        pages: [
          {
            key: 'migration',
            slug: '/studio/icons/migration',
            title: 'Icon Migration',
            description: 'Guide for migrating from Font Awesome to Green icons',
            component: 'Migration',
          },
        ],
        content: [
          {
            key: 'navigation',
            title: 'Navigation Icons',
            description: 'Icons for navigation and direction',
            items: [
              {
                key: 'arrow-right',
                name: 'Arrow Right',
                value: '<svg>...</svg>',
                preview: '<svg>...</svg>',
                description: 'Used for forward navigation',
                component: 'IconArrowRight',
              },
              {
                key: 'arrow-left',
                name: 'Arrow Left',
                value: '<svg>...</svg>',
                preview: '<svg>...</svg>',
                description: 'Used for backward navigation',
                component: 'IconArrowLeft',
              },
            ],
          },
          {
            key: 'actions',
            title: 'Action Icons',
            description: 'Icons for common actions',
            items: [
              {
                key: 'edit',
                name: 'Edit',
                value: '<svg>...</svg>',
                preview: '<svg>...</svg>',
                description: 'Used for edit actions',
                component: 'IconEdit',
              },
              {
                key: 'delete',
                name: 'Delete',
                value: '<svg>...</svg>',
                preview: '<svg>...</svg>',
                description: 'Used for delete actions',
                component: 'IconDelete',
              },
            ],
          },
        ],
      },
      {
        key: 'compose',
        type: 'tool',
        slug: '/studio/compose',
        label: 'Compose',
        title: 'Component Composer',
        description: 'Build and preview component combinations',
        icon: 'IconPencilSparkle',
        category: 'tools',
        // No content for tools
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
        type: 'token',
        slug: '/studio/colors',
        label: 'Colors',
        title: 'Color System',
        description: 'Color palette and usage guidelines',
        icon: 'IconBrush',
        category: 'tokens',
        content: [
          {
            key: 'background',
            title: 'Background Colors',
            description: 'Colors used for various background surfaces',
            items: [
              {
                key: 'background-default',
                name: 'Background Default',
                value: '#FFFFFF',
                preview: '#FFFFFF',
                description: 'Default background color for surfaces',
                cssVariable: '--gds-background-default',
              },
              {
                key: 'background-secondary',
                name: 'Background Secondary',
                value: '#F8F8F8',
                preview: '#F8F8F8',
                description: 'Secondary background for nested surfaces',
                cssVariable: '--gds-background-secondary',
              },
            ],
          },
          {
            key: 'content',
            title: 'Content Colors',
            description: 'Colors for typography and content',
            items: [
              {
                key: 'content-primary',
                name: 'Content Primary',
                value: '#222222',
                preview: '#222222',
                description: 'Primary text color',
                cssVariable: '--gds-content-primary',
              },
            ],
          },
        ],
      },
      {
        key: 'spacing',
        type: 'token',
        slug: '/studio/spacing',
        label: 'Spacing',
        title: 'Spacing System',
        description: 'Spacing scales and layout metrics',
        icon: 'IconFullscreen',
        category: 'tokens',
        content: [
          {
            key: 'base',
            title: 'Base Spacing',
            description: 'Core spacing values',
            items: [
              {
                key: 'spacing-xs',
                name: 'Extra Small',
                value: '4px',
                preview: '4px',
                description: 'Minimal spacing for tight layouts',
                cssVariable: '--gds-spacing-xs',
              },
              {
                key: 'spacing-sm',
                name: 'Small',
                value: '8px',
                preview: '8px',
                description: 'Small spacing for component padding',
                cssVariable: '--gds-spacing-sm',
              },
            ],
          },
          {
            key: 'layout',
            title: 'Layout Spacing',
            description: 'Spacing for layout and grid',
            items: [
              {
                key: 'layout-md',
                name: 'Medium Layout',
                value: '16px',
                preview: '16px',
                description: 'Standard layout spacing',
                cssVariable: '--gds-layout-md',
              },
            ],
          },
        ],
      },
      {
        key: 'typography',
        type: 'token',
        slug: '/studio/typography',
        label: 'Typography',
        title: 'Typography System',
        description: 'Font styles and text treatments',
        icon: 'IconTextEdit',
        category: 'tokens',
        content: [
          {
            key: 'scale',
            title: 'Type Scale',
            description: 'Font size scale',
            items: [
              {
                key: 'font-size-base',
                name: 'Base Font Size',
                value: '16px',
                preview: '16px',
                description: 'Base font size for body text',
                cssVariable: '--gds-font-size-base',
              },
              {
                key: 'font-size-lg',
                name: 'Large Font Size',
                value: '18px',
                preview: '18px',
                description: 'Large text size',
                cssVariable: '--gds-font-size-lg',
              },
            ],
          },
        ],
      },
      {
        key: 'radius',
        type: 'token',
        slug: '/studio/radius',
        label: 'Radius',
        title: 'Border Radius',
        description: 'Corner radius tokens and usage',
        icon: 'IconCirclePlaceholderOn',
        category: 'tokens',
        content: [
          {
            key: 'base',
            title: 'Base Radius',
            description: 'Common border radius values',
            items: [
              {
                key: 'radius-sm',
                name: 'Small Radius',
                value: '4px',
                preview: '4px',
                description: 'Small border radius',
                cssVariable: '--gds-radius-sm',
              },
            ],
          },
        ],
      },
      {
        key: 'shadows',
        type: 'token',
        slug: '/studio/shadows',
        label: 'Shadows',
        title: 'Shadow System',
        description: 'Elevation and shadow styles',
        icon: 'IconSolar',
        category: 'tokens',
        content: [
          {
            key: 'elevation',
            title: 'Elevation Shadows',
            description: 'Shadow values for elevation',
            items: [
              {
                key: 'shadow-sm',
                name: 'Small Shadow',
                value: '0 1px 2px rgba(0,0,0,0.05)',
                preview: 'shadow-sm-preview',
                description: 'Subtle shadow for slight elevation',
                cssVariable: '--gds-shadow-sm',
              },
            ],
          },
        ],
      },
      {
        key: 'viewport',
        type: 'token',
        slug: '/studio/viewport',
        label: 'Viewport',
        title: 'Viewport Breakpoints',
        description: 'Responsive design breakpoints',
        icon: 'IconDevices',
        category: 'tokens',
        content: [
          {
            key: 'breakpoints',
            title: 'Breakpoints',
            description: 'Screen size breakpoints',
            items: [
              {
                key: 'viewport-sm',
                name: 'Small Viewport',
                value: '640px',
                preview: '640px',
                description: 'Small screen breakpoint',
                cssVariable: '--gds-viewport-sm',
              },
            ],
          },
        ],
      },
      {
        key: 'motion',
        type: 'token',
        slug: '/studio/motion',
        label: 'Motion',
        title: 'Motion System',
        description: 'Animation and transition tokens',
        icon: 'IconZap',
        category: 'tokens',
        content: [
          {
            key: 'duration',
            title: 'Duration',
            description: 'Animation timing values',
            items: [
              {
                key: 'duration-fast',
                name: 'Fast Duration',
                value: '150ms',
                preview: '150ms',
                description: 'Quick animations',
                cssVariable: '--gds-duration-fast',
              },
            ],
          },
          {
            key: 'easing',
            title: 'Easing',
            description: 'Animation easing functions',
            items: [
              {
                key: 'easing-standard',
                name: 'Standard Easing',
                value: 'cubic-bezier(0.4, 0, 0.2, 1)',
                preview: 'easing-preview',
                description: 'Standard easing curve',
                cssVariable: '--gds-easing-standard',
              },
            ],
          },
        ],
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

export const getContentGroupByKey = (
  page: StudioPage,
  groupKey: string,
): ContentGroup | undefined => {
  return page.content?.find((group) => group.key === groupKey)
}

export const getContentItemByKey = (
  page: StudioPage,
  itemKey: string,
): ContentItem | undefined => {
  return page.content
    ?.flatMap((group) => group.items)
    .find((item) => item.key === itemKey)
}
