'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import {
  GdsBreadcrumbs,
  GdsCard,
  GdsFlex,
  GdsText,
  IconHomeOpen,
} from '@sebgroup/green-core/react'
import { Link } from '../../../design/atoms/link/link'

import './page.css'

type ColorOption = {
  name: string
  variants: {
    button: 'neutral' | 'positive' | 'negative'
    badge: 'information' | 'notice' | 'positive' | 'warning' | 'negative'
    card:
      | 'primary'
      | 'secondary'
      | 'tertiary'
      | 'positive'
      | 'negative'
      | 'notice'
      | 'warning'
      | 'information'
  }
}
// Then update the colorOptions array with the type
const colorOptions: ColorOption[] = [
  {
    name: 'default',
    variants: {
      button: 'neutral',
      badge: 'information',
      card: 'primary',
    },
  },
  {
    name: 'positive',
    variants: {
      button: 'positive',
      badge: 'positive',
      card: 'positive',
    },
  },
  {
    name: 'negative',
    variants: {
      button: 'negative',
      badge: 'negative',
      card: 'negative',
    },
  },
  {
    name: 'notice',
    variants: {
      button: 'neutral',
      badge: 'notice',
      card: 'notice',
    },
  },
  {
    name: 'warning',
    variants: {
      button: 'neutral',
      badge: 'warning',
      card: 'warning',
    },
  },
]

export function ColorsClient() {
  const [view, setView] = useState<'preview' | 'inspect'>('preview')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [selectedColor, setSelectedColor] = useState(colorOptions[0])

  const handleViewChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    setView(target.value as 'preview' | 'inspect')
  }

  return (
    <Core.GdsTheme color-scheme={theme} className="color-page">
      <GdsFlex flex-direction="column" gap="xl">
        <GdsBreadcrumbs size="small">
          <Link component="link" href="/">
            <IconHomeOpen size="m" slot="lead" />
            Home
          </Link>
          <Link component="link" href="/foundation">
            <Core.IconBrandGreen size="m" slot="lead" />
            Foundation
          </Link>
          <GdsText>Colors</GdsText>
        </GdsBreadcrumbs>

        <GdsCard
          flex-direction="column"
          gap="2xl"
          width="100%"
          height="80vh"
          overflow="hidden"
          position="relative"
        >
          {view === 'preview' && (
            <GdsCard
              variant="primary"
              width="100%"
              height="100%"
              justify-content="center"
              align-items="center"
            >
              <Core.GdsFlex
                align-items="center"
                flex-wrap="wrap"
                width="40%"
                gap="xl"
                position="relative"
              >
                <Core.GdsBadge variant={selectedColor.variants.badge}>
                  <Core.IconCircleInfo slot="lead"></Core.IconCircleInfo>
                  Badge
                </Core.GdsBadge>

                <Core.GdsCard variant={selectedColor.variants.card} padding="l">
                  Card
                </Core.GdsCard>

                <Core.GdsButton variant={selectedColor.variants.button}>
                  <Core.IconCreditCard slot="lead"></Core.IconCreditCard>
                  Button
                </Core.GdsButton>
                <Core.GdsButton
                  rank="secondary"
                  variant={selectedColor.variants.button}
                >
                  <Core.IconCreditCard slot="lead"></Core.IconCreditCard>
                  Button
                </Core.GdsButton>
                <Core.GdsButton
                  rank="tertiary"
                  variant={selectedColor.variants.button}
                >
                  <Core.IconCreditCard slot="lead"></Core.IconCreditCard>
                  Button
                </Core.GdsButton>

                <Core.GdsFlex gap="s" align-items="center">
                  <Core.GdsButton
                    variant={selectedColor.variants.button}
                    size="small"
                    label="Next step 2"
                  >
                    <Core.IconArrowRight></Core.IconArrowRight>
                  </Core.GdsButton>
                </Core.GdsFlex>
                <Core.GdsBadge
                  variant={selectedColor.variants.badge}
                  size="small"
                >
                  428
                </Core.GdsBadge>
                <Core.GdsCard
                  flex-direction="row"
                  color={selectedColor.variants.card}
                  padding="0"
                >
                  <Core.IconAi size="l"></Core.IconAi>
                </Core.GdsCard>
                <Core.GdsCard
                  flex-direction="row"
                  color={selectedColor.variants.card}
                  padding="0"
                >
                  <Core.IconRocket size="l"></Core.IconRocket>
                </Core.GdsCard>
                <Core.GdsFab
                  position="relative"
                  inset="initial"
                  size="small"
                  variant={selectedColor.variants.button}
                >
                  Floating
                  <Core.GdsSignal slot="trail" />
                </Core.GdsFab>
                <Core.GdsBadge
                  rounded
                  variant={selectedColor.variants.badge}
                  size="small"
                >
                  20+
                </Core.GdsBadge>
                <Core.GdsFab
                  position="relative"
                  inset="initial"
                  size="small"
                  rank="secondary"
                  variant={selectedColor.variants.button}
                >
                  Floating
                  <Core.GdsSignal slot="trail" />
                </Core.GdsFab>
                <Core.GdsFab
                  position="relative"
                  inset="initial"
                  size="small"
                  rank="tertiary"
                  variant={selectedColor.variants.button}
                >
                  Floating
                  <Core.GdsSignal slot="trail" />
                </Core.GdsFab>
              </Core.GdsFlex>
            </GdsCard>
          )}

          {view === 'inspect' && (
            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsFlex
                align-items="center"
                gap="s"
                background="secondary"
                padding="s"
                border-radius="s"
              >
                <Core.GdsCard
                  justify-content="center"
                  align-items="center"
                  width="240px"
                  height="max-content"
                  variant="secondary"
                >
                  <Core.GdsBadge variant={selectedColor.variants.badge}>
                    <Core.IconCircleInfo slot="lead"></Core.IconCircleInfo>
                    Badge
                  </Core.GdsBadge>
                </Core.GdsCard>
                <Core.GdsFlex
                  flex="1"
                  width="100%"
                  align-items="center"
                  gap="l"
                  padding-inline="0 m"
                >
                  <Core.GdsInput
                    plain
                    min-width="200px"
                    value={`<gds-badge variant='${selectedColor.variants.badge}'> ... </gds-badge>`}
                  ></Core.GdsInput>
                  <Core.GdsButton rank="tertiary">
                    <Core.IconCopy />
                  </Core.GdsButton>
                </Core.GdsFlex>
              </Core.GdsFlex>
            </Core.GdsFlex>
          )}
          <GdsCard
            position="absolute"
            variant="secondary"
            inset="auto 10px 10px 10px"
            flex-direction="row"
            justify-content="space-between"
            align-items="center"
            padding="xs"
          >
            <Core.GdsFlex
              gap="s"
              align-items="center"
              justify-content="center"
              height="100%"
            >
              {colorOptions.map((option) => (
                <Core.GdsCard
                  key={option.name}
                  level="2"
                  variant={option.variants.card}
                  width="xl"
                  height="xl"
                  padding="0"
                  className="color-picker"
                  border-color={
                    selectedColor.name === option.name
                      ? 'secondary'
                      : 'transparent'
                  }
                  border-width="2xs"
                  onClick={() => setSelectedColor(option)}
                />
              ))}
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
                <Core.GdsSegment value="inspect">Tokens</Core.GdsSegment>
              </Core.GdsSegmentedControl>
            </Core.GdsFlex>
          </GdsCard>
        </GdsCard>
      </GdsFlex>
    </Core.GdsTheme>
  )
}
