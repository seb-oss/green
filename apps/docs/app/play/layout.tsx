// play/layout.tsx
'use client'

import { usePathname } from 'next/navigation'

import {
  getContentItemByKey,
  getPageBySlug,
} from '../../design/layout/studio/data/studio.data'
import { Studio } from '../../design/layout/studio/layout.studio'

export default function PlayLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const mainPath = `/${segments.slice(1, 3).join('/')}`
  const itemKey = segments[3]

  const activePage = getPageBySlug(mainPath)
  const activeItem =
    itemKey && activePage ? getContentItemByKey(activePage, itemKey) : undefined

  if (!activePage) {
    return null
  }

  return (
    <Studio
      page={activePage.key}
      title={activePage.title}
      description={activePage.description}
      aside={
        activeItem && (
          <div>
            <h2>{activeItem.name}</h2>
            <p>{activeItem.description}</p>
            {activeItem.component && (
              <div>Component: {activeItem.component}</div>
            )}
            {activeItem.cssVariable && (
              <div>
                <p>CSS Variable: {activeItem.cssVariable}</p>
                <p>Value: {activeItem.value}</p>
              </div>
            )}
          </div>
        )
      }
    >
      {children}
    </Studio>
  )
}
