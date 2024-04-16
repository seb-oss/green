import React, { ReactNode } from "react"

type LangProps = {
  children: ReactNode
}

export default function LangSE({ children }: LangProps) {
  return <span lang="se">{children}</span>
}
