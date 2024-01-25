import React, { ReactNode } from "react"
import Pattern from "@/core/blocks/pattern/pattern"

import "./style.css"

type DoProps = {
  children: ReactNode
}

export default function Do({ children }: DoProps) {
  return (
    <div className="card do">
      {children}
      <span>
        <svg viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        DO
      </span>
    </div>
  )
}
