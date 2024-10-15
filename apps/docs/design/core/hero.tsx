'use client'

import GdsFlex from '@sebgroup/green-react/src/core/flex'
import GdsText from '@sebgroup/green-react/src/core/text'

export default function Hero({
  heading,
  preamble,
}: {
  heading: string
  preamble?: string
}) {
  return (
    <GdsFlex flex-direction="column" max-width="100ch" gap="2xl">
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
