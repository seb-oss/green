// app/component/[slug]/content.icon.tsx
'use client'

import React, { useMemo, useState } from 'react'
import Fuse from 'fuse.js'

import * as Core from '@sebgroup/green-core/react'
import { DeprecatedIcons } from '../../../design/atoms/deprecated/deprecated'
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

interface FuseIconItem {
  id: string
  searchName: string
  searchDisplayName: string
  searchCategories: string[]
  searchTags: string[]
  searchDescription?: string
  originalIcon: IconData
}

const fuseOptions = {
  keys: [
    'searchName',
    'searchDisplayName',
    'searchCategories',
    'searchTags',
    'searchDescription',
  ],
  threshold: 0.3,
  ignoreLocation: true,
  shouldSort: true,
}

export function IconContent({ component }: IconContentProps) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSize, setSelectedSize] = useState<IconSize>('l')
  const [isSolid, setIsSolid] = useState(false)
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null)
  // Create fuseItems and fuse instance with useMemo
  const { fuseItems, fuse, categories } = useMemo(() => {
    if (!component.icons) return { fuseItems: [], fuse: null, categories: [] }

    const items = Object.entries(component.icons).map(([name, icon]) => ({
      id: name,
      searchName: name,
      searchDisplayName: icon.displayName,
      searchCategories: icon.meta.categories,
      searchTags: icon.meta.tags,
      searchDescription: icon.meta.description,
      originalIcon: icon,
    }))

    return {
      fuseItems: items,
      fuse: new Fuse(items, fuseOptions),
      categories: Array.from(
        new Set(
          Object.values(component.icons)
            .map((icon) => icon.meta.categories)
            .flat(),
        ),
      ).sort(),
    }
  }, [component.icons])

  const iconList = useMemo(() => {
    if (!component.icons) return []

    let results: [string, IconData][] = Object.entries(component.icons)

    if (search && fuse) {
      const fuseResults = fuse.search(search)
      results = fuseResults.map(({ item }) => [item.id, item.originalIcon])
    }

    if (selectedCategory) {
      results = results.filter(([_, icon]) =>
        icon.meta.categories.includes(selectedCategory),
      )
    }

    return results.sort((a, b) =>
      a[1].displayName.localeCompare(b[1].displayName),
    )
  }, [search, selectedCategory, component.icons, fuse])

  // If a URL hash is present, find the icon by name and set it as selected
  React.useEffect(() => {
    if (!window || !component.icons) return

    const hash = window.location.hash.replace('#', '')
    if (hash) {
      const iconName = hash.replace(/Icon/, '') // Remove 'Icon' prefix
      const icon = Object.values(component.icons).find(
        (icon) => formatDisplayName(icon.displayName) === iconName,
      )
      if (icon) {
        setSelectedIcon(icon)
      } else {
        setSelectedIcon(null)
      }
    } else {
      setSelectedIcon(null)
    }
  }, [component.icons])

  // handle history state for back navigation
  React.useEffect(() => {
    const handlePopState = () => {
      if (!window || !component.icons) return
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        const iconName = hash.replace(/Icon/, '') // Remove 'Icon' prefix
        const icon = Object.values(component.icons).find(
          (icon) => formatDisplayName(icon.displayName) === iconName,
        )
        if (icon) {
          setSelectedIcon(icon)
        } else {
          setSelectedIcon(null)
        }
      } else {
        setSelectedIcon(null)
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [component.icons])

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

  if (!component.icons) return null

  const totalIcons = Object.keys(component.icons).length
  const filteredCount = iconList.length
  const resultsText =
    search || selectedCategory
      ? `${filteredCount} of ${totalIcons} icons`
      : `${totalIcons} icons`

  const handleIconClick = (_name: string, icon: IconData) => {
    setSelectedIcon(icon)
    // set URL hash to the icon name for deep linking
    const formattedName = formatDisplayName(icon.displayName)
    window.location.hash = `#${formattedName}`
  }

  const handleClosePanel = () => {
    setSelectedIcon(null)
    window.history.pushState({}, '', window.location.pathname)
  }

  return (
    <>
      <Core.GdsFlex
        flex-direction="column"
        gap="l"
        position="relative"
        id="search-icons"
      >
        <Core.GdsGrid
          columns="4"
          gap="l"
          border-color="information-02"
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
                value={selectedSize}
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
          <Core.GdsAlert
            variant="warning"
            buttonLabel="Instruction"
            onClick={() => {
              const element = document.getElementById('migration')
              if (element) {
                const elementPosition = element.getBoundingClientRect().top
                const offsetPosition =
                  elementPosition + window.pageYOffset - 200

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth',
                })
              }
            }}
          >
            Font awesome migration
          </Core.GdsAlert>
        )}

        <Core.GdsGrid columns={view === 'grid' ? '2; s{4}' : '1; s{3}'} gap="l">
          {iconList.map(([name, icon]: [string, IconData]) => (
            <Core.GdsCard
              key={icon.id}
              height="100%"
              padding={view === 'grid' ? 'm' : 'xs'}
              onClick={() => handleIconClick(name, icon)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleIconClick(name, icon)
                  e.preventDefault()
                  e.stopPropagation()
                }
              }}
              className="pointer l2-state-neutral-03 focusable"
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
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
                  color="neutral-02"
                  font="detail-book-s"
                  text-align={view === 'grid' ? 'center' : 'left'}
                >
                  {icon.displayName}
                </Core.GdsText>
              </Core.GdsFlex>
            </Core.GdsCard>
          ))}
        </Core.GdsGrid>
        <Core.GdsFlex
          flex-direction="column"
          id="migration"
          gap="l"
          margin="4xl 0 0 0"
        >
          <Core.GdsFlex flex-direction="column" gap="xs">
            <Core.GdsText tag="h2">Migration</Core.GdsText>
            <Core.GdsText tag="p">
              Complete mapping of FontAwesome icons to their Green Design System
              equivalents
            </Core.GdsText>
          </Core.GdsFlex>
          <DeprecatedIcons />
        </Core.GdsFlex>
      </Core.GdsFlex>
      {selectedIcon && (
        <>
          <Core.GdsDialog
            variant="slide-out"
            onGdsClose={handleClosePanel}
            width="100%; s { 340px }"
            heading={selectedIcon.displayName}
            open
          >
            <Core.GdsFlex flex-direction="column" gap="m">
              <Core.GdsCard
                padding="xl"
                justify-content="space-between"
                align-items="center"
                variant="secondary"
                level="2"
                height="200px"
                padding-block="l s"
                color="primary"
              >
                <Core.GdsFlex
                  align-items="center"
                  justify-content="center"
                  height="100%"
                >
                  <Icon
                    name={formatDisplayName('Icon' + selectedIcon.displayName)}
                    size="2xl"
                    solid={isSolid}
                  />
                </Core.GdsFlex>
              </Core.GdsCard>
              <Core.GdsGrid columns="4" gap="s">
                <Core.GdsCard
                  justify-content="center"
                  align-items="center"
                  height="60px"
                  padding="s"
                  variant="positive"
                >
                  <Icon
                    name={formatDisplayName('Icon' + selectedIcon.displayName)}
                    size="m"
                    solid={isSolid}
                  />
                </Core.GdsCard>
                <Core.GdsCard
                  justify-content="center"
                  align-items="center"
                  height="60px"
                  padding="s"
                  variant="negative"
                >
                  <Icon
                    name={formatDisplayName('Icon' + selectedIcon.displayName)}
                    size="m"
                    solid={isSolid}
                  />
                </Core.GdsCard>
                <Core.GdsCard
                  justify-content="center"
                  align-items="center"
                  height="60px"
                  padding="s"
                  variant="notice"
                >
                  <Icon
                    name={formatDisplayName('Icon' + selectedIcon.displayName)}
                    size="m"
                    solid={isSolid}
                  />
                </Core.GdsCard>
                <Core.GdsCard
                  justify-content="center"
                  align-items="center"
                  height="60px"
                  padding="s"
                  variant="warning"
                >
                  <Icon
                    name={formatDisplayName('Icon' + selectedIcon.displayName)}
                    size="m"
                    solid={isSolid}
                  />
                </Core.GdsCard>
              </Core.GdsGrid>

              <Core.GdsDivider opacity="0.2"></Core.GdsDivider>

              <Core.GdsFlex flex-direction="column" gap="xs">
                <Core.GdsText tag="h3" font="display-xs" color="secondary">
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
                <Core.GdsText tag="h3" font="display-xs" color="secondary">
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
                  <Core.GdsText tag="h3" font="display-xs">
                    Description
                  </Core.GdsText>
                  <Core.GdsText>{selectedIcon.meta.description}</Core.GdsText>
                </Core.GdsFlex>
              )}
            </Core.GdsFlex>
            <Core.GdsButton
              rank="tertiary"
              size="small"
              onClick={handleClosePanel}
              slot="footer"
            >
              Close
            </Core.GdsButton>
          </Core.GdsDialog>
        </>
      )}
    </>
  )
}
