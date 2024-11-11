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
    <GdsFlex
      flex-direction="column"
      max-width="100ch"
      gap="l; s{2xl}"
      min-height={compact ? '20vh' : '20vh; s{calc(100vh - 220px)}'}
      justify-content="flex-end"
    >
      <GdsText
        tag="h1"
        font-size="display-s; m{display-xl} l{display-2xl}"
        font-weight="book"
      >
        {heading}
      </GdsText>
      {preamble && (
        <GdsText
          font-size="heading-s; m{heading-m} l{heading-l}"
          color="secondary"
        >
          {preamble}
        </GdsText>
      )}
    </GdsFlex>
  )
}
