import React, { ReactNode, useEffect, useRef } from "react"

import "./pattern.css"

interface PatternProps {
  children?: ReactNode
  caption?: string
  height?: string
  content?: string
}

export default function Pattern({
  children,
  caption,
  height,
  content,
}: PatternProps) {
  const style = height
    ? {
        "--gds-pattern-max-height": `${height}px`,
      }
    : {}

  const figureRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (height && figureRef.current) {
      figureRef.current.classList.add("custom")
    }
  }, [height])

  return (
    <div>
      {content ? (
        <figure
          ref={figureRef}
          className="preview"
          data-caption={caption}
          style={style as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <figure
          ref={figureRef}
          className="preview"
          data-caption={caption}
          style={style as React.CSSProperties}
        >
          {children}
        </figure>
      )}
      {caption && <span dangerouslySetInnerHTML={{ __html: caption }} />}
    </div>
  )
}
