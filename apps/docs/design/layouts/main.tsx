'use client'

import { useContext } from 'react'
import { GdsFlex } from '$/import/components'
import { Context } from '$/provider/provider'
import Sidebar from 'core/sidebar'

export default function Main({ children }: { children: React.ReactNode }) {
  const { toggleNav, isNavOpen } = useContext(Context)

  return (
    <GdsFlex align-items="flex-start" flex-direction="row">
      {isNavOpen && <Sidebar toggleNav={toggleNav} isNavOpen={isNavOpen} />}
      <GdsFlex
        padding="4xl"
        flex-direction="column"
        width="1440px"
        margin="0 auto"
        gap="8xl"
      >
        {children}
      </GdsFlex>
    </GdsFlex>
  )
}
