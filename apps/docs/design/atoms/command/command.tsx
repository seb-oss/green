// command.tsx
'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { _ } from '../../../hooks'
import { useSet, useSettingsContext, useSettingsValue } from '../../../settings'
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
  const SET = useSet()

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

  const CLOSE_PANEL = () => {
    SET('UI.Panel.Command', false)
  }

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter)
    setSelectedIndex(0) // Reset selection when filter changes
  }

  const handleDialogKeyDown = (e: KeyboardEvent) => {
    const numResults = searchResults.length
    if (numResults === 0) return

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
          CLOSE_PANEL()
        }
        break

      case 'Escape':
        e.preventDefault()
        CLOSE_PANEL()
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
      return () => {
        document.removeEventListener('keydown', handleDialogKeyDown)
        clearTimeout(timeoutId)
      }
    }
  }, [isOpen])

  const truncateSummary = (text: string, maxLength = 120) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength).trim() + '...'
  }

  return (
    <React.Fragment>
      {isOpen && (
        <Core.GdsDialog
          ref={dialogRef}
          width="90%; m{620px}"
          min-width="90%; m{620px}"
          heading="Search"
          height="60vh"
          max-height="60vh"
          onGdsClose={() => CLOSE_PANEL()}
          placement="initial"
          padding="s"
          open
        >
          <Core.GdsFlex
            flex-direction="column"
            gap="xs"
            height="100%"
            background="primary"
            padding="0"
            slot="dialog"
          >
            <Core.GdsFlex flex-direction="column" gap="xs" className="cmd-fade">
              <Core.GdsInput
                ref={inputRef}
                plain
                value={query}
                onInput={(e) => {
                  setQuery((e.target as HTMLInputElement).value)
                  setSelectedIndex(0)
                }}
                autofocus
              >
                <Core.IconMagnifyingGlass slot="lead" />
              </Core.GdsInput>

              <Core.GdsFlex
                align-items="center"
                justify-content="space-between"
                gap="s"
              >
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
                <Core.GdsFlex display="none; m{flex}">
                  <Core.GdsText font="body-s" color="neutral-02">
                    {query
                      ? `Found ${searchResults.length} result${searchResults.length !== 1 ? 's' : ''}`
                      : `Total ${searchResults.length} item${searchResults.length !== 1 ? 's' : ''}`}
                  </Core.GdsText>
                </Core.GdsFlex>
              </Core.GdsFlex>
            </Core.GdsFlex>

            <Core.GdsFlex
              flex-direction="column"
              gap="xs"
              overflow="auto"
              className="cmd-fade"
              flex="1"
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
                    CLOSE_PANEL()
                  }}
                  data-index={index}
                  tabIndex={0}
                  onFocus={() => setSelectedIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      router.push(result.href)
                      CLOSE_PANEL()
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
                      <Core.GdsFlex gap="xs" align-items="center">
                        {result.beta && (
                          <Core.GdsBadge variant="notice" size="small">
                            BETA
                          </Core.GdsBadge>
                        )}
                        <Core.GdsBadge size="small">
                          {result.type}
                        </Core.GdsBadge>
                      </Core.GdsFlex>
                    </Core.GdsFlex>
                    {result.summary && (
                      <Core.GdsText font="body-s" color="neutral-02">
                        {truncateSummary(result.summary)}
                      </Core.GdsText>
                    )}
                  </Core.GdsFlex>
                </Core.GdsCard>
              ))}

              {query && searchResults.length === 0 && (
                <Core.GdsCard
                  min-height="100%"
                  align-items="center"
                  justify-content="center"
                >
                  <Core.GdsText
                    color="secondary"
                    text-align="center"
                    padding="l"
                  >
                    No results found for <strong>{`"${query}"`}</strong>
                  </Core.GdsText>
                </Core.GdsCard>
              )}

              {!query && searchResults.length === 0 && (
                <Core.GdsText color="secondary" text-align="center" padding="l">
                  Start typing to search...
                </Core.GdsText>
              )}
            </Core.GdsFlex>
          </Core.GdsFlex>
        </Core.GdsDialog>
      )}
    </React.Fragment>
  )
}
