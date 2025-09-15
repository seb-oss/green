// studio.sidebar.tsx
import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../../atoms/link/link'
import { studioData } from '../data/studio.data'

export default function StudioSidebar({ current }: { current?: string }) {
  return (
    <Core.GdsCard
      variant="secondary"
      flex-direction="column"
      grid-column="1 / 4"
      padding="0"
      border-radius="m"
      className="studio-sidebar"
    >
      <Core.GdsFlex align-items="center" gap="m" padding="xl l 0 xl">
        <Link href="/studio">
          <Core.IconBrandGreen size="l" />
          <Core.GdsText font="heading-xs">Green Studio</Core.GdsText>
        </Link>
      </Core.GdsFlex>
      <Core.GdsFlex
        flex-direction="column"
        gap="s"
        aria-label="Sidebar"
        padding="0 0 m 0"
      >
        {studioData.map((category, categoryIndex) => (
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
                const isActive = current === page.slug

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
                    <IconComponent slot="lead" />
                    {page.label}
                  </Link>
                )
              })}
            </Core.GdsFlex>
            {categoryIndex < studioData.length - 1 && (
              <Core.GdsDivider color="subtle-01" />
            )}
          </Core.GdsFlex>
        ))}
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
