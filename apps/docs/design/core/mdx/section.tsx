import React, { ReactNode } from 'react'
import { GdsFlex } from '@sebgroup/green-react/core/flex/flex'

type SectionProps = {
  children: ReactNode
}

export default function Section({ children, ...props }: SectionProps) {
  return (
    <GdsFlex flex-direction="column" gap="s" {...props}>
      {children}
    </GdsFlex>
  )
}
