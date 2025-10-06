// studio/parts/part.search.tsx
import { usePathname, useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { useSearch } from '../context/search.context'

export default function StudioSearch({ page }: { page?: string }) {
  const pathName = usePathname()
  const {
    query,
    category,
    setQuery,
    getCategories,
    previewText,
    setPreviewText,
    solid,
    setSolid,
    setIconSize,
  } = useSearch()
  const categories = page ? getCategories(page) : []

  const handleSearch = (value: string) => {
    setQuery(value)
  }

  if (pathName?.includes('compose') || pathName?.includes('playground'))
    return null

  return (
    <Core.GdsFlex
      align-items="center"
      justify-content="space-between"
      className="studio-search"
      gap="xl"
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
          <Core.GdsFlex width="160px">
            <Core.GdsDropdown plain value={category}>
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
      <Core.GdsFlex>
        {page === 'icons' && (
          <Core.GdsFlex align-items="center" gap="s">
            <Core.GdsCheckbox
              label="Solid"
              checked={solid}
              onChange={(e) => setSolid(e.target.checked)}
            />

            <Core.GdsFlex width="100px">
              <Core.GdsDropdown
                plain
                onchange={(e: Event) => {
                  const target = e.target as HTMLSelectElement
                  setIconSize(target.value)
                }}
              >
                <Core.GdsOption value="s">S</Core.GdsOption>
                <Core.GdsOption value="m">M</Core.GdsOption>
                <Core.GdsOption value="l">L</Core.GdsOption>
                <Core.GdsOption value="xl">XL</Core.GdsOption>
              </Core.GdsDropdown>
            </Core.GdsFlex>
          </Core.GdsFlex>
        )}

        {page === 'typography' && (
          <Core.GdsInput
            width="100%"
            plain
            value={previewText}
            oninput={(e) =>
              setPreviewText((e.target as HTMLInputElement).value)
            }
            clearable
          >
            <Core.IconPencilWave slot="lead" size="m" />
          </Core.GdsInput>
        )}
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
