'use client'

import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { allComponents } from 'content'
import { GdsFlex, GdsLink, GdsText } from '$/import/components'

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
    <GdsFlex gap="s" align-items="center" margin="0 0 2xl 0">
      <GdsLink href={'/'}>
        <GdsText font-size="body-s" text-decoration="underline">
          {home}
        </GdsText>
      </GdsLink>
      {separator}
      <GdsLink href={'/components'}>
        <GdsText font-size="body-s" text-decoration="underline">
          Component
        </GdsText>
      </GdsLink>
      {slug && (
        <>
          {separator}
          <GdsLink href={'/component/' + slug}>
            <GdsText font-size="body-s">{currentComponent?.title}</GdsText>
          </GdsLink>
        </>
      )}
      {lastPathComponent && (
        <>
          {separator}
          <GdsLink href={'/'}>
            <GdsText font-size="body-s">{lastPathComponent?.title}</GdsText>
          </GdsLink>
        </>
      )}
    </GdsFlex>
  )
}

export default Breadcrumbs
