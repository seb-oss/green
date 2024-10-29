'use client'

import React, { ReactNode } from 'react'
import { GdsGrid } from '$/import/components'

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
