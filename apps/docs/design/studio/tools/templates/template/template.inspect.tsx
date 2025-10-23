// design/studio/parts/template/template.inspect.tsx
import { useEffect, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Template } from '../../../../../settings/content/types'
import { ComponentInspector } from './template.component'
import Preview from './template.preview'
import { useTemplateZoom } from './template.zoom'

interface InspectProps {
  content: Template
}

export default function Inspect({ content }: InspectProps) {
  const {
    containerRef,
    transformRef,
    viewport,
    handleZoom,
    resetZoom,
    centerContent,
  } = useTemplateZoom()
  const [showCode, setShowCode] = useState(false)
  const [showViewports, setShowViewports] = useState(false)
  const [inspectedComponent, setInspectedComponent] = useState<string | null>(
    null,
  )

  const viewports = [
    { token: 'mobile', value: '320px' },
    { token: 'tablet', value: '768px' },
    { token: 'desktop', value: '1024px' },
    { token: 'wide', value: '1440px' },
  ]

  // Center content when viewports are toggled
  useEffect(() => {
    if (showViewports) {
      centerContent()
    }
  }, [showViewports, centerContent])

  // Handle component inspection
  const handleElementClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    const gdsElement = target.closest('[gds-element]')

    if (gdsElement) {
      const componentName = gdsElement
        .getAttribute('gds-element')
        ?.replace('gds-', '')
      if (componentName) {
        setInspectedComponent(componentName)
      }
    }
  }

  useEffect(() => {
    const element = transformRef.current
    if (element) {
      element.addEventListener('click', handleElementClick)
      return () => element.removeEventListener('click', handleElementClick)
    }
  }, [])

  return (
    <Core.GdsFlex flex-direction="column" gap="l">
      <Core.GdsFlex justify-content="space-between" align-items="center">
        <Core.GdsText tag="h1">{content.title}</Core.GdsText>
        <Core.GdsFlex gap="s">
          <Core.GdsButton
            onClick={() => handleZoom(0.1)}
            size="small"
            rank="secondary"
          >
            <Core.IconZoomIn />
          </Core.GdsButton>
          <Core.GdsText color="neutral-02" font="detail-book-s">
            {Math.round(viewport.scale * 100)}%
          </Core.GdsText>
          <Core.GdsButton
            onClick={() => handleZoom(-0.1)}
            size="small"
            rank="secondary"
          >
            <Core.IconZoomOut />
          </Core.GdsButton>
          <Core.GdsButton onClick={resetZoom} size="small" rank="secondary">
            {/* <Core.IconRefresh /> */}
            Refresh
          </Core.GdsButton>
          <Core.GdsButton
            onClick={() => setShowViewports(!showViewports)}
            size="small"
            rank="secondary"
          >
            <Core.IconDevices />
          </Core.GdsButton>
          <Core.GdsButton
            onClick={() => setShowCode(!showCode)}
            size="small"
            rank="secondary"
          >
            <Core.IconCode />
          </Core.GdsButton>
        </Core.GdsFlex>
      </Core.GdsFlex>

      <div
        ref={containerRef}
        style={{
          overflow: 'hidden',
          width: '100%',
          height: '600px',
          background: 'var(--gds-ref-palette-background-l2)',
          borderRadius: 'var(--gds-sys-border-radius-l)',
          cursor: 'grab',
        }}
      >
        <div
          ref={transformRef}
          style={{
            transformOrigin: '0 0',
            padding: '2rem',
          }}
        >
          <Preview
            content={content}
            viewports={
              showViewports ? viewports : [{ token: 'full', value: '100%' }]
            }
          />
        </div>
      </div>

      {showCode && content.code && (
        <Core.GdsCard padding="l">
          <pre>
            <code>{content.code}</code>
          </pre>
        </Core.GdsCard>
      )}
    </Core.GdsFlex>
  )
}
