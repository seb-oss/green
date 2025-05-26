// app/settings/page.tsx
'use client'

import {
  GdsBreadcrumbs,
  GdsCard,
  GdsFlex,
  GdsRadio,
  GdsRadioGroup,
  GdsText,
  IconHomeOpen,
} from '@sebgroup/green-core/react'
import { Link } from '../../design/atoms/link/link'
import { useSettingsContext } from '../../settings/hooks'

export default function Settings() {
  const { settings, actions } = useSettingsContext()

  return (
    <GdsFlex flex-direction="column" gap="l">
      <GdsBreadcrumbs size="small">
        <Link component="link" href="/">
          <IconHomeOpen slot="lead" />
          Home
        </Link>
        <GdsText>Settings</GdsText>
      </GdsBreadcrumbs>

      <GdsFlex
        flex-direction="column"
        gap="m"
        justify-content="flex-start"
        align-items="flex-start"
      >
        <GdsText tag="h1">Settings</GdsText>
        <GdsText tag="p">Customize your experience</GdsText>

        <GdsCard padding="0" flex-direction="row" gap="0" overflow="hidden">
          <Link component="menu" href="/settings">
            Settings
          </Link>
          <Link component="menu" href="/settings/consent">
            Consent
          </Link>
        </GdsCard>
      </GdsFlex>

      <GdsCard padding="l">
        <GdsFlex flex-direction="column" gap="l">
          <GdsText tag="h2">Appearance</GdsText>
          <GdsRadioGroup
            label="Theme"
            value={settings.UI.Theme.ColorScheme}
            onChange={(e) =>
              actions.setSettings((prev) => ({
                ...prev,
                UI: {
                  ...prev.UI,
                  Theme: {
                    ...prev.UI.Theme,
                    ColorScheme: e.target.value,
                  },
                },
              }))
            }
          >
            <GdsRadio value="light" label="Light">
              Light
            </GdsRadio>
            <GdsRadio value="dark" label="Dark">
              Dark
            </GdsRadio>
            <GdsRadio value="system" label="System">
              System
            </GdsRadio>
          </GdsRadioGroup>
        </GdsFlex>
      </GdsCard>
    </GdsFlex>
  )
}
