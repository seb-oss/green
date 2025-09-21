// hooks/useStudioContent.ts
'use client'

import { useMemo } from 'react'

// Import your generated token JSON files
import colorsDarkJson from '../../../../../../dist/libs/tokens/studio/studio.colors.dark.json'
import colorsLightJson from '../../../../../../dist/libs/tokens/studio/studio.colors.light.json'
import motionJson from '../../../../../../dist/libs/tokens/studio/studio.motion.json'
import radiusJson from '../../../../../../dist/libs/tokens/studio/studio.radius.json'
import shadowsJson from '../../../../../../dist/libs/tokens/studio/studio.shadows.json'
import spacingJson from '../../../../../../dist/libs/tokens/studio/studio.spacing.json'
import typographyJson from '../../../../../../dist/libs/tokens/studio/studio.typography.json'
import viewportJson from '../../../../../../dist/libs/tokens/studio/studio.viewport.json'
import { useContent } from '../../../../settings/content'
import { studioData } from './studio.data'

import type { StudioPage } from './studio.types'

interface TokenValue {
  token: string
  variable: string
  value: string
}

interface ColorTokens {
  background: {
    L1: TokenValue[]
    L2: TokenValue[]
    L3: TokenValue[]
  }
  border: TokenValue[]
  content: TokenValue[]
  state: TokenValue[]
}

export function useStudioPage(slug: string) {
  const { isLoaded, actions } = useContent()

  return useMemo(() => {
    const basePage = studioData
      .flatMap((category) => category.pages)
      .find((page) => page.slug === slug)

    if (!basePage || !isLoaded) return basePage

    // Handle icons page
    if (basePage.key === 'icons') {
      const iconComponent = actions.getComponent('icon')
      const icons = iconComponent?.icons || {}

      const dynamicPage: StudioPage = {
        ...basePage,
        content: Array.from(
          new Set(
            Object.values(icons)
              .map((icon) => icon.meta.categories)
              .flat(),
          ),
        )
          .sort()
          .map((category) => ({
            key: category,
            title: category.charAt(0).toUpperCase() + category.slice(1),
            items: Object.values(icons)
              .filter((icon) => icon.meta.categories.includes(category))
              .map((icon) => ({
                key: icon.id,
                name: icon.displayName,
                component: icon.reactName,
                description: icon.meta.description,
                value: icon.variants.regular,
                preview: icon.variants.regular,
              }))
              .sort((a, b) => a.name.localeCompare(b.name)),
          })),
      }

      return dynamicPage
    }

    // Handle token pages
    if (basePage.type === 'token') {
      switch (basePage.key) {
        case 'colors': {
          // Combine light and dark theme colors
          const colorGroups = new Set([
            ...Object.keys(colorsLightJson),
            ...Object.keys(colorsDarkJson),
          ])

          const content = Array.from(colorGroups).map((groupKey) => {
            const lightColors = colorsLightJson[groupKey] || {}
            const darkColors = colorsDarkJson[groupKey] || {}

            // Get all unique color keys from both themes
            const colorKeys = new Set([
              ...Object.keys(lightColors),
              ...Object.keys(darkColors),
            ])

            return {
              key: groupKey,
              title: groupKey.charAt(0).toUpperCase() + groupKey.slice(1),
              description: `${groupKey} color tokens`,
              items: Array.from(colorKeys).map((colorKey) => ({
                key: colorKey,
                name: colorKey,
                value: lightColors[colorKey]?.value || 'N/A',
                darkValue: darkColors[colorKey]?.value || 'N/A',
                preview:
                  lightColors[colorKey]?.value || darkColors[colorKey]?.value,
                description: `${groupKey} color token`,
                cssVariable:
                  lightColors[colorKey]?.variable ||
                  darkColors[colorKey]?.variable,
              })),
            }
          })

          return {
            ...basePage,
            content,
          }
        }

        case 'typography': {
          return {
            ...basePage,
            content: Object.entries(typographyJson.typography).map(
              ([group, tokens]) => ({
                key: group,
                title: group.charAt(0).toUpperCase() + group.slice(1),
                description: `${group} typography styles`,
                items: Object.entries(tokens).map(
                  ([key, value]: [string, any]) => ({
                    key,
                    name: key,
                    value: value.variable,
                    preview: `${value['font-size']}/${value['line-height']}`,
                    description: `Font size: ${value['font-size']}, Line height: ${value['line-height']}, Weight: ${value['font-weight']}`,
                    cssVariable: value.variable,
                  }),
                ),
              }),
            ),
          }
        }

        case 'spacing': {
          return {
            ...basePage,
            content: [
              {
                key: 'spacing',
                title: 'Spacing Scale',
                description: 'Core spacing values',
                items: Object.entries(spacingJson.spacing).map(
                  ([key, value]: [string, any]) => ({
                    key,
                    name: key,
                    value: value.value,
                    preview: value.value,
                    description: 'Spacing token',
                    cssVariable: value.variable,
                  }),
                ),
              },
            ],
          }
        }

        case 'shadows': {
          return {
            ...basePage,
            content: [
              {
                key: 'shadows',
                title: 'Shadow Scale',
                description: 'Elevation shadows',
                items: Object.entries(shadowsJson.shadows).map(
                  ([key, value]: [string, any]) => ({
                    key,
                    name: key,
                    value: value.variable,
                    preview: 'shadow-preview',
                    description: `Shadow elevation ${key}`,
                    cssVariable: value.variable,
                  }),
                ),
              },
            ],
          }
        }

        case 'radius': {
          return {
            ...basePage,
            content: [
              {
                key: 'radius',
                title: 'Border Radius',
                description: 'Corner radius values',
                items: Object.entries(radiusJson.radius).map(
                  ([key, value]: [string, any]) => ({
                    key,
                    name: key,
                    value: value.value,
                    preview: value.value,
                    description: 'Border radius token',
                    cssVariable: value.variable,
                  }),
                ),
              },
            ],
          }
        }

        case 'viewport': {
          return {
            ...basePage,
            content: [
              {
                key: 'viewport',
                title: 'Viewport Breakpoints',
                description: 'Screen size breakpoints',
                items: Object.entries(viewportJson.viewport).map(
                  ([key, value]: [string, any]) => ({
                    key,
                    name: key,
                    value: value.value,
                    preview: value.value,
                    description: 'Viewport breakpoint',
                    cssVariable: value.variable,
                  }),
                ),
              },
            ],
          }
        }

        case 'motion': {
          return {
            ...basePage,
            content: [
              {
                key: 'easing',
                title: 'Easing Functions',
                description: 'Animation easing curves',
                items: Object.entries(motionJson.easing).map(
                  ([key, value]: [string, any]) => ({
                    key,
                    name: key,
                    value: value.value,
                    preview: 'easing-preview',
                    description: 'Easing function',
                    cssVariable: value.variable,
                  }),
                ),
              },
              {
                key: 'duration',
                title: 'Duration',
                description: 'Animation durations',
                items: Object.entries(motionJson.duration || {}).map(
                  ([key, value]: [string, any]) => ({
                    key,
                    name: key,
                    value: value.value,
                    preview: value.value,
                    description: 'Animation duration',
                    cssVariable: value.variable,
                  }),
                ),
              },
            ],
          }
        }

        default:
          return basePage
      }
    }

    return basePage
  }, [isLoaded, actions, slug])
}
