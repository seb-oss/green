import React, { ReactNode } from "react"

import "./style.css"

type RowProps = {
  children: ReactNode
}

export default function Row({ children }: RowProps) {
  return <div className="row">{children}</div>
}
