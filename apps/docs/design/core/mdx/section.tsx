import React, { ReactNode } from 'react'
import { GdsFlex } from '$/import/components'

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
