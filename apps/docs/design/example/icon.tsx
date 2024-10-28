'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const IconRocket = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconRocket').then(
      (mod) => mod.IconRocket,
    ),
  {
    ssr: false,
  },
)

const Icon = () => (
  <>
    <IconRocket width="42" height="42"></IconRocket>
  </>
)

export default Icon
