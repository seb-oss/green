// studio/tools/compose/studio.compose.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { notFound, usePathname, useRouter } from 'next/navigation'
import parse from 'html-react-parser'

import * as Core from '@sebgroup/green-core/react'
import { useSettings, useSettingsValue } from '../../../../settings'
import { useContent } from '../../../../settings/content'
import { useSearch } from '../../context/search.context'
import {
  convertAttributes,
  getComponent,
  getNodeContent,
  MonacoEditor,
} from './studio.compose.hooks'
import Snippets from './studio.snippets'

const initialCode = `<gds-card padding="l" variant="secondary">
  <gds-text tag="h1" font="heading-xl">Hello World</gds-text>
  <gds-text color="secondary">Start editing to see live preview</gds-text>
</gds-card>`

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }
  return 'light' // default fallback
}

export default function Compose() {
  const { actions } = useContent()
  const THEME = useSettingsValue((s) => s.UI.Theme.ColorScheme)
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(
    getSystemTheme(),
  )

  const pathname = usePathname()
  const [code, setCode] = useState('')
  const [activeTab, setActiveTab] = useState<'code' | 'snippets'>('code')
  const [previewCode, setPreviewCode] = useState(initialCode)
  const [componentsReady, setComponentsReady] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { setTakeover, takeover } = useSearch()
  const [showCode, setShowCode] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const effectiveTheme = THEME === 'auto' ? systemTheme : THEME

  useEffect(() => {
    const paths = pathname.split('/')
    const snippetSlug = paths[paths.length - 1]

    if (paths.includes('compose') && snippetSlug !== 'compose') {
      const snippet = actions.getSnippet(snippetSlug)
      if (snippet) {
        setCode(snippet.code)
        setPreviewCode(snippet.code)
      } else {
        setCode(initialCode)
        setPreviewCode(initialCode)
      }
    } else {
      setCode(initialCode)
      setPreviewCode(initialCode)
    }
  }, [pathname, actions])

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

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault()
        setPreviewCode(code)
        setError(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [code])

  const handleSave = () => {
    setPreviewCode(code)
    setError(null)
  }

  const PREVIEW = () => {
    if (!componentsReady) return null

    try {
      return parse(previewCode, options)
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
    <Core.GdsGrid
      columns={!showCode ? '1' : '1; m{2}'}
      gap={takeover ? '0' : 'xs'}
      min-height="100vh"
      className="layout-compose"
      padding="0"
      width="100%"
    >
      <Core.GdsCard
        background="none"
        display={showCode ? 'flex' : 'none'}
        flex-direction="column"
        gap={takeover ? '3xs' : '2xs'}
        position="relative"
        min-width="100%"
        padding="0"
        border-radius={takeover ? '0' : 'l'}
      >
        <Core.GdsFlex
          align-items="center"
          gap="s"
          width="100%"
          height="3xl"
          padding={takeover ? '0' : '0'}
          justify-content="space-between"
        >
          <Core.GdsSegmentedControl
            width="max-content"
            value={activeTab}
            size="small"
            onchange={(e: Event) => {
              const target = e.target as HTMLSelectElement
              setActiveTab(target.value as 'code' | 'snippets')
            }}
          >
            <Core.GdsSegment value="code">Edit</Core.GdsSegment>
            <Core.GdsSegment value="snippets">Snippets</Core.GdsSegment>
          </Core.GdsSegmentedControl>
          {activeTab !== 'snippets' && (
            <Core.GdsButton onClick={handleSave} rank="tertiary" size="small">
              Save
              <Core.IconFloppyDisk slot="lead" size="m" />
            </Core.GdsButton>
          )}
        </Core.GdsFlex>
        {activeTab === 'snippets' && <Snippets />}
        <Core.GdsCard
          display={activeTab === 'snippets' ? 'none' : 'flex'}
          variant="secondary"
          height="100%"
          min-height="50vh"
          overflow="hidden"
          border-color="subtle-01"
          padding="0"
          border-radius={takeover ? 'xs' : 'm'}
          position="relative"
          width="100%"
        >
          <MonacoEditor
            value={code}
            onChange={(newCode) => setCode(newCode)}
            theme={effectiveTheme}
          />
        </Core.GdsCard>
      </Core.GdsCard>

      <Core.GdsCard
        background="none"
        align-items="center"
        gap={takeover ? '3xs' : '2xs'}
        padding="0"
        border-radius={takeover ? '0' : 'l'}
      >
        <Core.GdsFlex
          flex-direction="row"
          align-items="center"
          gap={takeover ? '0' : 's'}
          justify-content="flex-start"
          width="100%"
          height="3xl"
          padding={takeover ? '0' : '0 m'}
        >
          <Core.GdsButton
            rank="tertiary"
            size="small"
            onClick={() => setShowCode(!showCode)}
          >
            <Core.IconCodeBrackets size="m" />
          </Core.GdsButton>
          <Core.GdsButton
            rank="tertiary"
            size="small"
            onClick={() => {
              setTakeover(!takeover)
            }}
          >
            <Core.IconFullscreen size="m" />
          </Core.GdsButton>
        </Core.GdsFlex>
        <Core.GdsCard
          variant="primary"
          height="100%"
          width="100%"
          padding="l"
          border-radius={takeover ? 'xs' : 'm'}
          overflow="auto"
          background="neutral-02"
          border-color="subtle-01"
          position="relative"
          max-width="100%"
          data-pattern
        >
          {error ? (
            <Core.GdsText color="negative">{error}</Core.GdsText>
          ) : (
            PREVIEW()
          )}
        </Core.GdsCard>
      </Core.GdsCard>
    </Core.GdsGrid>
  )
}
