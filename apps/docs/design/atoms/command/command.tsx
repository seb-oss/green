// command.tsx
'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { _ } from 'apps/docs/hooks'

import * as Core from '@sebgroup/green-core/react'
import { useSettingsContext, useSettingsValue } from '../../../settings'
import { useContentContext } from '../../../settings/content'

import './command.css'

type FilterType = 'all' | 'component' | 'page' | 'template'

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
  const dialogRef = useRef<HTMLElement>(null)
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Command)
  const { actions: SettingsActions } = useSettingsContext()
  const { actions: ContentActions } = useContentContext()
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const searchResults = useMemo(() => {
    const results: SearchResult[] = []

    // Components
    ContentActions.getComponents({
      sort: (a, b) => a.title.localeCompare(b.title),
    }).forEach((component) => {
      if (
        (activeFilter === 'all' || activeFilter === 'component') &&
        (!query ||
          component.title.toLowerCase().includes(query.toLowerCase()) ||
          component.summary?.toLowerCase().includes(query.toLowerCase()) ||
          component.category?.some((cat) =>
            cat.toLowerCase().includes(query.toLowerCase()),
          ))
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
        (activeFilter === 'all' || activeFilter === 'page') &&
        (!query ||
          page.title.toLowerCase().includes(query.toLowerCase()) ||
          page.summary?.toLowerCase().includes(query.toLowerCase()))
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
        (activeFilter === 'all' || activeFilter === 'template') &&
        (!query || template.title.toLowerCase().includes(query.toLowerCase()))
      ) {
        // Disable for the moment
        // results.push({
        //   title: template.title,
        //   href: `/template/${template.slug}`,
        //   type: 'template',
        // })
      }
    })

    return results
  }, [query, ContentActions, activeFilter])

  const handleClosePanel = () => {
    SettingsActions.toggle('UI.Panel.All')
  }

  const handleToggleCommand = () => {
    SettingsActions.toggle('UI.Panel.Command')
  }

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter)
    setSelectedIndex(0) // Reset selection when filter changes
  }

  const handleDialogKeyDown = (e: KeyboardEvent) => {
    const numResults = searchResults.length
    if (numResults === 0) return

    // Only handle navigation keys if we're within the dialog
    if (!dialogRef.current?.contains(e.target as Node)) return

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault()
        setSelectedIndex((prev) => {
          const nextIndex = prev < numResults - 1 ? prev + 1 : prev
          const element = document.querySelector(`[data-index="${nextIndex}"]`)
          element?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
          return nextIndex
        })
        break

      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault()
        setSelectedIndex((prev) => {
          const nextIndex = prev > 0 ? prev - 1 : prev
          const element = document.querySelector(`[data-index="${nextIndex}"]`)
          element?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
          return nextIndex
        })
        break

      case 'Enter':
        e.preventDefault()
        if (searchResults[selectedIndex]) {
          router.push(searchResults[selectedIndex].href)
          handleClosePanel()
        }
        break

      case 'Escape':
        e.preventDefault()
        handleClosePanel()
        break
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleDialogKeyDown)

      const timeoutId = setTimeout(() => {
        inputRef.current?.focus()
      }, 0)

      setSelectedIndex(0)
      setQuery('')
      setActiveFilter('all')
      // return () => clearTimeout(timeoutId)
      return () => {
        document.removeEventListener('keydown', handleDialogKeyDown)
        clearTimeout(timeoutId)
      }
    }
  }, [isOpen])

  const truncateSummary = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength).trim() + '...'
  }

  return (
    <React.Fragment>
      {false && (
        <Core.GdsFlex display="none; s{contents}">
          <Core.GdsFab
            inset="40px 40px auto auto"
            rank="secondary"
            size="small"
            onClick={handleToggleCommand}
          >
            <Core.IconMagnifyingGlass></Core.IconMagnifyingGlass>
          </Core.GdsFab>
        </Core.GdsFlex>
      )}

      {isOpen && (
        <Core.GdsDialog
          ref={dialogRef}
          onGdsClose={handleClosePanel}
          width="620px"
          min-width="620px"
          heading="Search"
          max-height="80vh"
          open
        >
          <Core.GdsFlex
            flex-direction="column"
            gap="m"
            height="100%"
            background="primary"
            padding="0"
            slot="dialog"
          >
            <Core.GdsInput
              ref={inputRef}
              plain
              value={query}
              onInput={(e) => {
                setQuery((e.target as HTMLInputElement).value)
                setSelectedIndex(0)
              }}
              // onKeyDown={handleKeyDown}
              autofocus
            >
              <Core.IconMagnifyingGlass slot="lead" />
            </Core.GdsInput>

            <Core.GdsFlex align-items="center" justify-content="space-between">
              <Core.GdsFilterChips>
                <Core.GdsFilterChip
                  size="small"
                  selected={activeFilter === 'all'}
                  onClick={() => handleFilterChange('all')}
                >
                  All
                </Core.GdsFilterChip>
                <Core.GdsFilterChip
                  size="small"
                  selected={activeFilter === 'component'}
                  onClick={() => handleFilterChange('component')}
                >
                  Components
                </Core.GdsFilterChip>
                <Core.GdsFilterChip
                  size="small"
                  selected={activeFilter === 'page'}
                  onClick={() => handleFilterChange('page')}
                >
                  Pages
                </Core.GdsFilterChip>
              </Core.GdsFilterChips>
              <Core.GdsText color="secondary" font="body-s">
                {query
                  ? `Found ${searchResults.length} result${searchResults.length !== 1 ? 's' : ''}`
                  : `Total ${searchResults.length} item${searchResults.length !== 1 ? 's' : ''}`}
              </Core.GdsText>
            </Core.GdsFlex>

            <Core.GdsFlex
              flex-direction="column"
              gap="xs"
              overflow="auto"
              className="cmd-results"
            >
              {searchResults.map((result, index) => (
                <Core.GdsCard
                  key={result.href}
                  padding="s"
                  className={_(
                    selectedIndex === index && 'selected',
                    'search-card',
                  )}
                  width="100%"
                  onClick={() => {
                    router.push(result.href)
                    handleClosePanel()
                  }}
                  data-index={index}
                  tabIndex={0}
                  onFocus={() => setSelectedIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
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
                      <Core.GdsText font-weight="book" font="heading-xs">
                        {result.title}
                      </Core.GdsText>
                      <Core.GdsFlex
                        gap="xs"
                        align-items="center"
                        display="none"
                      >
                        {result.beta && (
                          <Core.GdsBadge variant="notice" size="small">
                            BETA
                          </Core.GdsBadge>
                        )}
                        <Core.GdsBadge
                          // rank="secondary"
                          // variant={
                          //   result.type === 'component'
                          //     ? 'primary'
                          //     : result.type === 'template'
                          //       ? 'notice'
                          //       : 'secondary'
                          // }
                          size="small"
                        >
                          {result.type}
                        </Core.GdsBadge>
                      </Core.GdsFlex>
                    </Core.GdsFlex>
                    {result.summary && (
                      <Core.GdsText font-size="body-s">
                        {truncateSummary(result.summary)}
                      </Core.GdsText>
                    )}
                  </Core.GdsFlex>
                </Core.GdsCard>
              ))}

              {query && searchResults.length === 0 && (
                <Core.GdsText color="secondary" text-align="center" padding="l">
                  No results found for {`"${query}"`}
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
      )}
    </React.Fragment>
  )
}
