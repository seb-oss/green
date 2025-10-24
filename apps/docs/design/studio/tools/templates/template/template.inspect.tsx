// design/studio/parts/template/template.inspect.tsx
import { useCallback, useEffect, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { Template } from '../../../../../settings/content/types'
import { ViewportInfo } from '../../../data/studio.data.types'
import { ComponentInspector } from './template.component'
import Preview from './template.preview'
import { useTemplateZoom } from './template.zoom'

interface InspectProps {
  content: Template
  viewports: ViewportInfo[]
}

export default function Inspect({ content, viewports }: InspectProps) {
  const {
    containerRef,
    transformRef,
    viewport,
    handleZoom,
    resetZoom,
    isMetaKeyActive,
  } = useTemplateZoom()

  const [showCode, setShowCode] = useState(false)
  const [inspectedComponent, setInspectedComponent] = useState<string | null>(
    null,
  )
  // const [showViewports, setShowViewports] = useState(false)
  // const [inspectedComponent, setInspectedComponent] = useState<string | null>(
  //   null,
  // )

  // const viewports = [
  //   { token: 'mobile', value: '320px' },
  //   { token: 'tablet', value: '768px' },
  //   { token: 'desktop', value: '1024px' },
  //   { token: 'wide', value: '1440px' },
  // ]

  // Center content when viewports are toggled
  // useEffect(() => {
  //   if (showViewports) {
  //     centerContent()
  //   }
  // }, [showViewports, centerContent])

  // Handle component inspection
  const handleElementClick = useCallback((event: MouseEvent) => {
    if (!event.shiftKey) return // Only handle shift-clicks

    const target = event.target as HTMLElement
    const gdsElement = target.closest('[gds-element]')

    if (gdsElement) {
      event.preventDefault()
      event.stopPropagation()
      const componentName = gdsElement.getAttribute('gds-element')
      if (componentName) {
        setInspectedComponent(componentName)
      }
    }
  }, [])

  useEffect(() => {
    const element = transformRef.current
    if (element) {
      element.addEventListener('click', handleElementClick)
      return () => element.removeEventListener('click', handleElementClick)
    }
  }, [handleElementClick])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && containerRef.current) {
        containerRef.current.style.cursor = 'crosshair'
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!e.shiftKey && containerRef.current) {
        containerRef.current.style.cursor = isMetaKeyActive ? 'grab' : 'default'
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [isMetaKeyActive])

  return (
    <Core.GdsFlex flex-direction="column" gap="l" position="relative">
      <Core.GdsFlex
        justify-content="space-between"
        align-items="center"
        position="absolute"
        inset="0 0 auto 0"
        z-index="10"
        padding="2xl"
      >
        <Core.GdsText tag="h1">{content.title}</Core.GdsText>
        <Core.GdsFlex gap="s" align-items="center">
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
            <Core.IconArrow />
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
          height: '100vh',
          cursor: isMetaKeyActive ? 'grab' : 'default',
          touchAction: 'none', // Add this to prevent touch scrolling
        }}
      >
        <div
          ref={transformRef}
          style={{
            transformOrigin: '0 0',
            padding: '120px',
          }}
        >
          <Preview content={content} viewports={viewports} />
        </div>
      </div>

      {!showCode && inspectedComponent && (
        <Core.GdsFlex
          position="absolute"
          inset="80px 20px auto auto"
          z-index="20"
        >
          <ComponentInspector
            componentName={inspectedComponent}
            onClose={() => setInspectedComponent(null)}
          />
        </Core.GdsFlex>
      )}

      {showCode && content.code && (
        <Core.GdsCard
          padding="l"
          position="absolute"
          inset="80px 20px auto auto"
          z-index="20"
          variant="secondary"
          width="480px"
          overflow="auto"
        >
          <pre>
            <code>{content.code}</code>
          </pre>
        </Core.GdsCard>
      )}
    </Core.GdsFlex>
  )
}
