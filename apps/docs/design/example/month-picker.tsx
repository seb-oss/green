'use client'

import { GdsFlex, GdsMask } from '$/import/components'

const MonthPicker = ({ cover }: { cover: boolean }) => (
  <GdsFlex
    position="relative"
    height={cover ? '200px' : ''}
    width="100%"
    align-items="flex-start"
    justify-content="center"
  >
    {cover && (
      <GdsMask
        inset="0"
        mask-image="top"
        background-color="secondary/0.96"
        position="absolute"
        z-index="4"
        pointer-events="none"
      ></GdsMask>
    )}
    Test
  </GdsFlex>
)

export default MonthPicker
