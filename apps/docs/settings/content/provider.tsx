'use client'

import { PropsWithChildren, useEffect } from 'react'

import { contentContext } from './context'
import { useContent } from './hooks'

interface ContentProviderProps extends PropsWithChildren {
  loading?: boolean
  fallback?: React.ReactNode
  onLoad?: () => void
}

export function ContentProvider({
  children,
  loading = false,
  fallback = null,
  onLoad,
}: ContentProviderProps) {
  const content = useContent()

  useEffect(() => {
    if (content.isLoaded) {
      onLoad?.()
    }
  }, [content.isLoaded, onLoad])

  if (!content.isLoaded || loading) {
    return fallback
  }

  return (
    <contentContext.Provider value={content}>
      {children}
    </contentContext.Provider>
  )
}
