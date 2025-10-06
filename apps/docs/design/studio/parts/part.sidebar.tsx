// studio.sidebar.tsx
'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../atoms/link/link'
import Toggle from '../../atoms/toggle/toggle.theme'
import { studioData } from '../data/studio.data'

export default function StudioSidebar({ current }: { current?: string }) {
  const [open, setOpen] = useState(false)
  const DATA = studioData.filter((category) => category.key !== 'landing')
  const onToggle = () => setOpen((prev) => !prev)

  return (
    <Core.GdsCard
      variant="secondary"
      flex-direction="column"
      grid-column="1; m{1 / 6}"
      padding="0"
      border-radius="0; m{m}"
      position="relative; m{sticky}"
      inset="0; m{32px 0 0 0}"
      height="max-content"
      className="studio-sidebar"
      overflow="auto"
      max-height="max-content; m{90vh}"
      max-width="100%; m{100%}"
      border-width="0 0 5xs 0; m{5xs}"
    >
      <Core.GdsFlex
        align-items="center"
        justify-content="space-between"
        gap="m"
        padding="xl l xl xl"
        margin="0 0 0 xs"
      >
        <Link href="/studio">
          <Core.IconBrandGreen size="l" />
          <Core.GdsText font="heading-xs">Green Studio</Core.GdsText>
        </Link>
        <Core.GdsFlex display="flex; m{none}">
          <Core.GdsButton rank="tertiary" onClick={() => onToggle()}>
            {open ? <Core.IconCrossLarge /> : <Core.IconBarsThree />}
          </Core.GdsButton>
        </Core.GdsFlex>
      </Core.GdsFlex>
      <Core.GdsFlex
        // display={open ? 'flex' : 'none'}
        flex-direction="column"
        gap="s"
        aria-label="Sidebar"
        padding="0"
        flex="1"
      >
        {DATA.map((category, categoryIndex) => (
          <Core.GdsFlex key={category.key} flex-direction="column" gap="s">
            <Core.GdsFlex flex-direction="column" gap="s" padding="m">
              <Core.GdsFlex padding="0 m">
                <Core.GdsText
                  color="neutral-02"
                  text-transform="uppercase"
                  font="detail-regular-xs"
                >
                  {category.title}
                </Core.GdsText>
              </Core.GdsFlex>
              {category.pages.map((page) => {
                const IconComponent = Core[page.icon]
                const isActive =
                  current === page.slug || current?.startsWith(`${page.slug}/`)

                return (
                  <Link
                    key={page.key}
                    href={page.slug}
                    component="button"
                    size="small"
                    width="max-content"
                    rank={isActive ? 'secondary' : 'tertiary'}
                    justify-content="flex-start"
                  >
                    <IconComponent slot="lead" size="m" solid={isActive} />
                    {page.label}
                  </Link>
                )
              })}
            </Core.GdsFlex>
            {categoryIndex < DATA.length - 1 && (
              <Core.GdsDivider color="subtle-01" />
            )}
          </Core.GdsFlex>
        ))}
        <Core.GdsFlex margin="auto 0 0 0" flex-direction="column">
          <Core.GdsDivider color="subtle-01" />
          <Core.GdsFlex
            padding="m l m m"
            justify-content="space-between"
            align-items="center"
          >
            <Link
              href="/"
              component="button"
              size="small"
              width="max-content"
              rank="tertiary"
            >
              <Core.IconChevronLeft slot="lead" size="m" />
              Docs
            </Link>
            <Toggle />
          </Core.GdsFlex>
        </Core.GdsFlex>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
