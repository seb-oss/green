'use client'

import { ReactNode, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { NavItem, Page } from './settings/studio.types'
import { Spacing } from './tools'
import { spacingTokens } from './tools/spacing/spacing'

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
      content: <div>Typography Content</div>,
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
          <Core.GdsFlex key={index} flex-direction="column" gap="s">
            <Core.GdsText variant="caption" color="subtle-02">
              {group.title}
            </Core.GdsText>
            {group.tokens.map((token, tokenIndex) => (
              <Core.GdsButton
                key={tokenIndex}
                size="small"
                rank="tertiary"
                justify-content="space-between"
                width="100%"
              >
                <Core.GdsText variant="body-02">{token.name}</Core.GdsText>
                <Core.GdsText variant="caption" color="subtle-02">
                  {token.value}
                  {typeof token.value === 'number' ? 'px' : ''}
                </Core.GdsText>
              </Core.GdsButton>
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
        background="none"
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
          <Core.GdsFlex padding="m" flex-direction="column" gap="m">
            {renderTokensList()}
          </Core.GdsFlex>
        </Core.GdsCard>

        {/* Rest of the component remains the same */}
      </Core.GdsCard>
    </Core.GdsTheme>
  )
}
