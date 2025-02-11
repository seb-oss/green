'use client'

import React, { useEffect, useRef, useState } from 'react'
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
  // Find the current component from allComponents based on the current URL path.
  const component = allComponents.find((comp) => comp.url_path === slug)

  // State for the inline SVG source.
  const [svgSource, setSvgSource] = useState<string | null>(null)
  // useRef can be used if you wish to manipulate the <figure> element later.
  const figureRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Fetch the JSON file containing node metadata and SVG data.
    const fetchFigmaNodes = async () => {
      try {
        const response = await fetch(
          'https://seb-oss.github.io/green-content/figma-nodes.json',
        )
        if (!response.ok) {
          console.error('Failed to fetch figma nodes:', response.statusText)
          return
        }
        const data = await response.json()
        // Assuming data is an array of objects with node, component, label, svg properties.
        // Look for the matching entry where both the node and the component match.
        const match = data.find((entry: any) => {
          return entry.node === node && entry.component === component?.title
        })
        if (match && match.svg) {
          setSvgSource(match.svg)
        }
      } catch (error) {
        console.error('Error fetching figma nodes data:', error)
      }
    }

    if (node && component) {
      fetchFigmaNodes()
    }
  }, [node, component])

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
      {svgSource ? (
        <figure
          ref={figureRef}
          dangerouslySetInnerHTML={{ __html: svgSource }}
          style={{ height }}
        />
      ) : (
        <p>Loading SVG...</p>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </GdsCard>
  )
}
