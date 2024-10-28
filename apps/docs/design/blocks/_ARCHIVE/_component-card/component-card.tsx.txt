'use client'

import dynamic from 'next/dynamic'
import { Component } from 'content'
import Pattern from '@/pattern/pattern'

const GdsCard = dynamic(() => import('@sebgroup/green-react/src/core/card'), {
  ssr: false,
})

const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false,
})

export default function ComponentCard(component: Component) {
  return (
    <a href={component.url_path}>
      <GdsCard background="primary" border-radius="m" padding="m">
        {(component.preview?.trim() ?? '') ? (
          <Pattern height="240" content={component.preview ?? ''} />
        ) : (
          <Pattern height="240" content={component.figma_hero_svg.svg} />
        )}
        <div className="gds-card-title">{component.title}</div>
        <p className="gds-card-excerpt">{component.summary}</p>
      </GdsCard>
    </a>
  )
}
