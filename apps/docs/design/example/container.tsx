'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsContainer = dynamic(
  () =>
    import('@sebgroup/green-react/core/container').then(
      (mod) => mod.GdsContainer,
    ),
  {
    ssr: false,
  },
)

const Container = () => (
  <>
    <GdsContainer
      padding="2xl 4xl"
      background="secondary"
      border-radius="s s 0 0"
      border="0 0 4xs/secondary 0"
    >
      Container
    </GdsContainer>
  </>
)

export default Container
