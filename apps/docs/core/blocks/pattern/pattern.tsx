import React, { ReactNode } from "react"

import "./style.css"

interface PatternProps {
  children: ReactNode
  caption?: string
  height?: string
}

export default function Pattern({ children, caption, height }: PatternProps) {
  const style = height
    ? {
        maxBlockSize: `${height}px`,
        minBlockSize: `${height}px`,
        aspectRatio: "initial",
        width: "auto",
        height: "auto",
        padding: "48px",
      }
    : {}

  return (
    <>
      <figure className="preview" data-caption={caption} style={style}>
        {children}
      </figure>
      {caption && <span>{caption}</span>}
    </>
  )
}
