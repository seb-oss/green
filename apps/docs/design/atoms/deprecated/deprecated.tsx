// DeprecatedIcons.tsx
'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'

interface IconMapping {
  old: string
  new: string
}

const iconMappings: IconMapping[] = [
  { old: 'archive', new: 'archive' },
  { old: 'arrow-down', new: 'arrow-down' },
  { old: 'arrow-left', new: 'arrow-left' },
  { old: 'arrow-right', new: 'arrow-right' },
  { old: 'arrow-up', new: 'arrow-up' },
  { old: 'arrow-to-down', new: 'arrow-wall-down' },
  { old: 'at', new: 'at' },
  { old: 'balance-scale', new: 'law' },
  { old: 'bars', new: 'bars-three' },
  { old: 'bell', new: 'bell' },
  { old: 'book', new: 'book' },
  { old: 'bookmark', new: 'bookmark' },
  { old: 'briefcase', new: 'bag' },
  { old: 'calculator', new: 'calculator' },
  { old: 'calendar-alt', new: 'calendar' },
  { old: 'check', new: 'checkmark' },
  { old: 'chevron-down', new: 'chevron-bottom' },
  { old: 'chevron-left', new: 'chevron-left' },
  { old: 'chevron-right', new: 'chevron-right' },
  { old: 'chevron-up', new: 'chevron-top' },
  { old: 'clock', new: 'clock' },
  { old: 'cog', new: 'settings-gear' },
  { old: 'comment-dots', new: 'bubble-annotation' },
  { old: 'comments', new: 'bubbles' },
  { old: 'copy', new: 'files' },
  { old: 'credit-card', new: 'credit-card' },
  { old: 'desktop-alt', new: 'television' },
  { old: 'edit', new: 'text-edit' },
  { old: 'envelope', new: 'email' },
  { old: 'exclamation-triangle', new: 'triangle-exclamation' },
  { old: 'external-link-square', new: 'square-arrow-top-right' },
  { old: 'file', new: 'file-bend' },
  { old: 'filter', new: 'settings-slider-hor' },
  { old: 'heart', new: 'heart' },
  { old: 'home', new: 'home-open' },
  { old: 'info-circle', new: 'circle-info' },
  { old: 'ink', new: 'chain-link' },
  { old: 'lock-alt', new: 'lock' },
  { old: 'long-arrow-down', new: 'arrow-down' },
  { old: 'long-arrow-left', new: 'arrow-left' },
  { old: 'long-arrow-right', new: 'arrow-right' },
  { old: 'long-arrow-up', new: 'arrow-up' },
  { old: 'minus', new: 'minus-small' },
  { old: 'mobile', new: 'phone' },
  { old: 'percent', new: 'percent' },
  { old: 'phone', new: 'call' },
  { old: 'plus', new: 'plus-small' },
  { old: 'print', new: 'printer' },
  { old: 'question-square', new: 'circle-questionmark' },
  { old: 'reply', new: 'arrow-share-left' },
  { old: 'reply-all', new: 'arrow-share-left' },
  { old: 'save', new: 'floppy-disk' },
  { old: 'search', new: 'magnifying-glass' },
  { old: 'share-alt', new: 'share' },
  { old: 'sign-in', new: 'arrow-box-right' },
  { old: 'sign-out', new: 'arrow-box-left' },
  { old: 'sliders-h', new: 'settings-slider-hor' },
  { old: 'sliders-v', new: 'settings-slider-hor' },
  { old: 'square', new: 'square-placeholder' },
  { old: 'star', new: 'star' },
  { old: 'sync', new: 'arrow-rotate-right-left' },
  { old: 'tablet', new: 'devices' },
  { old: 'cross', new: 'cross-small' },
  { old: 'trash-alt', new: 'trash-can' },
  { old: 'undo', new: 'arrow-rotate-counter-clockwise' },
  { old: 'unlock-alt', new: 'unlocked' },
  { old: 'upload', new: 'arrow-out-of-box' },
  { old: 'user-alt', new: 'people' },
  { old: 'ellipsis-h', new: 'dot-grid-one-horizontal' },
  { old: 'globe', new: 'globus' },
  { old: 'user-friends', new: 'group' },
]

function calculateScore(text: string, query: string): number {
  const normalizedText = text.toLowerCase()
  const normalizedQuery = query.toLowerCase()
  return normalizedText.includes(normalizedQuery) ? 1 : 0
}

export function DeprecatedIcons() {
  const [query, setQuery] = useState('')

  const filteredIcons = useMemo(() => {
    if (!query.trim()) return iconMappings

    return iconMappings.filter((icon) => {
      const oldNameScore = calculateScore(icon.old, query)
      const newNameScore = calculateScore(icon.new, query)
      return oldNameScore > 0 || newNameScore > 0
    })
  }, [query])

  return (
    <Core.GdsFlex flex-direction="column" gap="4xl" width="100%" font="body-s">
      <Core.GdsFlex
        justify-content="center"
        flex-direction="column"
        gap="2xl"
        width="700px"
        margin="auto"
        text-align="centers"
        align-items="center"
      >
        <Core.GdsFlex flex-direction="column" gap="m" padding="xl 0 0 0">
          <Core.GdsFlex gap="s" justify-content="center">
            <Core.GdsText font="display-m">Deprecated Icons</Core.GdsText>
          </Core.GdsFlex>
          <Core.GdsText
            font="preamble-m"
            color="02"
            max-width="68ch"
            text-wrap="pretty"
          >
            Reference guide for old and new icon names
          </Core.GdsText>
        </Core.GdsFlex>
      </Core.GdsFlex>

      <Core.GdsFlex
        flex-direction="column"
        width="680px"
        gap="l"
        margin="0 auto"
      >
        <Core.GdsInput
          value={query}
          plain
          onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
          grid-column="1 / span 6"
          clearable
        >
          <Core.IconMagnifyingGlass slot="lead" />
        </Core.GdsInput>
        <Core.GdsFlex align-items="center" gap="xs">
          <Core.GdsFlex align-items="center" gap="xs" flex="1" padding="0 xs">
            <Core.GdsDiv
              display="flex"
              background={'negative-01'}
              min-width="20px"
              max-width="20px"
              min-height="20px"
              max-height="20px"
              border-radius="max"
              justify-content="center"
              align-items="center"
              margin="3xs 0 0 0"
              color="negative"
            >
              <Core.IconCrossLarge size="s" color="negative-01" />
            </Core.GdsDiv>
            Old
          </Core.GdsFlex>
          <Core.GdsFlex
            align-items="center"
            justify-content="center"
            width="80px"
          ></Core.GdsFlex>
          <Core.GdsFlex align-items="center" gap="xs" flex="1" padding="0 xs">
            <Core.GdsDiv
              display="flex"
              background={'positive-01'}
              min-width="20px"
              max-width="20px"
              min-height="20px"
              max-height="20px"
              border-radius="max"
              justify-content="center"
              align-items="center"
              margin="3xs 0 0 0"
              color="positive"
            >
              <Core.IconCheckmark size="s" color="positive-01" />
            </Core.GdsDiv>
            New
          </Core.GdsFlex>
        </Core.GdsFlex>
        {filteredIcons.length > 0 ? (
          <Core.GdsFlex gap="l" align-items="center" flex-direction="column">
            {filteredIcons.map((icon) => (
              <Core.GdsFlex key={icon.old} gap="m" min-width="100%">
                <Core.GdsCard flex="1">{icon.old}</Core.GdsCard>
                <Core.GdsFlex
                  align-items="center"
                  justify-content="center"
                  width="80px"
                >
                  <Core.IconArrowRight />
                </Core.GdsFlex>
                <Core.GdsCard flex="1">{icon.new}</Core.GdsCard>
              </Core.GdsFlex>
            ))}
          </Core.GdsFlex>
        ) : (
          <Core.GdsText color="secondary">
            No icons found matching <strong>{query}</strong>
          </Core.GdsText>
        )}
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
