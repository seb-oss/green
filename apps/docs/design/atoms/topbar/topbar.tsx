'use client'

import * as Core from '@sebgroup/green-core/react'
import { Link } from '../link/link'

export function Topbar() {
  return (
    <header>
      <Core.GdsFlex
        padding="2xl m m m"
        align-content="center"
        justify-content="center"
      >
        <Link href="/">
          <Core.IconBrandSeb size="l"></Core.IconBrandSeb>
        </Link>
      </Core.GdsFlex>
    </header>
  )
}

export default Topbar
