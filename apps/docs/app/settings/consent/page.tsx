// app/settings/consent/page.tsx
'use client'

import {
  GdsBreadcrumbs,
  GdsButton,
  GdsCard,
  GdsFlex,
  GdsRichText,
  GdsText,
  IconHomeOpen,
  IconSettingsGear,
} from '@sebgroup/green-core/react'
import { Link } from '../../../design/atoms/link/link'
import { useSettingsContext } from '../../../settings/hooks'
import { SettingsNav } from '../nav'

export const dynamic = 'force-dynamic'

export default function ConsentPage() {
  const { settings, actions } = useSettingsContext()
  const consent = settings.UX.Global.Consent

  return (
    <GdsFlex flex-direction="column" gap="l" width="100%">
      <GdsBreadcrumbs size="small">
        <Link component="link" href="/">
          <IconHomeOpen slot="lead" />
          Home
        </Link>
        <Link component="link" href="/settings">
          <IconSettingsGear slot="lead" />
          Settings
        </Link>
        <GdsText>Consent</GdsText>
      </GdsBreadcrumbs>

      <GdsFlex
        flex-direction="column"
        gap="m"
        justify-content="flex-start"
        align-items="flex-start"
        max-width="100ch"
      >
        <GdsText tag="h1">Cookie Preferences</GdsText>
        <GdsText tag="p">
          We use essential cookies to ensure the proper operation of this
          website.
        </GdsText>
        <SettingsNav />
      </GdsFlex>

      <GdsFlex
        flex-direction="column"
        align-items="flex-start"
        gap="l"
        max-width="80ch"
      >
        <GdsText tag="strong">
          Current Status:
          {consent ? 'Tracking Enabled' : 'Essential Cookies Only'}
        </GdsText>
        <GdsButton onClick={() => actions.toggle('UX.Global.Consent')}>
          {consent ? 'Disable Tracking' : 'Enable Tracking'}
        </GdsButton>
      </GdsFlex>
    </GdsFlex>
  )
}
