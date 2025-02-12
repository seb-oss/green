'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { allComponents } from 'content'
import { GdsCard, GdsFlex, GdsText } from '$/import/components'
import { IconCheckmark, IconCrossLarge } from '$/import/icons'

interface FigmaProps {
  caption?: string
  id?: string
  height?: string
  type?: 'do' | 'dont'
  [key: string]: any
}

export default function Figma({
  caption,
  type,
  id,
  height,
  ...rest
}: FigmaProps) {
  const slug = usePathname()

  const component = allComponents.find((comp) => comp.url_path === slug)
  const path = component?.pathSegments?.[0]?.pathName || ''

  const [svgSource, setSvgSource] = useState<string | null>(null)
  const figureRef = useRef<HTMLElement | null>(null)
  const constructedURL = `https://seb-oss.github.io/green-content/${path}.json`

  useEffect(() => {
    const fetchFigmaNodes = async () => {
      try {
        const response = await fetch(constructedURL)

        if (!response.ok) {
          console.error('Failed to fetch figma nodes:', response.statusText)
          return
        }

        const data = await response.json()
        const match = data.nodes?.find((entry: any) => entry.id === id)

        if (match) {
          setSvgSource(match.svg)
        }
      } catch (error) {
        console.error('Error fetching figma nodes data:', error)
      }
    }

    if (id && path) {
      fetchFigmaNodes()
    }
  }, [id, path])

  return (
    <GdsCard margin="0 0 xl 0" padding="xs" max-height="max-content" {...rest}>
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
        <GdsCard>Image could not be found!</GdsCard>
      )}

      {type === 'do' && (
        <GdsCard variant="positive" padding="xs m">
          <GdsFlex gap="s">
            <IconCheckmark width={12} stroke={2} />
            <GdsText tag="small" font-weight="book">
              {caption ? caption : 'Do'}
            </GdsText>
          </GdsFlex>
        </GdsCard>
      )}
      {type === 'dont' && (
        <GdsCard variant="negative" padding="xs m">
          <GdsFlex gap="s">
            <IconCrossLarge width={12} stroke={2} />
            <GdsText tag="small" font-weight="book">
              {caption ? caption : "Don't"}
            </GdsText>
          </GdsFlex>
        </GdsCard>
      )}
      {caption && !type && (
        <GdsCard padding="xs m">
          <GdsText tag="small" font-weight="book">
            {caption}
          </GdsText>
        </GdsCard>
      )}
    </GdsCard>
  )
}
