'use client'

import { GdsFlex } from '$/import/components'
import ComponentList from 'core/components'

export default function Components() {
  return (
    <GdsFlex max-width="100ch" flex-direction="column" margin="0 auto">
      <ComponentList title="Components" />
    </GdsFlex>
  )
}
