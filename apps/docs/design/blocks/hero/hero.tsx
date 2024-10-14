'use client'

import dynamic from 'next/dynamic'

const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false,
})

const GdsContainer = dynamic(
  () => import('@sebgroup/green-react/src/core/container'),
  {
    ssr: false,
  },
)

const GdsText = dynamic(() => import('@sebgroup/green-react/src/core/text'), {
  ssr: false,
})

export default function Hero({
  heading,
  preamble,
}: {
  heading: string
  preamble?: string
}) {
  return (
    <GdsFlex flex-direction="column" gap="l" padding="xl 0 0">
      <GdsText tag="h1" font-size="heading-xl; m{display-l}">
        {heading}
      </GdsText>
      {preamble && (
        <GdsText font-size="heading-m; m{heading-xl}" color="secondary">
          {preamble}
        </GdsText>
      )}
    </GdsFlex>
  )
}
