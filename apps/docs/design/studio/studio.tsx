'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Link } from '../atoms/link/link'
import { NavItem, Page } from './settings/studio.types'
import * as Tool from './tools'
import { colorTokens } from './tools/colors/colors.tokens'
import { ColorSubGroup, ColorToken } from './tools/colors/colors.types'
import { spacingTokens } from './tools/spacing/spacing'
import { typographyTokens } from './tools/typography/typography.tokens'

interface StudioProps {
  page: Page
}

export default function Studio({ page }: StudioProps) {
  const pathname = usePathname()
  const activePage = (pathname.split('/').pop() as Page) || page

  const navigation: NavItem[] = [
    {
      id: 'color',
      title: 'Color',
      icon: <Core.IconBrush slot="lead" />,
      content: <Tool.Color />,
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
      content: <Tool.Typography />,
      tokens: typographyTokens,
    },
    {
      id: 'spacing',
      title: 'Spacing',
      icon: <Core.IconFullscreen slot="lead" />,
      content: <Tool.Spacing />,
      tokens: spacingTokens,
    },
    {
      id: 'icons',
      title: 'Icons',
      icon: <Core.IconShapes slot="lead" />,
      content: <Tool.Icons />,
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
      content: <Tool.Compose />,
    },
  ]

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
    <Core.GdsCard
      width="100%"
      height="max-content"
      flex-direction="row"
      align-items="flex-start"
      padding="0"
      background="none"
      gap="s"
    >
      <Core.GdsCard
        variant="secondary"
        width="280px"
        gap="s"
        padding="0"
        position="sticky"
        inset="16px 0 0 0"
        min-height="90vh"
      >
        <Core.GdsFlex
          flex-direction="column"
          padding="l m"
          gap="s"
          aria-label="Sidebar"
        >
          {navigation.map((nav) => (
            <Link
              key={nav.id}
              href={`/studio/${nav.id}`}
              component="button"
              size="small"
              width="max-content"
              rank={activePage === nav.id ? 'secondary' : 'tertiary'}
              justify-content="flex-start"
            >
              {nav.icon}
              {nav.title}
            </Link>
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

        <Core.GdsFlex margin="auto 0 0 0" padding="m">
          <Link
            component="button"
            href="/"
            width="max-content"
            size="small"
            rank="tertiary"
          >
            <Core.IconArrowLeft slot="lead" />
            Docs
          </Link>
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

        {false && (
          <Core.GdsFlex
            width="100%"
            align-items="center"
            padding="xl"
            position="sticky"
            inset="auto 0px 40px 0px"
          >
            <Core.GdsFlex flex="1" align-items="center" gap="s">
              <span></span>
            </Core.GdsFlex>
            <Core.GdsFlex align-items="center" gap="s">
              <Core.GdsSegmentedControl
                size="small"
                value="edit"
                width="max-content"
              >
                <Core.GdsSegment value="edit">
                  <Core.GdsFlex align-items="center" gap="xs">
                    <Core.IconPencilSign size="m" />
                    Tokens
                  </Core.GdsFlex>
                </Core.GdsSegment>
                <Core.GdsSegment>
                  <Core.GdsFlex align-items="center" gap="xs">
                    <Core.IconCursor size="m" />
                    Playground
                  </Core.GdsFlex>
                </Core.GdsSegment>
              </Core.GdsSegmentedControl>
            </Core.GdsFlex>
          </Core.GdsFlex>
        )}
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
