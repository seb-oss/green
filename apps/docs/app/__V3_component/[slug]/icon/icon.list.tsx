'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

import * as Core from '@sebgroup/green-core/react'
import { IconDetails, IconsResponse } from './icon.service'

interface IconListProps {
  icons: IconsResponse
}

export function IconList({ icons }: IconListProps) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isSolid, setIsSolid] = useState(false)

  const categories = useMemo(() => {
    const categorySet = new Set<string>()
    Object.values(icons).forEach((icon) => {
      icon.meta.categories.forEach((category) => categorySet.add(category))
    })
    return Array.from(categorySet)
  }, [icons])

  // Filter icons based on search and category
  const filteredIcons = useMemo(() => {
    return Object.entries(icons).filter(([name, icon]) => {
      const matchesSearch =
        name.toLowerCase().includes(search.toLowerCase()) ||
        icon.meta.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase()),
        )

      const matchesCategory =
        !selectedCategory || icon.meta.categories.includes(selectedCategory)

      return matchesSearch && matchesCategory
    })
  }, [icons, search, selectedCategory])

  const handleViewModeChange = (e: Event) => {
    const checkedValues = (e.target as any).value as string[]
    setViewMode(checkedValues.includes('list') ? 'list' : 'grid')
    setIsSolid(checkedValues.includes('solid'))
  }

  return (
    <Core.GdsFlex
      flex-direction="column"
      gap="2xl"
      padding="0"
      max-width="920px"
    >
      <Core.GdsFlex flex-direction="column" gap="m">
        <Core.GdsFlex align-items="center" gap="m" width="100%">
          <Core.GdsInput
            value={search}
            onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
            plain
            flex="1"
          >
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>

          <Core.GdsFlex width="200px">
            <Core.GdsDropdown
              value={selectedCategory}
              plain
              searchable
              onChange={(e) =>
                setSelectedCategory((e.target as HTMLSelectElement).value)
              }
            >
              <Core.IconChecklist slot="lead" />
              <Core.GdsOption value="">All</Core.GdsOption>
              {categories.map((category) => (
                <Core.GdsOption key={category} value={category}>
                  {category}
                </Core.GdsOption>
              ))}
            </Core.GdsDropdown>
          </Core.GdsFlex>
        </Core.GdsFlex>

        <Core.GdsFlex
          gap="m"
          align-items="center"
          justify-content="flex-start"
          width="100%"
          padding="m"
        >
          <Core.GdsCheckboxGroup direction="row" oninput={handleViewModeChange}>
            <Core.GdsCheckbox label="List view" value="list"></Core.GdsCheckbox>
            <Core.GdsCheckbox
              label="Solid icons"
              value="solid"
            ></Core.GdsCheckbox>
          </Core.GdsCheckboxGroup>
        </Core.GdsFlex>
      </Core.GdsFlex>

      <Core.GdsGrid columns={viewMode === 'grid' ? '6' : '2'} gap="m">
        {filteredIcons.map(([name, icon]) => (
          <Link
            key={name}
            href={`/component/icon/${name}`}
            className="icon-item"
          >
            <Core.GdsCard
              flex-direction={viewMode === 'list' ? 'row' : 'column'}
              align-items="center"
              gap="m"
              padding={viewMode === 'list' ? 'l' : 'm'}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="none"
                fill="none"
                dangerouslySetInnerHTML={{
                  __html: isSolid ? icon.variants.solid : icon.variants.regular,
                }}
              ></svg>
              <Core.GdsText tag="small">{icon.displayName}</Core.GdsText>
            </Core.GdsCard>
          </Link>
        ))}
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
