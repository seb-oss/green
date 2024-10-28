'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// import { GdsDropdown } from '@sebgroup/green-react/core/dropdown'
// import { GdsOption } from '@sebgroup/green-react/core/option'

const GdsDropdown = dynamic(
  () => import('@sebgroup/green-react/src/core/dropdown'),
  {
    ssr: false,
  },
)

const GdsOption = dynamic(
  () => import('@sebgroup/green-react/src/core/option'),
  {
    ssr: false,
  },
)

const Dropdown = () => (
  <>
    <GdsDropdown>
      <GdsOption value="1">Dropdown</GdsOption>
      <GdsOption value="2">Dropdwon Item</GdsOption>
    </GdsDropdown>
  </>
)

export default Dropdown
