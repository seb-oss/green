import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../../atoms/link/link'

export default function StudioBreadcrumbs() {
  return (
    <Core.GdsFlex flex-direction="column" gap="0">
      <Core.GdsBreadcrumbs size="small" width="100%" flex="1">
        <Link component="link" href="/">
          <Core.IconHomeOpen slot="lead" size="m" />
          Home
        </Link>
        <Link component="link" href="/studio">
          <Core.IconBrandGreen slot="lead" size="m" />
          Studio
        </Link>
      </Core.GdsBreadcrumbs>
    </Core.GdsFlex>
  )
}
