// part.page-actions.tsx
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../atoms/link/link'
import { studioData } from '../data/studio.data'

export default function PageActions() {
  const pathname = usePathname()
  const segments = pathname?.split('/').filter(Boolean) || []
  const currentPageKey = segments[1]
  const subPageKey = segments[2]

  // Find current page and its interactive pages
  const currentPage = studioData
    .flatMap((category) => category.pages)
    .find((page) => page.key === currentPageKey)

  // If we're on a sub-page, show back button
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
