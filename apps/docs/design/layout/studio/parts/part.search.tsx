// studio/parts/part.search.tsx
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { useSearch } from '../context/search.context'

export default function StudioSearch({ page }: { page?: string }) {
  const router = useRouter()
  const { query, category, setQuery, setCategory, getCategories } = useSearch()
  const categories = page ? getCategories(page) : []

  const handleSearch = (value: string) => {
    setQuery(value)
    // Search just updates the query, no route change
  }

  const handleCategoryChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    setCategory(target.value)
    if (target.value) {
      router.push(`/studio/${page}/${target.value.toLowerCase()}`)
    } else {
      router.push(`/studio/${page}`)
    }
  }

  return (
    <Core.GdsFlex
      align-items="center"
      justify-content="space-between"
      className="studio-search"
    >
      <Core.GdsFlex align-items="center" width="100%" gap="s">
        <Core.GdsInput
          width="400px"
          plain
          value={query}
          onInput={(e) => handleSearch((e.target as HTMLInputElement).value)}
          clearable
        >
          <Core.IconMagnifyingGlass slot="lead" size="m" />
        </Core.GdsInput>
        {categories.length > 0 && (
          <Core.GdsFlex>
            <Core.GdsDropdown
              plain
              value={category}
              onchange={handleCategoryChange}
            >
              <Core.GdsOption value="">All Categories</Core.GdsOption>
              {categories.map((cat) => (
                <Core.GdsOption key={cat} value={cat}>
                  {cat}
                </Core.GdsOption>
              ))}
            </Core.GdsDropdown>
          </Core.GdsFlex>
        )}
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
