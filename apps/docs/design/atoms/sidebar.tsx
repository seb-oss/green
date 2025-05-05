'use client'

import NextLink from 'next/link'

import * as Core from '@sebgroup/green-core/react'

export default function Sidebar() {
  const Link = ({
    title,
    href,
    children,
  }: {
    title: string
    href: string
    children: React.ReactNode
  }) => {
    return (
      <NextLink href={href}>
        <Core.GdsFlex justify-content="space-between" color="primary">
          <Core.GdsText text-style="none">{title}</Core.GdsText>
          {children}
        </Core.GdsFlex>
      </NextLink>
    )
  }
  return (
    <Core.GdsCard variant="secondary" width="20%" height="max-content">
      <Link title="Home" href="/">
        <Core.IconHomeOpen />
      </Link>
      <Link title="Components" href="/components">
        <Core.IconSquareGridCircle />
      </Link>
      <Link title="Foundation" href="/foundation">
        <Core.IconBrandGreen />
      </Link>
      <Link title="UX Writing" href="/foundation">
        <Core.IconPencilWave />
      </Link>
      <Link title="Accessibility" href="/foundation">
        <Core.IconPeopleCircle />
      </Link>
      <Link title="About" href="/foundation">
        <Core.IconCircleInfo />
      </Link>
      <Link title="Github" href="https://github.com/seb-oss/green-core">
        <Core.IconBrandGithub />
      </Link>
      <Link title="Storybook" href="https:/storybook.seb.io">
        <Core.IconBrandStorybook />
      </Link>
    </Core.GdsCard>
  )
}
