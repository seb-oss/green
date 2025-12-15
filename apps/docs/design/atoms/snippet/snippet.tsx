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

// Dummy table data for snippet previews
const DUMMY_TABLE_DATA = [
  { id: 1, name: 'John Doe', role: 'Developer' },
  { id: 2, name: 'Jane Smith', role: 'Designer' },
  { id: 3, name: 'Bob Johnson', role: 'Manager' },
]

const dummyDataProvider = async (request: any) => {
  const start = (request.page - 1) * request.rows
  const end = start + request.rows
  return {
    rows: DUMMY_TABLE_DATA.slice(start, end),
    total: DUMMY_TABLE_DATA.length,
  }
}

// Define components once at module level
const defineComponents = () => {
  Object.values(Core).forEach((Component: any) => {
    if (Component?.define && typeof Component.define === 'function') {
      try {
        Component.define()
      } catch (e) {
        console.debug(`Failed to define component: ${Component.name}`, e)
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

    if (tagName === 'gds-text' && 'lines' in attribs) {
      props.lines = Number(attribs.lines)
    }

    // Add dummy data provider for tables
    if (tagName === 'gds-table') {
      props.data = dummyDataProvider
      props.columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'role', label: 'Role' },
      ]
      props.rows = 2
      props.plain = true
      props.selectable = true
    }

    for (const [key, value] of Object.entries(attribs)) {
      if (key === 'lines' && tagName === 'gds-text') {
        continue
      }

      if (key.startsWith('.')) {
        const propName = key.substring(1)
        const cleanValue = value.replace(/\${(.+)}/, '$1')
        try {
          props[propName] = cleanValue.startsWith('[')
            ? JSON.parse(cleanValue)
            : cleanValue
        } catch {
          console.debug(`Failed to parse value for ${propName}:`, cleanValue)
          props[propName] = cleanValue
        }
      } else if (value === '' || value === 'true') {
        props[key] = true
      } else if (value === 'false') {
        props[key] = false
      } else if (key === 'class') {
        props.className = value
        props.class = value
      } else {
        props[key] = value
      }
    }

    if (tagName === 'gds-text' && (Core as any).GdsText?.define) {
      try {
        ;(Core as any).GdsText.define()
      } catch {
        console.debug('Failed to define GdsText component')
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

        const props = convertAttributes(node.attribs, node.name)
        const childContent = node.children?.map(getNodeContent).join('')

        if (node.name === 'gds-rich-text') {
          return <Component {...props}>{parse(childContent)}</Component>
        }

        if (!childContent.includes('gds-')) {
          return (
            <Component
              {...props}
              dangerouslySetInnerHTML={{ __html: childContent }}
            />
          )
        }

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
