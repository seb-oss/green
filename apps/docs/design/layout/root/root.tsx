'use client'

import { unstable_ViewTransition as ViewTransition } from 'react'

import { GdsFlex } from '@sebgroup/green-core/react'
import Command from '../../atoms/command/command'
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
        flex-direction="column"
        color="primary"
        width="100%"
        background="secondary"
        gap="0"
      >
        <Header />
        <GdsFlex gap="xl" flex="1" flex-direction="column; s{row}" padding="0">
          <Sidebar />
          <GdsFlex
            flex-direction="column"
            width="100%"
            padding="2xl xl m 0"
            min-height="100%"
          >
            <GdsFlex flex-direction="column" flex="1" data-content>
              <ViewTransition>{children}</ViewTransition>
            </GdsFlex>
            <Footer />
          </GdsFlex>
        </GdsFlex>
      </GdsFlex>
      <Command />
    </main>
  )
}
