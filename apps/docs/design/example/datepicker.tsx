// eslint-disable-next-line
'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// import { GdsDatepicker } from '@sebgroup/green-react/core/datepicker'

const GdsDatepicker = dynamic(
  () => import('@sebgroup/green-react/src/core/datepicker'),
  {
    ssr: false,
  },
)

const Datepicker = () => (
  <>
    <GdsDatepicker></GdsDatepicker>
  </>
)

export default Datepicker
