'use client'

import { GdsCard, GdsGrid } from '$/import/components'

const Card = () => (
  <GdsGrid columns="3" gap="xs">
    <GdsCard padding="s" shadow="m" variant="secondary">
      01
    </GdsCard>
    <GdsCard padding="s" shadow="m" variant="secondary">
      02
    </GdsCard>
    <GdsCard padding="s" shadow="m" variant="secondary">
      03
    </GdsCard>
    <GdsCard padding="s" shadow="m" variant="secondary">
      04
    </GdsCard>
    <GdsCard padding="s" shadow="m" variant="secondary">
      05
    </GdsCard>
    <GdsCard padding="s" shadow="m" variant="secondary">
      06
    </GdsCard>
  </GdsGrid>
)

export default Card
