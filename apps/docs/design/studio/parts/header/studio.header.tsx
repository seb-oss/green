'use client'

import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../../atoms/link/link'

export default function StudioHeader() {
  return (
    <Core.GdsFlex flex-direction="column" gap="l">
      <Core.GdsFlex flex-direction="column" gap="l">
        <Core.GdsFlex flex-direction="column" gap="0">
          <Core.GdsText tag="h1">Colors</Core.GdsText>
          <Core.GdsText font="heading-s" font-weight="book" color="neutral-02">
            Description
          </Core.GdsText>
        </Core.GdsFlex>
        <Core.GdsBreadcrumbs size="small">
          <Link component="link" href="/">
            <Core.IconHomeOpen slot="lead" size="m" />
            Home
          </Link>
          <Link component="link" href="/studio">
            <Core.IconBrandGreen slot="lead" size="m" />
            Studio
          </Link>
          <Core.GdsText>Colors</Core.GdsText>
        </Core.GdsBreadcrumbs>
      </Core.GdsFlex>
      <Core.GdsDivider color="subtle-01" />
      <Core.GdsFlex align-items="center" justify-content="space-between">
        <Core.GdsFlex>Left</Core.GdsFlex>
        <Core.GdsFlex>Input</Core.GdsFlex>
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
