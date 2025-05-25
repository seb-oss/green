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
      <GdsFlex height="100vh" flex-direction="column" color="primary">
        <Header />
        <GdsFlex gap="xl">
          {/* <Sidebar /> */}
          <GdsFlex flex-direction="column">
            {children}
            <Footer />
          </GdsFlex>
        </GdsFlex>
      </GdsFlex>
    </main>
  )
}
