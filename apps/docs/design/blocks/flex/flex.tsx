import React from "react"

import "@/flex/flex.css"

type FlexJustify = "start" | "end" | "center" | "between" | "around" | "evenly"
type FlexAlign = "start" | "end" | "center"
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse"
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse"
type FlexGapSize = "small" | "medium" | "large"
type FlexInlineSize = "full" | "max-content"

type FlexProps = {
  children: React.ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  wrap?: FlexWrap
  direction?: FlexDirection
  gap?: FlexGapSize
  inlineSize?: FlexInlineSize
  directionTablet?: FlexDirection
  directionMobile?: FlexDirection

  // padding
}

export default function Flex({
  children,
  justify,
  align,
  wrap,
  direction,
  directionTablet,
  directionMobile,
  gap,
}: FlexProps) {
  let className = "gds-flex"
  if (justify) {
    className += ` gds-flex-justify-${justify}`
  }
  if (align) {
    className += ` gds-flex-align-${align}`
  }
  if (wrap) {
    className += ` gds-flex-wrap-${wrap}`
  }
  if (direction) {
    className += ` gds-flex-direction-${direction}`
  }
  if (gap) {
    className += ` gds-flex-gap-${gap}`
  }
  return <div className={className}>{children}</div>
}
