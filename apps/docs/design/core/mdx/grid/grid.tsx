import React, { ReactNode } from 'react'
import { GdsGrid } from '@sebgroup/green-react/core/components/grid/grid'

type DontProps = {
  children: ReactNode
}

export default function Do({ children }: DontProps) {
  return <GdsGrid>{children}</GdsGrid>
}
