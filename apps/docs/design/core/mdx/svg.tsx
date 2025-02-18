/* eslint-disable @next/next/no-img-element */

'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { allComponents } from 'content'
import { GdsCard, GdsFlex } from '$/import/components'

interface Props {
  name?: string
  alt?: string
  caption?: string
  height?: string
}

export default function SVG({ name, alt, caption, height, ...rest }: Props) {
  const slug = usePathname()
  const component = allComponents.find(
    (component) => component.url_path === slug,
  )

  const svgPath = component ? `${component.url_path}/${name}.svg` : ''

  return (
    <GdsFlex key={svgPath} flex-direction="column" gap="xs" margin="0 0 xl 0">
      <GdsCard {...rest}>
        <GdsFlex align-items="center" justify-content="center" padding="xl">
          <img
            style={{
              width: '100%',
            }}
            src={svgPath}
            alt={alt || ''}
          />
        </GdsFlex>
      </GdsCard>
      {caption && <span>{caption}</span>}
    </GdsFlex>
  )
}
