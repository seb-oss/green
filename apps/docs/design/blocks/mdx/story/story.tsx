'use client'

import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import './story.css'

interface StoryProps {
  component?: string
  id?: string
  height?: string
}

export default function FigmaProto({ component, id, height }: StoryProps) {
  const [isLoading, setIsLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleLoad = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    const handleResize = (event: MessageEvent) => {
      if (typeof event.data === 'number' && iframeRef.current) {
        iframeRef.current.style.height = `${event.data}px`
      }
    }

    window.addEventListener('message', handleResize)

    return () => {
      window.removeEventListener('message', handleResize)
    }
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src={`https://storybook.seb.io/latest/core/iframe.html?viewMode=story&id=components-${component}--${id}`}
      onLoad={handleLoad}
      height={height}
      className="story"
    ></iframe>
  )
}
