'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import * as Core from '@sebgroup/green-core/react'
import { calculateScore } from '../search/utils/fuzzy'

interface Template {
  title: string
  slug: string
  path: string
  related_components: string[]
}

interface TemplatesResponse {
  templates: Template[]
  total: number
  lastUpdated: string
}

export default function Templates() {
  const [templates, setTemplates] = useState<Template[]>([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch('https://api.seb.io/templates.json')
        const data: TemplatesResponse = await response.json()
        setTemplates(
          data.templates.sort((a, b) => a.title.localeCompare(b.title)),
        )
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching templates:', error)
        setIsLoading(false)
      }
    }

    fetchTemplates()
  }, [])

  const filteredTemplates = !query.trim()
    ? templates
    : templates.filter((template) => {
        const titleScore = calculateScore(template.title, query)
        const componentsScore = template.related_components.some(
          (component) => calculateScore(component, query) > 0,
        )
        return titleScore > 0 || componentsScore
      })

  if (isLoading) return <div>Loading...</div>

  return (
    <Core.GdsFlex flex-direction="column" gap="2xl" padding="xl">
      <Core.GdsFlex
        justify-content="center"
        align-items="center"
        flex-direction="column"
        gap="2xl"
      >
        <Core.GdsFlex flex-direction="column" gap="m" align-items="center">
          <Core.GdsFlex gap="s">
            <Core.GdsText font-size="display-m">Templates</Core.GdsText>
            <Core.GdsText font-size="display-m" color="positive">
              ({templates.length})
            </Core.GdsText>
          </Core.GdsFlex>
          <Core.GdsText
            font-size="preamble-m"
            color="secondary"
            max-width="68ch"
            text-align="center"
            text-wrap="pretty"
          >
            Ready-to-use templates built with Green Design System components.
          </Core.GdsText>
        </Core.GdsFlex>
        <Core.GdsFlex gap="m" width="360px">
          <Core.GdsInput
            value={query}
            plain
            onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            clearable
            placeholder="Search templates..."
          >
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>
        </Core.GdsFlex>
      </Core.GdsFlex>

      {filteredTemplates.length > 0 ? (
        <Core.GdsGrid columns="3" gap="l">
          {filteredTemplates.map((template) => (
            <Link key={template.slug} href={`/template/${template.slug}`}>
              <Core.GdsCard key={template.slug} height="100%">
                <Core.GdsFlex flex-direction="column" gap="xl">
                  <Core.GdsText font-size="display-m">
                    {template.title}
                  </Core.GdsText>

                  {template.related_components.length > 0 && (
                    <Core.GdsFlex flex-direction="column" gap="s">
                      <Core.GdsText color="secondary">
                        Related Components:
                      </Core.GdsText>
                      <Core.GdsFlex gap="xs" flex-wrap="wrap">
                        {template.related_components.map((component) => (
                          <Core.GdsBadge
                            key={component}
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = `/component/${component.toLowerCase()}`
                            }}
                          >
                            {component}
                          </Core.GdsBadge>
                        ))}
                      </Core.GdsFlex>
                    </Core.GdsFlex>
                  )}

                  <Core.GdsFlex
                    align-items="center"
                    justify-content="space-between"
                    gap="s"
                  >
                    <Core.GdsText color="secondary">View Template</Core.GdsText>
                    <Core.IconArrowRight />
                  </Core.GdsFlex>
                </Core.GdsFlex>
              </Core.GdsCard>
            </Link>
          ))}
        </Core.GdsGrid>
      ) : (
        <Core.GdsFlex
          justify-content="center"
          align-items="center"
          padding="2xl"
        >
          <Core.GdsText color="secondary">
            No templates found matching "{query}"
          </Core.GdsText>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
