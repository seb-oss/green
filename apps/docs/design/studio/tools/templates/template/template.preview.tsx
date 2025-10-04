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

interface ViewportInfo {
  token: string
  value: string
}

interface PreviewProps {
  content: Template
  viewports?: ViewportInfo[]
}

export default function Preview({ content, viewports = [] }: PreviewProps) {
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
      {false && (
        <>
          <Core.GdsText tag="h1">{content.title}</Core.GdsText>
          {/* {content.related_components && (
            <Core.GdsFlex gap="xs" flex-wrap="wrap">
              {content.related_components.map((component) => (
                <Core.GdsBadge key={component} size="small">
                  {component}
                </Core.GdsBadge>
              ))}
            </Core.GdsFlex>
          )} */}
        </>
      )}

      <Core.GdsFlex width="max-content" overflow="auto" gap="xl" padding="l">
        {viewports.length > 0 ? (
          viewports.map(({ token, value }) => (
            <Core.GdsCard
              key={token}
              variant="secondary"
              padding="0"
              border-radius="l"
              gap="0"
              width={value}
              className="studio-page"
            >
              <Core.GdsFlex
                flex-direction="row"
                align-items="center"
                justify-content="space-between"
                padding="m l"
                gap="xs"
                border-width="0 0 4xs 0"
                border-color="subtle-02"
              >
                <Core.GdsFlex flex-direction="row" align-items="center" gap="s">
                  <Core.IconDevices />
                  <Core.GdsText font="detail-book-s">
                    {content.title}
                  </Core.GdsText>
                </Core.GdsFlex>

                <Core.GdsFlex align-items="center" gap="s">
                  <Core.GdsText font="detail-regular-xs" color="neutral-02">
                    {value}
                  </Core.GdsText>
                  <Core.GdsText color="neutral-02">·</Core.GdsText>
                  <Core.GdsText
                    font="detail-regular-xs"
                    color="neutral-02"
                    text-transform="uppercase"
                  >
                    {token}
                  </Core.GdsText>
                </Core.GdsFlex>
              </Core.GdsFlex>
              <Core.GdsFlex padding="m" width="100%">
                {PREVIEW()}
              </Core.GdsFlex>
            </Core.GdsCard>
          ))
        ) : (
          // Default preview when no viewport is selected
          <Core.GdsCard
            variant="secondary"
            padding="0"
            border-radius="l"
            gap="0"
          >
            Please at least one screen size.
          </Core.GdsCard>
        )}
      </Core.GdsFlex>
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
