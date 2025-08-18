'use client'

import * as Core from '@sebgroup/green-core/react'

export function Topbar() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <Core.GdsFlex
        padding="l m"
        align-content="center"
        justify-content="center"
        inset="0 0 auto"
        z-index="1000"
        style={{ background: 'var(--gds-sys-color-l1-01)' }}
      >
        <a href="/">
          <Core.IconBrandSeb size="l"></Core.IconBrandSeb>
        </a>
      </Core.GdsFlex>
    </header>
  )
}

export default Topbar
