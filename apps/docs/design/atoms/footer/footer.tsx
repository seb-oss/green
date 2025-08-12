'use client'

import { GdsButton, GdsFlex } from '@sebgroup/green-core/react'
import * as Core from '@sebgroup/green-core/react'
import { _, Icon } from '../../../hooks'
import { Link } from '../link/link'

export default function Footer() {
  const year = new Date().getFullYear()
  const symbol = '\u00A9'
  const text = `${symbol}  ${year} Skandinaviska Enskilda Banken AB`

  return (
    <GdsFlex
      flex-direction="column"
      padding="l; xs{m 0}"
      gap="2xl; s{5xl}"
      border-color="subtle-01"
      border-width="4xs 0 0 0"
      margin="s; s{4xl 0 0 0}"
      role="contentinfo"
    >
      <GdsFlex
        flex-direction="column; xs{row}"
        gap="m; xs{0}"
        justify-content="center"
        align-items="center"
      >
        <GdsFlex align-items="center" gap="xs; xs{s}" flex="0 1 auto">
          <Core.IconBrandSeb color="primary" size="s; xs{s}" />
          <Core.GdsText tag="small">{text}</Core.GdsText>
        </GdsFlex>
        <GdsFlex
          align-items="center"
          justify-content="center; s{flex-end}"
          gap="s"
          margin="0; xs{0 0 0 auto}"
          width="max-content"
        >
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
