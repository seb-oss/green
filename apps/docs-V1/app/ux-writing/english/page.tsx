'use client'

import { GdsFlex, GdsGrid } from '$/import/components'
import Hero from 'core/hero'

export default function English() {
  return (
    <GdsFlex flex-direction="column" gap="6xl">
      <Hero heading="UX writing English" preamble="" compact />
      <GdsFlex gap="8xl">
        <GdsFlex gap="4xl" flex-direction="column">
          <GdsGrid columns="2"></GdsGrid>
        </GdsFlex>
      </GdsFlex>
    </GdsFlex>
  )
}
