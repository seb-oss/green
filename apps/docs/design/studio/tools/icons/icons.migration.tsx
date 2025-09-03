'use client'

import * as Core from '@sebgroup/green-core/react'
import { DeprecatedIcons } from './deprecated/deprecated'

export default function Migration() {
  return (
    <Core.GdsFlex
      flex-direction="column"
      id="migration"
      gap="l"
      margin="s"
      height="60vh"
      width="50vw"
      slot="dialog"
    >
      <Core.GdsFlex flex-direction="column" gap="xs">
        <Core.GdsText tag="h2">Migration</Core.GdsText>
        <Core.GdsText tag="p">
          Complete mapping of FontAwesome icons to their Green Design System
          equivalents
        </Core.GdsText>
      </Core.GdsFlex>
      <DeprecatedIcons />
    </Core.GdsFlex>
  )
}
