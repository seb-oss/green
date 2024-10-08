'use client'

import { useContext } from 'react'
import { Context } from '$/provider/provider'

import Sidebar from 'core/sidebar'
import GdsFlex from '@sebgroup/green-react/src/core/flex'

export default function Main({ children }: { children: React.ReactNode }) {
  const { toggleNav, isNavOpen } = useContext(Context)

  return (
    <GdsFlex>
      {isNavOpen && <Sidebar toggleNav={toggleNav} isNavOpen={isNavOpen} />}
      <GdsFlex padding="4xl" flex-direction="column">
        {children}
      </GdsFlex>
    </GdsFlex>
  )
}
