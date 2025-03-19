'use client'

import './page.css'

import { useEffect, useState } from 'react'
import {
  GdsBadge,
  GdsButton,
  GdsCard,
  GdsFilterChip,
  GdsFilterChips,
  GdsFlex,
  GdsGrid,
  GdsInput,
  GdsText,
} from '$/import/components'
import { IconCheckmark, IconMagnifyingGlass } from '$/import/icons'

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
        // Set 'all' as default category
        setSelectedCategories(['all'])
      })
  }, [])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
      // Always select only the clicked category
      return [category]
    })
  }

  const filteredIcons = Object.entries(icons).filter(([key, icon]) => {
    const matchesSearch =
      icon.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      icon.meta.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      )

    const matchesCategories =
      selectedCategories.includes('all') ||
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

  useEffect(() => {
    if (Object.keys(icons).length > 0 && !selectedIcon) {
      setSelectedIcon(Object.keys(icons)[0])
    }
  }, [icons])

  return (
    <GdsFlex flex-direction="column" gap="xl" className="icons-browser">
      <GdsFlex flex-direction="column" align-items="flex-start" gap="xl">
        <GdsInput
          clearable
          onKeyUp={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
        >
          <IconMagnifyingGlass height={24} slot="lead" />
        </GdsInput>
        <GdsButton
          rank={showSolid ? 'primary' : 'secondary'}
          onClick={(e) => setShowSolid(!showSolid)}
          size="small"
        >
          {showSolid && <IconCheckmark height={12} slot="lead" />}
          {showSolid ? 'Show Regular' : 'Show Solid'}
        </GdsButton>
        <GdsFlex gap="s" flex-wrap="wrap" max-width="80%">
          <GdsButton
            rank={selectedCategories.includes('all') ? 'primary' : 'secondary'}
            size="small"
            onClick={() => toggleCategory('all')}
          >
            {selectedCategories.includes('all') && (
              <IconCheckmark height={12} slot="lead" />
            )}
            All
          </GdsButton>
          {categories.map((category) => (
            <GdsButton
              key={category}
              rank={
                selectedCategories.includes(category) ? 'primary' : 'secondary'
              }
              size="small"
              onClick={() => toggleCategory(category)}
            >
              {selectedCategories.includes(category) && (
                <IconCheckmark height={12} slot="lead" />
              )}
              {category}
            </GdsButton>
          ))}
        </GdsFlex>
      </GdsFlex>
      <GdsFlex gap="xl" align-items="flex-start">
        <GdsGrid columns="4" gap="m" className="preview">
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
                {showSolid ? (
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    fill="none"
                    dangerouslySetInnerHTML={{
                      __html: icon.variants.solid,
                    }}
                  ></svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    fill="none"
                    dangerouslySetInnerHTML={{
                      __html: icon.variants.regular,
                    }}
                  ></svg>
                )}

                <GdsText tag="small">{icon.displayName}</GdsText>
              </GdsFlex>
            </GdsCard>
          ))}
        </GdsGrid>

        {selectedIcon && icons[selectedIcon] && (
          <GdsCard
            width="240px"
            max-width="240px"
            height="max-content"
            position="sticky"
            inset="80px 0 0 0"
            padding="s"
            border-radius="l"
          >
            <GdsFlex flex-direction="column" gap="l">
              <GdsFlex flex-direction="column">
                <GdsCard variant="secondary" className="preview">
                  <GdsFlex
                    align-items="center"
                    justify-content="center"
                    height="120px"
                    aspect-ratio="1"
                    className="icon-large-preview"
                  >
                    {showSolid ? (
                      <svg
                        viewBox="0 0 24 24"
                        width="44"
                        height="44"
                        fill="none"
                        dangerouslySetInnerHTML={{
                          __html: icons[selectedIcon].variants.solid,
                        }}
                      />
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        width="44"
                        height="44"
                        strokeWidth={1.5}
                        fill="none"
                        dangerouslySetInnerHTML={{
                          __html: icons[selectedIcon].variants.regular,
                        }}
                      />
                    )}
                  </GdsFlex>
                </GdsCard>
                <GdsFlex flex-direction="column" gap="s" padding="s m m m">
                  <GdsText tag="h4">{icons[selectedIcon].displayName}</GdsText>
                  {icons[selectedIcon].meta.categories.map((category) => (
                    <GdsBadge key={category} size="small">
                      {category}
                    </GdsBadge>
                  ))}
                </GdsFlex>
              </GdsFlex>
              <GdsFlex flex-direction="column" gap="m">
                <GdsFlex flex-direction="column" gap="s">
                  <GdsText tag="small">keywords</GdsText>
                  <GdsText tag="small">
                    {icons[selectedIcon].meta.tags.length > 0 ? (
                      icons[selectedIcon].meta.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))
                    ) : (
                      <span>No tags available</span>
                    )}
                  </GdsText>
                </GdsFlex>

                {/* <GdsFlex flex-direction="column" gap="s">
                  <GdsText tag="h4">Description</GdsText>
                  <GdsText>
                    {icons[selectedIcon].meta.description ||
                      'No description available'}
                  </GdsText>
                </GdsFlex> */}

                <GdsFlex flex-direction="column" gap="m">
                  <GdsText tag="h4">Download</GdsText>
                  <GdsFlex gap="s">
                    <GdsButton
                      size="small"
                      onClick={() =>
                        downloadSVG(
                          icons[selectedIcon].static.regular,
                          `${selectedIcon}-regular.svg`,
                        )
                      }
                    >
                      Regular SVG
                    </GdsButton>
                    <GdsButton
                      size="small"
                      onClick={() =>
                        downloadSVG(
                          icons[selectedIcon].static.solid,
                          `${selectedIcon}-solid.svg`,
                        )
                      }
                    >
                      Solid SVG
                    </GdsButton>
                  </GdsFlex>
                </GdsFlex>

                <GdsFlex flex-direction="column" gap="m">
                  <GdsText tag="h4">Frameworks</GdsText>
                  <GdsFlex gap="s">
                    {(['web', 'react', 'angular'] as const).map((fw) => (
                      <GdsButton
                        key={fw}
                        size="small"
                        rank={framework === fw ? 'primary' : 'secondary'}
                        onClick={() => setFramework(fw)}
                      >
                        {fw.charAt(0).toUpperCase() + fw.slice(1)}
                      </GdsButton>
                    ))}
                  </GdsFlex>

                  <GdsFlex flex-direction="column" gap="s">
                    <GdsFlex
                      justify-content="space-between"
                      align-items="center"
                    >
                      <GdsText tag="small">Path</GdsText>
                      <GdsButton
                        size="xs"
                        onClick={() =>
                          copyToClipboard(
                            icons[selectedIcon].framework[framework].path,
                          )
                        }
                      >
                        Copy
                      </GdsButton>
                    </GdsFlex>
                    <GdsInput
                      size="small"
                      value={icons[selectedIcon].framework[framework].path}
                    />

                    <GdsFlex
                      justify-content="space-between"
                      align-items="center"
                    >
                      <GdsText tag="small">Import</GdsText>
                      <GdsButton
                        size="xs"
                        onClick={() =>
                          copyToClipboard(
                            icons[selectedIcon].framework[framework].import,
                          )
                        }
                      >
                        Copy
                      </GdsButton>
                    </GdsFlex>
                    <GdsInput
                      size="small"
                      value={icons[selectedIcon].framework[framework].import}
                    />

                    <GdsFlex
                      justify-content="space-between"
                      align-items="center"
                    >
                      <GdsText tag="small">Component</GdsText>
                      <GdsButton
                        size="xs"
                        onClick={() =>
                          copyToClipboard(
                            icons[selectedIcon].framework[framework].component,
                          )
                        }
                      >
                        Copy
                      </GdsButton>
                    </GdsFlex>
                    <GdsInput
                      size="small"
                      value={icons[selectedIcon].framework[framework].component}
                    />
                  </GdsFlex>
                </GdsFlex>
              </GdsFlex>
            </GdsFlex>
          </GdsCard>
        )}
      </GdsFlex>
    </GdsFlex>
  )
}
