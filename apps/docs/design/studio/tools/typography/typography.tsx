// typography.tsx
import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { typographyTokens } from './typography.tokens'

import './typography.css'

function calculateScore(token: any, query: string): boolean {
  const searchString =
    `${token.name} ${token.style.fontSize} ${token.style.lineHeight} ${token.style.fontWeight}`.toLowerCase()
  return searchString.includes(query.toLowerCase())
}

export default function Typography() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredTokens = useMemo(() => {
    if (!search && !selectedCategory) return typographyTokens

    return typographyTokens
      .filter(
        (group) =>
          !selectedCategory ||
          group.title.toLowerCase() === selectedCategory.toLowerCase(),
      )
      .map((group) => ({
        ...group,
        tokens: group.tokens.filter((token) => calculateScore(token, search)),
      }))
      .filter((group) => group.tokens.length > 0)
  }, [search, selectedCategory])

  const handleCategoryChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    setSelectedCategory(target.value)
  }

  const handleCopyClick = (token: any) => {
    navigator.clipboard.writeText(`${token.name}`)
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="6xl" padding="xl">
      <Core.GdsFlex gap="s" justify-content="space-between">
        <Core.GdsText tag="h1">Typography</Core.GdsText>
        <Core.GdsFlex width="max-content" gap="s">
          <Core.GdsInput
            plain
            min-width="420px"
            value={search}
            onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
            clearable
          >
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>
          <Core.GdsFlex width="240px">
            <Core.GdsDropdown
              plain
              value={selectedCategory}
              oninput={handleCategoryChange}
            >
              <Core.GdsOption value="">All Categories</Core.GdsOption>
              {typographyTokens.map((group) => (
                <Core.GdsOption
                  key={group.title}
                  value={group.title.toLowerCase()}
                >
                  {group.title}
                </Core.GdsOption>
              ))}
            </Core.GdsDropdown>
          </Core.GdsFlex>
        </Core.GdsFlex>
      </Core.GdsFlex>

      {filteredTokens.length > 0 ? (
        filteredTokens.map((group, index) => (
          <Core.GdsFlex key={index} flex-direction="column" gap="l">
            <Core.GdsText tag="h2">{group.title}</Core.GdsText>
            <Core.GdsFlex flex-direction="column" gap="m">
              {group.tokens.map((token: any, tokenIndex) => (
                <Core.GdsFlex
                  key={tokenIndex}
                  flex-direction="column"
                  gap="s"
                  padding="0 0 m 0"
                  border-width="0 0 4xs 0"
                  border-color="subtle-01"
                >
                  <Core.GdsText style={token.style}>
                    <span
                      contentEditable="plaintext-only"
                      suppressContentEditableWarning
                      className="editable"
                      spellCheck="false"
                    >
                      {token.name}
                    </span>
                  </Core.GdsText>
                  <Core.GdsFlex
                    gap="xl"
                    align-items="center"
                    justify-content="space-between"
                  >
                    <Core.GdsFlex align-items="center" gap="l">
                      <Core.GdsText color="neutral-02">
                        Size: {token.style.fontSize}px
                      </Core.GdsText>
                      <Core.GdsText color="neutral-02">
                        Line Height: {token.style.lineHeight}
                      </Core.GdsText>
                      <Core.GdsText color="neutral-02">
                        Weight: {token.style.fontWeight}
                      </Core.GdsText>
                      {token.style.fontStyle !== 'normal' && (
                        <Core.GdsText color="neutral-02">
                          Style: {token.style.fontStyle}
                        </Core.GdsText>
                      )}
                    </Core.GdsFlex>

                    <Core.GdsFlex
                      flex-direction="row"
                      align-items="center"
                      padding="2xs 2xs 2xs m"
                      gap="s"
                    >
                      <Core.GdsText color="neutral-01">
                        {token.name}
                      </Core.GdsText>
                      <Core.GdsButton
                        size="xs"
                        rank="secondary"
                        onClick={() => handleCopyClick(token)}
                      >
                        <Core.IconCopy size="s" />
                      </Core.GdsButton>
                    </Core.GdsFlex>
                  </Core.GdsFlex>
                </Core.GdsFlex>
              ))}
            </Core.GdsFlex>
          </Core.GdsFlex>
        ))
      ) : (
        <Core.GdsCard
          justify-content="center"
          align-items="center"
          height="40vh"
          padding="2xl"
        >
          <Core.IconMagnifyingGlass size="xl" />
          <Core.GdsText color="subtle-02">
            No typography tokens found matching your search
          </Core.GdsText>
        </Core.GdsCard>
      )}
    </Core.GdsFlex>
  )
}
