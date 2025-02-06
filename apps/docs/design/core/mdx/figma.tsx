'use client'

import React, { useRef } from 'react'
import { usePathname } from 'next/navigation'
import { allComponents } from 'content'
import { GdsCard } from '$/import/components'

interface FigmaProps {
  caption?: string
  node?: string
  height?: string
  [key: string]: any
}

export default function Figma({ caption, node, height, ...rest }: FigmaProps) {
  const slug = usePathname()
  const component = allComponents.find(
    (component) => component.url_path === slug,
  )

  const svgSource = component?.figma_svgs.find(
    (svg_node: any) => svg_node.node === node,
  )

  const figureRef = useRef<HTMLElement | null>(null)

  return (
    <GdsCard {...rest}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @scope {
              svg {
                width: 100%;
              }
            }
          `,
        }}
      />
      <figure
        ref={figureRef}
        dangerouslySetInnerHTML={{ __html: svgSource?.svg }}
      />
    </GdsCard>
  )
}
