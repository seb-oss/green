'use client'

import { useEffect, useRef, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'

import './anatomy.core.css'

interface AnatomyItem {
  id: number
  label: string
  key: string
  type: string
  description?: string
  docsUrl?: string
}

interface Annotation {
  id: number
  targetX: number
  targetY: number
  badgeX: number
  badgeY: number
}

interface AnatomyProps {
  items?: AnatomyItem[]
  children: React.ReactNode
}

export default function Anatomy({
  items: providedItems,
  children,
}: AnatomyProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  // --- Logic State ---
  const [items, setItems] = useState<AnatomyItem[]>([])
  const [annotations, setAnnotations] = useState<Annotation[]>([])

  const [activeId, setActiveId] = useState<number | null>(null) // Hover state
  const [selectedId, setSelectedId] = useState<number | null>(null) // Click state

  // --- UI State ---
  const [sidebarTab, setSidebarTab] = useState<'legend' | 'settings'>('legend')
  const [scale, setScale] = useState(1)

  // --- Settings ---
  const [showTraces, setShowTraces] = useState(true)
  const [isExploded, setIsExploded] = useState(false)
  const [showGrid, setShowGrid] = useState(true)

  // 1. Logic: Parse Data & Calculate Positions
  useEffect(() => {
    // Wait for render
    setTimeout(() => {
      if (!wrapperRef.current) return

      const els = wrapperRef.current.querySelectorAll('[data-anatomy]')
      const discovered: AnatomyItem[] = []
      const newAnnotations: Annotation[] = []

      let idCounter = 1
      const wrapperRect = wrapperRef.current.getBoundingClientRect()

      els.forEach((el) => {
        const key = el.getAttribute('data-anatomy') || ''
        el.setAttribute('data-anatomy-target', key)

        // Metadata
        const label = el.getAttribute('data-anatomy-label') || key
        const type = el.getAttribute('data-anatomy-type') || 'Element'
        const description =
          el.getAttribute('data-anatomy-desc') || `Details for ${label}`
        const placement = el.getAttribute('data-anatomy-placement') || 'top' // Manual Control

        discovered.push({
          id: idCounter,
          label,
          key,
          type,
          description,
          docsUrl: '#',
        })

        // Coordinates
        const rect = el.getBoundingClientRect()
        // Center of element (Anchor point)
        const targetX = rect.left - wrapperRect.left + rect.width / 2
        const targetY = rect.top - wrapperRect.top + rect.height / 2

        // Badge Position Logic (Manual Offset)
        const offset = 50 // Distance from element center
        let badgeX = targetX
        let badgeY = targetY

        // Simple string parsing for placement
        if (placement.includes('top')) badgeY = rect.top - wrapperRect.top - 40
        if (placement.includes('bottom'))
          badgeY = rect.bottom - wrapperRect.top + 40
        if (placement.includes('left'))
          badgeX = rect.left - wrapperRect.left - offset
        if (placement.includes('right'))
          badgeX = rect.right - wrapperRect.left + offset

        // Fine tuning for corners (e.g., "top-left")
        if (placement === 'top-left') badgeX -= 20
        if (placement === 'top-right') badgeX += 20

        newAnnotations.push({ id: idCounter, targetX, targetY, badgeX, badgeY })
        idCounter++
      })

      setItems(providedItems || discovered)
      setAnnotations(newAnnotations)
    }, 200)
  }, [children, providedItems]) // Recalc if children change

  // 2. Interaction Handlers
  const handleHover = (id: number | null) => {
    if (selectedId) return
    setActiveId(id)
    updateDOMHighlight(id)
  }

  const handleClick = (id: number) => {
    const newId = selectedId === id ? null : id
    setSelectedId(newId)
    setActiveId(newId)
    updateDOMHighlight(newId)
    if (newId) setSidebarTab('legend') // Switch to legend to show details
  }

  const updateDOMHighlight = (id: number | null) => {
    if (!wrapperRef.current) return
    wrapperRef.current
      .querySelectorAll('[data-anatomy-active]')
      .forEach((el) => el.removeAttribute('data-anatomy-active'))
    if (id !== null) {
      const item = items.find((i) => i.id === id)
      if (item) {
        const target = wrapperRef.current.querySelector(
          `[data-anatomy-target="${item.key}"]`,
        )
        target?.setAttribute('data-anatomy-active', 'true')
      }
    }
  }

  const currentId = selectedId || activeId
  const selectedItem = items.find((i) => i.id === selectedId)

  return (
    <Core.GdsFlex data-main-final-version gap="l" align-items="flex-start">
      {/* --- Main Preview Card --- */}
      <Core.GdsCard
        flex="1"
        padding="0"
        overflow="hidden"
        border="4xs/primary"
        position="relative"
      >
        <div className="anatomy-viewport" data-grid={showGrid}>
          {/* Zoomable Canvas */}
          <div
            className="anatomy-canvas"
            style={{ transform: `scale(${scale})` }}
          >
            <div
              className="component-context"
              ref={wrapperRef}
              data-exploded={isExploded}
            >
              {children}

              {/* Traces Layer */}
              {showTraces && (
                <div className="anatomy-traces-layer">
                  <svg
                    width="100%"
                    height="100%"
                    style={{ overflow: 'visible' }}
                  >
                    {annotations.map((ann) => {
                      const isActive = currentId === ann.id
                      // Dim non-active lines if something is hovered
                      const opacity =
                        currentId === null ? 1 : isActive ? 1 : 0.1

                      return (
                        <g
                          key={ann.id}
                          style={{ opacity, transition: 'opacity 0.2s' }}
                        >
                          <path
                            className="trace-path"
                            d={`M ${ann.targetX} ${ann.targetY} L ${ann.badgeX} ${ann.badgeY}`}
                          />
                          <circle
                            className="trace-anchor"
                            cx={ann.targetX}
                            cy={ann.targetY}
                            r={3}
                          />
                        </g>
                      )
                    })}
                  </svg>

                  {/* Floating Badges */}
                  {annotations.map((ann) => (
                    <div
                      key={ann.id}
                      className="anatomy-annotation"
                      data-active={currentId === ann.id}
                      style={{ left: ann.badgeX, top: ann.badgeY }}
                      onMouseEnter={() => handleHover(ann.id)}
                      onMouseLeave={() => handleHover(null)}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleClick(ann.id)
                      }}
                    >
                      {ann.id}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* --- Floating Zoom Toolbar (Bottom Center) --- */}
          <div className="anatomy-toolbar">
            <Core.GdsButton
              rank="tertiary"
              size="small"
              onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}
              aria-label="Zoom Out"
            >
              －
            </Core.GdsButton>
            <Core.GdsText
              font-size="detail-s"
              min-width="3ch"
              text-align="center"
            >
              {Math.round(scale * 100)}%
            </Core.GdsText>
            <Core.GdsButton
              rank="tertiary"
              size="small"
              onClick={() => setScale((s) => Math.min(2.5, s + 0.1))}
              aria-label="Zoom In"
            >
              ＋
            </Core.GdsButton>
            <div
              style={{
                width: 1,
                height: 16,
                background: '#e0e0e0',
                margin: '0 4px',
              }}
            ></div>
            <Core.GdsButton
              rank="tertiary"
              size="small"
              onClick={() => setScale(1)}
            >
              Reset
            </Core.GdsButton>
          </div>
        </div>
      </Core.GdsCard>

      {/* --- Right: Controls & Legend --- */}
      <Core.GdsCard
        width="360px"
        padding="m"
        gap="m"
        display="flex"
        flex-direction="column"
        border="4xs/primary"
      >
        <Core.GdsSegmentedControl
          value={sidebarTab}
          onchange={(e: any) => setSidebarTab(e.target.value)}
          width="100%"
        >
          <Core.GdsSegment value="legend">Legend</Core.GdsSegment>
          <Core.GdsSegment value="settings">Settings</Core.GdsSegment>
        </Core.GdsSegmentedControl>

        {sidebarTab === 'legend' && (
          <Core.GdsFlex flex-direction="column" data-page="legend" gap="xs">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                maxHeight: '450px',
                overflowY: 'auto',
              }}
            >
              {items.map((item) => (
                <Core.GdsCard
                  key={item.id}
                  flex-direction="row"
                  padding="xs s"
                  align-items="center"
                  gap="s"
                  border="4xs/primary"
                  className="sidebar-item"
                  data-active={currentId === item.id}
                  onmouseenter={() => handleHover(item.id)}
                  onmouseleave={() => handleHover(selectedId)}
                  onclick={() => handleClick(item.id)}
                >
                  <Core.GdsBadge
                    rounded
                    size="small"
                    variant={currentId === item.id ? 'positive' : 'notice'}
                  >
                    {item.id}
                  </Core.GdsBadge>
                  <Core.GdsFlex flex-direction="column">
                    <Core.GdsText font-size="detail-s" font-weight="bold">
                      {item.label}
                    </Core.GdsText>
                    <Core.GdsText font-size="detail-xs" color="secondary">
                      {item.type}
                    </Core.GdsText>
                  </Core.GdsFlex>
                </Core.GdsCard>
              ))}
            </div>

            {/* Detail View (Only Shows on Click/Selection) */}
            {selectedItem && (
              <Core.GdsCard
                variant="secondary"
                data-selected-component
                margin="m 0 0 0"
                padding="m"
                border="4xs/primary"
                background="secondary"
              >
                <Core.GdsText font-weight="bold" margin="0 0 xs 0">
                  {selectedItem.label} Details
                </Core.GdsText>
                <Core.GdsText font-size="body-s" margin="0 0 m 0">
                  {selectedItem.description}
                </Core.GdsText>
                <Core.GdsLink href={selectedItem.docsUrl} font-size="detail-s">
                  View Component Documentation &rarr;
                </Core.GdsLink>
              </Core.GdsCard>
            )}
          </Core.GdsFlex>
        )}

        {sidebarTab === 'settings' && (
          <Core.GdsFlex
            flex-direction="column"
            data-page="settings"
            gap="l"
            padding="s 0"
          >
            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsText
                font-size="detail-s"
                transform="uppercase"
                color="secondary"
              >
                Visualization
              </Core.GdsText>
              <Core.GdsCheckbox
                label="Show Trace Lines"
                checked={showTraces}
                onchange={(e: any) => setShowTraces(e.target.checked)}
              />
              <Core.GdsCheckbox
                label="Exploded 3D View"
                checked={isExploded}
                onchange={(e: any) => setIsExploded(e.target.checked)}
              />
              <Core.GdsCheckbox
                label="Show Grid Background"
                checked={showGrid}
                onchange={(e: any) => setShowGrid(e.target.checked)}
              />
            </Core.GdsFlex>

            <Core.GdsFlex flex-direction="column" gap="xs">
              <Core.GdsText
                font-size="detail-s"
                transform="uppercase"
                color="secondary"
              >
                Help
              </Core.GdsText>
              <Core.GdsText font-size="detail-xs" color="secondary">
                Use the toolbar below the preview to zoom. Click points to lock
                details.
              </Core.GdsText>
            </Core.GdsFlex>
          </Core.GdsFlex>
        )}
      </Core.GdsCard>
    </Core.GdsFlex>
  )
}
