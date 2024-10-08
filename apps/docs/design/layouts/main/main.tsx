'use client'

import { useContext } from 'react'
import { Context } from '$/provider/provider'

import Sidebar from '@/[new]/sidebar'
import GdsFlex from '@sebgroup/green-react/src/core/flex'

import '#/global.css'
import '&/main/main.css'

export default function Main({ children }: { children: React.ReactNode }) {
  const { toggleNav, isNavOpen } = useContext(Context)

  return (
    <GdsFlex gap="4xl">
      {isNavOpen && <Sidebar toggleNav={toggleNav} isNavOpen={isNavOpen} />}
      <main>{children}</main>
    </GdsFlex>
  )
}
