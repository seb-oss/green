// play/layout.tsx
'use client'

import { usePathname } from 'next/navigation'

import { getPageBySlug } from '../../design/layout/studio/data/studio.data'
import { Studio } from '../../design/layout/studio/layout.studio'

export default function PlayLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const activePage = getPageBySlug(pathname)

  if (!activePage) {
    return null
  }

  return (
    <Studio
      page={activePage.key}
      title={activePage.title}
      description={activePage.description}
    >
      {children}
    </Studio>
  )
}
