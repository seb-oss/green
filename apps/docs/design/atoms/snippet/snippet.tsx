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
      if (key.startsWith('.')) {
        const propName = key.substring(1)
        const cleanValue = value.replace(/\${(.+)}/, '$1')
        try {
          props[propName] = cleanValue.startsWith('[')
            ? JSON.parse(cleanValue)
            : cleanValue
        } catch {
          props[propName] = cleanValue
        }
      } else if (value === '' || value === 'true') {
        props[key] = true
      } else if (value === 'false') {
        props[key] = false
      } else if (key === 'class') {
        props.className = value
      } else {
        props[key] = value
      }
    }

    return props
  }

  const getComponent = (tagName: string) => {
    if (!tagName.startsWith('gds-')) return null

    if (tagName.startsWith('gds-icon-')) {
      const iconName =
        'Icon' +
        tagName
          .replace('gds-icon-', '')
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join('')
      return (Core as any)[iconName]
    }

    const componentName =
      'Gds' +
      tagName
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('')
        .replace('Gds', '')

    return (Core as any)[componentName]
  }

  const getNodeContent = (node: any): string => {
    if (!node) return ''
    if (typeof node === 'string') return node
    if (node.type === 'text') return node.data || ''

    if (node.type === 'tag') {
      const attrs = Object.entries(node.attribs || {})
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')

      const attrsStr = attrs ? ` ${attrs}` : ''
      const content = node.children?.map(getNodeContent).join('') || ''

      return `<${node.name}${attrsStr}>${content}</${node.name}>`
    }

    return ''
  }

  const options = {
    replace: (node: any) => {
      if (node.type !== 'tag') return undefined

      if (node.name.startsWith('gds-')) {
        const Component = getComponent(node.name)
        if (!Component) return undefined

        const props = convertAttributes(node.attribs)

        // Get all children content
        const childContent = node.children?.map(getNodeContent).join('')

        // If there are no GDS components in children, use innerHTML
        if (!childContent.includes('gds-')) {
          return (
            <Component
              {...props}
              dangerouslySetInnerHTML={{ __html: childContent }}
            />
          )
        }

        // If there are GDS components, parse them recursively
        return <Component {...props}>{parse(childContent, options)}</Component>
      }

      return undefined
    },
  }

  useEffect(() => {
    const fetchSnippet = async () => {
      try {
        const response = await fetch(
          `https://api.seb.io/snippets/${slug}/${slug}.json`,
        )
        if (!response.ok) throw new Error(`Failed to fetch snippet: ${slug}`)
        const data = await response.json()
        setSnippetData(data)
      } catch (err) {
        console.warn('Error fetching snippet:', err)
      }
    }

    fetchSnippet()
  }, [slug])

  if (!snippetData?.code) return null

  try {
    return (
      <Core.GdsFlex data-snippet={snippetData.slug}>
        {parse(snippetData.code, options)}
      </Core.GdsFlex>
    )
  } catch (err) {
    console.warn('Error rendering snippet:', err)
    return null
  }
}
