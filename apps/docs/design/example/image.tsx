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

const GdsImg = dynamic(
  () => import('@sebgroup/green-react/core/img').then((mod) => mod.GdsImg),
  {
    ssr: false,
  },
)

const Image = () => (
  <GdsImg
    src="/example/img.jpg"
    aspect-ratio="1/1"
    object-fit="cover"
    height="200px"
  ></GdsImg>
)

export default Image
