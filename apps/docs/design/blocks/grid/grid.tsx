"use client"

import React from "react"
import useGridDebug from "$/grid-debug/grid-debug"

import "@/grid/css/grid.css"
import "@/grid/css/responsive.css"
import "@/grid/css/span.css"
import "@/grid/css/space.css"
import "@/grid/css/align.css"
import "@/grid/css/debug.css"

type GridGapSize = "small" | "medium" | "large"
type GridJustify = "start" | "end" | "center" | "between" | "around" | "evenly"
type GridAlign = "start" | "end" | "center"
type ContentInline = "auto" | "max-width"
type InlineSize = "full" | "max-content"

type GridProps = {
  children: React.ReactNode
  gapBlock?: GridGapSize
  gapInline?: GridGapSize
  paddingBlock?: GridGapSize
  paddingInline?: GridGapSize
  contentInline?: ContentInline
  mobile?: number
  tablet?: number
  columns: number
  fluid?: boolean
  justify?: GridJustify
  align?: GridAlign
  inlineSize?: InlineSize
}

export default function Grid({
  children,
  gapBlock,
  gapInline,
  paddingBlock,
  paddingInline,
  mobile,
  contentInline,
  tablet,
  columns = 12,
  fluid,
  justify,
  align,
  inlineSize,
}: GridProps) {
  if (columns < 1 || columns > 24) {
    throw new Error("The columns prop must be between 1 and 24.")
  }

  const debug = useGridDebug()
  return (
    <gds-grid
      {...(debug ? { debug: true } : {})}
      gap-block={gapBlock}
      gap-inline={gapInline}
      padding-block={paddingBlock}
      padding-inline={paddingInline}
      content-inline={contentInline}
      columns={columns.toString()}
      {...(mobile !== undefined ? { mobile: mobile.toString() } : {})}
      {...(tablet !== undefined ? { tablet: tablet.toString() } : {})}
      fluid={fluid}
      justify={justify}
      align={align}
      inline-size={inlineSize}
    >
      {children}
    </gds-grid>
  )
}
