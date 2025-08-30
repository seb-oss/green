'use client'

import { ReactNode, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { NavItem, Page } from './settings/studio.types'
import { Spacing, Typography } from './tools'
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
      content: (
        <Core.GdsGrid columns="4" gap="m" width="100%">
          {Array(16)
            .fill(null)
            .map((_, i) => (
              <Core.GdsCard key={i}></Core.GdsCard>
            ))}
        </Core.GdsGrid>
      ),
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
      content: <div>Compose Content</div>,
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
        height="80vh"
        flex-direction="row"
        gap="s"
        border-color="subtle-01"
        background="secondary"
        data-pattern
        padding="xs"
        border-radius="m"
      >
        <Core.GdsCard variant="secondary" width="280px" gap="s" padding="0">
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
          <Core.GdsFlex
            padding="m"
            flex-direction="column"
            gap="m"
            height="100%"
            overflow="auto"
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
