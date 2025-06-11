'use client'

import { FormEvent } from 'react'
import { usePathname } from 'next/navigation'

import {
  GdsBreadcrumbs,
  GdsButton,
  GdsCard,
  GdsDivider,
  GdsFlex,
  GdsRadio,
  GdsRadioGroup,
  GdsText,
  IconHomeOpen,
} from '@sebgroup/green-core/react'
import { Link } from '../../design/atoms/link/link'
import { useSettingsContext, useSettingsValue } from '../../settings/hooks'
import { SettingsNav } from './nav'

type ColorScheme = 'dark' | 'light' | 'system'

export default function Settings() {
  const pathname = usePathname()
  const { actions } = useSettingsContext()
  const colorScheme = useSettingsValue(
    (settings) => settings.UI.Theme.ColorScheme,
  )

  const handleThemeChange = (e: FormEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement
    const value = target.value as ColorScheme

    if (['dark', 'light', 'system'].includes(value)) {
      actions.setSettings((prev) => ({
        ...prev,
        UI: {
          ...prev.UI,
          Theme: {
            ...prev.UI.Theme,
            ColorScheme: value,
          },
        },
      }))
    }
  }

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
          <SettingsNav />
        </GdsCard>
      </GdsFlex>

      <GdsCard max-width="80ch" padding="0" variant="secondary">
        <GdsFlex flex-direction="column" gap="l">
          <GdsText tag="h2">Appearance</GdsText>
          <GdsRadioGroup
            label="Theme"
            value={colorScheme as ColorScheme}
            onChange={handleThemeChange}
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
        <GdsDivider opacity="0.2"></GdsDivider>
        <GdsFlex flex-direction="column" gap="l">
          <GdsText tag="h2">Density</GdsText>
          <GdsRadioGroup label="Density" value="default">
            <GdsRadio value="default" label="Default" />
            <GdsRadio value="comfortable" label="Comfortable" />
          </GdsRadioGroup>
        </GdsFlex>
      </GdsCard>
    </GdsFlex>
  )
}
