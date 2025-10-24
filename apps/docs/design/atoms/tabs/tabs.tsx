// tabs.tsx
'use client'

import { usePathname, useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../settings/content'

interface TabsProps {
  slug: string
  type: 'component' | 'pattern'
}

export default function Tabs({ slug, type }: TabsProps) {
  const router = useRouter()
  const { actions } = useContent()
  const pathname = usePathname()

  const content =
    type === 'pattern'
      ? actions
          .getComponents()
          .find((c) =>
            Array.isArray(c.category)
              ? c.category.includes('Patterns')
              : c.category === 'Patterns' && c.slug === slug,
          )
      : actions.getComponent(slug)

  if (!content) return null

  const currentPath = pathname.split('?')[0]
  const basePath = `/${type}/${slug}`
  const OVERVIEW = currentPath === basePath
  const UXTEXT = currentPath === `${basePath}/ux-text`
  const A11Y = currentPath === `${basePath}/accessibility`
  const FAQ = currentPath === `${basePath}/faq`

  const InternalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push(e.currentTarget.href)
  }

  const hasUXText = Boolean(
    (Array.isArray(content['ux-text']) && content['ux-text'].length > 0) ||
      (content['ux-text']?.section && content['ux-text'].section.length > 0),
  )

  const hasAccessibility = Boolean(
    (Array.isArray(content.accessibility) &&
      content.accessibility.length > 0) ||
      (content.accessibility?.section &&
        content.accessibility.section.length > 0),
  )

  const hasFAQ = Boolean(
    (Array.isArray(content.faq) && content.faq.length > 0) ||
      (content.faq?.section && content.faq.section.length > 0),
  )

  if (!hasUXText && !hasAccessibility && !hasFAQ) return null
  const getStorybookPath = (type: 'component' | 'pattern', slug: string) => {
    const category = type === 'pattern' ? 'patterns' : 'components'
    return `https://storybook.seb.io/latest/core/?path=/docs/${category}-${slug}--docs`
  }

  return (
    <Core.GdsCard
      padding="0"
      overflow="hidden"
      margin="0"
      border-radius="0"
      border-width="0 0 4xs 0"
      variant="secondary"
      width="100%"
      role="navigation"
      aria-label={`${type === 'pattern' ? 'Pattern' : 'Component'} documentation areas`}
    >
      <Core.GdsFlex
        justify-content="space-between"
        align-items="center"
        width="100%"
        padding="0"
        display="none; m{flex}"
      >
        <Core.GdsFlex height="100%" gap="0">
          <Core.GdsMenuButton
            onClick={InternalLink}
            href={basePath}
            selected={OVERVIEW}
          >
            Overview
          </Core.GdsMenuButton>
          {hasUXText && (
            <Core.GdsMenuButton
              onClick={InternalLink}
              href={`${basePath}/ux-text`}
              selected={UXTEXT}
            >
              UX text
            </Core.GdsMenuButton>
          )}
          {hasAccessibility && (
            <Core.GdsMenuButton
              onClick={InternalLink}
              href={`${basePath}/accessibility`}
              selected={A11Y}
            >
              Accessibility
            </Core.GdsMenuButton>
          )}
          {hasFAQ && (
            <Core.GdsMenuButton
              onClick={InternalLink}
              href={`${basePath}/faq`}
              selected={FAQ}
            >
              FAQ
            </Core.GdsMenuButton>
          )}
        </Core.GdsFlex>

        <Core.GdsLink href={getStorybookPath(type, slug)} target="_blank">
          <Core.GdsFlex
            margin="0 0 0 auto"
            align-items="center"
            gap="s"
            padding="m l"
          >
            <Core.GdsFlex align-items="center" gap="3xs">
              <Core.IconBrandStorybook size="s" color="primary" />
              API Docs
            </Core.GdsFlex>
            <Core.IconSquareArrowTopRight size="s" />
          </Core.GdsFlex>
        </Core.GdsLink>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
