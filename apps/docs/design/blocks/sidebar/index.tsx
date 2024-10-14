import Dev, { isDev } from '$/dev/dev'
import { allComponents, Component } from 'content'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useRef, useContext } from 'react'
import dynamic from 'next/dynamic'
import './style.css'
import classNames from 'classnames'
import { ThemeProviderContext } from '$/theme/provider'

const GdsCard = dynamic(() => import('@sebgroup/green-react/src/core/card'))
const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'))
const GdsButton = dynamic(() => import('@sebgroup/green-react/src/core/button'))
const IconCrossSmall = dynamic(() =>
  import('@sebgroup/green-react/src/lib/icon/icons/IconCrossSmall').then(
    (mod) => mod.IconCrossSmall,
  ),
)

export default function Sidebar() {
  const { isNavOpen, toggleNav } = useContext(ThemeProviderContext)
  const path = usePathname()
  const filteredComponents = allComponents.filter(
    (component) => component._raw.sourceFileName === 'index.mdx',
  )

  const components = filteredComponents
    .filter((component) => !(component.private && !isDev))
    .sort((a, b) => a.title.localeCompare(b.title))

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

  return (
    <GdsFlex
      className={classNames('menu', { 'menu--open': isNavOpen })}
      padding="m; m{l}"
      position="fixed; m{sticky}"
      z-index="999"
    >
      <GdsCard
        width="250px"
        padding="m"
        background="primary"
        border-radius="s"
        shadow="l; m{none}"
      >
        <GdsButton
          className="menu__close-button"
          rank="secondary"
          size="small"
          onClick={() => toggleNav()}
        >
          <IconCrossSmall />
        </GdsButton>
        <nav>
          <GdsFlex gap="s" flex-direction="column">
            <Link
              className={path === '/components' ? 'active' : ''}
              href="/components"
              onClick={checkIfMenuShouldClose}
            >
              Components
            </Link>

            {components.map((component, idx) => (
              <Link
                key={idx}
                href={component.url_path}
                onClick={checkIfMenuShouldClose}
              >
                {component.title}
              </Link>
            ))}

            <Link
              className={path === '/foundation' ? 'active' : ''}
              href="/foundation"
              onClick={checkIfMenuShouldClose}
            >
              Foundation
            </Link>
            <Dev></Dev>

            <Dev>
              <nav>
                <Link
                  className={
                    path == '/foundation/accessibility' ? 'active' : ''
                  }
                  href="/foundation/accessibility"
                  onClick={checkIfMenuShouldClose}
                >
                  Accessibility
                </Link>
              </nav>
            </Dev>

            <Link
              rank={path == '/ux-writing' ? 'primary' : 'tertiary'}
              href="/ux-writing"
              onClick={checkIfMenuShouldClose}
            >
              UX writing
            </Link>

            <Link
              className={path == '/about' ? 'active' : ''}
              href="/about"
              onClick={checkIfMenuShouldClose}
            >
              About
            </Link>

            <Link
              className={path == '/changelog' ? 'active' : ''}
              href="/changelog"
            >
              Changelog
            </Link>
            <Link
              className={path == '/status' ? 'active' : ''}
              href="/status"
              onClick={checkIfMenuShouldClose}
            >
              Status
            </Link>
            <Link href="https://designlibrary.sebgroup.com/" target="_blank">
              Design Library
            </Link>
          </GdsFlex>
        </nav>
      </GdsCard>
    </GdsFlex>
  )
}
