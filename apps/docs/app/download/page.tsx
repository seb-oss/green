'use client'

import {
  GdsBreadcrumbs,
  GdsButton,
  GdsCard,
  GdsFlex,
  GdsText,
  IconHomeOpen,
} from '@sebgroup/green-core/react'
import { Link } from '../../design/atoms/link/link'

export default function Download() {
  return (
    <GdsFlex flex-direction="column" gap="l">
      <GdsBreadcrumbs size="small">
        <Link component="link" href="/">
          <IconHomeOpen slot="lead" />
          Home
        </Link>
        <GdsText>Download</GdsText>
      </GdsBreadcrumbs>

      <GdsFlex
        flex-direction="column"
        gap="m"
        justify-content="center"
        align-items="flex-start"
        height="60vh"
      >
        <GdsText tag="h1">Download Green Design System</GdsText>
        <GdsText
          tag="p"
          font-size="preamble-m"
          color="secondary"
          max-width="60ch"
        >
          Get the desktop app to access Green Design System offline. Available
          for macOS and Windows.
        </GdsText>

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
    </GdsFlex>
  )
}
