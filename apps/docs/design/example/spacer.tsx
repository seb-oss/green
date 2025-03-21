'use client'

import { GdsDiv, GdsFlex, GdsSpacer } from '$/import/components'

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
    <GdsDiv background="secondary" width="100%">
      <GdsSpacer size="s" />
    </GdsDiv>
    <GdsDiv background="secondary" width="100%">
      <GdsSpacer size="l" />
    </GdsDiv>
    <GdsDiv background="secondary" width="100%">
      <GdsSpacer size="2xl" />
    </GdsDiv>
  </GdsFlex>
)

export default Spacer
