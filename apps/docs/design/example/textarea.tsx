'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsTextarea = dynamic(
  () =>
    import('@sebgroup/green-react/core/textarea').then(
      (mod) => mod.GdsTextarea,
    ),
  {
    ssr: false,
  },
)

const Textarea = () => (
  <>
    <GdsTextarea label="Textarea"></GdsTextarea>
  </>
)

export default Textarea
