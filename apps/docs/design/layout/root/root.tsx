'use client'

import { GdsFlex } from '@sebgroup/green-core/react'
import Footer from '../../atoms/footer/footer'
import Header from '../../atoms/header/header'
import Sidebar from '../../atoms/sidebar/sidebar'
import { LAYOUT_UTILS } from '../config'

import type { RootProps } from '../types'

import './root.css'

export function Root({ children, className, fluid, ...rest }: RootProps) {
  const classes = [LAYOUT_UTILS.root(fluid), className]
    .filter(Boolean)
    .join(' ')

  return (
    <main className={classes} {...rest}>
      <GdsFlex
        min-height="100vh"
        color="primary"
        width="100%"
        background="secondary"
        gap="2xl"
      >
        <Sidebar />
        <GdsFlex gap="xl" flex-direction="column" flex="1">
          <Header />
          <GdsFlex
            flex-direction="column"
            width="100%"
            padding="0 xl m 0"
            min-height="100vh"
          >
            <GdsFlex flex-direction="column" flex="1">
              {children}
            </GdsFlex>
            <Footer />
          </GdsFlex>
        </GdsFlex>
      </GdsFlex>
    </main>
  )
}
