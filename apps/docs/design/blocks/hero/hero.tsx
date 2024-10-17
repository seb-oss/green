'use client'

import dynamic from 'next/dynamic'

const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false
})

const GdsContainer = dynamic(() => import('@sebgroup/green-react/src/core/container'), {
  ssr: false
})

const GdsText = dynamic(() => import('@sebgroup/green-react/src/core/text'), {
  ssr: false
})

export default function Hero({ heading, preamble }: { heading: string; preamble?: string }) {
  return (
    <GdsFlex flex-direction="column">
      <GdsText tag="h1" font-size="display-2xl">
        {heading}
      </GdsText>
      {preamble && <p className="gds-fs-headline-large color-secondary">{preamble}</p>}
    </GdsFlex>
  )
}
