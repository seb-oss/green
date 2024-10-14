'use client'

import Card from '@/card/card'
import Pattern from '@/pattern/pattern'
import { Component } from 'content'

import dynamic from 'next/dynamic'

const GdsCard = dynamic(() => import('@sebgroup/green-react/src/core/card'), {
  ssr: false,
})

const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false,
})

const GdsText = dynamic(() => import('@sebgroup/green-react/src/core/text'), {
  ssr: false,
})

export default function ComponentCard(component: Component) {
  return (
    <a href={component.url_path} style={{ display: 'flex' }}>
      <GdsCard background="primary" border-radius="m" padding="m">
        <GdsFlex gap="xs" flex-direction="column">
          {(component.preview?.trim() ?? '') ? (
            <Pattern height="240" content={component.preview ?? ''} />
          ) : (
            <Pattern height="240" content={component.figma_hero_svg.svg} />
          )}
          <GdsText font-size="body-m" font-weight="book">
            {component.title}
          </GdsText>
          <GdsText font-size="body-m">{component.summary}</GdsText>
        </GdsFlex>
      </GdsCard>
    </a>
  )
}
