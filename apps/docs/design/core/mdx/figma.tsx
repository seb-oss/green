'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { allComponents } from 'content'
import { GdsCard, GdsFlex, GdsText } from '$/import/components'
import { IconCheckmark, IconCrossLarge, IconImages } from '$/import/icons'

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
  const figureRef = useRef<HTMLDivElement | null>(null)
  const constructedURL = `https://api.seb.io/${path}/${path}.images.json`

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
    <GdsFlex
      flex-direction="column"
      margin="0 0 xl 0"
      gap="xs"
      max-height="max-content"
    >
      <GdsFlex
        border-radius="s"
        align-items="center"
        background="primary"
        max-height={height ? height : 'max-content'}
        height={height}
        {...rest}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @scope {
              svg {
                width: 100%;
                height: 100%;
              }
            }
          `,
          }}
        />
        {svgSource ? (
          <div
            ref={figureRef}
            dangerouslySetInnerHTML={{ __html: svgSource }}
          />
        ) : (
          <GdsCard border="none" padding="4xl" width="100%">
            <GdsFlex
              flex="1"
              align-items="center"
              justify-content="center"
              width="100%"
              color="disabled"
              level="3"
            >
              <IconImages />
            </GdsFlex>
          </GdsCard>
        )}
      </GdsFlex>
      {type === 'do' && (
        <GdsFlex color="positive" padding="0 m" gap="s">
          <IconCheckmark width={12} stroke={2} />
          <GdsText font-size="detail-xs" font-weight="book">
            {caption ? caption : 'Do'}
          </GdsText>
        </GdsFlex>
      )}
      {type === 'dont' && (
        <GdsFlex color="negative" padding="0 m" gap="s">
          <IconCrossLarge width={12} stroke={2} />
          <GdsText font-size="detail-xs" font-weight="book">
            {caption ? caption : "Don't"}
          </GdsText>
        </GdsFlex>
      )}
      {caption && !type && (
        <GdsFlex padding="0 m">
          <GdsText color="secondary" font-size="detail-xs" font-weight="book">
            {caption}
          </GdsText>
        </GdsFlex>
      )}
    </GdsFlex>
  )
}
