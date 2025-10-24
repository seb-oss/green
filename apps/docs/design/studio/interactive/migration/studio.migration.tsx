// DeprecatedIcons.tsx
'use client'

import { useMemo, useState } from 'react'
import Fuse from 'fuse.js'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../../hooks'
import { useSearch } from '../../context/search.context'
import { Copy } from '../../table'
import { iconMappings } from './studio.migration.icons'

interface DeprecatedIconsProps {
  searchQuery?: string
}

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
const fuseOptions = {
  keys: ['old', 'new'],
  threshold: 0.3,
  includeScore: true,
}

const fuse = new Fuse(iconMappings, fuseOptions)

export default function DeprecatedIcons({
  searchQuery = '',
}: DeprecatedIconsProps) {
  const { query } = useSearch()

  const filteredIcons = useMemo(() => {
    if (!query?.trim()) return iconMappings

    const results = fuse.search(query)
    return results.map((result) => result.item)
  }, [query])

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
              <Core.GdsGrid columns="1; m{4}" gap="l" width="100%">
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
                <Core.GdsFlex display="none; m{flex}">
                  <div>{``}</div>
                </Core.GdsFlex>
                <Copy name={icon.new} />
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
