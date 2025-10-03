// part.breadcrumbs.tsx
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../settings/content'
import { Link } from '../../atoms/link/link'
import { studioData } from '../data/studio.data'
import { useStudioPage } from '../data/studio.data.use'

interface LinkItem {
  label: string
  href?: string
  icon?: React.ComponentType
  isLast?: boolean
}

// part.breadcrumbs.tsx
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
        // Check for interactive pages first
        const interactivePage = currentPage.pages?.find(
          (p) => p.key === segments[2],
        )

        if (interactivePage) {
          links.push({
            label: interactivePage.title,
            isLast: true,
          })
        } else if (currentPage.type === 'asset' && currentPage.icons) {
          // Find icon in groups
          const iconId = segments[2]
          const icon = actions.getIcon(iconId)

          if (icon) {
            links.push({
              label: icon.displayName,
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
