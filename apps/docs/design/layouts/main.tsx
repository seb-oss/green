'use client'

import { useContext } from 'react'
import { GdsFlex } from '$/import/components'
import { Context } from '$/provider/provider'
import Sidebar from 'core/sidebar'

export default function Main({ children }: { children: React.ReactNode }) {
  const { toggleNav, isNavOpen } = useContext(Context)

  return (
    <GdsFlex
      align-items="flex-start"
      flex-direction="xs{column} s{column} m{row}"
    >
      {isNavOpen && <Sidebar toggleNav={toggleNav} isNavOpen={isNavOpen} />}
      <GdsFlex
        padding="s; s{l} m{0 l}"
        flex-direction="column"
        width="100%; m{960px} l{calc(80ch + var(--gds-space-l) + 240px)}"
        margin="0 auto"
        gap="2xl; s{8xl}"
      >
        {children}
      </GdsFlex>
    </GdsFlex>
  )
}
