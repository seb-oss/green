// part.page-actions.tsx
import { usePathname, useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../atoms/link/link'
import { studioData } from '../data/studio.data'

export default function PageActions() {
  const pathname = usePathname()
  const router = useRouter()
  const segments = pathname?.split('/').filter(Boolean) || []
  const currentPageKey = segments[1]
  const subPageKey = segments[2]

  // Find current page and its interactive pages
  const currentPage = studioData
    .flatMap((category) => category.pages)
    .find((page) => page.key === currentPageKey)

  // If we're on a playground sub-page, show dropdown
  if (subPageKey && currentPageKey === 'playground' && currentPage?.pages) {
    const selectedPage = currentPage.pages.find(
      (page: any) => page.key === subPageKey,
    )

    return (
      <Core.GdsFlex align-items="center" gap="s" width="max-content">
        <Core.GdsDropdown
          plain
          size="small"
          width="200px"
          value={selectedPage?.slug || ''}
          onChange={(e: React.FormEvent<HTMLElement>) => {
            const customElement = e.target as HTMLElement & {
              value: string
            }
            router.push(customElement.value)
          }}
        >
          {currentPage.pages.map((page: any) => (
            <Core.GdsOption
              key={page.key}
              value={page.slug}
              selected={page.key === subPageKey}
            >
              {page.title}
            </Core.GdsOption>
          ))}
        </Core.GdsDropdown>
      </Core.GdsFlex>
    )
  }

  // If we're on a sub-page (but not playground), show back button
  if (subPageKey && currentPage) {
    return (
      <Core.GdsFlex align-items="center" gap="s" width="max-content">
        <Link
          component="button"
          href={currentPage.slug}
          rank="secondary"
          size="small"
        >
          <Core.IconArrowLeft slot="lead" />
          Back to {currentPage.label}
        </Link>
      </Core.GdsFlex>
    )
  }

  // Show contextual actions based on current page
  if (currentPage?.pages) {
    return (
      <Core.GdsFlex align-items="center" gap="s" width="max-content">
        {currentPageKey === 'icons' && (
          <Core.GdsFlex align-items="center" gap="s" className="studio-cta">
            <Core.GdsText color="warning-01">
              Font awesome migration
            </Core.GdsText>
            <Link
              component="button"
              href="/studio/icons/migration"
              rank="secondary"
              variant="warning"
              size="small"
            >
              Instructions
              <Core.IconCircleQuestionmark slot="trail" />
            </Link>
          </Core.GdsFlex>
        )}
        {currentPageKey === 'radius' && (
          <Core.GdsFlex align-items="center" gap="s" className="studio-cta">
            <Core.GdsText>Explore radius-padding relationships</Core.GdsText>
            <Link
              component="button"
              href="/studio/radius/nested"
              rank="secondary"
              size="small"
            >
              Interactive Tool
              <Core.IconPencilSparkle slot="trail" />
            </Link>
          </Core.GdsFlex>
        )}
      </Core.GdsFlex>
    )
  }

  return null
}
