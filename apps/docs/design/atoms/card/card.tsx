'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { useSettingsValue } from '../../../settings'
import { Snippet } from '../snippet/snippet'

interface CardProps {
  type?: 'component' | 'template'
  list?: boolean
  title?: string
  beta?: boolean
  summary?: string
  layout?: boolean
  snippet?: string
  badge?: string
  href?: string
  children?: React.ReactNode
}

export default function Card({
  list,
  type,
  title,
  summary,
  beta,
  layout,
  snippet,
  href,
  children,
}: CardProps) {
  const router = useRouter()
  const [overrideTheme, setOverrideTheme] = useState<'light' | 'dark' | null>(
    null,
  )
  const [isHovered, setIsHovered] = useState(false)
  const systemColorScheme = useSettingsValue((s) => s.UI.Theme.ColorScheme)

  useEffect(() => {
    setOverrideTheme(null)
  }, [systemColorScheme])

  const toggleTheme = () => {
    if (!overrideTheme) {
      setOverrideTheme(systemColorScheme === 'light' ? 'dark' : 'light')
      return
    }
    setOverrideTheme(overrideTheme === 'light' ? 'dark' : 'light')
  }

  const currentTheme = overrideTheme || systemColorScheme

  return (
    <Core.GdsFlex
      flex-direction="column;"
      width="100%"
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        key={href}
        href={type === 'template' ? `/template/${href}` : `/component/${href}`}
        onClick={(e) => {
          e.preventDefault()
          const path =
            type === 'template' ? `/template/${href}` : `/component/${href}`
          window.scrollTo({ top: 0, behavior: 'auto' })
          router.push(path)
        }}
      >
        <Core.GdsFlex flex-direction="column;" width="100%">
          <Core.GdsCard
            key={title}
            border-radius="m"
            padding={snippet ? '0' : 'l'}
            gap="s"
            width="100%"
            min-width="100%"
            flex-direction={list ? 'row' : 'columns'}
            position="relative"
            className="no-pointer"
            z-index="0"
            tabIndex={-1}
            inert
          >
            {children
              ? children
              : snippet && (
                  <Core.GdsTheme color-scheme={currentTheme}>
                    <Core.GdsCard
                      height="240px"
                      overflow="hidden"
                      width="100%"
                      max-width={list ? '50%' : '100%'}
                      align-items="center"
                      justify-content="center"
                      padding="0"
                    >
                      {snippet && <Snippet slug={snippet} />}
                    </Core.GdsCard>
                  </Core.GdsTheme>
                )}
          </Core.GdsCard>
          <Core.GdsFlex
            flex-direction="column"
            gap="0"
            padding-inline="m"
            padding-block="s"
            flex="1"
            height={!list ? '100%' : 'max-content'}
            margin={!list ? 'none' : 'auto 0'}
          >
            <Core.GdsFlex gap="s" align-items="center">
              <Core.GdsText font="heading-s">{title}</Core.GdsText>
              {beta && (
                <Core.GdsBadge size="small" variant="notice">
                  BETA
                </Core.GdsBadge>
              )}
              {layout && (
                <Core.GdsBadge size="small" variant="information">
                  Layout
                </Core.GdsBadge>
              )}
            </Core.GdsFlex>

            {summary && (
              <Core.GdsText color="02" font="preamble-xs" lines="2">
                {summary}
              </Core.GdsText>
            )}
          </Core.GdsFlex>
        </Core.GdsFlex>
      </Link>
      {false && isHovered && (
        <Core.GdsFlex
          justify-content="space-between"
          align-items="center"
          width="max-content"
          position="absolute"
          inset="20px 20px auto auto"
        >
          <Core.GdsButton rank="secondary" size="xs" onClick={toggleTheme}>
            {currentTheme === 'light' ? (
              <Core.IconMoon size="s" />
            ) : (
              <Core.IconSun size="s" />
            )}
          </Core.GdsButton>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
