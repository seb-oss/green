'use client'

import { GdsFlex, GdsText } from '$/import/components'

export default function Hero({
  heading,
  preamble,
}: {
  heading: string
  preamble?: string
}) {
  return (
    <GdsFlex
      flex-direction="column"
      max-width="100ch"
      gap="2xl"
      min-height="calc(100vh - 220px)"
      justify-content="flex-end"
    >
      <GdsText tag="h1" font-size="display-2xl" font-weight="book">
        {heading}
      </GdsText>
      {preamble && (
        <GdsText font-size="heading-l" color="secondary">
          {preamble}
        </GdsText>
      )}
    </GdsFlex>
  )
}
