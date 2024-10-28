'use client'

import dynamic from 'next/dynamic'

const GdsFlex = dynamic(
  () => import('@sebgroup/green-react/core/flex').then((mod) => mod.GdsFlex),
  {
    ssr: false,
  },
)

const GdsText = dynamic(
  () => import('@sebgroup/green-react/core/text').then((mod) => mod.GdsText),
  {
    ssr: false,
  },
)

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
