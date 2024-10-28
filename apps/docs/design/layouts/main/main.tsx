'use client'

import { useContext } from 'react'
import dynamic from 'next/dynamic'
import { Context } from '$/provider/provider'
import Sidebar from 'core/sidebar'

const GdsFlex = dynamic(
  () => import('@sebgroup/green-react/core/flex').then((mod) => mod.GdsFlex),
  {
    ssr: false,
  },
)

export default function Main({ children }: { children: React.ReactNode }) {
  const { toggleNav, isNavOpen } = useContext(Context)

  return (
    <GdsFlex>
      {isNavOpen && <Sidebar toggleNav={toggleNav} isNavOpen={isNavOpen} />}
      <GdsFlex
        padding="4xl"
        flex-direction="column"
        width="1440px"
        margin="0 auto"
        gap="4xl"
      >
        {children}
      </GdsFlex>
    </GdsFlex>
  )
}
