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

  const parseChildren = (children: any[]): React.ReactNode => {
    return children.map((child: any, index: number) => {
      if (child.type === 'text') {
        return child.data
      }
      if (child.type === 'tag') {
        const componentName = child.name
          .split('-')
          .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
          .join('')

        const Component = (Core as any)[componentName]
        if (Component) {
          return (
            <Component key={index} {...child.attribs}>
              {child.children && parseChildren(child.children)}
            </Component>
          )
        }
        console.warn(`Component not found: ${componentName}`)
      }
      return null
    })
  }

  const options = {
    replace: (domNode: any) => {
      try {
        if (domNode.type === 'tag') {
          const componentName = domNode.name
            .split('-')
            .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
            .join('')

          const Component = (Core as any)[componentName]
          if (Component) {
            return (
              <Component {...domNode.attribs}>
                {domNode.children && parseChildren(domNode.children)}
              </Component>
            )
          }
          console.warn(`Component not found: ${componentName}`)
        }
      } catch (err) {
        console.warn('Error parsing component:', err)
      }
      return null
    },
  }

  try {
    return (
      <div className="snippet-container">
        <h2>{snippetData.title}</h2>
        <div className="snippet-preview">
          {parse(snippetData.code, options)}
        </div>
      </div>
    )
  } catch (err) {
    console.warn('Error rendering snippet:', err)
    return null
  }
}
