'use client'

import { ReactNode, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { NavItem, Page } from './settings/studio.types'
import { Color, Compose, Spacing, Typography } from './tools'
import { colorTokens } from './tools/color/color.tokens'
import { ColorSubGroup, ColorToken } from './tools/color/color.types'
import { spacingTokens } from './tools/spacing/spacing'
import { typographyTokens } from './tools/typography/typography.tokens'

export default function Studio() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [activePage, setActivePage] = useState<Page>('color')

  const navigation: NavItem[] = [
    {
      id: 'color',
      title: 'Color',
      icon: <Core.IconBrush slot="lead" />,
      content: <Color />,
      tokens: colorTokens.map((group) => ({
        title: group.title,
        tokens: group.hasSubGroups
          ? (group.tokens as ColorSubGroup[]).flatMap((subGroup) =>
              subGroup.tokens.map((token) => ({
                name: token.name,
                value: `${token.lightValue.$value} / ${token.darkValue.$value}`,
                type: `${subGroup.category}/${token.category}`,
              })),
            )
          : (group.tokens as ColorToken[]).map((token) => ({
              name: token.name,
              value: `${token.lightValue.$value} / ${token.darkValue.$value}`,
              type: token.category,
            })),
      })),
    },
    {
      id: 'typography',
      title: 'Typography',
      icon: <Core.IconTextEdit slot="lead" />,
      content: <Typography />,
      tokens: typographyTokens,
    },
    {
      id: 'spacing',
      title: 'Spacing',
      icon: <Core.IconFullscreen slot="lead" />,
      content: <Spacing />,
      tokens: spacingTokens,
    },
    {
      id: 'grid',
      title: 'Grid',
      icon: <Core.IconSquareGridCircle slot="lead" />,
      content: <div>Grid Content</div>,
    },
    {
      id: 'compose',
      title: 'Compose',
      icon: <Core.IconPencilSparkle slot="lead" />,
      content: <Compose />,
    },
  ]

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const renderPageContent = () => {
    const currentPage = navigation.find((nav) => nav.id === activePage)
    return currentPage?.content
  }

  const renderTokensList = () => {
    const currentPage = navigation.find((nav) => nav.id === activePage)
    if (!currentPage?.tokens) return null

    if (currentPage.id === 'color') {
      return (
        <Core.GdsFlex flex-direction="column" gap="m">
          {currentPage.tokens.map((group, index) => (
            <Core.GdsFlex
              key={index}
              flex-direction="column"
              gap="m"
              padding="m"
            >
              <Core.GdsText color="subtle-02" font="detail-regular-m">
                {group.title}
              </Core.GdsText>
              {group.tokens.reduce((acc: ReactNode[], token, tokenIndex) => {
                // Create category groups based on token.type
                const category = token.type.split('/')[0]
                const prevToken =
                  tokenIndex > 0 ? group.tokens[tokenIndex - 1] : null
                const prevCategory = prevToken?.type.split('/')[0]

                if (category !== prevCategory) {
                  acc.push(
                    <Core.GdsText
                      key={`category-${category}`}
                      color="subtle-02"
                      font="detail-regular-s"
                      padding="s 0"
                    >
                      {category}
                    </Core.GdsText>,
                  )
                }

                acc.push(
                  <Core.GdsFlex
                    key={tokenIndex}
                    width="100%"
                    align-items="center"
                    justify-content="space-between"
                    gap="xs"
                    padding="2xs 0"
                  >
                    <Core.GdsFlex gap="s" align-items="center">
                      <Core.GdsDiv
                        width="16px"
                        height="16px"
                        border-radius="max"
                        border-color="subtle-01"
                        border-width="4xs"
                        border-style="solid"
                        style={{
                          background: token.value.split(' / ')[0],
                        }}
                      />
                      <Core.GdsText font="detail-xs" width="max-content">
                        {token.name}
                      </Core.GdsText>
                    </Core.GdsFlex>
                    <Core.GdsText opacity="0.4" font="detail-xs">
                      {token.value.split(' / ')[0]}
                    </Core.GdsText>
                  </Core.GdsFlex>,
                )

                return acc
              }, [])}
            </Core.GdsFlex>
          ))}
        </Core.GdsFlex>
      )
    }

    // Default rendering for other token types
    return (
      <Core.GdsFlex flex-direction="column" gap="m">
        {currentPage.tokens.map((group, index) => (
          <Core.GdsFlex key={index} flex-direction="column" gap="m" padding="m">
            <Core.GdsText color="subtle-02">{group.title}</Core.GdsText>
            {group.tokens.map((token, tokenIndex) => (
              <Core.GdsFlex
                key={tokenIndex}
                width="100%"
                align-items="center"
                justify-content="space-between"
                gap="xs"
              >
                <Core.GdsText font="detail-xs" width="max-content">
                  {token.name}
                </Core.GdsText>
                <Core.GdsText opacity="0.4">
                  {token.value}
                  {typeof token.value === 'number' ? 'px' : ''}
                </Core.GdsText>
              </Core.GdsFlex>
            ))}
          </Core.GdsFlex>
        ))}
      </Core.GdsFlex>
    )
  }

  return (
    <Core.GdsTheme color-scheme={theme}>
      <Core.GdsCard
        width="100%"
        height="max-content"
        flex-direction="row"
        align-items="flex-start"
        padding="0"
        gap="s"
        // border-color="subtle-01"
        background="secondary"
        // data-pattern
        // padding="xs"
        // border-radius="m"
      >
        <Core.GdsCard
          variant="secondary"
          width="280px"
          gap="s"
          padding="0"
          position="sticky"
          inset="20px 0 0 0"
        >
          <Core.GdsFlex
            flex-direction="column"
            padding="l m"
            gap="s"
            aria-label="Sidebar"
          >
            {navigation.map((nav) => (
              <Core.GdsButton
                key={nav.id}
                size="small"
                width="max-content"
                rank={activePage === nav.id ? 'secondary' : 'tertiary'}
                justify-content="flex-start"
                onClick={() => setActivePage(nav.id)}
              >
                {nav.icon}
                {nav.title}
              </Core.GdsButton>
            ))}
          </Core.GdsFlex>
          <Core.GdsDivider color="subtle-01" />
          <Core.GdsFlex padding="0 l" display="none">
            <Core.GdsInput size="small">
              <Core.IconMagnifyingGlass slot="lead" />
            </Core.GdsInput>
          </Core.GdsFlex>
          <Core.GdsFlex
            display="none"
            padding="m"
            flex-direction="column"
            gap="m"
            height="max-content"
          >
            {renderTokensList()}
          </Core.GdsFlex>
        </Core.GdsCard>

        <Core.GdsFlex
          padding="0"
          flex-direction="column"
          justify-content="space-between"
          align-items="center"
          gap="s"
          flex="1"
        >
          <Core.GdsDiv flex="1" width="100%" height="100%" overflow="auto">
            {renderPageContent()}
          </Core.GdsDiv>
          <Core.GdsFlex width="100%" align-items="center" padding="s">
            <Core.GdsFlex flex="1" align-items="center" gap="s">
              Toolbar
            </Core.GdsFlex>
            <Core.GdsFlex align-items="center" gap="s">
              <Core.GdsButton rank="tertiary" size="small">
                <Core.IconCodeBrackets />
              </Core.GdsButton>
              <Core.GdsButton rank="tertiary" size="small">
                <Core.IconFullscreen />
              </Core.GdsButton>
              <Core.GdsButton
                rank="tertiary"
                size="small"
                onClick={handleThemeToggle}
              >
                {theme === 'light' ? <Core.IconMoon /> : <Core.IconSun />}
              </Core.GdsButton>
              <Core.GdsSegmentedControl
                size="small"
                value="edit"
                width="max-content"
              >
                <Core.GdsSegment value="edit">
                  <Core.GdsFlex align-items="center" gap="xs">
                    <Core.IconPencilSign size="m" />
                    Edit
                  </Core.GdsFlex>
                </Core.GdsSegment>
                <Core.GdsSegment>
                  <Core.GdsFlex align-items="center" gap="xs">
                    <Core.IconEyeOpen size="m" />
                    Preview
                  </Core.GdsFlex>
                </Core.GdsSegment>
              </Core.GdsSegmentedControl>
            </Core.GdsFlex>
          </Core.GdsFlex>
        </Core.GdsFlex>
      </Core.GdsCard>
    </Core.GdsTheme>
  )
}
