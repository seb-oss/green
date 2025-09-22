// page.tsx
import { Metadata } from 'next'

import { studioData } from '../../../design/layout/studio/data/studio.data'
import { getPageBySlug } from '../../../design/layout/studio/data/studio.data.hooks'
import * as Tokens from '../../../design/layout/studio/data/studio.data.tokens'
import {
  ColorTokens,
  MotionTokens,
  RadiusTokens,
  ShadowsTokens,
  SpacingTokens,
  TypographyTokens,
  ViewportTokens,
} from '../../../design/layout/studio/data/studio.data.types'

// Function to fetch icons from API during build time
async function fetchIconList() {
  try {
    const response = await fetch(
      'https://api.seb.io/components/icon/icon.list.json',
    )
    const icons = await response.json()
    return Object.keys(icons) // Just need the icon keys for paths
  } catch (error) {
    console.error('Failed to fetch icon list:', error)
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata> {
  const mainPath = `/studio/${params.slug[0]}`
  const page = getPageBySlug(mainPath)

  return {
    title: page ? `${page.label} · Green Design System` : 'Green Design System',
    description: page?.description || 'Design tokens and tools',
  }
}

export default function PlayPage() {
  return null
}

export async function generateStaticParams() {
  const paths: { slug: string[] }[] = []
  const ICONS = await fetchIconList()
  const COLORS = Tokens.Light as ColorTokens
  const SPACING = Tokens.Spacing as SpacingTokens
  const RADIUS = Tokens.Radius as RadiusTokens
  const VIEWPORT = Tokens.Viewport as ViewportTokens
  const SHADOWS = Tokens.Shadows as ShadowsTokens
  const MOTION = Tokens.Motion as MotionTokens
  const TYPOGRAPHY = Tokens.Typography as TypographyTokens

  studioData.forEach((category) => {
    category.pages.forEach((page) => {
      // Add main page route
      paths.push({
        slug: [page.slug.replace('/studio/', '')],
      })

      // Interactive pages
      if (page.pages) {
        page.pages.forEach((specialPage) => {
          paths.push({
            slug: specialPage.slug.replace('/studio/', '').split('/'),
          })
        })
      }

      switch (page.key) {
        case 'icons': {
          ICONS.forEach((iconKey) => {
            paths.push({
              slug: [page.slug.replace('/studio/', ''), iconKey],
            })
          })
          break
        }

        case 'colors': {
          // Background colors with levels
          const backgroundLevels: ('L1' | 'L2' | 'L3')[] = ['L1', 'L2', 'L3']
          backgroundLevels.forEach((level) => {
            COLORS.background[level].forEach((token) => {
              paths.push({
                slug: ['colors', level.toLowerCase(), token.token],
              })
            })
          })

          // Other color categories
          const colorCategories = ['content', 'border', 'state'] as const
          colorCategories.forEach((category) => {
            COLORS[category].forEach((token) => {
              paths.push({
                slug: ['colors', category, token.token],
              })
            })
          })
          break
        }

        case 'spacing': {
          Object.entries(SPACING.spacing).forEach(([_, token]) => {
            paths.push({
              slug: ['spacing', token.token],
            })
          })
          break
        }

        case 'radius': {
          Object.entries(RADIUS.radius).forEach(([_, token]) => {
            paths.push({
              slug: ['radius', token.token],
            })
          })
          break
        }

        case 'viewport': {
          Object.entries(VIEWPORT.viewport).forEach(([_, token]) => {
            paths.push({
              slug: ['viewport', token.token],
            })
          })
          break
        }

        case 'typography': {
          Object.entries(TYPOGRAPHY.typography).forEach(([group, tokens]) => {
            Object.entries(tokens).forEach(([key, _]) => {
              paths.push({
                slug: ['typography', group, key],
              })
            })
          })
          break
        }

        case 'shadows': {
          Object.entries(SHADOWS.shadows).forEach(([_, token]) => {
            paths.push({
              slug: ['shadows', token.token],
            })
          })
          break
        }

        case 'motion': {
          ;(Object.keys(MOTION) as Array<keyof MotionTokens>).forEach(
            (category) => {
              MOTION[category].forEach((token) => {
                paths.push({
                  slug: ['motion', category, token.token],
                })
              })
            },
          )
          break
        }
      }
    })
  })

  return paths
}
