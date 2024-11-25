'use client'

import ComponentList from 'core/components'

import { GdsFlex } from '@sebgroup/green-react/core/*'

export default function Components() {
  return (
    <GdsFlex max-width="100ch" flex-direction="column" margin="0 auto">
      <ComponentList title="Components" />
    </GdsFlex>
  )
}
