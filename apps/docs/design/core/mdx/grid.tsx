'use client'

import React, { ReactNode } from 'react'
import dynamic from 'next/dynamic'

// import { GdsGrid } from '@sebgroup/green-react/core/grid/grid'

const GdsGrid = dynamic(() => import('@sebgroup/green-react/core/grid'), {
  ssr: false,
})

type Props = {
  children: ReactNode
}

export default function Grid({ children, ...props }: Props) {
  return (
    <GdsGrid gap="l" {...props}>
      {children}
    </GdsGrid>
  )
}
