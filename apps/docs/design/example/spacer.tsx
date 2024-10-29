'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsSpacer = dynamic(
  () =>
    import('@sebgroup/green-react/core/spacer').then((mod) => mod.GdsSpacer),
  {
    ssr: false,
  },
)
const GdsFlex = dynamic(
  () => import('@sebgroup/green-react/core/flex').then((mod) => mod.GdsFlex),
  {
    ssr: false,
  },
)
const GdsContainer = dynamic(
  () =>
    import('@sebgroup/green-react/core/container').then(
      (mod) => mod.GdsContainer,
    ),
  {
    ssr: false,
  },
)

const Spacer = () => (
  <GdsFlex
    flex-direction="column"
    align-items="center"
    justify-content="center"
    gap="l"
    min-width="100%"
    padding="l"
    height="200px"
  >
    <GdsContainer background="secondary" width="100%">
      <GdsSpacer size="s" />
    </GdsContainer>
    <GdsContainer background="secondary" width="100%">
      <GdsSpacer size="l" />
    </GdsContainer>
    <GdsContainer background="secondary" width="100%">
      <GdsSpacer size="2xl" />
    </GdsContainer>
  </GdsFlex>
)

export default Spacer
