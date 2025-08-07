'use client'

import {
  GdsBreadcrumbs,
  GdsButton,
  GdsCard,
  GdsFlex,
  GdsText,
  IconHomeOpen,
  IconSettingsGear,
} from '@sebgroup/green-core/react'
import { Link } from '../../../design/atoms/link/link'
import { SettingsNav } from '../nav'

export default function Download() {
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
        <GdsText>Desktop</GdsText>
      </GdsBreadcrumbs>
      <GdsFlex
        flex-direction="column"
        gap="m"
        justify-content="flex-start"
        align-items="flex-start"
        max-width="100ch"
      >
        <GdsText tag="h1">Green on Desktop</GdsText>
        <GdsText tag="p">
          Get the desktop app to access Green Design System offline. Available
          for macOS and Windows.
        </GdsText>
        <SettingsNav />
      </GdsFlex>
      <GdsCard max-width="80ch" variant="secondary" padding="0">
        <GdsFlex flex-direction="column" gap="m" align-items="flex-start">
          <GdsFlex gap="l" margin="xl 0">
            <Link
              href="https://github.com/seb-oss/green-desktop/releases/latest/download/Green.Design.System.zip"
              isExternal
            >
              <GdsButton size="large">Download for macOS</GdsButton>
            </Link>
            <Link
              href="https://github.com/seb-oss/green-desktop/releases/latest/download/Green.Design.System.Setup.exe"
              isExternal
            >
              <GdsButton size="large">Download for Windows</GdsButton>
            </Link>
          </GdsFlex>

          <GdsFlex flex-direction="column" gap="m" align-items="flex-start">
            <GdsText font-size="preamble-s" color="secondary">
              Looking for other versions?
            </GdsText>
            <Link
              href="https://github.com/seb-oss/green-desktop/releases"
              isExternal
            >
              View all releases
            </Link>
          </GdsFlex>
        </GdsFlex>
      </GdsCard>
    </GdsFlex>
  )
}
