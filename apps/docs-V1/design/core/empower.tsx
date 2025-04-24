'use client'

import { GdsFlex, GdsGrid, GdsText } from '$/import/components'

export default function Empower({ title }: { title: string }): JSX.Element {
  return (
    <GdsFlex flex-direction="column">
      <GdsGrid columns="1; l{2}" gap="m">
        {title && (
          <GdsText tag="h2" margin="0">
            {title}
          </GdsText>
        )}
        <GdsText tag="p" font-size="heading-m" color="secondary">
          A framework with accessibility and usability rooted at its core, Green
          Design System empowers designers and developers to create with speed
          and precision. It ensures a seamless and consistent visual experience
          across our entire product suite.
        </GdsText>
      </GdsGrid>
    </GdsFlex>
  )
}
