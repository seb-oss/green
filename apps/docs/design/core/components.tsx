'use client'

import { allComponents } from 'content'

import GdsGrid from '@sebgroup/green-react/src/core/grid'
import GdsText from '@sebgroup/green-react/src/core/text'
import GdsFlex from '@sebgroup/green-react/src/core/flex'

export default function Components({ title }: { title: string }) {
  const components = allComponents
    .filter((component) => {
      if (component._raw.sourceFileName !== 'index.mdx') {
        return false
      }
      if (component.private) {
        return false
      }
      return true
    })
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <GdsFlex gap="m" flex-direction="column">
      {title && <GdsText tag="h2">{title}</GdsText>}
      <GdsGrid columns="2; m{1} l{3}" gap="m">
        {components.map((component, idx) => (
          //   <ComponentCard key={idx} {...component} />
          <GdsFlex key={idx} align-items="center">
            <GdsText tag="h3">{component.title}</GdsText>
          </GdsFlex>
        ))}
      </GdsGrid>
    </GdsFlex>
  )
}
