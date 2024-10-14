'use client'

import ComponentCard from '@/component-card/component-card'
import Grid from '@/grid/grid'
import isDev from '$/dev/dev'
import { allComponents } from 'content'
import dynamic from 'next/dynamic'

const GdsGrid = dynamic(() => import('@sebgroup/green-react/src/core/grid'), {
  ssr: false,
})

const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false,
})

const GdsText = dynamic(() => import('@sebgroup/green-react/src/core/text'), {
  ssr: false,
})

import './component-list.css'

const components = allComponents
  .filter((component) => {
    if (component._raw.sourceFileName !== 'index.mdx') {
      return false
    }
    if (component.private && !isDev) {
      return false
    }
    return true
  })
  .sort((a, b) => a.title.localeCompare(b.title))

export default function ComponentList({ title }: { title: string }) {
  return (
    <GdsFlex gap="l" flex-direction="column">
      {title && (
        <GdsText tag="h2" font-size="heading-l" font-weight="book">
          {title}
        </GdsText>
      )}
      <GdsGrid columns="1; xs{2} l{3}" gap="m">
        {components.map((component, idx) => (
          <ComponentCard key={idx} {...component} />
        ))}
      </GdsGrid>
    </GdsFlex>
  )
}
