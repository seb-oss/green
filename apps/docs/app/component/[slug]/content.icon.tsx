// app/component/[slug]/content.icon.tsx
'use client'

import React, { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../hooks'

import type {
  ComponentContent,
  IconData,
} from '../../../settings/content/types'

interface IconContentProps {
  component: ComponentContent
}

const formatDisplayName = (name: string) => {
  return name.replace(/\s+/g, '')
}

type IconSize = 's' | 'm' | 'l'

export function IconContent({ component }: IconContentProps) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSize, setSelectedSize] = useState<IconSize>('m')
  const [isSolid, setIsSolid] = useState(false)
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null)

  if (!component.icons) return null

  // Get unique categories
  const categories = Array.from(
    new Set(
      Object.values(component.icons)
        .map((icon) => icon.meta.categories)
        .flat(),
    ),
  ).sort()

  // Filter icons based on search and category
  const iconList = Object.entries(component.icons)
    .filter(([name, icon]) => {
      const matchesSearch = name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = selectedCategory
        ? icon.meta.categories.includes(selectedCategory)
        : true
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => a[1].displayName.localeCompare(b[1].displayName))

  const handleCategoryChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    setSelectedCategory(target.value)
  }

  const handleSizeChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    setSelectedSize(target.value as IconSize)
  }

  const handleViewChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    setView(target.value as 'grid' | 'list')
  }

  const handleSolidChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    setIsSolid(target.checked)
  }

  const totalIcons = Object.keys(component.icons).length
  const filteredCount = iconList.length
  const resultsText =
    search || selectedCategory
      ? `${filteredCount} of ${totalIcons} icons`
      : `${totalIcons} icons`

  const handleIconClick = (_name: string, icon: IconData) => {
    setSelectedIcon(icon)
  }

  const handleClosePanel = () => {
    setSelectedIcon(null)
  }

  return (
    <>
      <Core.GdsFlex flex-direction="column" gap="l" position="relative">
        <Core.GdsGrid
          columns="4"
          gap="l"
          border-color="primary"
          border-width="0 0 4xs 0"
          border-style="solid"
          padding-block="0 s"
        >
          <Core.GdsInput
            value={search}
            onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
            plain
            grid-column="1 / span 3"
            clearable
          >
            <Icon name="IconMagnifyingGlass" slot="lead" />
          </Core.GdsInput>
          <Core.GdsFlex>
            <Core.GdsDropdown plain oninput={handleCategoryChange}>
              <Core.GdsOption value="">All Categories</Core.GdsOption>
              {categories.map((category) => (
                <Core.GdsOption key={category} value={category}>
                  {category}
                </Core.GdsOption>
              ))}
            </Core.GdsDropdown>
          </Core.GdsFlex>
          <Core.GdsFlex
            grid-column="1 / span 3"
            height="100%"
            align-items="center"
            justify-content="flex-start"
            gap="l"
          >
            <Core.GdsFlex>
              <Core.GdsDropdown
                size="small"
                value="medium"
                plain
                oninput={handleSizeChange}
              >
                <Core.GdsOption value="s">Small</Core.GdsOption>
                <Core.GdsOption value="m">Medium</Core.GdsOption>
                <Core.GdsOption value="l">Large</Core.GdsOption>
              </Core.GdsDropdown>
            </Core.GdsFlex>
            <Core.GdsCheckbox
              label="Solid"
              value="solid"
              onchange={handleSolidChange}
            />
            <Core.GdsText color="secondary" tag="small">
              {resultsText}
            </Core.GdsText>
          </Core.GdsFlex>
          <Core.GdsFlex>
            <Core.GdsSegmentedControl
              size="small"
              value={view}
              onchange={handleViewChange}
            >
              <Core.GdsSegment value="grid">Grid</Core.GdsSegment>
              <Core.GdsSegment value="list">List</Core.GdsSegment>
            </Core.GdsSegmentedControl>
          </Core.GdsFlex>
        </Core.GdsGrid>
        {!search && (
          <Core.GdsCard
            variant="warning"
            padding="s xs s m"
            flex-direction="row"
            gap="s"
            justify-content="space-between"
            align-items="center"
          >
            <Core.GdsFlex gap="s" align-items="center">
              <Core.IconWarningSign size="m" />
              <Core.GdsFlex flex-direction="column" gap="2xs">
                <Core.GdsText font-size="detail-s" color="secondary">
                  View deprecated icons and font awesome recommended
                  replacements
                </Core.GdsText>
              </Core.GdsFlex>
            </Core.GdsFlex>
            <Core.GdsButton size="small" rank="tertiary">
              Instructions
              <Core.IconArrowDown slot="trail" />
            </Core.GdsButton>
          </Core.GdsCard>
        )}

        <Core.GdsGrid columns={view === 'grid' ? '4' : '3'} gap="l">
          {iconList.map(([name, icon]: [string, IconData]) => (
            <Core.GdsCard
              key={icon.id}
              height="100%"
              padding={view === 'grid' ? 'm' : 'xs'}
              onClick={() => handleIconClick(name, icon)}
            >
              <Core.GdsFlex
                flex-direction={view === 'grid' ? 'column' : 'row'}
                gap={view === 'grid' ? 's' : 'xs'}
                align-items="center"
                height="100%"
                justify-content={view === 'grid' ? 'flex-start' : 'flex-start'}
              >
                <Core.GdsFlex
                  justify-content="center"
                  align-items="center"
                  height="48px"
                  width={view === 'list' ? '48px' : '100%'}
                >
                  <Icon
                    name={formatDisplayName('Icon' + icon.displayName)}
                    size={selectedSize}
                    solid={isSolid}
                  />
                </Core.GdsFlex>

                <Core.GdsText
                  tag="small"
                  color="secondary"
                  text-align={view === 'grid' ? 'center' : 'left'}
                >
                  {icon.displayName}
                </Core.GdsText>
              </Core.GdsFlex>
            </Core.GdsCard>
          ))}
        </Core.GdsGrid>
      </Core.GdsFlex>

      {selectedIcon && (
        <>
          <Core.GdsCard
            padding="0"
            border-width="0"
            position="fixed"
            inset="20px 20px 20px auto"
            width="400px"
            z-index="20"
            variant="secondary"
            box-shadow="m"
            gap="0"
          >
            <Core.GdsCard
              border-color="primary"
              background="transparent"
              border-width="0 0 4xs 0"
              border-radius="0"
              flex-direction="row"
              align-items="center"
              justify-content="space-between"
            >
              <Core.GdsText tag="p">{selectedIcon.displayName}</Core.GdsText>
              <Core.GdsButton
                size="small"
                rank="tertiary"
                onClick={handleClosePanel}
              >
                <Core.IconCrossSmall></Core.IconCrossSmall>
              </Core.GdsButton>
            </Core.GdsCard>
            <Core.GdsFlex flex-direction="column" padding="m" gap="m">
              <Core.GdsCard
                padding="xl"
                justify-content="center"
                align-items="center"
                variant="primary"
                level="2"
                height="240px"
              >
                <Icon
                  name={formatDisplayName('Icon' + selectedIcon.displayName)}
                  size="2xl"
                  solid={isSolid}
                />
              </Core.GdsCard>

              {/* <Core.GdsFlex flex-direction="column" gap="m">
                <Core.GdsText tag="h3" font-size="display-xs">
                  Import
                </Core.GdsText>
                <Core.GdsCard variant="secondary" padding="s">
                  <Core.GdsText font-family="mono">
                    {selectedIcon.framework.react.import}
                  </Core.GdsText>
                </Core.GdsCard>
              </Core.GdsFlex> */}

              <Core.GdsDivider opacity="0.2"></Core.GdsDivider>

              <Core.GdsFlex flex-direction="column" gap="xs">
                <Core.GdsText tag="h3" font-size="display-xs" color="secondary">
                  Category
                </Core.GdsText>
                <Core.GdsFlex gap="s" flex-wrap="wrap">
                  {selectedIcon.meta.categories.map((category) => (
                    <Core.GdsBadge key={category} size="small">
                      {category}
                    </Core.GdsBadge>
                  ))}
                </Core.GdsFlex>
              </Core.GdsFlex>

              <Core.GdsDivider opacity="0.2"></Core.GdsDivider>

              <Core.GdsFlex flex-direction="column" gap="xs">
                <Core.GdsText tag="h3" font-size="display-xs" color="secondary">
                  Tags
                </Core.GdsText>
                <Core.GdsFlex gap="s" flex-wrap="wrap">
                  {selectedIcon.meta.tags.map((tag, index) => (
                    <React.Fragment key={tag}>{tag}</React.Fragment>
                  ))}
                </Core.GdsFlex>
              </Core.GdsFlex>

              {selectedIcon.meta.description && (
                <Core.GdsFlex flex-direction="column" gap="m">
                  <Core.GdsText tag="h3" font-size="display-xs">
                    Description
                  </Core.GdsText>
                  <Core.GdsText>{selectedIcon.meta.description}</Core.GdsText>
                </Core.GdsFlex>
              )}
            </Core.GdsFlex>
          </Core.GdsCard>
          <Core.GdsCard
            z-index="0"
            inset="0"
            position="fixed"
            background="tertiary"
            opacity="0.2"
            onClick={handleClosePanel}
          ></Core.GdsCard>
        </>
      )}
    </>
  )
}
