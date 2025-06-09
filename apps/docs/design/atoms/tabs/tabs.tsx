// tabs.tsx
'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'

interface TabsProps {
  slug: string
}

export default function Tabs({ slug }: TabsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const InternalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    router.push(href)
  }

  // Don't render anything until client-side
  if (!mounted) {
    return null
  }

  const currentPath = pathname.split('?')[0]
  const isOverviewSelected = currentPath === `/component/${slug}`
  const isUXTextSelected = currentPath === `/component/${slug}/ux-text`
  const isAccessibilitySelected =
    currentPath === `/component/${slug}/accessibility`

  return (
    <Core.GdsCard
      padding="0"
      overflow="hidden"
      position="sticky"
      inset="70px 0 0 0"
      z-index="999"
      margin="0"
      border-radius="xs"
      border="0"
      variant="primary"
      width="100%"
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
            selected={isOverviewSelected}
          >
            Overview
          </Core.GdsMenuButton>
          <Core.GdsMenuButton
            onClick={InternalLink}
            href={`/component/${slug}/ux-text`}
            selected={isUXTextSelected}
          >
            UX text
          </Core.GdsMenuButton>
          <Core.GdsMenuButton
            onClick={InternalLink}
            href={`/component/${slug}/accessibility`}
            selected={isAccessibilitySelected}
          >
            Accessibility
          </Core.GdsMenuButton>
        </Core.GdsFlex>

        <Core.GdsLink
          href={
            'https://storybook.seb.io/latest/core/?path=/docs/components-' +
            slug +
            '--docs'
          }
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
      <Core.GdsDiv
        display="block; m{none}"
        border="0 0 4xs/primary 0"
        padding="0 m"
      >
        Mobile accordion
      </Core.GdsDiv>
    </Core.GdsCard>
  )
}
