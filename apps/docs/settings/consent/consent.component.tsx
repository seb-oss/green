// settings/consent/consent.component.tsx
'use client'

import {
  GdsButton,
  GdsDialog,
  GdsFlex,
  GdsText,
} from '@sebgroup/green-core/react'
import { useSettingsContext } from '../hooks'

export function ConsentBanner() {
  const { settings, actions } = useSettingsContext()
  const consent = settings.UX.Global.Consent

  if (consent) {
    return null
  }

  return (
    <GdsDialog open>
      <GdsFlex
        flex-direction="column"
        width="400px"
        align-items="flex-start"
        gap="l"
        padding="0 xl"
      >
        <GdsText tag="h3">We use cookies</GdsText>
        <GdsText tag="p">
          Hi, this website uses essential cookies to ensure its proper operation
          and tracking cookies to understand how you interact with it.
        </GdsText>
        <GdsText tag="p">The latter will be set only after consent.</GdsText>
        <GdsButton onClick={() => actions.toggle('UX.Global.Consent')}>
          Accept cookies
        </GdsButton>
      </GdsFlex>
      <span slot="footer"></span>
    </GdsDialog>
  )
}
