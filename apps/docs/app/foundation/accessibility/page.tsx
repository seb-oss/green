'use client'

import { GdsFlex, GdsGrid } from '$/import/components'
import Hero from 'core/hero'

export default function Accessibility() {
  return (
    <GdsFlex flex-direction="column" gap="6xl">
      <Hero heading="Accessibility" preamble="Work in progress." />
      <GdsFlex gap="8xl">
        <GdsFlex gap="4xl" flex-direction="column">
          <GdsGrid columns="2"></GdsGrid>
        </GdsFlex>
      </GdsFlex>
    </GdsFlex>
  )
}
