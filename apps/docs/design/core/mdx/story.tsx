'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { GdsCard } from '$/import/components'

interface StoryProps {
  component?: string
  id?: string
  height?: string
}

export default function Story({ component, id, height, ...props }: StoryProps) {
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
    <GdsCard margin="0 0 4xl 0" {...props}>
      <iframe
        ref={iframeRef}
        key="story-iframe"
        src={`https://storybook.seb.io/latest/core/iframe.html?viewMode=story&id=components-${component}--${id}`}
        onLoad={handleLoad}
        height={height}
        className="story"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @scope {
              .story {
                width: 100%;
                height: 100%;
                border: 0;  
                min-height: 360px;
              }
            }
          `,
        }}
      />
    </GdsCard>
  )
}
