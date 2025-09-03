'use client'

import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Link } from '../atoms/link/link'
import Toggle from '../atoms/toggle/toggle.theme'
import { NavItem, Page } from './settings/studio.types'
import * as Tool from './tools'
import { colorTokens } from './tools/colors/colors.tokens'
import { ColorSubGroup, ColorToken } from './tools/colors/colors.types'
import { spacingTokens } from './tools/spacing/spacing'
import { typographyTokens } from './tools/typography/typography.tokens'

interface StudioProps {
  page: Page
  icon?: string
}

export default function Studio({ page, icon }: StudioProps) {
  const pathname = usePathname()
  // const activePage = (pathname.split('/').pop() as Page) || page
  const activePage = (pathname.split('/')[2] as Page) || page
  const navigation: NavItem[] = [
    {
      id: 'colors',
      title: 'Colors',
      icon: <Core.IconBrush slot="lead" solid={page === 'colors'} />,
      content: <Tool.Colors />,
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
      icon: <Core.IconTextEdit slot="lead" solid={page === 'typography'} />,
      content: <Tool.Typography />,
      tokens: typographyTokens,
    },
    {
      id: 'icons',
      title: 'Icons',
      icon: <Core.IconShapes slot="lead" solid={page === 'icons'} />,
      content: <Tool.Icons selected={icon} />,
    },
    {
      id: 'spacing',
      title: 'Spacing',
      icon: <Core.IconFullscreen slot="lead" solid={page === 'spacing'} />,
      content: <Tool.Spacing />,
      tokens: spacingTokens,
    },
    {
      id: 'radius',
      title: 'Radius',
      icon: (
        <Core.IconCirclePlaceholderOn slot="lead" solid={page === 'radius'} />
      ),
      content: <Tool.Radius />,
    },
    {
      id: 'shadows',
      title: 'Shadows',
      icon: <Core.IconSolar slot="lead" solid={page === 'shadows'} />,
      content: <Tool.Shadows />,
    },
    {
      id: 'viewport',
      title: 'Viewport',
      icon: <Core.IconDevices slot="lead" solid={page === 'viewport'} />,
      content: <Tool.Viewport />,
    },
    // {
    //   id: 'grid',
    //   title: 'Grid',
    //   icon: <Core.IconSquareGridCircle slot="lead" solid={page === 'grid'} />,
    //   content: <div>Grid Content</div>,
    // },
    {
      id: 'compose',
      title: 'Compose',
      icon: <Core.IconPencilSparkle slot="lead" solid={page === 'compose'} />,
      content: <Tool.Compose />,
    },
  ]

  const renderPageContent = () => {
    const currentPage = navigation.find((nav) => nav.id === activePage)
    return currentPage?.content
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
        gap="l"
        padding="0"
        position="sticky"
        inset="16px 0 0 0"
        min-height="96vh"
      >
        <Core.GdsFlex align-items="center" gap="m" padding="l l 0 l">
          <Link href="/studio/colors">
            <Core.IconBrandGreen size="l" />
            <Core.GdsText font="heading-xs">Green Studio</Core.GdsText>
          </Link>
        </Core.GdsFlex>
        <Core.GdsDivider color="subtle-01" />
        <Core.GdsFlex
          flex-direction="column"
          padding="0 s"
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

        <Core.GdsFlex padding="0 l" display="none">
          <Core.GdsInput size="small">
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>
        </Core.GdsFlex>

        <Core.GdsFlex
          margin="auto 0 0 0"
          padding="l"
          justify-content="space-between"
          align-items="center"
        >
          <Link
            component="link"
            href="/"
            width="max-content"
            rank="tertiary"
            size="small"
          >
            <Core.IconChevronLeft slot="lead" size="m" />
            Docs
          </Link>
          <Toggle />
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
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
