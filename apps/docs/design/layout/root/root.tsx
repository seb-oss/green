'use client'

import { unstable_ViewTransition as ViewTransition } from 'react'

import { GdsFlex } from '@sebgroup/green-core/react'
import Command from '../../atoms/command/command'
import Footer from '../../atoms/footer/footer'
import Sidebar from '../../atoms/sidebar/sidebar'
import Topbar from '../../atoms/topbar/topbar'
import { LAYOUT_UTILS } from '../config'

import type { RootProps } from '../types'

import './root.css'

export function Root({ children, className, fluid, ...rest }: RootProps) {
  const classes = [LAYOUT_UTILS.root(fluid), className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...rest}>
      <GdsFlex
        min-height="100vh"
        flex-direction="column; s{row}"
        color="primary"
        width="100%"
        background="secondary"
        gap="0"
      >
        <Sidebar />
        <GdsFlex flex-direction="column" width="100%">
          <Topbar />
          <GdsFlex
            flex-direction="column"
            max-width="1200px"
            padding="m"
            min-height="100vh"
            width="100%"
            margin="0 auto"
            data-content
          >
            <main>
              <ViewTransition>{children}</ViewTransition>
            </main>
            <Footer />
          </GdsFlex>
        </GdsFlex>
      </GdsFlex>
      <Command />
    </div>
  )
}
