// play/layout.tsx
'use client'

import { usePathname } from 'next/navigation'

import { SearchProvider } from '../../design/layout/studio/context/search.context'
import { getPageBySlug } from '../../design/layout/studio/data/studio.data.hooks'
import { Studio } from '../../design/layout/studio/layout.studio'

export default function PlayLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const PATH = usePathname()
  const MAIN = `/${PATH.split('/').slice(1, 3).join('/')}`
  const ACTIVE = getPageBySlug(MAIN)

  if (!ACTIVE) return null

  return (
    <SearchProvider>
      <Studio
        page={ACTIVE.key}
        title={ACTIVE.label}
        description={ACTIVE.description}
      >
        {children}
      </Studio>
    </SearchProvider>
  )
}
