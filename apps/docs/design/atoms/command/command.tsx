// command.tsx
'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { useSettingsContext, useSettingsValue } from '../../../settings'
import { useContentContext } from '../../../settings/content'

interface SearchResult {
  title: string
  href: string
  type: 'component' | 'page' | 'template'
  summary?: string
  beta?: boolean
  category?: string[]
}

export default function Command() {
  const router = useRouter()
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Command)
  const { actions: SettingsActions } = useSettingsContext()
  const { actions: ContentActions } = useContentContext()
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const searchResults = useMemo(() => {
    const results: SearchResult[] = []

    // Components
    ContentActions.getComponents({
      sort: (a, b) => a.title.localeCompare(b.title),
    }).forEach((component) => {
      if (
        !query ||
        component.title.toLowerCase().includes(query.toLowerCase()) ||
        component.summary?.toLowerCase().includes(query.toLowerCase()) ||
        component.category?.some((cat) =>
          cat.toLowerCase().includes(query.toLowerCase()),
        )
      ) {
        results.push({
          title: component.title,
          href: `/component/${component.slug}`,
          type: 'component',
          summary: component.summary,
          beta: component.beta,
          category: component.category,
        })
      }
    })

    // Pages
    ContentActions.getPages({
      sort: (a, b) => a.title.localeCompare(b.title),
    }).forEach((page) => {
      if (
        !query ||
        page.title.toLowerCase().includes(query.toLowerCase()) ||
        page.summary?.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push({
          title: page.title,
          href: `/${page.slug}`,
          type: 'page',
          summary: page.summary,
        })
      }
    })

    // Templates
    ContentActions.getTemplates({
      sort: (a, b) => a.title.localeCompare(b.title),
    }).forEach((template) => {
      if (
        !query ||
        template.title.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push({
          title: template.title,
          href: `/template/${template.slug}`,
          type: 'template',
        })
      }
    })

    return results
  }, [query, ContentActions])

  const handleClosePanel = () => {
    SettingsActions.toggle('UI.Panel.All')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex((prev) =>
          prev < searchResults.length - 1 ? prev + 1 : prev,
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
        break
      case 'Enter':
        e.preventDefault()
        if (searchResults[selectedIndex]) {
          router.push(searchResults[selectedIndex].href)
          handleClosePanel()
        }
        break
      case 'Escape':
        handleClosePanel()
        break
    }
  }

  useEffect(() => {
    if (isOpen) {
      const timeoutId = setTimeout(() => {
        inputRef.current?.focus()
      }, 0)

      setSelectedIndex(0)
      setQuery('')

      return () => clearTimeout(timeoutId)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <Core.GdsDialog
      onGdsClose={handleClosePanel}
      width="680px"
      min-width="680px"
      heading="Search"
      open
    >
      <Core.GdsFlex flex-direction="column" gap="m">
        <Core.GdsInput
          ref={inputRef}
          plain
          value={query}
          onInput={(e) => {
            setQuery((e.target as HTMLInputElement).value)
            setSelectedIndex(0)
          }}
          onKeyDown={handleKeyDown}
          autofocus
        >
          <Core.IconMagnifyingGlass slot="lead" />
        </Core.GdsInput>

        <Core.GdsFlex
          flex-direction="column"
          gap="xs"
          max-height="400px"
          overflow="auto"
        >
          {searchResults.map((result, index) => (
            <Core.GdsCard
              key={result.href}
              padding="s"
              background={selectedIndex === index ? 'primary' : 'secondary'}
              width="100%"
              onClick={() => {
                router.push(result.href)
                handleClosePanel()
              }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  router.push(result.href)
                  handleClosePanel()
                }
              }}
            >
              <Core.GdsFlex flex-direction="column" gap="2xs">
                <Core.GdsFlex
                  justify-content="flex-start"
                  gap="s"
                  align-items="center"
                >
                  <Core.GdsText font-weight="book">{result.title}</Core.GdsText>
                  <Core.GdsFlex gap="xs" align-items="center">
                    {result.beta && (
                      <Core.GdsBadge variant="notice" size="small">
                        BETA
                      </Core.GdsBadge>
                    )}
                    <Core.GdsBadge
                      variant={
                        result.type === 'component'
                          ? 'primary'
                          : result.type === 'template'
                            ? 'notice'
                            : 'secondary'
                      }
                      size="small"
                    >
                      {result.type}
                    </Core.GdsBadge>
                  </Core.GdsFlex>
                </Core.GdsFlex>
                {result.summary && (
                  <Core.GdsText font-size="body-s" color="secondary">
                    {result.summary}
                  </Core.GdsText>
                )}
              </Core.GdsFlex>
            </Core.GdsCard>
          ))}

          {query && searchResults.length === 0 && (
            <Core.GdsText color="secondary" text-align="center" padding="l">
              No results found for "{query}"
            </Core.GdsText>
          )}

          {!query && searchResults.length === 0 && (
            <Core.GdsText color="secondary" text-align="center" padding="l">
              Start typing to search...
            </Core.GdsText>
          )}
        </Core.GdsFlex>
      </Core.GdsFlex>
      <span slot="footer"></span>
    </Core.GdsDialog>
  )
}
