import React, { ReactNode } from "react"

type RowProps = {
  children: ReactNode
}

export default function Col({ children }: RowProps) {
  return <div className="col">{children}</div>
}
