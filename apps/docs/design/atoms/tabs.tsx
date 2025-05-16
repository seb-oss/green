'use client'

import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'

export default function Tabs({ slug, path }: { slug: string; path: string }) {
  const router = useRouter()

  const internalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    router.push(href)
  }

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
            onClick={internalLink}
            href={`/component/${slug}`}
            selected={
              !path.includes('/ux-text') && !path.includes('/accessibility')
            }
          >
            Overview
          </Core.GdsMenuButton>
          <Core.GdsMenuButton
            onClick={internalLink}
            href={`/component/${slug}/ux-text`}
            selected={path.includes('/ux-text')}
          >
            UX text
          </Core.GdsMenuButton>
          <Core.GdsMenuButton
            onClick={internalLink}
            href={`/component/${slug}/accessibility`}
            selected={path.includes('/accessibility')}
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
