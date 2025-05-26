'use client'

import { Link } from 'apps/docs/design/atoms/link/link'

import {
  GdsBreadcrumbs,
  GdsCard,
  GdsCheckbox,
  GdsCheckboxGroup,
  GdsFlex,
  GdsMenuButton,
  GdsText,
  IconHomeOpen,
} from '@sebgroup/green-core/react'

export default function Settings() {
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
        <GdsText tag="p">Color scheme consent etc. </GdsText>
        <GdsCard padding="0" flex-direction="row" gap="0" overflow="hidden">
          <Link component="menu" href="/settings">
            Settings
          </Link>
          <Link component="menu" href="/settings/consent">
            Consent
          </Link>
        </GdsCard>
      </GdsFlex>

      <GdsCheckboxGroup>
        <GdsCheckbox label="Content Refresh"></GdsCheckbox>
        <GdsCheckbox label="Theme dark light mode"></GdsCheckbox>
      </GdsCheckboxGroup>
    </GdsFlex>
  )
}
