// app/compose/page.tsx
'use client'

import React, { ComponentType, useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

// import parse from 'html-react-parser'

import * as Core from '@sebgroup/green-core/react'

// import { useSearch } from '../../context/search.context'

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

export const MonacoEditor = dynamic<MonacoEditorProps>(
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

export const convertAttributes = (
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

export const getComponent = (tagName: string) => {
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

export const getNodeContent = (node: any): string => {
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
