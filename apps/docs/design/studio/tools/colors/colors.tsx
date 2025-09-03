// color.tsx
import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import * as Part from '../../parts'
import { colorTokens } from './colors.tokens'
import { ColorSubGroup, ColorToken } from './colors.types'

function calculateScore(token: ColorToken, query: string): boolean {
  const searchString =
    `${token.name} ${token.lightValue.$value} ${token.darkValue.$value}`.toLowerCase()
  return searchString.includes(query.toLowerCase())
}

// Single color
const ColorSwatch = ({
  token,
  group,
  level,
}: {
  token: ColorToken
  group: string
  level?: string
}) => {
  const getVarName = (theme: 'light' | 'dark') => {
    if (group === 'Background') {
      return `--gds-sys-color-${level?.toLowerCase()}-${token.name}`
    }
    return `--gds-sys-color-${group.toLowerCase()}-${token.name}`
  }

  const MIX = (value: string, alpha?: number) => {
    if (!alpha) return value
    const percentage = Math.round((1 - alpha) * 100)
    return `color-mix(in srgb, ${value}, transparent ${percentage}%)`
  }

  const formatValue = (value: string, alpha?: number) => {
    return alpha ? `${value} / ${alpha}` : value
  }

  const LIGHT = token.lightValue.$value
  const LIGHT_ALPHA = token.lightValue.alpha

  const DARK = token.darkValue.$value
  const DARK_ALPHA = token.darkValue.alpha

  return (
    <Part.Token
      level={level}
      name={<Part.Variable name={token.name} />}
      light={formatValue(token.lightValue.$value, token.lightValue.alpha)}
      dark={formatValue(token.darkValue.$value, token.darkValue.alpha)}
      data-variable={getVarName('light')}
      preview={
        <Core.GdsFlex align-items="center" gap="s">
          <Part.Color color={MIX(LIGHT, LIGHT_ALPHA)} />
          <Part.Color color={MIX(DARK, DARK_ALPHA)} />
        </Core.GdsFlex>
      }
    />
  )
}

export default function Color() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredTokens = useMemo(() => {
    if (!search && !selectedCategory) return colorTokens

    return colorTokens
      .filter(
        (group) =>
          !selectedCategory ||
          group.title.toLowerCase() === selectedCategory.toLowerCase(),
      )
      .map((group) => {
        if (group.hasSubGroups) {
          return {
            ...group,
            tokens: (group.tokens as ColorSubGroup[])
              .map((subGroup) => ({
                ...subGroup,
                tokens: subGroup.tokens.filter((token) =>
                  calculateScore(token, search),
                ),
              }))
              .filter((subGroup) => subGroup.tokens.length > 0),
          }
        }
        return {
          ...group,
          tokens: (group.tokens as ColorToken[]).filter((token) =>
            calculateScore(token, search),
          ),
        }
      })
      .filter((group) => {
        if (group.hasSubGroups) {
          return (group.tokens as ColorSubGroup[]).length > 0
        }
        return (group.tokens as ColorToken[]).length > 0
      })
  }, [search, selectedCategory])

  const handleCategoryChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    setSelectedCategory(target.value)
  }

  const totalTokens = colorTokens.reduce((acc, group) => {
    if (group.hasSubGroups) {
      return (
        acc +
        (group.tokens as ColorSubGroup[]).reduce(
          (subAcc, subGroup) => subAcc + subGroup.tokens.length,
          0,
        )
      )
    }
    return acc + (group.tokens as ColorToken[]).length
  }, 0)

  return (
    <Core.GdsFlex
      flex-direction="column"
      gap={search ? 'xl' : '4xl'}
      padding="xl"
    >
      <Part.Header
        title="Color"
        description="Color description"
        count={totalTokens}
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
            <Core.GdsOption value="">All Categories</Core.GdsOption>
            {colorTokens.map((group) => (
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
          <Core.GdsFlex
            key={index}
            flex-direction="column"
            gap={search ? 'xl' : '4xl'}
          >
            <Core.GdsFlex flex-direction="column" gap="m">
              <Core.GdsText tag="h2">{group.title}</Core.GdsText>
              {!search && (
                <>
                  {group.title == 'Background' && (
                    <Core.GdsText color="neutral-02" font="preamble-m">
                      Background tokens are grouped by their level in the
                      interface:
                      <br />
                      L1 – the base layer of the screen, <br />
                      L2 – structural layers like cards and modals,
                      <br />
                      L3 – backgrounds for components like buttons and inputs.
                      <br /> This structure supports clarity, consistency, and a
                      clear visual hierarchy.
                    </Core.GdsText>
                  )}

                  {group.title == 'Border' && (
                    <Core.GdsFlex
                      color="neutral-02"
                      font="preamble-m"
                      width="60ch"
                    >
                      Border tokens are used to define the edges of components
                      and layout sections. They help separate content and add
                      structure to the interface.
                    </Core.GdsFlex>
                  )}
                  {group.title == 'Content' && (
                    <Core.GdsFlex
                      color="neutral-02"
                      font="preamble-m"
                      width="60ch"
                    >
                      Content tokens are used for text, icons, and other
                      foreground elements. They ensure readability and clear
                      contrast against background roles like document, surface,
                      and container.
                    </Core.GdsFlex>
                  )}
                  {group.title == 'State' && (
                    <Core.GdsFlex gap="xl" flex="1" width="100%">
                      <Core.GdsFlex
                        color="neutral-02"
                        font="preamble-m"
                        width="60ch"
                      >
                        State tokens provide visual feedback for interactions,
                        ensuring consistency across components in both light and
                        dark mode. We have defined an extensive set of tokens to
                        support customisation across primary, secondary, and
                        tertiary components. <br />
                        <br /> Buttons were the base components used to define
                        these states. For all other components (e.g. inputs,
                        list items), we mostly use 03 and 04 for hover and
                        pressed.
                      </Core.GdsFlex>
                      <Core.GdsCard width="max-content">
                        <Core.GdsText font="preamble-m">
                          01 = Hover (Primary) <br />
                          02 = Pressed (Primary) <br />
                          03 = Hover (Secondary) <br />
                          04 = Pressed (Secondary) <br />
                          05 = Hover (Tertiary) <br />
                          06 = Pressed (Tertiary)
                        </Core.GdsText>
                      </Core.GdsCard>
                    </Core.GdsFlex>
                  )}
                </>
              )}
            </Core.GdsFlex>
            {group.hasSubGroups ? (
              <Core.GdsFlex flex-direction="column" gap={search ? 'xl' : '6xl'}>
                {(group.tokens as ColorSubGroup[]).map((subGroup, subIndex) => (
                  <Core.GdsFlex
                    key={subIndex}
                    flex-direction="column"
                    gap="xl"
                    data-level={subGroup.category}
                  >
                    <Core.GdsCard
                      flex-direction="row"
                      justify-content="space-between"
                    >
                      <Core.GdsGrid columns="5" align-items="center" gap="xl">
                        <Core.GdsText>Level</Core.GdsText>
                        <Core.GdsText>Example</Core.GdsText>
                        <Core.GdsText>Light</Core.GdsText>
                        <Core.GdsText>Dark</Core.GdsText>
                        <Core.GdsText>Variable name</Core.GdsText>
                      </Core.GdsGrid>
                    </Core.GdsCard>
                    <Core.GdsFlex
                      flex-direction="column"
                      data-subgroup={subGroup.category}
                    >
                      {subGroup.tokens.map((token, tokenIndex) => (
                        <ColorSwatch
                          key={tokenIndex}
                          token={token}
                          group={group.title}
                          level={subGroup.category}
                        />
                      ))}
                    </Core.GdsFlex>
                  </Core.GdsFlex>
                ))}
              </Core.GdsFlex>
            ) : (
              <Core.GdsGrid columns="1" gap="m">
                <Core.GdsCard
                  flex-direction="row"
                  justify-content="space-between"
                >
                  <Core.GdsGrid columns="5" align-items="center" gap="xl">
                    <Core.GdsText></Core.GdsText>
                    <Core.GdsText>Example</Core.GdsText>
                    <Core.GdsText>Variable name</Core.GdsText>
                    <Core.GdsText>Light</Core.GdsText>
                    <Core.GdsText>Dark</Core.GdsText>
                  </Core.GdsGrid>
                </Core.GdsCard>
                <Core.GdsFlex flex-direction="column">
                  {(group.tokens as ColorToken[]).map((token, tokenIndex) => (
                    <ColorSwatch
                      key={tokenIndex}
                      token={token}
                      group={group.title}
                    />
                  ))}
                </Core.GdsFlex>
              </Core.GdsGrid>
            )}
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
            No colors found matching your search
          </Core.GdsText>
        </Core.GdsCard>
      )}
    </Core.GdsFlex>
  )
}
