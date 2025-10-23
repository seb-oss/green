// hooks/useTemplateZoom.ts
import { useCallback, useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

import type { D3ZoomEvent, ZoomBehavior } from 'd3'

interface ViewPort {
  scale: number
  x: number
  y: number
}

export function useTemplateZoom(minZoom = 0.5, maxZoom = 3) {
  const containerRef = useRef<HTMLDivElement>(null)
  const transformRef = useRef<HTMLDivElement>(null)
  const zoomBehaviorRef = useRef<ZoomBehavior<HTMLDivElement, unknown>>(null)
  const [viewport, setViewport] = useState<ViewPort>({ scale: 1, x: 0, y: 0 })

  const initializeZoom = useCallback(() => {
    if (!containerRef.current) return

    const zoom = d3
      .zoom<HTMLDivElement, unknown>()
      .scaleExtent([minZoom, maxZoom])
      .on('zoom', (event: D3ZoomEvent<HTMLDivElement, unknown>) => {
        const { x, y, k } = event.transform
        setViewport({ scale: k, x, y })

        if (transformRef.current) {
          transformRef.current.style.transform = `translate(${x}px, ${y}px) scale(${k})`
        }
      })

    zoomBehaviorRef.current = zoom
    const selection = d3.select(containerRef.current)
    selection.call(zoom)
    selection.on('dblclick.zoom', null)
  }, [minZoom, maxZoom])

  const handleZoom = useCallback(
    (delta: number) => {
      if (!containerRef.current || !zoomBehaviorRef.current) return

      const currentTransform = d3.zoomTransform(containerRef.current)
      const newScale = Math.max(
        minZoom,
        Math.min(maxZoom, currentTransform.k * (1 + delta)),
      )

      d3.select(containerRef.current)
        .transition()
        .duration(300)
        .call(
          zoomBehaviorRef.current.transform,
          d3.zoomIdentity
            .translate(currentTransform.x, currentTransform.y)
            .scale(newScale),
        )
    },
    [minZoom, maxZoom],
  )

  const resetZoom = useCallback(() => {
    if (!containerRef.current || !zoomBehaviorRef.current) return

    d3.select(containerRef.current)
      .transition()
      .duration(300)
      .call(zoomBehaviorRef.current.transform, d3.zoomIdentity)
  }, [])

  useEffect(() => {
    initializeZoom()
  }, [initializeZoom])

  const centerContent = useCallback(() => {
    if (
      !containerRef.current ||
      !transformRef.current ||
      !zoomBehaviorRef.current
    )
      return

    const containerBounds = containerRef.current.getBoundingClientRect()
    const contentBounds = transformRef.current.getBoundingClientRect()

    const centerX =
      (containerBounds.width - contentBounds.width * viewport.scale) / 2
    const centerY =
      (containerBounds.height - contentBounds.height * viewport.scale) / 2

    d3.select(containerRef.current)
      .transition()
      .duration(300)
      .call(
        zoomBehaviorRef.current.transform,
        d3.zoomIdentity.translate(centerX, centerY).scale(viewport.scale),
      )
  }, [viewport.scale])

  return {
    containerRef,
    transformRef,
    viewport,
    handleZoom,
    resetZoom,
    centerContent,
  }
}
