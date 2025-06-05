'use client'

import * as Core from '@sebgroup/green-core/react'
import { GdsFlex } from '@sebgroup/green-core/react'
import { _ } from '../../../../hooks'
import { useSettingsValue } from '../../../../settings'
import { Link } from '../../link/link'

export default function Settings() {
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)

  if (!isOpen) {
    return (
      <GdsFlex width="100%">
        <Link component="button" href="/settings" rank="tertiary" size="small">
          <Core.IconSettingsGear />
        </Link>
      </GdsFlex>
    )
  }

  return (
    <Link
      component="button"
      href="/settings"
      rank="tertiary"
      justify-content="space-between"
      size="small"
      width="100%"
    >
      Settings
      <Core.IconSettingsGear slot="trail" />
    </Link>
  )
}
