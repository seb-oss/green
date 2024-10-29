'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsVideo = dynamic(
  () => import('@sebgroup/green-react/core/video').then((mod) => mod.GdsVideo),
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

const Video = () => (
  <GdsVideo
    src="/example/video.mp4"
    height="200px"
    object-fit="cover"
    muted
    autoplay
    loop
    playsinline
  ></GdsVideo>
)

export default Video
