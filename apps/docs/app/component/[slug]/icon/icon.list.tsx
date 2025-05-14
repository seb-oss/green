// app/component/[slug]/icon/icon-list.tsx
'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

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
    <div className="icon-browser">
      <div className="icon-filters">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search icons..."
          className="icon-search"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-filter"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="icons-grid">
        {filteredIcons.map(([name, icon]) => (
          <Link
            key={name}
            href={`/component/icon/${name}`}
            className="icon-item"
          >
            <div
              className="icon-preview"
              dangerouslySetInnerHTML={{ __html: icon.variants.regular }}
            />
            <span className="icon-name">{icon.displayName}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
