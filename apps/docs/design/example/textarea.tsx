'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// import { GdsTextarea } from '@sebgroup/green-react/core/textarea'

const GdsTextarea = dynamic(
  () => import('@sebgroup/green-react/src/core/textarea'),
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
