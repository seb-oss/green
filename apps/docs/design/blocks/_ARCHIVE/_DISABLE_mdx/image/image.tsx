'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'

export default function CustomImage({
  alt,
  dark,
  caption,
  ...props
}: {
  alt: string
  dark: string
  caption: string
} & React.ImgHTMLAttributes<HTMLImageElement>) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <figure>
      <picture>
        <img alt={alt} {...props} />
      </picture>
      {caption && <figcaption dangerouslySetInnerHTML={{ __html: caption }} />}
    </figure>
  )
}
