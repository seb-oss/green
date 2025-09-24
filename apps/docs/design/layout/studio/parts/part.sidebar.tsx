// studio.sidebar.tsx
import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../../atoms/link/link'
import Toggle from '../../../atoms/toggle/toggle.theme'
import { studioData } from '../data/studio.data'

export default function StudioSidebar({ current }: { current?: string }) {
  const DATA = studioData.filter((category) => category.key !== 'landing')

  return (
    <Core.GdsCard
      variant="secondary"
      flex-direction="column"
      grid-column="1 / 6"
      padding="0"
      border-radius="m"
      position="sticky"
      inset="32px 0 0 0"
      height="90vh"
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
                // Check if current path matches page slug or starts with page slug (for sub-routes)
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
