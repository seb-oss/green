'use client'

import { GdsFlex, GdsText } from '$/import/components'

export default function Hero({
  heading,
  preamble,
  compact,
}: {
  heading: string
  preamble?: string
  compact?: boolean
}) {
  return (
    <GdsFlex flex-direction="column" gap="l; s{2xl}">
      <GdsText tag="h1" font-size="display-s; m{display-m}">
        {heading}
      </GdsText>
      {preamble && (
        <GdsText
          font-size="heading-s; m{heading-m} l{heading-m}"
          color="secondary"
        >
          {preamble}
        </GdsText>
      )}
    </GdsFlex>
  )
}
