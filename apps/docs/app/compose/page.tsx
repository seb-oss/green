// app/compose/page.tsx
'use client'

import React, { ComponentType, useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import parse from 'html-react-parser'

import * as Core from '@sebgroup/green-core/react'

declare global {
  interface Window {
    monaco: any
    require: any
  }
}

interface MonacoEditorProps {
  value: string
  onChange: (value: string) => void
}

const MonacoEditor = dynamic<MonacoEditorProps>(
  () =>
    new Promise<ComponentType<MonacoEditorProps>>((resolve) => {
      const script = document.createElement('script')
      script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/loader.min.js'

      script.onload = () => {
        window.require.config({
          paths: {
            vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs',
          },
        })

        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href =
          'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/editor/editor.main.min.css'
        document.head.appendChild(link)

        window.require(['vs/editor/editor.main'], () => {
          const MonacoEditorComponent: ComponentType<MonacoEditorProps> = ({
            value,
            onChange,
          }) => {
            const editorRef = useRef<HTMLDivElement>(null)
            const editorInstanceRef = useRef<any>(null)

            useEffect(() => {
              if (!editorRef.current) return

              if (!editorInstanceRef.current) {
                const editor = window.monaco.editor.create(editorRef.current, {
                  value,
                  language: 'html',
                  theme: 'vs-light',
                  minimap: { enabled: false },
                  automaticLayout: true,
                  fontSize: 14,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  wordWrap: 'on',
                  padding: { top: 16, bottom: 16 },
                  formatOnPaste: true,
                  formatOnType: true,
                })

                editor.onDidChangeModelContent(() => {
                  const newValue = editor.getValue()
                  onChange(newValue)
                })

                editorInstanceRef.current = editor
              }

              return () => {
                if (editorInstanceRef.current) {
                  editorInstanceRef.current.dispose()
                  editorInstanceRef.current = null
                }
              }
            }, [])

            useEffect(() => {
              if (editorInstanceRef.current) {
                const currentValue = editorInstanceRef.current.getValue()
                if (currentValue !== value) {
                  editorInstanceRef.current.setValue(value)
                }
              }
            }, [value])

            return (
              <div
                ref={editorRef}
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  top: 20,
                  left: 10,
                  right: 10,
                  bottom: 10,
                }}
              />
            )
          }

          resolve(MonacoEditorComponent)
        })
      }
      document.head.appendChild(script)
    }),
  {
    ssr: false,
    loading: () => (
      <Core.GdsFlex height="100%" justify-content="center" align-items="center">
        <Core.GdsText>Loading editor...</Core.GdsText>
      </Core.GdsFlex>
    ),
  },
)

const convertAttributes = (
  attribs: { [key: string]: string },
  tagName: string,
) => {
  const props: { [key: string]: any } = {}

  if (tagName === 'gds-text' && 'lines' in attribs) {
    props.lines = Number(attribs.lines)
  }

  for (const [key, value] of Object.entries(attribs)) {
    if (key === 'lines' && tagName === 'gds-text') continue

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

const initialCode = `<gds-card padding="l" variant="secondary">
  <gds-text tag="h1" font="heading-xl">Hello World</gds-text>
  <gds-text color="secondary">Start editing to see live preview</gds-text>
</gds-card>`

export default function Compose() {
  const [code, setCode] = useState(initialCode)
  const [previewCode, setPreviewCode] = useState(initialCode)
  const [componentsReady, setComponentsReady] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

  const renderPreview = () => {
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
      columns="1; l{2}"
      gap="l"
      height="calc(100vh - 40px)"
      className="layout-compose"
      padding="0"
    >
      <Core.GdsFlex flex-direction="column" gap="m" position="relative">
        <Core.GdsCard
          variant="secondary"
          height="80vh"
          overflow="hidden"
          border-color="subtle-01"
          padding="l 0"
          border-radius="m"
          position="relative"
        >
          <MonacoEditor value={code} onChange={(newCode) => setCode(newCode)} />
        </Core.GdsCard>
        <Core.GdsFab
          onClick={handleSave}
          rank="primary"
          size="small"
          z-index="10"
          inset="auto 15px 15px auto"
          position="absolute"
        >
          Preview
          <Core.IconEyeOpen slot="lead" />
        </Core.GdsFab>
      </Core.GdsFlex>

      <Core.GdsCard
        variant="primary"
        height="100%"
        padding="l"
        border-radius="m"
        overflow="auto"
        background="transparent"
        border-color="subtle-01"
        min-width="max-content"
        data-pattern
      >
        {error ? (
          <Core.GdsText color="negative">{error}</Core.GdsText>
        ) : (
          renderPreview()
        )}
      </Core.GdsCard>
    </Core.GdsGrid>
  )
}
