'use client'

import { usePathname } from 'next/navigation'

import { GdsFlex } from '@sebgroup/green-core/react'
import { _ } from '../../../hooks/'
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

  const PATH = usePathname()
  const Composer = PATH === '/compose'
  const Studio = PATH.startsWith('/studio')

  return (
    <div className={classes} {...rest}>
      <GdsFlex
        min-height="100vh"
        flex-direction="column; s{row}"
        width="100%"
        gap="0"
        color="01"
        className={_('root-flex', Composer && 'root-composer')}
      >
        {!Studio && <Sidebar />}
        <GdsFlex flex-direction="column" width="100%">
          {!Studio && <Topbar />}
          <GdsFlex
            flex-direction="column"
            max-width={Composer || Studio ? '100%' : '1200px'}
            padding="m"
            width="100%"
            margin="0 auto"
            gap="2xl; l{0}"
            data-content
          >
            <main>{children}</main>
            {!Studio && <Footer />}
          </GdsFlex>
        </GdsFlex>
      </GdsFlex>
      <Command />
    </div>
  )
}
