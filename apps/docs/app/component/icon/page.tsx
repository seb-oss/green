'use client'

import './page.css'

import { useEffect, useState } from 'react'
import {
  GdsButton,
  GdsCard,
  GdsFilterChip,
  GdsFilterChips,
  GdsFlex,
  GdsGrid,
  GdsInput,
  GdsText,
} from '$/import/components'
import { IconMagnifyingGlass } from '$/import/icons'

interface IconData {
  id: string
  displayName: string
  fileName: string
  urlPath: string
  variants: {
    regular: string
    solid: string
  }
  static: {
    regular: string
    solid: string
  }
  meta: {
    description: string
    categories: string[]
    tags: string[]
  }
  framework: {
    web: FrameworkConfig
    react: FrameworkConfig
    angular: FrameworkConfig
  }
}

interface FrameworkConfig {
  path: string
  import: string
  component: string
}

export default function IconBrowser() {
  const [icons, setIcons] = useState<Record<string, IconData>>({})
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null)
  const [categories, setCategories] = useState<string[]>([])
  const [framework, setFramework] = useState<'web' | 'react' | 'angular'>('web')
  const [showSolid, setShowSolid] = useState(false) // New state for solid/regular toggle

  useEffect(() => {
    fetch('https://api.seb.io/icons/icons.json')
      .then((res) => res.json())
      .then((data) => {
        setIcons(data)
        const allCategories = new Set<string>()
        ;(Object.values(data) as IconData[]).forEach((icon) => {
          icon.meta.categories.forEach((cat) => allCategories.add(cat))
        })
        setCategories(Array.from(allCategories))
      })
  }, [])

  const handleFilterChange = (event: CustomEvent) => {
    const selectedValues = event.detail.value.split(',')
    if (selectedValues.includes('all')) {
      setSelectedCategories([])
    } else {
      setSelectedCategories(selectedValues)
    }
  }

  const filteredIcons = Object.entries(icons).filter(([key, icon]) => {
    const matchesSearch =
      icon.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      icon.meta.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      )

    const matchesCategories =
      selectedCategories.length === 0 ||
      icon.meta.categories.some((cat) => selectedCategories.includes(cat))

    return matchesSearch && matchesCategories
  })

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const downloadSVG = async (url: string, filename: string) => {
    const response = await fetch(url)
    const blob = await response.blob()
    const blobUrl = window.URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = blobUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(blobUrl)
  }

  return (
    <GdsFlex flex-direction="column" gap="xl" className="icons-browser">
      <GdsFlex flex-direction="column" align-items="flex-start" gap="xl">
        <GdsInput
          clearable
          onKeyUp={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
        >
          <IconMagnifyingGlass height={24} slot="lead" />
        </GdsInput>
        {/* <GdsButton
          rank={showSolid ? 'secondary' : 'primary'}
          onClick={(e) => setShowSolid(!showSolid)}
          size="xs"
        >
          Solid
        </GdsButton> */}
        <GdsFlex>
          <GdsFilterChips
            value={
              selectedCategories.length ? selectedCategories.join(',') : 'all'
            }
            onChange={(e) => handleFilterChange(e as CustomEvent)}
          >
            <GdsFilterChip value="all">All</GdsFilterChip>
            {categories.map((category) => (
              <GdsFilterChip key={category} value={category}>
                {category}
              </GdsFilterChip>
            ))}
          </GdsFilterChips>
        </GdsFlex>
      </GdsFlex>
      <GdsFlex gap="xl">
        <GdsGrid columns="6" gap="m" className="preview">
          {filteredIcons.map(([key, icon]) => (
            <GdsCard
              key={key}
              onClick={() => setSelectedIcon(key)}
              padding="xl"
              height="max-content"
            >
              <GdsFlex
                flex-direction="column"
                align-items="center"
                gap="l s m s"
              >
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  fill="none"
                  dangerouslySetInnerHTML={{
                    __html: icon.variants.regular,
                  }}
                ></svg>

                <GdsText tag="small">{icon.displayName}</GdsText>
              </GdsFlex>
            </GdsCard>
          ))}
        </GdsGrid>

        {selectedIcon && icons[selectedIcon] && (
          <GdsCard width="240px">
            <h2>{icons[selectedIcon].displayName}</h2>

            <div>
              <h3>Preview</h3>
              <div>
                <div>
                  <h4>Regular</h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: icons[selectedIcon].variants.regular,
                    }}
                  />
                </div>
                <div>
                  <h4>Solid</h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: icons[selectedIcon].variants.solid,
                    }}
                  />
                </div>
              </div>
            </div>
          </GdsCard>
        )}
      </GdsFlex>
    </GdsFlex>
  )
}
