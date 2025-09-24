// part.breadcrumbs.tsx
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../../settings/content'
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
  const { actions } = useContent()

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
    const isSnippetRoute = segments[1] === 'compose' && segments.length > 2

    if (isSnippetRoute) {
      // Add Compose link
      links.push({
        label: 'Compose',
        href: '/studio/compose',
        icon: currentPage.icon
          ? (Core[currentPage.icon] as React.ComponentType)
          : undefined,
      })

      // Add snippet title if we have one
      const snippetSlug = segments[2]
      const snippet = actions.getSnippet(snippetSlug)

      if (snippet) {
        links.push({
          label: snippet.title,
          isLast: true,
        })
      }
    } else {
      // Regular route handling
      links.push({
        label: currentPage.label,
        href: segments.length > 2 ? currentPage.slug : undefined,
        icon: currentPage.icon
          ? (Core[currentPage.icon] as React.ComponentType)
          : undefined,
        isLast: segments.length === 2,
      })

      // Rest of your existing logic for other routes...
      if (segments.length > 2) {
        // ... (keep your existing sub-page handling)
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
            <Core.GdsText color="neutral-02">{item.label}</Core.GdsText>
          )}
          {index < links.length - 1 && (
            <Core.GdsText color="neutral-02">/</Core.GdsText>
          )}
        </Core.GdsFlex>
      ))}
    </Core.GdsFlex>
  )
}
