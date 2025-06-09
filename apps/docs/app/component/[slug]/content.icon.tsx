// app/component/[slug]/content.icon.tsx
'use client'

import { useState } from 'react'

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

export function IconContent({ component }: IconContentProps) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

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

  return (
    <Core.GdsFlex flex-direction="column" gap="l">
      List of deprecated icons and replacement for font awesome
      <Core.GdsGrid columns="4" gap="l">
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
        >
          <Core.GdsText color="secondary" tag="small">
            Number of results
          </Core.GdsText>
        </Core.GdsFlex>
        <Core.GdsFlex>
          <Core.GdsSegmentedControl size="small" value="grid">
            <Core.GdsSegment value="grid">Grid</Core.GdsSegment>
            <Core.GdsSegment value="list">List</Core.GdsSegment>
          </Core.GdsSegmentedControl>
        </Core.GdsFlex>
      </Core.GdsGrid>
      <Core.GdsGrid columns="4" gap="l">
        {iconList.map(([name, icon]: [string, IconData]) => (
          <Core.GdsCard key={icon.id} height="100%" padding="m">
            <Core.GdsFlex
              flex-direction="column"
              gap="s"
              align-items="center"
              height="100%"
            >
              <Core.GdsFlex
                justify-content="center"
                align-items="center"
                height="48px"
              >
                <Icon
                  name={formatDisplayName('Icon' + icon.displayName)}
                  size="l"
                />
              </Core.GdsFlex>

              <Core.GdsText tag="small" color="secondary" text-align="center">
                {icon.displayName}
              </Core.GdsText>
            </Core.GdsFlex>
          </Core.GdsCard>
        ))}
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
