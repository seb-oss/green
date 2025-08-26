'use client'

import { useMemo, useState } from 'react'
import Fuse from 'fuse.js'
import { marked } from 'marked'

import * as Core from '@sebgroup/green-core/react'
import { getComponentDocs } from '../../../hooks/args'

interface ArgsTableProps {
  componentName: string
}

type ItemType = 'properties' | 'events'

interface FuseItem {
  id: string
  name: string
  description: string
  type: string
  category?: string
  itemType: ItemType
}

const fuseOptions = {
  keys: ['name', 'description', 'type'],
  threshold: 0.3,
  ignoreLocation: true,
}

export function ArgsTable({ componentName }: ArgsTableProps) {
  const [search, setSearch] = useState('')
  const [view, setView] = useState<ItemType>('properties')
  const docs = getComponentDocs(`gds-${componentName}`)

  // Process and sanitize items
  const searchableItems: FuseItem[] = useMemo(() => {
    const processName = (name?: string) => name?.replace(/'/g, '').trim() || ''

    return [
      ...docs.props.map((prop) => ({
        id: `prop-${prop.name}`,
        name: processName(prop.name),
        description: prop.description || '',
        type: prop.type || '',
        category: prop.category,
        itemType: 'properties' as const,
      })),
      ...docs.events.map((event) => ({
        id: `event-${event.name}`,
        name: processName(event.name),
        description: event.description || '',
        type: event.type || '',
        itemType: 'events' as const,
      })),
    ].filter((item) => item.name) // Filter out items with empty names
  }, [docs])

  const fuse = new Fuse(searchableItems, fuseOptions)

  // Filter items based on search and view
  const filteredItems = useMemo(() => {
    let items = searchableItems.filter((item) => item.itemType === view)

    if (search) {
      const searchResults = fuse.search(search)
      items = searchResults
        .map((result) => result.item)
        .filter((item) => item.itemType === view)
    }

    return items
  }, [search, view, searchableItems])

  const counts = useMemo(
    () => ({
      properties: searchableItems.filter(
        (item) => item.itemType === 'properties',
      ).length,
      events: searchableItems.filter((item) => item.itemType === 'events')
        .length,
    }),
    [searchableItems],
  )

  return (
    <Core.GdsFlex
      width="100%"
      flex-direction="column"
      gap="xl"
      margin="4xl 0 0 0"
    >
      <Core.GdsFlex flex-direction="column" gap="s">
        <Core.GdsText tag="h2">{`Properties`}</Core.GdsText>
        <Core.GdsText tag="p">
          {`This table lists all public attributes, properties, methods, events
          and slots of the component.`}
        </Core.GdsText>
        <Core.GdsAlert variant="warning">
          {`Note: JS properties and DOM attributes have different naming
          conventions in Green Core (camelCase vs snake-case), so some of them
          will show up under both sections, even though they refer to the same
          underlying property.`}
        </Core.GdsAlert>
      </Core.GdsFlex>
      <Core.GdsFlex gap="m" align-items="center">
        <Core.GdsInput
          value={search}
          onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
          plain
          clearable
        >
          <Core.IconMagnifyingGlass slot="lead" />
        </Core.GdsInput>

        <Core.GdsSegmentedControl
          width="420px"
          value={view}
          onchange={(e) =>
            setView((e.target as HTMLSelectElement).value as ItemType)
          }
        >
          <Core.GdsSegment value="properties">
            <Core.GdsFlex
              gap="xs"
              align-items="center"
              justify-content="center"
            >
              <Core.GdsText font-weight="book">
                {counts.properties}
              </Core.GdsText>
              Properties
            </Core.GdsFlex>
          </Core.GdsSegment>
          <Core.GdsSegment value="events">
            <Core.GdsFlex
              gap="xs"
              align-items="center"
              justify-content="center"
            >
              <Core.GdsText font-weight="book">{counts.events}</Core.GdsText>
              Events
            </Core.GdsFlex>
          </Core.GdsSegment>
        </Core.GdsSegmentedControl>
      </Core.GdsFlex>

      {/* Results Count */}
      <Core.GdsText color="secondary" tag="small">
        {filteredItems.length} of{' '}
        {view === 'properties' ? counts.properties : counts.events} items
      </Core.GdsText>

      {/* Items Display */}
      <Core.GdsFlex flex-direction="column" gap="0">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Core.GdsDetails
              summary={item.name}
              key={item.id}
              size="small"
              name={item.itemType}
            >
              <Core.GdsRichText>
                <div>
                  <code>{item.type}</code>
                  {item.category && (
                    <Core.GdsBadge size="small" margin="0 0 0 s">
                      {item.category}
                    </Core.GdsBadge>
                  )}
                </div>
                {item.description && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: marked.parse(item.description, { async: false }),
                    }}
                  />
                )}
              </Core.GdsRichText>
            </Core.GdsDetails>
          ))
        ) : (
          <Core.GdsFlex justify-content="center" padding="xl">
            <Core.GdsText color="secondary">
              No {view} found matching your criteria
            </Core.GdsText>
          </Core.GdsFlex>
        )}
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
