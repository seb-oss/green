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
  <GdsContainer position="relative" border-radius="s" overflow="hidden">
    <GdsImg
      src="https://github.com/user-attachments/assets/fdbfca17-c5b7-43cc-b846-6e1ab68e5d69"
      aspect-ratio="1/1"
      object-fit="cover"
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
