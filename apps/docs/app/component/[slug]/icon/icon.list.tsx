// app/component/[slug]/icon/icon-list.tsx
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

  // Get unique categories from icons
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

  return (
    <Core.GdsFlex flex-direction="column" gap="2xl" padding="0">
      <Core.GdsFlex align-items="center" gap="m" width="400px">
        <Core.GdsInput
          value={search}
          onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
          plain
        >
          <Core.IconMagnifyingGlass slot="lead" />
        </Core.GdsInput>
        <Core.GdsDropdown
          value={selectedCategory}
          plain
          searchable
          onChange={(e) =>
            setSelectedCategory((e.target as HTMLSelectElement).value)
          }
        >
          <Core.GdsOption value="">All</Core.GdsOption>
          {categories.map((category) => (
            <Core.GdsOption key={category} value={category}>
              {category}
            </Core.GdsOption>
          ))}
        </Core.GdsDropdown>
      </Core.GdsFlex>

      <Core.GdsGrid columns="6" gap="m" max-width="920px">
        {filteredIcons.map(([name, icon]) => (
          <Link
            key={name}
            href={`/component/icon/${name}`}
            className="icon-item"
          >
            <Core.GdsCard align-items="center" justify-content="center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="none"
                fill="none"
                dangerouslySetInnerHTML={{ __html: icon.variants.regular }}
              ></svg>
              <Core.GdsText tag="small">{icon.displayName}</Core.GdsText>
            </Core.GdsCard>
          </Link>
        ))}
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
