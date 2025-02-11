'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { allComponents } from 'content'
import { GdsCard } from '$/import/components'

interface FigmaProps {
  caption?: string
  id?: string
  height?: string
  [key: string]: any
}

export default function Figma({ caption, id, height, ...rest }: FigmaProps) {
  const slug = usePathname()

  const component = allComponents.find((comp) => comp.url_path === slug)
  const componentName =
    component?.title.toLocaleLowerCase().replace(/\s/g, '-') || ''
  console.log('componentName', componentName)
  const [svgSource, setSvgSource] = useState<string | null>(null)
  const figureRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const fetchFigmaNodes = async () => {
      try {
        const url = `https://seb-oss.github.io/green-content/${componentName}.json`
        const response = await fetch(url)
        if (!response.ok) {
          console.error('Failed to fetch figma nodes:', response.statusText)
          return
        }
        const data = await response.json()

        console.log('data', data)
        const match = data.nodes?.find((entry: any) => entry.id === id)
        if (match) {
          setSvgSource(match.svg)
        }
      } catch (error) {
        console.error('Error fetching figma nodes data:', error)
      }
    }

    if (id && componentName) {
      fetchFigmaNodes()
    }
  }, [id, componentName])

  return (
    <GdsCard margin="0 0 xl 0" max-height="max-content" {...rest}>
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
        <p>Image could not be found!</p>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </GdsCard>
  )
}
