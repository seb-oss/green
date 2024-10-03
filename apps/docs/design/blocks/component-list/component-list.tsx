'use client'

import ComponentCard from '@/component-card/component-card'
import Grid from '@/grid/grid'
import isDev from '$/dev/dev'
import { allComponents } from 'content'
import dynamic from 'next/dynamic'

const GdsGrid = dynamic(() => import('@sebgroup/green-react/src/core/grid'), {
  ssr: false
})

import './component-list.css'

export default function ComponentList({ title }: { title: string }) {
  const components = allComponents
    .filter(component => {
      if (component._raw.sourceFileName !== 'index.mdx') {
        return false
      }
      if (component.private && !isDev) {
        return false
      }
      return true
    })
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <section className="component-list">
      {title && <h2>{title}</h2>}
      <GdsGrid columns="2; m{1} l{3}" gap="m">
        {components.map((component, idx) => (
          <ComponentCard key={idx} {...component} />
        ))}
      </GdsGrid>
    </section>
  )
}
