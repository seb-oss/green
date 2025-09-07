import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../../atoms/link/link'

export default function StudioBreadcrumbs({ current }: { current?: string }) {
  return (
    <Core.GdsFlex justify-content="space-between" align-items="center">
      <Core.GdsBreadcrumbs size="small" width="100%" flex="1">
        <Link component="link" href="/">
          <Core.IconHomeOpen slot="lead" size="m" />
          Home
        </Link>
        <Link component="link" href="/studio">
          <Core.IconBrandGreen slot="lead" size="m" />
          Studio
        </Link>
        <Core.GdsText>{current}</Core.GdsText>
      </Core.GdsBreadcrumbs>

      <Core.GdsFlex align-items="center" gap="s" width="max-content">
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
    </Core.GdsFlex>
  )
}
