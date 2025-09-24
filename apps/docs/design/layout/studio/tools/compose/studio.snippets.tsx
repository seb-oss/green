'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Fuse from 'fuse.js'

import * as Core from '@sebgroup/green-core/react'
import { Snippet } from '../../../../../design/atoms/snippet/snippet'
import { useContent } from '../../../../../settings/content'

import type { ComponentContent } from '../../../../../settings/content/types'

interface SnippetItem {
  slug: string
  title: string
  plain: boolean
  replay: boolean
  componentTitle: string
}

interface ColumnWithSnippet {
  type: 'snippet'
  Snippet: string
  plain?: boolean
  replay?: boolean
  title?: string
}

export default function Snippets() {
  const router = useRouter()
  const { actions } = useContent()
  const [selectedComponent, setSelectedComponent] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState('')

  // Get all available snippets
  const allSnippets = useMemo(() => {
    return actions.getSnippets()
  }, [actions])

  // Get all components with snippets
  const componentsWithSnippets = useMemo(() => {
    return actions.getComponents({
      filter: (component: ComponentContent) => {
        return (
          component.overview?.some((section) =>
            section.columns?.some(
              (column) =>
                column.type === 'snippet' && typeof column.Snippet === 'string',
            ),
          ) ?? false
        )
      },
      sort: (a, b) => a.title.localeCompare(b.title),
    })
  }, [actions])

  // Get all snippets from all components
  const ALL_COMP = useMemo(() => {
    return componentsWithSnippets.flatMap((component) => {
      if (!component.overview || !component.title) return []

      return component.overview
        .flatMap((section) => section.columns || [])
        .filter(
          (column): column is ColumnWithSnippet =>
            column.type === 'snippet' && typeof column.Snippet === 'string',
        )
        .map((column) => {
          const fullSnippet = allSnippets.find((s) => s.slug === column.Snippet)
          if (!fullSnippet) return null

          return {
            slug: column.Snippet,
            title: fullSnippet.title,
            plain: Boolean(column.plain),
            replay: Boolean(column.replay),
            componentTitle: component.title,
          }
        })
        .filter(
          (snippet): snippet is SnippetItem =>
            snippet !== null &&
            typeof snippet.slug === 'string' &&
            typeof snippet.title === 'string' &&
            typeof snippet.componentTitle === 'string',
        )
    })
  }, [componentsWithSnippets, allSnippets])

  // Setup Fuse.js search
  const fuse = useMemo(() => {
    return new Fuse(ALL_COMP, {
      keys: ['title', 'componentTitle'],
      threshold: 0.3,
      ignoreLocation: true,
    })
  }, [ALL_COMP])

  // Get filtered snippets based on search and/or selected component
  const FILSNIP = useMemo(() => {
    if (searchQuery) {
      // If searching, ignore component selection
      const results = fuse.search(searchQuery)
      return results.map((result) => result.item)
    }

    if (selectedComponent) {
      // If component selected, filter by component
      return ALL_COMP.filter(
        (snippet) =>
          snippet.componentTitle ===
          componentsWithSnippets.find((c) => c.slug === selectedComponent)
            ?.title,
      )
    }

    // If neither searching nor component selected, show all snippets
    return ALL_COMP
  }, [searchQuery, selectedComponent, ALL_COMP, componentsWithSnippets, fuse])

  const handleEdit = (slug: string) => {
    router.push(`/studio/compose/${slug}`)
  }

  return (
    <Core.GdsCard
      variant="secondary"
      flex-direction="column"
      gap="m"
      border-radius="m"
      max-height="100vh"
      overflow="auto"
    >
      <Core.GdsFlex flex-direction="column" gap="xs" z-index="3">
        <Core.GdsFlex gap="s">
          <Core.GdsInput
            clearable
            plain
            value={searchQuery}
            oninput={(e: Event) => {
              const target = e.target as HTMLInputElement
              setSearchQuery(target.value)
              if (target.value) setSelectedComponent('') // Clear component selection when searching
            }}
          >
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>
          <Core.GdsFlex width="240px">
            <Core.GdsDropdown
              plain
              value={selectedComponent}
              onchange={(e: Event) => {
                const target = e.target as HTMLSelectElement
                setSelectedComponent(target.value)
                setSearchQuery('') // Clear search when selecting component
              }}
            >
              <Core.GdsOption value="">All snippets</Core.GdsOption>
              {componentsWithSnippets.map((component) => (
                <Core.GdsOption key={component.slug} value={component.slug}>
                  {component.title}
                </Core.GdsOption>
              ))}
            </Core.GdsDropdown>
          </Core.GdsFlex>
        </Core.GdsFlex>

        <Core.GdsFlex
          justify-content="space-between"
          align-items="center"
          padding="2xs s"
        >
          <Core.GdsText font="detail-regular-xs" color="neutral-02">
            {searchQuery
              ? `Found ${FILSNIP.length} snippet${FILSNIP.length !== 1 ? 's' : ''}`
              : selectedComponent
                ? `Showing ${FILSNIP.length} snippet${FILSNIP.length !== 1 ? 's' : ''}`
                : `${ALL_COMP.length} total snippets`}
          </Core.GdsText>
        </Core.GdsFlex>
      </Core.GdsFlex>

      <Core.GdsFlex flex-direction="column" gap="2xl">
        {FILSNIP.length === 0 && (
          <Core.GdsText color="neutral-02" text-align="center" padding="xl">
            {searchQuery
              ? `No snippets found matching "${searchQuery}"`
              : 'No snippets available'}
          </Core.GdsText>
        )}

        {FILSNIP.map((snippet, index) => (
          <Core.GdsFlex
            key={snippet.slug + index}
            flex-direction="column"
            align-items="flex-end"
            gap="xs"
            className="studio-snippet"
          >
            <Core.GdsCard
              justify-content="center"
              align-items="center"
              min-height="200px"
              border-radius="l"
              width="100%"
              overflow="auto"
            >
              <Snippet slug={snippet.slug} />
            </Core.GdsCard>
            <Core.GdsFlex
              justify-content="space-between"
              align-items="center"
              width="100%"
              padding-inline="s 0"
            >
              <Core.GdsFlex flex-direction="column" gap="3xs">
                <Core.GdsText font="detail-regular-s">
                  {snippet.title}
                </Core.GdsText>
                {!selectedComponent && snippet.componentTitle && (
                  <Core.GdsText font="detail-book-xs" color="neutral-02">
                    {snippet.componentTitle}
                  </Core.GdsText>
                )}
              </Core.GdsFlex>
              <Core.GdsButton
                width="max-content"
                rank="tertiary"
                size="small"
                onClick={() => handleEdit(snippet.slug)}
              >
                <Core.IconPencilWave slot="lead" size="s" />
                Edit
              </Core.GdsButton>
            </Core.GdsFlex>
          </Core.GdsFlex>
        ))}
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
