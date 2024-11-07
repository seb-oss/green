'use client'

// import * as React from 'react'
import React, { useRef } from 'react'
import { usePathname } from 'next/navigation'
import { allComponents } from 'content'
import { GdsCard } from '$/import/components'

// import Pattern from 'core/pattern'

interface FigmaProps {
  caption?: string
  node?: string
  height?: string
}

export default function Figma({ caption, node, height }: FigmaProps) {
  const slug = usePathname()
  const component = allComponents.find(
    (component) => component.url_path === slug,
  )

  const svgSource = component?.figma_svgs.find(
    (svg_node: any) => svg_node.node === node,
  )

  const figureRef = useRef<HTMLElement | null>(null)

  return (
    <GdsCard>
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
      {/* {caption} */}
      {/* {height} */}
      {/* {svgSource?.svg} */}
      {/* <Pattern caption={caption} height={height} content={svgSource?.svg} /> */}
    </GdsCard>
  )
}
