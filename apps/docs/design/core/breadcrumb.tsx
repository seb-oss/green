'use client'

import React, { ReactNode } from 'react'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { allComponents } from 'content'
import { GdsFlex, GdsText } from '$/import/components'

type TrailTypes = {
  home: ReactNode
  separator: ReactNode
  activeClass?: string
  slug?: string
}

const Breadcrumbs = ({ home, separator, activeClass, slug }: TrailTypes) => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter((path) => path)

  const getComponent = (path: string) =>
    allComponents.find(
      (component) => component.url_path === `/component/${slug}${path}`,
    )

  const getCurrentComponent = (path: string) =>
    allComponents.find(
      (component) => component.url_path === `/component/${slug}`,
    )

  const lastPath = pathNames.pop()
  const lastPathComponent = getComponent(`/${lastPath}`)
  const currentComponent = getCurrentComponent(`/${slug}`)

  return (
    <GdsText font-size="detail-xs">
      <GdsFlex gap="s" align-items="center">
        <Link href={'/'}>{home}</Link>
        {separator}
        <Link href={'/components'}>Component</Link>
        {slug && (
          <>
            {separator}
            <Link href={'/component/' + slug}>{currentComponent?.title}</Link>
          </>
        )}
        {lastPathComponent && (
          <>
            {separator}
            <Link href={'/'}>{lastPathComponent?.title}</Link>
          </>
        )}
      </GdsFlex>
    </GdsText>
  )
}

export default Breadcrumbs
