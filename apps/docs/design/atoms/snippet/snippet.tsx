// components/Snippet.tsx
'use client'

import { useEffect, useState } from 'react'
import parse from 'html-react-parser'

import * as Core from '@sebgroup/green-core/react'

interface SnippetData {
  title: string
  slug: string
  snippet_component: string
  code: string
}

interface SnippetProps {
  slug: string
}

export function Snippet({ slug }: SnippetProps) {
  const [snippetData, setSnippetData] = useState<SnippetData | null>(null)

  const convertAttributes = (attribs: { [key: string]: string }) => {
    const props: { [key: string]: any } = {}

    for (const [key, value] of Object.entries(attribs)) {
      // Handle boolean attributes
      if (value === '' || value === 'true') {
        props[key] = true
      } else if (value === 'false') {
        props[key] = false
      } else if (key === 'class') {
        // Convert class to className for React
        props.className = value
      } else {
        // Handle all other attributes
        props[key] = value
      }
    }

    return props
  }

  const getComponent = (tagName: string) => {
    // Handle icons
    if (tagName.startsWith('gds-icon-')) {
      const iconName =
        'Icon' +
        tagName
          .replace('gds-icon-', '')
          .split('-')
          .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
          .join('')
      return (Core as any)[iconName]
    }

    // Handle regular components
    const componentName =
      'Gds' +
      tagName
        .split('-')
        .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('')
        .replace('Gds', '')

    return (Core as any)[componentName]
  }

  const parseChildren = (children: any[]): React.ReactNode => {
    return children.map((child: any, index: number) => {
      if (child.type === 'text') {
        return child.data
      }
      if (child.type === 'tag') {
        const Component = getComponent(child.name)
        if (Component) {
          const props = convertAttributes(child.attribs)
          return (
            <Component key={index} {...props}>
              {child.children && parseChildren(child.children)}
            </Component>
          )
        }
        console.warn(`Component not found: ${child.name}`)
      }
      return null
    })
  }

  const options = {
    replace: (domNode: any) => {
      try {
        if (domNode.type === 'tag') {
          const Component = getComponent(domNode.name)
          if (Component) {
            const props = convertAttributes(domNode.attribs)
            return (
              <Component {...props}>
                {domNode.children && parseChildren(domNode.children)}
              </Component>
            )
          }
          console.warn(`Component not found: ${domNode.name}`)
        }
      } catch (err) {
        console.warn('Error parsing component:', err)
      }
      return null
    },
  }

  useEffect(() => {
    const fetchSnippet = async () => {
      try {
        const response = await fetch(
          `https://api.seb.io/snippets/${slug}/${slug}.json`,
        )
        if (!response.ok) {
          console.warn(`Failed to fetch snippet: ${slug}`)
          return
        }
        const data = await response.json()
        setSnippetData(data)
      } catch (err) {
        console.warn('Error fetching snippet:', err)
      }
    }

    fetchSnippet()
  }, [slug])

  if (!snippetData) return null

  try {
    return (
      <Core.GdsFlex data-snippet={snippetData.slug}>
        <div>{parse(snippetData.code, options)}</div>
      </Core.GdsFlex>
    )
  } catch (err) {
    console.warn('Error rendering snippet:', err)
    return null
  }
}
