// color.tsx
import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { colorTokens } from './color.tokens'
import { ColorSubGroup, ColorToken } from './color.types'

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

  const getColorMix = (value: string, alpha?: number) => {
    if (!alpha) return value
    // Convert alpha decimal to percentage
    const percentage = Math.round((1 - alpha) * 100)
    return `color-mix(in srgb, ${value}, transparent ${percentage}%)`
  }

  return (
    <Core.GdsFlex
      flex-direction="row"
      align-items="center"
      padding="s l"
      border-width="0 0 4xs 0"
      border-color="subtle-01"
    >
      <Core.GdsGrid columns="5" align-items="center" gap="xl">
        {level && <Core.GdsText>{level}</Core.GdsText>}
        <Core.GdsFlex align-items="center" gap="s">
          <Core.GdsDiv
            width="32px"
            height="32px"
            border-radius="max"
            border-color="inverse"
            border-width="3xs"
            border-style="solid"
            box-shadow="m"
            style={{
              background: getColorMix(
                token.lightValue.$value,
                token.lightValue.alpha,
              ),
            }}
          />
          <Core.GdsDiv
            width="32px"
            height="32px"
            border-radius="max"
            border-color="inverse"
            border-width="3xs"
            border-style="solid"
            box-shadow="m"
            style={{
              background: getColorMix(
                token.darkValue.$value,
                token.darkValue.alpha,
              ),
            }}
          />
        </Core.GdsFlex>
        <Core.GdsText title={getVarName('light')}>{token.name}</Core.GdsText>
        <Core.GdsText color="subtle-02">
          {token.lightValue.$value}
          {token.lightValue.alpha ? ` / ${token.lightValue.alpha}` : ''}
        </Core.GdsText>
        <Core.GdsText color="subtle-02">
          {token.darkValue.$value}
          {token.darkValue.alpha ? ` / ${token.darkValue.alpha}` : ''}
        </Core.GdsText>
      </Core.GdsGrid>
    </Core.GdsFlex>
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
    <Core.GdsFlex flex-direction="column" gap="4xl" padding="xl">
      <Core.GdsFlex gap="s" justify-content="space-between">
        <Core.GdsFlex gap="s">
          <Core.GdsText tag="h1">Colors</Core.GdsText>
          <Core.GdsText>{totalTokens}</Core.GdsText>
        </Core.GdsFlex>
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
              {colorTokens.map((group) => (
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
          <Core.GdsFlex key={index} flex-direction="column" gap="4xl">
            <Core.GdsFlex flex-direction="column" gap="m">
              <Core.GdsText tag="h2">{group.title}</Core.GdsText>
              {group.title == 'Background' && (
                <Core.GdsText color="neutral-02" font="preamble-m">
                  Background tokens are grouped by their level in the interface:
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
                <Core.GdsFlex color="neutral-02" font="preamble-m" width="60ch">
                  Border tokens are used to define the edges of components and
                  layout sections. They help separate content and add structure
                  to the interface.
                </Core.GdsFlex>
              )}
              {group.title == 'Content' && (
                <Core.GdsFlex color="neutral-02" font="preamble-m" width="60ch">
                  Content tokens are used for text, icons, and other foreground
                  elements. They ensure readability and clear contrast against
                  background roles like document, surface, and container.
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
                    <br /> Buttons were the base components used to define these
                    states. For all other components (e.g. inputs, list items),
                    we mostly use 03 and 04 for hover and pressed.
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
            </Core.GdsFlex>
            {group.hasSubGroups ? (
              <Core.GdsFlex flex-direction="column" gap="6xl">
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
                        <Core.GdsText>Variable name</Core.GdsText>
                        <Core.GdsText>Light</Core.GdsText>
                        <Core.GdsText>Dark</Core.GdsText>
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
                {(group.tokens as ColorToken[]).map((token, tokenIndex) => (
                  <ColorSwatch
                    key={tokenIndex}
                    token={token}
                    group={group.title}
                  />
                ))}
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
