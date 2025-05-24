'use client'

import Footer from '../../atoms/footer/footer'
import Header from '../../atoms/header/header'
import { LAYOUT_UTILS } from '../config'

import type { RootProps } from '../types'

import './root.css'

export function Root({ children, className, fluid, ...rest }: RootProps) {
  const classes = [LAYOUT_UTILS.root(fluid), className]
    .filter(Boolean)
    .join(' ')

  return (
    <main className={classes} {...rest}>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
