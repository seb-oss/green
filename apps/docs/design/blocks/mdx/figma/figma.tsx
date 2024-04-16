"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Pattern from "@/pattern/pattern"
import { allComponents } from "content"

interface FigmaProps {
  caption?: string
  node?: string
  height?: string
}

export default function Figma({ caption, node, height }: FigmaProps) {
  const slug = usePathname()
  const component = allComponents.find(
    (component) => component.url_path === slug
  )

  const svgSource = component?.figma_svgs.find(
    (svg_node: any) => svg_node.node === node
  )

  return <Pattern caption={caption} height={height} content={svgSource?.svg} />
}
