'use client'

import { GdsButton, GdsContainer, GdsImg, GdsMask } from '$/import/components'
import { IconArrowDown } from '$/import/icons'

const Mask = () => (
  <GdsContainer position="relative" overflow="hidden">
    <GdsImg
      src="/example/mask.jpg"
      aspect-ratio="16/9"
      object-fit="cover"
      height="200px"
    />
    <GdsMask
      mask-image="top"
      background-color="tertiary/0.9"
      z-index="2"
      position="absolute"
      inset="50% 0 0 0"
    >
      <GdsContainer position="absolute" inset="auto 20px 20px auto">
        <GdsButton rank="secondary">
          <IconArrowDown />
        </GdsButton>
      </GdsContainer>
    </GdsMask>
  </GdsContainer>
)

export default Mask
