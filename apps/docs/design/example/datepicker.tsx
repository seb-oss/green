'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsDatepicker = dynamic(
  () =>
    import('@sebgroup/green-react/core/datepicker').then(
      (mod) => mod.GdsDatepicker,
    ),
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
