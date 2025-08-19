'use client'

import * as Core from '@sebgroup/green-core/react'
import { useSettingsContext, useSettingsValue } from '../../../settings/hooks'
import { Link } from '../link/link'

export function Topbar() {
  const { actions: SettingsActions, settings } = useSettingsContext()

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <Core.GdsFlex
        padding="l m"
        align-content="center"
        justify-content="space-between"
        inset="0 0 auto"
        z-index="1000"
        level="1"
        background="01"
      >
        <Core.GdsFlex></Core.GdsFlex>
        <Link href="/" style={{ display: 'flex' }}>
          <Core.IconBrandSeb size="l"></Core.IconBrandSeb>
        </Link>
        <Core.GdsFlex>
          <Core.GdsFlex display="flex; >899px{none}">
            <Core.GdsButton
              rank="tertiary"
              onClick={() => {
                SettingsActions.toggle('UI.Panel.MobileMenu')
              }}
            >
              {settings.UI.Panel.MobileMenu ? (
                <Core.IconCrossLarge size="m" />
              ) : (
                <Core.IconBarsThree size="m" />
              )}
            </Core.GdsButton>
          </Core.GdsFlex>
        </Core.GdsFlex>
      </Core.GdsFlex>
    </header>
  )
}

export default Topbar
