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

// Define components once at module level
const defineComponents = () => {
  Object.values(Core).forEach((Component: any) => {
    if (Component?.define && typeof Component.define === 'function') {
      try {
        Component.define()
      } catch (e) {
        // Already defined, ignore
      }
    }
  })
}

export function Snippet({ slug }: SnippetProps) {
  const [snippetData, setSnippetData] = useState<SnippetData | null>(null)
  const [componentsReady, setComponentsReady] = useState(false)

  useEffect(() => {
    defineComponents()
    setComponentsReady(true)
  }, [])

  const convertAttributes = (
    attribs: { [key: string]: string },
    tagName: string,
  ) => {
    const props: { [key: string]: any } = {}

    // First, handle lines specifically for GdsText
    if (tagName === 'gds-text' && 'lines' in attribs) {
      props.lines = Number(attribs.lines)
    }

    // Then handle all other attributes
    for (const [key, value] of Object.entries(attribs)) {
      if (key === 'lines' && tagName === 'gds-text') {
        continue // Skip lines as we already handled it
      }

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
        props.class = value // Need both for web component
      } else {
        props[key] = value
      }
    }

    // Ensure GdsText is defined
    if (tagName === 'gds-text' && (Core as any).GdsText?.define) {
      try {
        ;(Core as any).GdsText.define()
      } catch {}
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

        const props = convertAttributes(node.attribs, node.name)
        const childContent = node.children?.map(getNodeContent).join('')

        // Special handling for rich-text
        if (node.name === 'gds-rich-text') {
          return <Component {...props}>{parse(childContent)}</Component>
        }

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

  if (!snippetData?.code || !componentsReady) return null

  try {
    return parse(snippetData.code, options)
  } catch (err) {
    console.warn('Error rendering snippet:', err)
    return null
  }
}
