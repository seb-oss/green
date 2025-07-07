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
        flex-direction="row"
        color="primary"
        width="100%"
        background="secondary"
        gap="0"
      >
        <Sidebar />
        <GdsFlex
          flex-direction="column"
          width="100%"
          max-width="1200px"
          padding="4xl xl m 0"
          min-height="100%"
          margin="0 auto"
          data-content
        >
          {/* <Header /> */}
          <ViewTransition>{children}</ViewTransition>
          <Footer />
        </GdsFlex>
      </GdsFlex>
      <Command />
    </main>
  )
}
