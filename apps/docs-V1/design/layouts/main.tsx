'use client'

import { useContext } from 'react'
import { usePathname } from 'next/navigation'
import { GdsFlex, GdsSpacer } from '$/import/components'
import { Context } from '$/provider/provider'
import Sidebar from 'core/sidebar'

export default function Main({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const { isNavOpen } = useContext(Context)

  const layoutPaths = {
    home: '/',
    components: '/components',
    tag: '/tag',
  }

  const wideLayout = Object.values(layoutPaths).some((layoutPath) =>
    path.includes(layoutPath),
  )

  const MAX_WIDTH = wideLayout
    ? '1200px'
    : 'calc(80ch + var(--gds-space-l) + 240px)'

  return (
    <GdsFlex
      align-items="flex-start"
      flex-direction="xs{column} s{column} m{row}"
    >
      {isNavOpen && <Sidebar />}
      <GdsFlex
        padding="s; s{l} m{l l 0 m}"
        flex-direction="column"
        width={`100%; m{960px} l{${MAX_WIDTH}}`}
        margin="0 auto"
        gap="2xl; s{8xl}"
      >
        {children}
      </GdsFlex>
    </GdsFlex>
  )
}
