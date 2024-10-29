'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsText = dynamic(
  () => import('@sebgroup/green-react/core/text').then((mod) => mod.GdsText),
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

const Text = () => (
  <GdsFlex flex-direction="column">
    <GdsText font-weight="bold">Bold</GdsText>
    <GdsText font-size="body-s">Size: Body Small</GdsText>
    <GdsText font-size="display-s" lines="2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </GdsText>
  </GdsFlex>
)

export default Text
