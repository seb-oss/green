// design/studio/parts/template/template.preview.tsx
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'

import * as Core from '@sebgroup/green-core/react'
import { Template } from '../../../../../settings/content/types'
import {
  convertAttributes,
  getComponent,
  getNodeContent,
} from '../../compose/studio.compose.hooks'

interface PreviewProps {
  content: Template
}

export default function Preview({ content }: PreviewProps) {
  const [error, setError] = useState<string | null>(null)
  const [componentsReady, setComponentsReady] = useState(false)

  // Initialize components
  useEffect(() => {
    Object.values(Core).forEach((Component: any) => {
      if (Component?.define && typeof Component.define === 'function') {
        try {
          Component.define()
        } catch (e) {
          console.debug(`Failed to define component: ${Component.name}`, e)
        }
      }
    })
    setComponentsReady(true)
  }, [])

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

      // For non-gds tags, render content with keys
      const childContent = node.children?.map((child: any, index: number) => {
        if (child.type === 'text') {
          return (
            <React.Fragment key={`text-${index}`}>{child.data}</React.Fragment>
          )
        }
        const parsed = parse(getNodeContent(child), options)
        return (
          <React.Fragment key={`content-${index}`}>{parsed}</React.Fragment>
        )
      })

      return <span>{childContent}</span>
    },
  }

  const PREVIEW = () => {
    if (!componentsReady || !content.code) return null

    try {
      return parse(content.code, options)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      return (
        <Core.GdsCard variant="negative" padding="l" data-pattern>
          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText tag="h4">Error parsing code</Core.GdsText>
            <Core.GdsText font-family="mono" font="detail-m">
              {errorMessage}
            </Core.GdsText>
          </Core.GdsFlex>
        </Core.GdsCard>
      )
    }
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="l">
      <Core.GdsText tag="h1">{content.title}</Core.GdsText>
      {content.related_components && (
        <Core.GdsFlex gap="xs" flex-wrap="wrap">
          {content.related_components.map((component) => (
            <Core.GdsBadge key={component} size="small">
              {component}
            </Core.GdsBadge>
          ))}
        </Core.GdsFlex>
      )}

      <Core.GdsCard variant="secondary" padding="0" border-radius="l" gap="0">
        <Core.GdsFlex
          flex-direction="row"
          align-items="center"
          padding="m l"
          gap="l"
          border-width="0 0 4xs 0"
        >
          <Core.GdsFlex gap="2xs">
            <Core.GdsDiv
              level="3"
              background="negative-03"
              width="s"
              height="s"
              border-radius="max"
            />
            <Core.GdsDiv
              level="3"
              background="warning-03"
              width="s"
              height="s"
              border-radius="max"
            />
            <Core.GdsDiv
              level="3"
              background="positive-03"
              width="s"
              height="s"
              border-radius="max"
            />
          </Core.GdsFlex>
          <Core.GdsFlex flex-direction="row" gap="s" align-items="center">
            <Core.GdsText font="detail-book-m">{content.title}</Core.GdsText>
            <Core.GdsText color="neutral-02">·</Core.GdsText>
            <Core.GdsText color="neutral-02">1200px</Core.GdsText>
          </Core.GdsFlex>
        </Core.GdsFlex>
        <Core.GdsFlex padding="m">{PREVIEW()}</Core.GdsFlex>
      </Core.GdsCard>

      {error && (
        <Core.GdsCard variant="negative" padding="l">
          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText tag="h4">Preview Error</Core.GdsText>
            <Core.GdsText font-family="mono" font="detail-m">
              {error}
            </Core.GdsText>
          </Core.GdsFlex>
        </Core.GdsCard>
      )}
    </Core.GdsFlex>
  )
}
