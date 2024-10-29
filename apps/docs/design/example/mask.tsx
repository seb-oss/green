'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsMask = dynamic(
  () => import('@sebgroup/green-react/core/mask').then((mod) => mod.GdsMask),
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

const GdsImg = dynamic(
  () => import('@sebgroup/green-react/core/img').then((mod) => mod.GdsImg),
  {
    ssr: false,
  },
)
const GdsButton = dynamic(
  () =>
    import('@sebgroup/green-react/core/button').then((mod) => mod.GdsButton),
  {
    ssr: false,
  },
)

const IconArrowDown = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconArrowDown').then(
      (mod) => mod.IconArrowDown,
    ),
  {
    ssr: false,
  },
)

const Mask = () => (
  <GdsContainer position="relative" overflow="hidden">
    <GdsImg
      src="/example/mask.jpg"
      aspect-ratio="16/9"
      object-fit="cover"
      height="200px"
    ></GdsImg>
    <GdsMask
      mask-image="top"
      background-color="tertiary/0.9"
      z-index="2"
      position="absolute"
      inset="50% 0 0 0"
    >
      <GdsContainer position="absolute" inset="auto 20px 20px auto">
        <GdsButton rank="secondary">
          <IconArrowDown></IconArrowDown>
        </GdsButton>
      </GdsContainer>
    </GdsMask>
  </GdsContainer>
)

export default Mask
