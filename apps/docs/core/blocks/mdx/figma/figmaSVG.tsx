"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { allComponents } from "@/.contentlayer/generated"
import Pattern from "@/core/blocks/pattern/pattern"

interface FigmaSVGProps {
  caption?: string
  node?: string
  height?: string
}

export default function FigmaSVG({ caption, node, height }: FigmaSVGProps) {
  const slug = usePathname()
  const component = allComponents.find(
    (component) => component.url_path === slug
  )

  const svgSource = component?.figma_svgs.find(
    (svg_node: any) => svg_node.node === node
  )

  return (
    <Pattern caption={caption} height={height}>
      <div dangerouslySetInnerHTML={{ __html: svgSource?.svg }} />
    </Pattern>
  )
}
