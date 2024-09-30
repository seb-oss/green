import Dev, { isDev } from '$/dev/dev'
import { allComponents, Component } from 'content'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import './style.css'

const GdsButton = dynamic(() => import('@sebgroup/green-react/src/core/button'))
const GdsCard = dynamic(() => import('@sebgroup/green-react/src/core/card'))
const GdsContainer = dynamic(() => import('@sebgroup/green-react/src/core/container'))
const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'))

export default function Sidebar({ isNavOpen }: { isNavOpen: boolean; toggleNav: () => void }) {
  const path = usePathname()
  const filteredComponents = allComponents.filter(component => component._raw.sourceFileName === 'index.mdx')

  function Component(component: Component) {
    return (
      <GdsButton href={component.url_path} onClick={checkIfMenuShouldClose}>
        {component.title}
      </GdsButton>
    )
  }

  const components = filteredComponents
    .filter(component => !(component.private && !isDev))
    .sort((a, b) => a.title.localeCompare(b.title))

  const SideBarRef = useRef<HTMLDivElement>(null)

  const checkIfMenuShouldClose = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { current } = SideBarRef
    if (current && window.innerWidth < 992 && !current.classList.contains('hidden')) {
      toggleNav()
    }
  }

  return (
    <nav className="menu">
      <GdsFlex height="100%">
        <GdsCard width="320px" padding="m" background="primary" border-radius="s">
          <GdsFlex gap="s" flex-direction="column">
            <details open={path.includes('/component')}>
              <summary>
                <GdsButton
                  rank="tertiary"
                  className={path === '/components' ? 'active' : ''}
                  href="/components"
                  onClick={checkIfMenuShouldClose}
                >
                  Components
                </GdsButton>
              </summary>
              <nav>
                {components.map((component, idx) => (
                  <Component key={idx} {...component} />
                ))}
              </nav>
            </details>
            <details open={path.includes('/foundation')}>
              <summary>
                <GdsButton
                  rank="tertiary"
                  className={path === '/foundation' ? 'active' : ''}
                  href="/foundation"
                  onClick={checkIfMenuShouldClose}
                >
                  Foundation
                </GdsButton>
                <Dev></Dev>
              </summary>
              <Dev>
                <nav>
                  <Link
                    className={path == '/foundation/accessibility' ? 'active' : ''}
                    href="/foundation/accessibility"
                    onClick={checkIfMenuShouldClose}
                  >
                    Accessibility
                  </Link>
                </nav>
              </Dev>
            </details>
            <details open={path.includes('/ux-writing')}>
              <summary>
                <GdsButton
                  rank="tertiary"
                  rank={path == '/ux-writing' ? 'primary' : 'tertiary'}
                  href="/ux-writing"
                  onClick={checkIfMenuShouldClose}
                >
                  UX writing
                </GdsButton>
                <Dev></Dev>
              </summary>
              <Dev>
                <nav>
                  <GdsButton rank={path == '/ux-writing' ? 'primary' : 'tertiary'} href="/ux-writing/general">
                    General
                  </GdsButton>
                  <GdsButton rank={path == '/ux-writing' ? 'primary' : 'tertiary'} href="/ux-writing/english">
                    English
                  </GdsButton>
                  <GdsButton
                    rank="tertiary"
                    rank={path == '/ux-writing' ? 'primary' : 'tertiary'}
                    href="/ux-writing/swedish"
                    onClick={checkIfMenuShouldClose}
                  >
                    Swedish
                  </GdsButton>
                </nav>
              </Dev>
            </details>
            <details open={path.includes('/about') || path.includes('/changelog') || path.includes('/status')}>
              <summary>
                <GdsButton className={path == '/about' ? 'active' : ''} href="/about" onClick={checkIfMenuShouldClose}>
                  About
                </GdsButton>
              </summary>
              <nav>
                <GdsButton className={path == '/changelog' ? 'active' : ''} href="/changelog">
                  Changelog
                </GdsButton>
                <GdsButton
                  rank="tertiary"
                  className={path == '/status' ? 'active' : ''}
                  href="/status"
                  onClick={checkIfMenuShouldClose}
                >
                  Status
                </GdsButton>
              </nav>
            </details>
            <GdsButton href="https://designlibrary.sebgroup.com/" target="_blank">
              Design Library
            </GdsButton>
          </GdsFlex>
        </GdsCard>
      </GdsFlex>
    </nav>
  )
}
