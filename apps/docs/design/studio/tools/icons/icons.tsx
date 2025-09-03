// design/studio/tools/icons/icons.tsx
'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../../hooks'
import { useContent } from '../../../../settings/content'

export default function Icons() {
  const { isLoaded, actions } = useContent()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const component = actions.getComponent('icon')

  const { categories, iconList } = useMemo(() => {
    if (!component?.icons) return { categories: [], iconList: [] }

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
    }
  }, [component?.icons, search, selectedCategory])

  const NAME = (name: string) => {
    return name.replace(/\s+/g, '')
  }

  if (!isLoaded || !component?.icons) return null

  return (
    <Core.GdsFlex flex-direction="column" gap="6xl" padding="xl">
      <Core.GdsFlex gap="s" justify-content="space-between">
        <Core.GdsText tag="h1">Icons</Core.GdsText>
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
        </Core.GdsFlex>
      </Core.GdsFlex>

      <Core.GdsGrid columns="6" gap="l">
        {iconList.map(([name, icon]) => (
          <Core.GdsCard
            key={name}
            padding="m"
            min-height="200px"
            justify-content="center"
            align-items="center"
          >
            <Core.GdsFlex
              justify-content="center"
              align-items="center"
              height="48px"
            >
              <Icon name={`Icon` + NAME(icon.displayName)} size="l" />
            </Core.GdsFlex>
            <Core.GdsText
              color="neutral-02"
              font="detail-book-s"
              text-align="center"
            >
              {icon.displayName}
            </Core.GdsText>
          </Core.GdsCard>
        ))}
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
