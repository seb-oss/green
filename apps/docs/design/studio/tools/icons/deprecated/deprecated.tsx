// DeprecatedIcons.tsx
'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../../../hooks'
import { Variable } from '../../../parts'

interface DeprecatedIconsProps {
  searchQuery?: string
}

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
  { old: 'link', new: 'chain-link' },
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
  { old: 'times', new: 'cross-small' },
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

function formatFaIconName(name: string): string {
  return name.toLowerCase()
}
function formatGdsIconName(name: string): string {
  // Convert kebab-case to PascalCase
  return (
    'Icon' +
    name
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join('')
  )
}

export default function DeprecatedIcons({
  searchQuery = '',
}: DeprecatedIconsProps) {
  const filteredIcons = useMemo(() => {
    const query = searchQuery || '' // Extra safety
    if (!query.trim()) return iconMappings

    return iconMappings.filter((icon) => {
      const oldNameScore = calculateScore(icon.old, query)
      const newNameScore = calculateScore(icon.new, query)
      return oldNameScore > 0 || newNameScore > 0
    })
  }, [searchQuery])
  return (
    <Core.GdsFlex flex-direction="column" gap="l" width="100%">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      <Core.GdsCard align-items="center" gap="xs" min-width="100%">
        <Core.GdsGrid columns="4" gap="xl">
          <Core.GdsText>Old</Core.GdsText>
          <Core.GdsText>New</Core.GdsText>
          <Core.GdsFlex></Core.GdsFlex>
          <Core.GdsFlex></Core.GdsFlex>
        </Core.GdsGrid>
      </Core.GdsCard>

      {filteredIcons.length > 0 ? (
        <Core.GdsFlex align-items="center" flex-direction="column" width="100%">
          {filteredIcons.map((icon) => (
            <Core.GdsFlex
              padding="m l"
              border-width="0 0 4xs 0"
              border-color="subtle-01"
              key={icon.old}
              width="100%"
            >
              <Core.GdsGrid columns="4" gap="l" width="100%">
                <Core.GdsFlex
                  align-items="center"
                  gap="s"
                  flex="1"
                  flex-direction="row"
                  border-radius="m"
                >
                  <Core.GdsCard
                    variant="negative"
                    width="28px"
                    height="28px"
                    justify-content="center"
                    align-items="center"
                  >
                    <i
                      className={`fa-solid fa-${formatFaIconName(icon.old)}`}
                      style={{
                        fontSize: '14px',
                      }}
                    ></i>
                  </Core.GdsCard>
                  <Core.GdsText>{icon.old}</Core.GdsText>
                </Core.GdsFlex>

                <Core.GdsFlex align-items="center" gap="s" flex="1">
                  <Core.GdsCard
                    variant="positive"
                    width="28px"
                    height="28px"
                    justify-content="center"
                    align-items="center"
                  >
                    <Icon name={formatGdsIconName(icon.new)} size="m" />
                  </Core.GdsCard>
                  <Core.GdsText>{icon.new}</Core.GdsText>
                </Core.GdsFlex>
                <div>{``}</div>
                <Variable name={icon.new} />
              </Core.GdsGrid>
            </Core.GdsFlex>
          ))}
        </Core.GdsFlex>
      ) : (
        <Core.GdsCard
          justify-content="center"
          align-items="center"
          height="40vh"
          padding="2xl"
          width="100%"
        >
          <Core.IconMagnifyingGlass size="xl" />
          <Core.GdsText color="subtle-02">
            {searchQuery
              ? `No migration matches found for "${searchQuery}"`
              : 'No icons found'}
          </Core.GdsText>
        </Core.GdsCard>
      )}
    </Core.GdsFlex>
  )
}
