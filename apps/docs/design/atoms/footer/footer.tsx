'use client'

import { GdsButton, GdsFlex } from '@sebgroup/green-core/react'
import * as Core from '@sebgroup/green-core/react'
import { _, Icon } from '../../../hooks'
import { Link } from '../link/link'

export default function Footer() {
  const year = new Date().getFullYear()
  const symbol = '\u00A9'
  const text = `${symbol}  ${year} Green Design System`

  return (
    <GdsFlex
      flex-direction="column"
      padding="m 0"
      gap="2xl; s{5xl}"
      border-color="primary"
      border-width="4xs 0 0 0"
      margin="0; s{4xl 0 0 0}"
      role="contentinfo"
    >
      <GdsFlex justify-content="space-between" align-items="center">
        <GdsFlex align-items="center" gap="s" flex="1">
          <Core.IconBrandSeb color="primary" size="m" />
          <Core.GdsText tag="small">{text}</Core.GdsText>
        </GdsFlex>
        <GdsFlex align-items="center" justify-content="flex-end" flex="1">
          <Link
            component="button"
            href="/settings/consent"
            rank="tertiary"
            size="small"
          >
            Cookie consent
          </Link>

          <Core.GdsFlex display="flex; s{none}">
            <Link
              component="button"
              href="/settings"
              rank="tertiary"
              size="small"
            >
              <Icon name="IconSettingsGear" />
            </Link>
          </Core.GdsFlex>
          <Core.GdsFlex display="none; s{flex}">
            <Link
              component="button"
              href="/settings"
              rank="tertiary"
              size="small"
            >
              <Icon name="IconSettingsGear" slot="lead" />
              <span data-fade>Settings</span>
            </Link>
          </Core.GdsFlex>
        </GdsFlex>
      </GdsFlex>
    </GdsFlex>
  )
}
