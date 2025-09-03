// design/studio/tools/icons/icons.tsx
'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../../hooks'
import { useContent } from '../../../../settings/content'

import './icons.css'

import IconDetail from './icons.sub'

export default function Icons() {
  const { isLoaded, actions } = useContent()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const component = actions.getComponent('icon')

  const { categories, iconList, totalIcons } = useMemo(() => {
    if (!component?.icons)
      return { categories: [], iconList: [], totalIcons: 0 }

    const totalIcons = Object.keys(component.icons).length

    // Get unique categories
    const cats = Array.from(
      new Set(
        Object.values(component.icons)
          .map((icon) => icon.meta.categories)
          .flat(),
      ),
    ).sort()

    // Create icon list
    let icons = Object.entries(component.icons)

    // Filter by search
    if (search) {
      icons = icons.filter(([name, icon]) => {
        const searchString =
          `${name} ${icon.displayName} ${icon.meta.categories.join(' ')} ${icon.meta.tags.join(' ')}`.toLowerCase()
        return searchString.includes(search.toLowerCase())
      })
    }

    // Filter by category
    if (selectedCategory) {
      icons = icons.filter(([_, icon]) =>
        icon.meta.categories.includes(selectedCategory),
      )
    }

    return {
      categories: cats,
      iconList: icons.sort((a, b) =>
        a[1].displayName.localeCompare(b[1].displayName),
      ),
      totalIcons,
    }
  }, [component?.icons, search, selectedCategory])

  const NAME = (name: string) => {
    return name.replace(/\s+/g, '')
  }

  if (!isLoaded || !component?.icons) return null

  return (
    <Core.GdsFlex flex-direction="column" gap="4xl" padding="xl">
      <Core.GdsFlex gap="s" justify-content="space-between">
        <Core.GdsFlex gap="s" align-items="center">
          <Core.GdsText tag="h1">Icons</Core.GdsText>
          <Core.GdsText tag="h1" color="positive-03">
            {totalIcons}
          </Core.GdsText>
        </Core.GdsFlex>
        <Core.GdsFlex width="max-content" gap="s">
          <Core.GdsInput
            plain
            min-width="420px"
            clearable
            value={search}
            onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
          >
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>
          <Core.GdsFlex width="240px">
            <Core.GdsDropdown
              plain
              value={selectedCategory}
              oninput={(e: Event) =>
                setSelectedCategory((e.target as HTMLSelectElement).value)
              }
            >
              <Core.GdsOption value="">All Categories</Core.GdsOption>
              {categories.map((category) => (
                <Core.GdsOption key={category} value={category}>
                  {category}
                </Core.GdsOption>
              ))}
            </Core.GdsDropdown>
          </Core.GdsFlex>

          <div>Migration, solid, size</div>
        </Core.GdsFlex>
      </Core.GdsFlex>

      <Core.GdsFlex gap="4xl" align-items="flex-start" width="100%">
        {iconList.length > 0 ? (
          <Core.GdsGrid columns="4" gap="l" height="max-content">
            {iconList.map(([name, icon]) => (
              <Core.GdsCard
                key={name}
                padding="m"
                min-height="200px"
                justify-content="center"
                align-items="center"
                variant="secondary"
                border-radius="m"
              >
                <Core.GdsFlex
                  justify-content="center"
                  align-items="center"
                  height="48px"
                  color="neutral-01"
                >
                  <Icon name={`Icon` + NAME(icon.displayName)} size="l" />
                </Core.GdsFlex>
                <Core.GdsText
                  color="neutral-02"
                  font="detail-book-xs"
                  text-align="center"
                >
                  {icon.displayName}
                </Core.GdsText>
              </Core.GdsCard>
            ))}
          </Core.GdsGrid>
        ) : (
          <Core.GdsCard
            justify-content="center"
            align-items="center"
            height="40vh"
            padding="2xl"
            flex="1"
          >
            <Core.IconMagnifyingGlass size="xl" />
            <Core.GdsText color="subtle-02">
              No icons found matching your search
            </Core.GdsText>
          </Core.GdsCard>
        )}
        <IconDetail ID="arrow-left" />
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
