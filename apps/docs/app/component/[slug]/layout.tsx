// app/component/[slug]/layout.tsx
'use client'

import { notFound } from 'next/navigation'

import { GdsFlex } from '@sebgroup/green-core/react'
import { useContentContext } from '../../../settings/content/hooks'

export default function ComponentLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string } // Remove Promise type
}) {
  const { slug } = params // Remove use() hook
  const { isLoaded, actions } = useContentContext()

  if (!isLoaded) return null

  const component = actions.getComponent(slug)

  if (!component) {
    notFound()
  }

  return (
    <GdsFlex
      flex-direction="column"
      width="100%"
      justify-content="center"
      margin="0 auto"
      gap="l"
    >
      {component.title}
      {children}
    </GdsFlex>
  )
}
