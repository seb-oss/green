// tabs.tsx
'use client'

import { usePathname, useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../settings/content'

interface TabsProps {
  slug: string
}

export default function Tabs({ slug }: TabsProps) {
  const router = useRouter()
  const { actions } = useContent()
  const pathname = usePathname()

  const component = actions.getComponent(slug)

  if (!component) return null

  const currentPath = pathname.split('?')[0]
  const OVERVIEW = currentPath === `/component/${slug}`
  const UXTEXT = currentPath === `/component/${slug}/ux-text`
  const A11Y = currentPath === `/component/${slug}/accessibility`
  const FAQ = currentPath === `/component/${slug}/faq`

  const InternalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push(e.currentTarget.href)
  }

  const hasUXText = Boolean(
    (Array.isArray(component['ux-text']) && component['ux-text'].length > 0) ||
      (component['ux-text']?.section &&
        component['ux-text'].section.length > 0),
  )

  const hasAccessibility = Boolean(
    (Array.isArray(component.accessibility) &&
      component.accessibility.length > 0) ||
      (component.accessibility?.section &&
        component.accessibility.section.length > 0),
  )

  const hasFAQ = Boolean(
    (Array.isArray(component.faq) && component.faq.length > 0) ||
      (component.faq?.section && component.faq.section.length > 0),
  )

  if (!hasUXText && !hasAccessibility && !hasFAQ) return null

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
      aria-label="Component documentation areas"
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
            href={`/component/${slug}`}
            selected={OVERVIEW}
          >
            Overview
          </Core.GdsMenuButton>
          {hasUXText && (
            <Core.GdsMenuButton
              onClick={InternalLink}
              href={`/component/${slug}/ux-text`}
              selected={UXTEXT}
            >
              UX text
            </Core.GdsMenuButton>
          )}
          {hasAccessibility && (
            <Core.GdsMenuButton
              onClick={InternalLink}
              href={`/component/${slug}/accessibility`}
              selected={A11Y}
            >
              Accessibility
            </Core.GdsMenuButton>
          )}
          {hasFAQ && (
            <Core.GdsMenuButton
              onClick={InternalLink}
              href={`/component/${slug}/faq`}
              selected={FAQ}
            >
              FAQ
            </Core.GdsMenuButton>
          )}
        </Core.GdsFlex>

        <Core.GdsLink
          href={`https://storybook.seb.io/latest/core/?path=/docs/components-${slug}--docs`}
          target="_blank"
        >
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
