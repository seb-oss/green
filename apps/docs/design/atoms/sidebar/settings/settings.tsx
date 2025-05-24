'use client'

import * as Core from '@sebgroup/green-core/react'
import { _ } from '../../../../hooks'
import { useSettingsContext, useSettingsValue } from '../../../../settings'

export default function Settings() {
  const { actions } = useSettingsContext()
  const isOpenSettings = useSettingsValue(
    (settings) => settings.UI.Panel.Settings,
  )
  const handleToggleSettings = (): void => {
    actions.toggle('UI.Panel.Settings')
  }

  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)
  return (
    <>
      {isOpenSettings && (
        <Core.GdsCard padding="xs" gap="s" margin="auto 0 0 0">
          <Core.GdsCard variant="secondary">Cookie consent</Core.GdsCard>
          <Core.GdsFlex
            justify-content="space-between"
            align-items="center"
            padding="0 xs"
          >
            <Core.GdsText font-size="detail-s">Settings</Core.GdsText>
            <Core.GdsButton
              onClick={handleToggleSettings}
              rank="tertiary"
              size="xs"
            >
              <Core.IconCrossLarge />
            </Core.GdsButton>
          </Core.GdsFlex>
        </Core.GdsCard>
      )}
      {!isOpenSettings && (
        <Core.GdsButton
          onClick={handleToggleSettings}
          rank="tertiary"
          justify-content={isOpen ? 'space-between' : 'none'}
          size={isOpen ? 'small' : 'medium'}
          margin="auto 0 0 0"
        >
          {isOpen && 'Settings'}
          {isOpen ? (
            <Core.IconSettingsGear slot="trail" />
          ) : (
            <Core.IconSettingsGear />
          )}
        </Core.GdsButton>
      )}
    </>
  )
}
