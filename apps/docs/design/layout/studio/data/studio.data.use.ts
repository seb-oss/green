'use client'

import { useMemo } from 'react'

import { useContent } from '../../../../settings/content'
import { studioData } from './studio.data'
import * as Tokens from './studio.data.tokens'

import type {
  ColorTokens,
  IconGroup,
  IconPage,
  TokenGroup,
  TokenPage,
} from './studio.data.types'

export function useStudioPage(slug: string) {
  const { isLoaded, actions } = useContent()

  return useMemo(() => {
    const basePage = studioData
      .flatMap((category) => category.pages)
      .find((page) => page.slug === slug)

    if (!basePage || !isLoaded) return basePage

    // Handle icons
    if (basePage.type === 'asset' && basePage.key === 'icons') {
      const iconComponent = actions.getComponent('icon')
      const icons = iconComponent?.icons || {}

      const iconGroups: IconGroup[] = Array.from(
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
              value: icon.variants.regular,
            }))
            .sort((a, b) => a.name.localeCompare(b.name)),
        }))

      return {
        ...basePage,
        icons: iconGroups,
      } as IconPage
    }

    // Handle tokens
    if (basePage.type === 'token') {
      const page = basePage as TokenPage
      const tokenGroups: TokenGroup[] = []

      switch (page.key) {
        // studio.data.use.ts
        case 'colors': {
          // Helper function to map color tokens
          const mapColorTokens = (colorData: ColorTokens) => {
            // Background colors with levels
            const backgroundGroup = {
              key: 'background',
              title: 'Background',
              description: 'Background color tokens',
              items: [
                ...colorData.background.L1.map((token) => ({
                  level: 'L1',
                  token: token.token,
                  variable: token.variable,
                  value: token.value,
                  dark: Tokens.Dark.background.L1.find(
                    (t) => t.token === token.token,
                  )?.value,
                })),
                ...colorData.background.L2.map((token) => ({
                  level: 'L2',
                  token: token.token,
                  variable: token.variable,
                  value: token.value,
                  dark: Tokens.Dark.background.L2.find(
                    (t) => t.token === token.token,
                  )?.value,
                })),
                ...colorData.background.L3.map((token) => ({
                  level: 'L3',
                  token: token.token,
                  variable: token.variable,
                  value: token.value,
                  dark: Tokens.Dark.background.L3.find(
                    (t) => t.token === token.token,
                  )?.value,
                })),
              ],
            }

            // Other color categories
            const colorCategories = ['content', 'border', 'state'] as const
            const otherGroups = colorCategories.map((category) => ({
              key: category,
              title: category.charAt(0).toUpperCase() + category.slice(1),
              description: `${category} color tokens`,
              items: colorData[category].map((token) => ({
                token: token.token,
                variable: token.variable,
                value: token.value,
                dark: Tokens.Dark[category].find((t) => t.token === token.token)
                  ?.value,
              })),
            }))

            return [backgroundGroup, ...otherGroups]
          }

          tokenGroups.push(...mapColorTokens(Tokens.Light))
          break
        }

        case 'typography': {
          Object.entries(Tokens.Typography.typography).forEach(
            ([group, tokens]) => {
              tokenGroups.push({
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
              })
            },
          )
          break
        }

        case 'spacing':
        case 'radius':
        case 'viewport': {
          const tokenData = {
            spacing: Tokens.Spacing.spacing,
            radius: Tokens.Radius.radius,
            viewport: Tokens.Viewport.viewport,
          }[page.key]

          tokenGroups.push({
            key: page.key,
            title: 'Tokens',
            description: `${page.key} values`,
            items: Object.entries(tokenData).map(
              ([key, value]: [string, any]) => ({
                token: key,
                variable: value.variable,
                value: value.value,
              }),
            ),
          })
          break
        }

        case 'shadows': {
          tokenGroups.push({
            key: 'shadows',
            title: 'Tokens',
            description: 'Shadow values',
            items: Object.entries(Tokens.Shadows.shadows).map(
              ([key, value]: [string, any]) => ({
                token: key,
                variable: value.variable,
                value: value.variable,
              }),
            ),
          })
          break
        }

        case 'motion': {
          const motionCategories = ['easing', 'duration'] as const
          type MotionCategory = (typeof motionCategories)[number]

          motionCategories.forEach((category: MotionCategory) => {
            const tokens = Tokens.Motion[category]
            if (tokens) {
              tokenGroups.push({
                key: category,
                title: category.charAt(0).toUpperCase() + category.slice(1),
                description: `${category} tokens`,
                items: tokens.map((token) => ({
                  token: token.token,
                  variable: token.variable,
                  value: token.value,
                })),
              })
            }
          })
          break
        }
      }

      return {
        ...page,
        tokens: tokenGroups,
      }
    }

    return basePage
  }, [isLoaded, actions, slug])
}
