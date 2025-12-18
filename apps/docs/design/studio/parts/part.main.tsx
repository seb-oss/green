// studio/parts/main.tsx
'use client'

import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import Footer from '../../atoms/footer/footer'
import { Link } from '../../atoms/link/link'
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
      width="100%"
      className="studio-page"
      padding="xl 0 0 0"
    >
      <Core.GdsFlex flex-direction="column" gap="s">
        <Core.GdsText tag="h1" font="heading-l">
          Green Studio
        </Core.GdsText>
        <Core.GdsFlex flex-direction="column" gap="s">
          <Core.GdsText font="body-regular-l">
            Design tokens, tools, and assets for building with Green.
          </Core.GdsText>
          <Core.GdsFlex gap="4xs" flex-direction="row" align-items="center">
            <Core.GdsText font="body-regular-m">
              {'For full documentation, please go to the '}
              <Link href="/" component="link" text-decoration="underline">
                docs page
              </Link>
              {'.'}
            </Core.GdsText>
          </Core.GdsFlex>
        </Core.GdsFlex>
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
          <Core.GdsGrid
            columns="1; xs{3}"
            gap="l"
            width="100%"
            auto-columns="m{240}"
          >
            {category.pages.map((page) => {
              const IconComponent = Core[
                page.icon
              ] as React.ComponentType<IconProps>
              return (
                <Core.GdsCardPattern01
                  key={page.key}
                  title={page.label}
                  href={page.slug}
                  excerpt={page.description}
                  onClick={() => router.push(page.slug)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      router.push(page.slug)
                    }
                  }}
                >
                  {IconComponent && <IconComponent size="xl" slot="header" />}
                </Core.GdsCardPattern01>
              )
            })}
          </Core.GdsGrid>
        </Core.GdsFlex>
      ))}

      <Footer />
    </Core.GdsFlex>
  )
}
