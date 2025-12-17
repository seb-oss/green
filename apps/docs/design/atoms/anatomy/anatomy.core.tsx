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

  const [activeId, setActiveId] = useState<number | null>(null) // Hover
  const [selectedId, setSelectedId] = useState<number | null>(null) // Click

  // --- UI State ---
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [sidebarTab, setSidebarTab] = useState<'legend' | 'settings'>('legend')
  const [scale, setScale] = useState(1)

  // --- Settings ---
  const [showTraces, setShowTraces] = useState(true)
  const [isExploded, setIsExploded] = useState(false)
  const [showGrid, setShowGrid] = useState(true)

  // 1. Initialization
  useEffect(() => {
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

        const label = el.getAttribute('data-anatomy-label') || key
        const type = el.getAttribute('data-anatomy-type') || 'Element'
        const description =
          el.getAttribute('data-anatomy-desc') ||
          `Configuration details for ${label}`
        const placement = el.getAttribute('data-anatomy-placement') || 'top'

        discovered.push({
          id: idCounter,
          label,
          key,
          type,
          description,
          docsUrl: '#',
        })

        const rect = el.getBoundingClientRect()
        const targetX = rect.left - wrapperRect.left + rect.width / 2
        const targetY = rect.top - wrapperRect.top + rect.height / 2

        const offset = 60
        let badgeX = targetX
        let badgeY = targetY

        if (placement.includes('top')) badgeY = rect.top - wrapperRect.top - 40
        if (placement.includes('bottom'))
          badgeY = rect.bottom - wrapperRect.top + 40
        if (placement.includes('left'))
          badgeX = rect.left - wrapperRect.left - offset
        if (placement.includes('right'))
          badgeX = rect.right - wrapperRect.left + offset

        if (placement === 'top-left') badgeX -= 20
        if (placement === 'top-right') badgeX += 20

        newAnnotations.push({ id: idCounter, targetX, targetY, badgeX, badgeY })
        idCounter++
      })

      setItems(providedItems || discovered)
      setAnnotations(newAnnotations)
    }, 200)
  }, [children, providedItems])

  // 2. Handlers
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

  const handleHover = (id: number | null) => {
    if (selectedId) return
    setActiveId(id)
    updateDOMHighlight(id)
  }

  const handleClick = (id: number) => {
    // If clicking same item, do nothing (keep open). If new, switch.
    setSelectedId(id)
    setActiveId(id)
    updateDOMHighlight(id)

    // Always open panel and show Legend
    setIsPanelOpen(true)
    setSidebarTab('legend')
  }

  const handleStageClick = (e: React.MouseEvent) => {
    const target = (e.target as HTMLElement).closest('[data-anatomy]')
    if (target) {
      e.stopPropagation()
      const key = target.getAttribute('data-anatomy')
      const item = items.find((i) => i.key === key)
      if (item) handleClick(item.id)
    } else {
      // Clicking background does nothing to panel if open, but if you want to close it:
      // setIsPanelOpen(false)
    }
  }

  const handleClosePanel = () => {
    setIsPanelOpen(false)
    // Deselect on close
    setSelectedId(null)
    setActiveId(null)
    updateDOMHighlight(null)
  }

  const currentId = selectedId || activeId
  const selectedItem = items.find((i) => i.id === selectedId)

  return (
    <Core.GdsCard
      padding="0"
      overflow="hidden"
      border="4xs/primary"
      variant="secondary"
    >
      <div className="anatomy-layout-container">
        {/* --- STAGE --- */}
        <div
          className="anatomy-stage"
          data-panel-open={isPanelOpen}
          data-pattern={showGrid}
        >
          {/* Zoomable Canvas */}
          <div
            className="anatomy-canvas"
            style={{ transform: `scale(${scale})` }}
          >
            <div
              className="component-context"
              ref={wrapperRef}
              data-exploded={isExploded}
              onClick={handleStageClick}
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
                      const opacity =
                        currentId === null ? 1 : isActive ? 1 : 0.15
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

                  {/* Badges */}
                  {annotations.map((ann) => {
                    const item = items.find((i) => i.id === ann.id)
                    return (
                      <div
                        key={ann.id}
                        className="anatomy-annotation"
                        data-active={currentId === ann.id}
                        style={{ left: ann.badgeX, top: ann.badgeY }}
                        onMouseEnter={() => handleHover(ann.id)}
                        onMouseLeave={() => handleHover(null)}
                        onClick={(e) => {
                          e.stopPropagation() // Prevent double fire
                          handleClick(ann.id)
                        }}
                      >
                        {ann.id}
                        {/* Hover Tooltip */}
                        <div className="anatomy-tooltip">{item?.label}</div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          {/* --- Bottom Toolbar --- */}
          <div className="anatomy-toolbar">
            <Core.GdsCard
              flex-direction="row"
              align-items="center"
              border-radius="max"
              padding="4xs s"
              gap="xs"
              variant="secondary"
            >
              <Core.GdsButton
                rank="tertiary"
                size="small"
                onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}
              >
                <Core.IconMinusSmall />
              </Core.GdsButton>
              <Core.GdsText
                font-size="detail-s"
                width="4ch"
                text-align="center"
              >
                {Math.round(scale * 100)}%
              </Core.GdsText>
              <Core.GdsButton
                rank="tertiary"
                size="small"
                onClick={() => setScale((s) => Math.min(2.5, s + 0.1))}
              >
                <Core.IconPlusSmall />
              </Core.GdsButton>

              <Core.GdsButton
                rank="tertiary"
                size="small"
                onClick={() => setScale(1)}
              >
                <Core.IconArrowRotateClockwise size="m" />
              </Core.GdsButton>
            </Core.GdsCard>
            {/*  <Core.GdsDiv
              width="1px"
              background="neutral-03"
              height="16px"
              margin="0 4px"
            ></Core.GdsDiv> */}

            {/* Legend Button */}
            <Core.GdsButton
              rank={
                isPanelOpen && sidebarTab === 'legend'
                  ? 'secondary'
                  : 'tertiary'
              }
              size="small"
              onClick={() => {
                if (isPanelOpen && sidebarTab === 'legend') handleClosePanel()
                else {
                  setIsPanelOpen(true)
                  setSidebarTab('legend')
                }
              }}
            >
              <Core.IconChecklist />
            </Core.GdsButton>

            {/* Settings Button */}
            <Core.GdsButton
              rank={
                isPanelOpen && sidebarTab === 'settings'
                  ? 'secondary'
                  : 'tertiary'
              }
              size="small"
              onClick={() => {
                if (isPanelOpen && sidebarTab === 'settings') handleClosePanel()
                else {
                  setIsPanelOpen(true)
                  setSidebarTab('settings')
                }
              }}
            >
              <Core.IconSettingsGear />
            </Core.GdsButton>
          </div>
        </div>

        {/* --- SIDEBAR PANEL --- */}
        <div className="anatomy-panel" data-open={isPanelOpen}>
          <Core.GdsFlex
            padding="m"
            border="0 0 4xs 0"
            border-color="primary"
            gap="s"
            flex-direction="column"
          >
            <Core.GdsFlex justify-content="space-between" align-items="center">
              <Core.GdsText font-size="body-s" font-weight="bold">
                Configuration
              </Core.GdsText>
              <Core.GdsButton
                rank="tertiary"
                size="small"
                onClick={handleClosePanel}
              >
                <Core.IconCrossSmall />
              </Core.GdsButton>
            </Core.GdsFlex>
            <Core.GdsSegmentedControl
              value={sidebarTab}
              onchange={(e: any) => setSidebarTab(e.target.value)}
              width="100%"
              size="small"
            >
              <Core.GdsSegment value="legend">Legend</Core.GdsSegment>
              <Core.GdsSegment value="settings">Settings</Core.GdsSegment>
            </Core.GdsSegmentedControl>
          </Core.GdsFlex>

          <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
            {/* LEGEND */}
            {sidebarTab === 'legend' && (
              <Core.GdsFlex flex-direction="column" gap="xs">
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

                {/* DETAILS CARD (Only shows when selected) */}
                {selectedItem && (
                  <Core.GdsCard
                    variant="secondary"
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
                    <Core.GdsLink
                      href={selectedItem.docsUrl}
                      font-size="detail-s"
                    >
                      View Documentation &rarr;
                    </Core.GdsLink>
                  </Core.GdsCard>
                )}
              </Core.GdsFlex>
            )}

            {/* SETTINGS */}
            {sidebarTab === 'settings' && (
              <Core.GdsFlex flex-direction="column" gap="l">
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
              </Core.GdsFlex>
            )}
          </div>
        </div>
      </div>
    </Core.GdsCard>
  )
}
