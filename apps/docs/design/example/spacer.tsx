'use client'

import { GdsContainer, GdsFlex, GdsSpacer } from '$/import/components'

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
