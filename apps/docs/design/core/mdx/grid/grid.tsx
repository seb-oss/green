'use client'

import React, { ReactNode } from 'react'
import { GdsGrid } from '@sebgroup/green-react/core/grid/grid'

type Props = {
  children: ReactNode
}

export default function Grid({ children, ...props }: Props) {
  return <GdsGrid {...props}>{children}</GdsGrid>
}
