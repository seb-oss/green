'use client'

import * as Core from '@sebgroup/green-core/react'

export function Topbar() {
  return (
    <header>
      <Core.GdsFlex padding="m" align-content="center" justify-content="center">
        <Core.IconBrandSeb size="l"></Core.IconBrandSeb>
      </Core.GdsFlex>
    </header>
  )
}

export default Topbar
