// part.breadcrumbs.tsx
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../../atoms/link/link'
import { studioData } from '../data/studio.data'

interface LinkItem {
  label: string
  href?: string
  icon?: React.ComponentType
  isLast?: boolean
}

export default function StudioBreadcrumbs() {
  const pathname = usePathname()
  const segments = pathname?.split('/').filter(Boolean) || []

  const links: LinkItem[] = [
    {
      label: 'Home',
      href: '/',
      icon: Core.IconHomeOpen,
    },
  ]

  // Find studio landing page
  const studioLanding = studioData
    .find((category) => category.key === 'landing')
    ?.pages.find((page) => page.key === 'studio')

  if (studioLanding) {
    links.push({
      label: studioLanding.label,
      href: segments.length > 1 ? studioLanding.slug : undefined,
      icon: studioLanding.icon
        ? (Core[studioLanding.icon] as React.ComponentType)
        : undefined,
      isLast: segments.length === 1,
    })
  }

  // Process remaining segments
  if (segments.length > 1) {
    const currentPage = studioData
      .flatMap((category) => category.pages)
      .find((page) => page.key === segments[1])

    if (currentPage) {
      links.push({
        label: currentPage.label,
        href: segments.length > 2 ? currentPage.slug : undefined,
        icon: currentPage.icon
          ? (Core[currentPage.icon] as React.ComponentType)
          : undefined,
        isLast: segments.length === 2,
      })

      // Handle sub-pages or tokens
      if (segments.length > 2) {
        // Check for sub-pages first
        const subPage = currentPage.pages?.find((p) => p.key === segments[2])
        if (subPage) {
          links.push({
            label: subPage.title,
            isLast: true,
          })
        } else {
          // It's a token or icon
          const label =
            segments[2].charAt(0).toUpperCase() + segments[2].slice(1)
          links.push({
            label,
            isLast: true,
          })
        }
      }
    }
  }

  return (
    <Core.GdsFlex gap="xs" align-items="center">
      {links.map((item, index) => (
        <Core.GdsFlex key={index} align-items="center" gap="xs">
          {item.href ? (
            <Link component="link" href={item.href}>
              {!item.isLast && item.icon && <item.icon slot="lead" size="m" />}
              {item.label}
            </Link>
          ) : (
            <Core.GdsText>{item.label}</Core.GdsText>
          )}
          {index < links.length - 1 && (
            <Core.GdsText color="neutral-02">/</Core.GdsText>
          )}
        </Core.GdsFlex>
      ))}
    </Core.GdsFlex>
  )
}
