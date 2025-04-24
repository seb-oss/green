'use client'

import { Link } from 'next-view-transitions'
import { GdsCard, GdsFlex, GdsGrid, GdsText } from '$/import/components'

export default function Common({ title }: { title: string }) {
  return (
    <GdsFlex flex-direction="column" gap="m">
      <GdsText tag="h2">{title}</GdsText>
      <GdsGrid columns="2" gap="m">
        <GdsCard variant="primary" padding="l" gap="s" border-radius="s">
          <GdsText tag="h4">Select</GdsText>
          <GdsText>
            For single-choice selections in forms, based on the native select
            element, with browser-determined appearance.
          </GdsText>
          <GdsFlex margin="auto 0 0 0">
            <Link href="/component/select">Explore select</Link>
          </GdsFlex>
        </GdsCard>
        <GdsCard variant="primary" padding="l" gap="s" border-radius="s">
          <GdsText tag="h4">Dropdown</GdsText>
          <GdsText>
            For single and multiple-choice selections in forms, customizable
            with icons or badges and different layouts of the options.
          </GdsText>
          <GdsFlex margin="auto 0 0 0">
            <Link href="/component/dropdown">Explore dropdown</Link>
          </GdsFlex>
        </GdsCard>
      </GdsGrid>
    </GdsFlex>
  )
}
