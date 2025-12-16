'use client'

import { useEffect, useRef, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'

import './anatomy.core.css'

interface AnatomyItem {
  id: number
  label: string
  key: string
  type?: 'element' | 'container' | 'border' | 'background'
}

interface ConnectorPosition {
  id: number
  x: number
  y: number
  elementX: number
  elementY: number
  type?: 'element' | 'container' | 'border' | 'background'
}

interface AnatomyProps {
  title?: string
  items?: AnatomyItem[]
  children: React.ReactNode
}

export default function Anatomy({
  title,
  items: providedItems,
  children,
}: AnatomyProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const childrenWrapperRef = useRef<HTMLDivElement>(null)
  const listContainerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const highlightedElementsRef = useRef<Element[]>([])
  const [discoveredItems, setDiscoveredItems] = useState<AnatomyItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [connectors, setConnectors] = useState<ConnectorPosition[]>([])
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null)

  const discoverAnatomy = (): AnatomyItem[] => {
    if (!cardRef.current) return []

    const elements = cardRef.current.querySelectorAll('[data-anatomy]')
    const itemsMap = new Map<string, AnatomyItem>()
    let id = 1

    elements.forEach((el) => {
      const key = el.getAttribute('data-anatomy')
      if (!key || itemsMap.has(key)) return

      const label = el.getAttribute('data-anatomy-label') || key
      const type = (el.getAttribute('data-anatomy-type') ||
        'element') as AnatomyItem['type']

      itemsMap.set(key, { id, label, key, type })
      id++
    })

    return Array.from(itemsMap.values())
  }

  // Progressive loading of anatomy items after mount
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      const discovered = discoverAnatomy()
      setDiscoveredItems(discovered)
      setIsLoading(false)
    })

    return () => cancelAnimationFrame(timer)
  }, [])

  const items =
    providedItems && providedItems.length > 0 ? providedItems : discoveredItems

  const clearHighlight = () => {
    highlightedElementsRef.current.forEach((el) => {
      el.removeAttribute('data-anatomy-active')
    })
    highlightedElementsRef.current = []
    if (childrenWrapperRef.current) {
      childrenWrapperRef.current.removeAttribute('data-anatomy-active')
    }
  }

  const calculateConnectorPositions = (item: AnatomyItem) => {
    const positions: ConnectorPosition[] = []

    if (!cardRef.current || !listContainerRef.current) return positions

    const cardRect = cardRef.current.getBoundingClientRect()
    const listRect = listContainerRef.current.getBoundingClientRect()

    if (item.type === 'container') {
      if (childrenWrapperRef.current) {
        const elRect = childrenWrapperRef.current.getBoundingClientRect()
        positions.push({
          id: item.id,
          x: listRect.left,
          y: listRect.top + (positions.length + 1) * 40,
          elementX: elRect.left - cardRect.left + elRect.width / 2,
          elementY: elRect.top - cardRect.top,
          type: item.type,
        })
      }
    } else {
      const elements = cardRef.current.querySelectorAll(
        `[data-anatomy="${item.key}"]`,
      )
      elements.forEach((el) => {
        const elRect = el.getBoundingClientRect()
        positions.push({
          id: item.id,
          x: listRect.left,
          y: listRect.top + (positions.length + 1) * 40,
          elementX: elRect.left - cardRect.left + elRect.width / 2,
          elementY: elRect.top - cardRect.top,
          type: item.type,
        })
      })
    }

    return positions
  }

  const handleItemHover = (item: AnatomyItem) => {
    clearHighlight()
    setHoveredItemId(item.id)
    const positions = calculateConnectorPositions(item)
    setConnectors(positions)

    if (item.type === 'container') {
      // Container type only highlights the wrapper itself
      if (childrenWrapperRef.current) {
        childrenWrapperRef.current.setAttribute('data-anatomy-active', item.key)
        childrenWrapperRef.current.setAttribute('data-anatomy-type', item.type)
        highlightedElementsRef.current.push(childrenWrapperRef.current)
      }
    } else {
      // Find specific elements and apply their own type styling
      if (cardRef.current) {
        const elements = cardRef.current.querySelectorAll(
          `[data-anatomy="${item.key}"]`,
        )
        elements.forEach((el) => {
          el.setAttribute('data-anatomy-active', item.key)
          const typeAttr = el.getAttribute('data-anatomy-type') || 'element'
          el.setAttribute('data-anatomy-current-type', typeAttr)
          highlightedElementsRef.current.push(el)
        })
      }
    }
  }

  const handleItemLeave = () => {
    clearHighlight()
    setHoveredItemId(null)
    setConnectors([])
  }

  return (
    <Core.GdsFlex
      gap="m l"
      flex-wrap="wrap"
      padding="0 s"
      width="100%"
      margin="0 0 l 0"
      position="relative"
    >
      <Core.GdsFlex
        flex-direction="column"
        gap="m"
        flex="1"
        position="relative"
      >
        {title && <Core.GdsText font="heading-s">{title}</Core.GdsText>}
        <Core.GdsCard ref={cardRef as any} className="preview-card">
          <div ref={childrenWrapperRef} className="preview-children">
            {children}
          </div>
          {/* SVG Overlay for connector lines */}
          <svg
            ref={svgRef}
            className="anatomy-connectors"
            width="100%"
            height="100%"
            viewBox="0 0 400 400"
            preserveAspectRatio="none"
          >
            {connectors.map((connector, idx) => {
              const typeOffset =
                connector.type === 'background'
                  ? 30
                  : connector.type === 'border'
                    ? 15
                    : 0

              return (
                <g key={idx} className="connector-group">
                  {/* Line from list to element */}
                  <path
                    className="connector-line"
                    d={`M ${connector.x} ${connector.y} Q ${connector.x + 50} ${(connector.y + connector.elementY) / 2} ${connector.elementX} ${connector.elementY - typeOffset}`}
                  />
                  {/* Badge at element position */}
                  <circle
                    className="connector-badge"
                    cx={connector.elementX}
                    cy={connector.elementY - typeOffset}
                    r="12"
                  />
                  <text
                    className="connector-badge-text"
                    x={connector.elementX}
                    y={connector.elementY - typeOffset + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {connector.id}
                  </text>
                </g>
              )
            })}
          </svg>
        </Core.GdsCard>
      </Core.GdsFlex>

      <Core.GdsFlex
        flex-direction="column"
        gap="s"
        className="anatomy-list"
        flex="1"
        ref={listContainerRef as any}
      >
        {items.map((item) => (
          <Core.GdsFlex
            key={item.label}
            align-items="center"
            gap="xs"
            className={`anatomy-item ${hoveredItemId === item.id ? 'anatomy-item-active' : ''}`}
            onMouseEnter={() => handleItemHover(item)}
            onMouseLeave={handleItemLeave}
          >
            <Core.GdsBadge size="small">{item.id.toString()}</Core.GdsBadge>
            <Core.GdsText font="detail-book-xs">{item.label}</Core.GdsText>
          </Core.GdsFlex>
        ))}
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
