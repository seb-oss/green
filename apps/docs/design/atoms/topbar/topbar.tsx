'use client'

import * as Core from '@sebgroup/green-core/react'
import { Link } from '../link/link'

export function Topbar() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <Core.GdsFlex
        padding="l m"
        align-content="center"
        justify-content="center"
        inset="0 0 auto"
        z-index="1000"
        level="1"
        background="01"
      >
        <Link href="/">
          <Core.IconBrandSeb size="l"></Core.IconBrandSeb>
        </Link>
      </Core.GdsFlex>
    </header>
  )
}

export default Topbar
