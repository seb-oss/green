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
    <GdsFlex
      flex-direction="column"
      gap="l"
      max-width="1200px"
      width="100%"
      margin="0 auto"
    >
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
      >
        <GdsText tag="h1">Cookie Consent Settings</GdsText>
        <GdsText tag="p">
          Manage your cookie preferences and tracking consent
        </GdsText>
        <GdsCard padding="0" flex-direction="row" gap="0" overflow="hidden">
          <SettingsNav />
        </GdsCard>
      </GdsFlex>

      <GdsCard max-width="80ch" variant="secondary" padding="0">
        <GdsFlex flex-direction="column" gap="l">
          <GdsText tag="h2">Cookie Preferences</GdsText>
          <GdsRichText>
            We use essential cookies to ensure the proper operation of this
            website.
            <br />
            <br />
            Additionally, with your consent, we use tracking cookies to
            understand how you interact with our content and improve your
            experience.
          </GdsRichText>

          <GdsFlex flex-direction="column" align-items="flex-start" gap="m">
            <GdsText tag="strong">
              Current Status:
              {consent ? 'Tracking Enabled' : 'Essential Cookies Only'}
            </GdsText>
            <GdsButton onClick={() => actions.toggle('UX.Global.Consent')}>
              {consent ? 'Disable Tracking' : 'Enable Tracking'}
            </GdsButton>
          </GdsFlex>
        </GdsFlex>
      </GdsCard>
    </GdsFlex>
  )
}
