// play/layout.tsx
'use client'

import { usePathname } from 'next/navigation'

import { SearchProvider } from '../../design/studio/context/search.context'
import { getPageBySlug } from '../../design/studio/data/studio.data.hooks'
import { Studio } from '../../design/studio/layout.studio'

export default function PlayLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const PATH = usePathname()
  const MAIN = `/${PATH.split('/').slice(1, 3).join('/')}`
  /*   const ACTIVE = getPageBySlug(MAIN) */
  const SECTION = getPageBySlug(MAIN)
  if (!SECTION) return null
  const SUBPAGE = SECTION.pages?.find((p: any) => p.slug === PATH)
  const ACTIVE = SUBPAGE || SECTION
  return (
    <SearchProvider>
      <Studio
        page={ACTIVE.key}
        title={ACTIVE.title}
        description={ACTIVE.description}
      >
        {children}
      </Studio>
    </SearchProvider>
  )
}
