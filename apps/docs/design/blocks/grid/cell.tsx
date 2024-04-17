import React, { ReactNode } from "react"

interface CellProps {
  children?: ReactNode
  span?: string
}

export default function Cell({ children, ...rest }: CellProps) {
  return <gds-cell {...rest}>{children}</gds-cell>
}
