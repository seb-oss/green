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
  const mainPath = `/${pathname.split('/').slice(1, 3).join('/')}`
  const activePage = getPageBySlug(mainPath)

  if (!activePage) return null

  return (
    <Studio
      page={activePage.key}
      title={activePage.label}
      description={activePage.description}
    >
      {children}
    </Studio>
  )
}
