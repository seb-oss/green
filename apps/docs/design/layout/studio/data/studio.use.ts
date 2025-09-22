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

    if (basePage.type === 'token') {
      switch (basePage.key) {
        case 'colors': {
          return {
            ...basePage,
            content: [
              {
                key: 'background',
                title: 'Background',
                description: 'Background color tokens',
                items: [
                  ...colorsLightJson.background.L1.map((token) => ({
                    level: 'L1',
                    token: token.token,
                    variable: token.variable,
                    value: token.value,
                  })),
                  ...colorsLightJson.background.L2.map((token) => ({
                    level: 'L2',
                    token: token.token,
                    variable: token.variable,
                    value: token.value,
                  })),
                  ...colorsLightJson.background.L3.map((token) => ({
                    level: 'L3',
                    token: token.token,
                    variable: token.variable,
                    value: token.value,
                  })),
                ],
              },
              {
                key: 'content',
                title: 'Content',
                description: 'Content color tokens',
                items: colorsLightJson.content.map((token) => ({
                  token: token.token,
                  variable: token.variable,
                  value: token.value,
                })),
              },
              {
                key: 'border',
                title: 'Border',
                description: 'Content color tokens',
                items: colorsLightJson.content.map((token) => ({
                  token: token.token,
                  variable: token.variable,
                  value: token.value,
                })),
              },
              {
                key: 'state',
                title: 'State',
                description: 'Content color tokens',
                items: colorsLightJson.content.map((token) => ({
                  token: token.token,
                  variable: token.variable,
                  value: token.value,
                })),
              },
              // Add other color categories similarly
            ],
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
                    token: key,
                    variable: value.variable,
                    value: `${value['font-size']}/${value['line-height']}/${value['font-weight']}`,
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
                title: 'Tokens',
                description: 'Core spacing values',
                items: Object.entries(spacingJson.spacing).map(
                  ([key, value]: [string, any]) => ({
                    token: key,
                    variable: value.variable,
                    value: value.value,
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
                title: 'Tokens',
                description: 'Elevation shadows',
                items: Object.entries(shadowsJson.shadows).map(
                  ([key, value]: [string, any]) => ({
                    token: key,
                    variable: value.variable,
                    value: value.variable,
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
                title: 'Tokens',
                description: 'Corner radius values',
                items: Object.entries(radiusJson.radius).map(
                  ([key, value]: [string, any]) => ({
                    token: key,
                    variable: value.variable,
                    value: value.value,
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
                    token: key,
                    variable: value.variable,
                    value: value.value,
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
                    token: key,
                    variable: value.variable,
                    value: value.value,
                  }),
                ),
              },
              {
                key: 'duration',
                title: 'Duration',
                description: 'Animation durations',
                items: Object.entries(motionJson.duration || {}).map(
                  ([key, value]: [string, any]) => ({
                    token: key,
                    variable: value.variable,
                    value: value.value,
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
