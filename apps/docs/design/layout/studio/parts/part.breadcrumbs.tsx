// part.breadcrumbs.tsx
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../../atoms/link/link'
import { studioData } from '../data/studio.data'
import { useStudioPage } from '../data/studio.data.use'

interface LinkItem {
  label: string
  href?: string
  icon?: React.ComponentType
  isLast?: boolean
}

export default function StudioBreadcrumbs() {
  const pathname = usePathname()
  const segments = pathname?.split('/').filter(Boolean) || []
  const mainPath = segments.length > 0 ? `/studio/${segments[1]}` : '/studio'
  const currentPage = useStudioPage(mainPath)

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

  // Add current page and its details
  if (currentPage && segments.length > 1) {
    links.push({
      label: currentPage.label,
      href: segments.length > 2 ? currentPage.slug : undefined,
      icon: currentPage.icon
        ? (Core[currentPage.icon] as React.ComponentType)
        : undefined,
      isLast: segments.length === 2,
    })

    // Handle sub-pages, icons, or tokens
    if (segments.length > 2) {
      if (currentPage.type === 'asset' && currentPage.icons) {
        // Find icon in groups
        const icon = currentPage.icons
          .flatMap((group) => group.items)
          .find((item) => item.key === segments[2])

        if (icon) {
          links.push({
            label: icon.name,
            isLast: true,
          })
        }
      } else if (currentPage.type === 'token' && currentPage.tokens) {
        // Find token in groups
        const token = currentPage.tokens
          .flatMap((group) => group.items)
          .find((item) => item.token === segments[2])

        if (token) {
          links.push({
            label: token.token,
            isLast: true,
          })
        } else {
          // Might be a category like L1, L2, etc.
          links.push({
            label: segments[2].toUpperCase(),
            isLast: segments.length === 3,
            href:
              segments.length > 3
                ? `${currentPage.slug}/${segments[2]}`
                : undefined,
          })

          // Add token if there's one more segment
          if (segments.length > 3) {
            links.push({
              label: segments[3],
              isLast: true,
            })
          }
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
