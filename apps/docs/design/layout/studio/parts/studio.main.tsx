// studio/parts/main.tsx
'use client'

import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { studioData } from '../data/studio.data'

// Define the icon props type
type IconProps = {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
  slot?: string
}

export default function Main() {
  const router = useRouter()
  const categories = studioData.filter((category) => category.key !== 'landing')

  return (
    <Core.GdsFlex
      flex-direction="column"
      gap="4xl"
      padding="xl"
      width="100%"
      className="studio-page"
    >
      <Core.GdsFlex flex-direction="column" gap="m">
        <Core.GdsText font="heading-2xl">Green Studio</Core.GdsText>
        <Core.GdsText color="neutral-02" font="body-l">
          Design tokens, tools, and assets for building with Green
        </Core.GdsText>
      </Core.GdsFlex>

      {categories.map((category) => (
        <Core.GdsFlex
          key={category.key}
          flex-direction="column"
          gap="l"
          width="100%"
        >
          <Core.GdsFlex flex-direction="column" gap="2xs">
            <Core.GdsText font="heading-l">{category.title}</Core.GdsText>
            <Core.GdsText color="neutral-02">
              {category.description}
            </Core.GdsText>
          </Core.GdsFlex>
          <Core.GdsGrid columns="4" gap="l" width="100%">
            {category.pages.map((page) => {
              const IconComponent = Core[
                page.icon
              ] as React.ComponentType<IconProps>
              return (
                <Core.GdsCard
                  key={page.key}
                  padding="l"
                  variant="primary"
                  onClick={() => router.push(page.slug)}
                  border-radius="m"
                >
                  <Core.GdsFlex
                    gap="m"
                    align-items="flex-start"
                    flex-direction="column"
                  >
                    {IconComponent && <IconComponent size="xl" />}
                    <Core.GdsFlex flex-direction="column" gap="2xs">
                      <Core.GdsText font="heading-xs">
                        {page.label}
                      </Core.GdsText>
                      <Core.GdsText color="neutral-02">
                        {page.description}
                      </Core.GdsText>
                    </Core.GdsFlex>
                  </Core.GdsFlex>
                </Core.GdsCard>
              )
            })}
          </Core.GdsGrid>
        </Core.GdsFlex>
      ))}

      <Core.GdsFlex justify-content="flex-end" padding="l">
        <Core.GdsButton
          onClick={() => router.push('/')}
          rank="secondary"
          size="small"
        >
          <Core.IconChevronLeft slot="lead" />
          Back to Docs
        </Core.GdsButton>
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
