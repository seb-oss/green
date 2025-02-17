'use client'

import { Link } from 'next-view-transitions'
import {
  GdsBadge,
  GdsCard,
  GdsFlex,
  GdsGrid,
  GdsText,
} from '$/import/components'

export default function Common({ title }: { title: string }) {
  return (
    <GdsFlex flex-direction="column" gap="m">
      <GdsText tag="h2">{title}</GdsText>
      <GdsGrid columns="2" gap="m">
        <GdsCard>
          <GdsFlex flex-direction="column" gap="s" height="100%">
            <GdsText tag="h4">Select</GdsText>
            <GdsText>
              For single-choice selections in forms, based on the native select
              element, with browser-determined appearance.
            </GdsText>
            <GdsFlex margin="auto 0 0 0">
              <Link href="/component/select">
                <GdsText color="primary">Explore Select</GdsText>
              </Link>
            </GdsFlex>
          </GdsFlex>
        </GdsCard>
        <GdsCard>
          <GdsFlex flex-direction="column" gap="s" height="100%">
            <GdsText tag="h4">Dropdown</GdsText>
            <GdsText>
              For single and multiple-choice selections or actions outside
              forms, customizable with icons or badges and different layouts off
              the options.
            </GdsText>
            <GdsFlex margin="auto 0 0 0">
              <Link href="/component/dropdown">
                <GdsText color="primary">Explore Dropdown</GdsText>
              </Link>
            </GdsFlex>
          </GdsFlex>
        </GdsCard>
      </GdsGrid>
    </GdsFlex>
  )
}
