import React, { ReactNode } from "react"
import Pattern from "@/core/blocks/pattern/pattern"

import "./style.css"

type DontProps = {
  children: ReactNode
}

export default function Do({ children }: DontProps) {
  return (
    <div className="card dont">
      {children}
      <span>
        <svg viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        {"DON'T"}
      </span>
    </div>
  )
}
