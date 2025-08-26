'use client'

import { GdsFlex, GdsMask, GdsYearpicker } from '$/import/components'

const Yearpicker = ({ cover }: { cover: boolean }) => (
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
    <GdsYearpicker />
  </GdsFlex>
)

export default Yearpicker
