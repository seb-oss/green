'use client'

import * as React from 'react'
import { useState } from 'react'

interface FigmaProtoProps {
  file?: string
  caption?: string
  node?: string
  scale?: string
  height?: string
}

export default function FigmaProto({
  file,
  caption,
  node,
  scale,
  height,
}: FigmaProtoProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <figure className={isLoading ? 'loading' : ''}>
      <iframe
        src={`https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/${file}/Embed?type=design&scaling=min-zoom&node-id=${node}&mode=design&hide-ui=1`}
        onLoad={handleLoad}
        height={height}
      ></iframe>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
