'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsDropdown = dynamic(
  () =>
    import('@sebgroup/green-react/core/dropdown').then(
      (mod) => mod.GdsDropdown,
    ),
  {
    ssr: false,
  },
)

const GdsOption = dynamic(
  () =>
    import('@sebgroup/green-react/core/option').then((mod) => mod.GdsOption),
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
