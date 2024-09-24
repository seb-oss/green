'use client'

import React, { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { allComponents } from 'content'

import './style.css'

type TrailTypes = {
  home: ReactNode
  separator: ReactNode
  activeClass?: string
  slug?: string
}

const Trail = ({ home, separator, activeClass, slug }: TrailTypes) => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)

  const getComponent = (path: string) =>
    allComponents.find(component => component.url_path === `/component/${slug}${path}`)

  const getCurrentComponent = (path: string) =>
    allComponents.find(component => component.url_path === `/component/${slug}`)

  const lastPath = pathNames.pop()
  const lastPathComponent = getComponent(`/${lastPath}`)
  const currentComponent = getCurrentComponent(`/${slug}`)

  // console.log('lastPathComponent', getCurrentComponent('/button'))
  return (
    <div className="trail">
      <ul>
        <li>
          <Link href={'/'}>{home}</Link>
        </li>
        {separator}
        <li>
          <Link href={'/components'}>Component</Link>
        </li>
        {slug && (
          <>
            {separator}
            <li className={paths === `/component/${slug}` ? activeClass : ''}>
              <Link href={'/component/' + slug}>{currentComponent?.title}</Link>
            </li>
          </>
        )}
        {lastPathComponent && (
          <>
            {separator}
            <li className={`${activeClass}`}>
              <Link href={'/'}>{lastPathComponent?.title}</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default Trail
