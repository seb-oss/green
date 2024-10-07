'use client'

import Link from 'next/link'
import GdsContainer from '@sebgroup/green-react/src/core/container'
import GdsFlex from '@sebgroup/green-react/src/core/flex'
import GdsButton from '@sebgroup/green-react/src/core/button'
import { IconChevronBottom } from '@sebgroup/green-react/src/lib/icon/icons/IconChevronBottom'
import { IconChevronTop } from '@sebgroup/green-react/src/lib/icon/icons/IconChevronTop'
import Dev, { isDev } from '$/dev/dev'
import { allComponents, Component } from 'content'
import { usePathname } from 'next/navigation'
import React, { useRef, useState } from 'react'

export default function Sidebar({
  isNavOpen,
}: {
  isNavOpen?: boolean
  toggleNav?: () => void
}) {
  const path = usePathname()
  const [isNavVisible, setIsNavVisible] = useState(false)

  const filteredComponents = allComponents.filter(
    (component) => component._raw.sourceFileName === 'index.mdx',
  )

  function Component(component: Component) {
    return (
      <Link
        className={path == component.url_path ? 'active' : ''}
        href={component.url_path}
        onClick={checkIfMenuShouldClose}
      >
        {component.title}
      </Link>
    )
  }

  const components = filteredComponents
    .filter((component) => !(component.private && !isDev))
    .sort((a, b) => a.title.localeCompare(b.title))

  const Arrow = () => {
    return (
      <GdsButton
        rank="tertiary"
        aria-label="Expand"
        onClick={toggleNavVisibility}
      >
        {isNavVisible ? <IconChevronTop /> : <IconChevronBottom />}
      </GdsButton>
    )
  }

  const SideBarRef = useRef<HTMLDivElement>(null)

  const checkIfMenuShouldClose = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { current } = SideBarRef
    if (
      current &&
      window.innerWidth < 992 &&
      !current.classList.contains('hidden')
    ) {
      toggleNav()
    }
  }

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible)
  }

  return (
    <GdsFlex
      padding="l"
      border="0 4xs/#cececa 0 0"
      max-width="300px"
      min-height="100vh"
      align-items="flex-start"
    >
      <GdsFlex flex-direction="column" flex="1">
        <GdsFlex align-items="center" justify-content="space-between">
          <Link
            className={path === '/components' ? 'active' : ''}
            href="/components"
            onClick={checkIfMenuShouldClose}
          >
            Components
          </Link>
          <Arrow />
        </GdsFlex>
        {isNavVisible && (
          <GdsFlex flex-direction="column" gap="m" padding="m m 0 m">
            {components.map((component, idx) => (
              <Component key={idx} {...component} />
            ))}
          </GdsFlex>
        )}
      </GdsFlex>
    </GdsFlex>
  )
}
