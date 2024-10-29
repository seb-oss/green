'use client'

import { GdsVideo } from '$/import/components'

const Video = () => (
  <GdsVideo
    src="/example/video.mp4"
    height="200px"
    object-fit="cover"
    muted
    autoplay
    loop
    playsinline
  />
)

export default Video
