'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsDivider = dynamic(
  () =>
    import('@sebgroup/green-react/core/divider').then((mod) => mod.GdsDivider),
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

const Divider = () => (
  <GdsFlex min-width="200px">
    <GdsDivider></GdsDivider>
  </GdsFlex>
)

export default Divider
