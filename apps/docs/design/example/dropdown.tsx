'use client'

import React from 'react'
import { GdsDropdown } from '@sebgroup/green-react/core/dropdown'
import { GdsOption } from '@sebgroup/green-react/core/option'

const Dropdown = () => (
  <>
    <GdsDropdown>
      <GdsOption value="1">Dropdown</GdsOption>
      <GdsOption value="2">Dropdwon Item</GdsOption>
    </GdsDropdown>
  </>
)

export default Dropdown
