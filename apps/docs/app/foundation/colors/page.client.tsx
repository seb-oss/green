'use client'

import { useState } from 'react'

import {
  GdsBreadcrumbs,
  GdsCard,
  GdsFlex,
  GdsText,
  IconHomeOpen,
} from '@sebgroup/green-core/react'
import * as Core from '@sebgroup/green-core/react'

export function ColorsClient() {
  const [view, setView] = useState<'preview' | 'inspect'>('preview')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [variant, setVariant] = useState('notice')

  const handleViewChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    setView(target.value as 'preview' | 'inspect')
  }

  return (
    <Core.GdsTheme color-scheme={theme}>
      <GdsCard
        flex-direction="column"
        gap="2xl"
        width="100%"
        height="80vh"
        overflow="hidden"
        position="relative"
      >
        <GdsCard variant="primary" width="100%" height="100%">
          <Core.GdsBadge variant={'notice'}>Badge</Core.GdsBadge>
          <Core.GdsCard variant={variant}>Card</Core.GdsCard>
        </GdsCard>

        <GdsCard
          position="absolute"
          variant="secondary"
          inset="auto 10px 10px 10px"
          flex-direction="row"
          justify-content="space-between"
          align-items="center"
          padding="xs"
        >
          <Core.GdsFlex>
            <Core.GdsFlex gap="s">
              <Core.GdsCard
                level="2"
                variant="primary"
                width="xl"
                height="xl"
                padding="0"
                // When active
                border-color="secondary"
                border-width="2xs"
              ></Core.GdsCard>
              <Core.GdsCard
                variant="secondary"
                width="xl"
                height="xl"
                padding="0"
              ></Core.GdsCard>
              <Core.GdsCard
                variant="tertiary"
                width="xl"
                height="xl"
                padding="0"
              ></Core.GdsCard>
              <Core.GdsCard
                variant="positive"
                width="xl"
                height="xl"
                padding="0"
              ></Core.GdsCard>
              <Core.GdsCard
                variant="negative"
                width="xl"
                height="xl"
                padding="0"
              ></Core.GdsCard>
              <Core.GdsCard
                variant="notice"
                width="xl"
                height="xl"
                padding="0"
              ></Core.GdsCard>
              <Core.GdsCard
                variant="warning"
                width="xl"
                height="xl"
                padding="0"
              ></Core.GdsCard>
              <Core.GdsCard
                variant="information"
                width="xl"
                height="xl"
                padding="0"
              ></Core.GdsCard>
              <Core.GdsCard
                variant="copper-01"
                width="xl"
                height="xl"
                padding="0"
              ></Core.GdsCard>
              <Core.GdsCard
                variant="copper-02"
                width="xl"
                height="xl"
                padding="0"
              ></Core.GdsCard>
              <Core.GdsCard
                variant="purple-01"
                width="xl"
                height="xl"
                padding="0"
              ></Core.GdsCard>
            </Core.GdsFlex>
          </Core.GdsFlex>
          <Core.GdsFlex gap="s">
            <Core.GdsFlex>
              <Core.GdsButton
                rank={theme === 'light' ? 'secondary' : 'tertiary'}
                onClick={() => setTheme('light')}
              >
                <Core.IconSun size="s"></Core.IconSun>
              </Core.GdsButton>
              <Core.GdsButton
                rank={theme === 'dark' ? 'secondary' : 'tertiary'}
                onClick={() => setTheme('dark')}
              >
                <Core.IconMoon size="s"></Core.IconMoon>
              </Core.GdsButton>
            </Core.GdsFlex>
            <Core.GdsSegmentedControl
              size="small"
              value={view}
              onchange={handleViewChange}
            >
              <Core.GdsSegment value="preview">Preview</Core.GdsSegment>
              <Core.GdsSegment value="inspect">Inspect</Core.GdsSegment>
            </Core.GdsSegmentedControl>
          </Core.GdsFlex>
        </GdsCard>
      </GdsCard>
    </Core.GdsTheme>
  )
}
