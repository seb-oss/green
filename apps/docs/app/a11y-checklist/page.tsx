'use client'

import { GdsCard, GdsFlex } from '$/import/components'
import { IconSquareCheck } from '$/import/icons'

//import { Checkbox } from '@sebgroup/green-react'

export default function A11yChecklist() {
  return (
    <GdsFlex
      flex-direction="column"
      justify-content="space-between"
      align-items="space-between"
      gap="2xl"
      width="500px"
    >
      <GdsCard>
        <GdsFlex align-items="center" justify-content="space-between">
          <GdsFlex>
            <IconSquareCheck />
            Isabelle
          </GdsFlex>
          <IconSquareCheck />
        </GdsFlex>
      </GdsCard>
      <GdsCard>
        <GdsFlex align-items="center" justify-content="space-between">
          <GdsFlex>
            <IconSquareCheck />
            Isabelle
          </GdsFlex>
          <IconSquareCheck />
        </GdsFlex>
      </GdsCard>
      <GdsCard>
        <GdsFlex align-items="center" justify-content="space-between">
          <GdsFlex>
            <IconSquareCheck />
            Isabelle
          </GdsFlex>
          <IconSquareCheck />
        </GdsFlex>
      </GdsCard>
    </GdsFlex>
  )
}
