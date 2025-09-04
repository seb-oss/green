// typography.tsx
import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import * as Part from '../../parts'
import { typographyTokens } from './typography.tokens'

import './typography.css'

import { Copy } from '../../table'

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
    <Core.GdsFlex flex-direction="column" gap="4xl" padding="xl">
      <Part.Header
        title="Typography"
        description="typography description"
        count={220}
        search={
          <Core.GdsInput
            plain
            width="100%"
            value={search}
            onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
            clearable
          >
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>
        }
        filter={
          <Core.GdsDropdown
            plain
            value={selectedCategory}
            oninput={handleCategoryChange}
          >
            <Core.GdsOption value="">Categories</Core.GdsOption>
            {typographyTokens.map((group) => (
              <Core.GdsOption
                key={group.title}
                value={group.title.toLowerCase()}
              >
                {group.title}
              </Core.GdsOption>
            ))}
          </Core.GdsDropdown>
        }
      />

      {filteredTokens.length > 0 ? (
        filteredTokens.map((group, index) => (
          <Core.GdsFlex key={index} flex-direction="column" gap="l">
            <Core.GdsText tag="h2">{group.title}</Core.GdsText>
            <Core.GdsFlex flex-direction="column" gap="m">
              {group.tokens.map((token: any, tokenIndex) => (
                <Core.GdsFlex
                  key={tokenIndex}
                  flex-direction="column"
                  gap="m"
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
                    <Copy name={token.name} />
                  </Core.GdsFlex>
                </Core.GdsFlex>
              ))}
            </Core.GdsFlex>
          </Core.GdsFlex>
        ))
      ) : (
        <Part.Empty query="typography" />
      )}
    </Core.GdsFlex>
  )
}
