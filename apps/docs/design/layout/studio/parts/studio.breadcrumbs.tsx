// studio.breadcrumbs.tsx
import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../../atoms/link/link'
import { getPageBySlug, studioData } from '../data/studio.data'
import { StudioPage } from '../data/studio.types'

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ComponentType
}

export default function StudioBreadcrumbs({ current }: { current?: string }) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Home',
      href: '/',
      icon: Core.IconHomeOpen,
    },
    {
      label: 'Studio',
      href: '/studio',
      icon: Core.IconBrandGreen,
    },
  ]

  const pathSegments = current?.split('/').filter(Boolean) || []

  if (pathSegments.length > 0) {
    const mainPage = studioData
      .flatMap((category) => category.pages)
      .find((page) => page.key === pathSegments[0]) as StudioPage | undefined

    if (mainPage) {
      // Add main page with href only if there's a sub-item
      breadcrumbs.push({
        label: mainPage.label,
        href: pathSegments.length > 1 ? mainPage.slug : undefined,
        icon: mainPage.icon
          ? (Core[mainPage.icon] as React.ComponentType)
          : undefined,
      })

      // If we have a sub-item, find its details from the page content
      if (pathSegments[1]) {
        const subItem = mainPage.content
          ?.flatMap((group) => group.items)
          .find((item) => item.key === pathSegments[1])

        if (subItem) {
          breadcrumbs.push({
            label: subItem.name,
          })
        } else {
          // If no matching item found, use the segment as is
          breadcrumbs.push({
            label: pathSegments[1],
          })
        }
      }
    }
  }

  return (
    <Core.GdsFlex
      justify-content="space-between"
      align-items="center"
      min-block-size="xl"
    >
      <Core.GdsBreadcrumbs size="small" width="100%" flex="1">
        {breadcrumbs.map((item, index) =>
          item.href ? (
            <Link key={index} component="link" href={item.href}>
              {item.icon && <item.icon slot="lead" size="m" />}
              {item.label}
            </Link>
          ) : (
            <Core.GdsFlex key={index} align-items="center" gap="2xs">
              {item.icon && <item.icon size="m" />}
              {item.label}
            </Core.GdsFlex>
          ),
        )}
      </Core.GdsBreadcrumbs>
      {current === 'icons' && (
        <Core.GdsFlex
          align-items="center"
          gap="s"
          width="max-content"
          className="studio-cta"
        >
          <Core.GdsText color="warning-01">Font awesome migration</Core.GdsText>
          <Link
            component="button"
            href="/studio/icons/migration"
            rank="secondary"
            variant="warning"
            size="small"
          >
            Instruction
            <Core.IconCircleQuestionmark slot="trail" />
          </Link>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
