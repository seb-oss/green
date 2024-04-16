"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

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
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const isDarkMode = theme === "dark"

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <figure>
      <picture>
        {isDarkMode && (
          <source srcSet={dark} media="(prefers-color-scheme: dark)" />
        )}
        <img alt={alt} {...props} />
      </picture>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
