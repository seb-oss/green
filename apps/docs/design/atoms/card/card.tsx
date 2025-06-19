'use client'

import { useEffect, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useSettingsValue } from '../../../settings'
import { Snippet } from '../snippet/snippet'

interface CardProps {
  list?: boolean
  title?: string
  beta?: boolean
  summary?: string
  snippet?: string
  badge?: string
  href?: string
  children?: React.ReactNode
}

export default function Card({
  list,
  title,
  summary,
  beta,
  snippet,
  href,
  children,
}: CardProps) {
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
    <Core.GdsCard
      key={title}
      border-color="primary"
      variant="secondary"
      border-radius="m"
      padding="2xs 2xs l 2xs"
      gap="s"
      height="100%"
      max-width="100%"
      width="100%"
      min-width="100%"
      flex-direction={list ? 'row' : 'columns'}
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children ? (
        children
      ) : (
        <Core.GdsTheme color-scheme={currentTheme}>
          <Core.GdsCard
            height="240px"
            overflow="hidden"
            width="100%"
            max-width={list ? '50%' : '100%'}
            align-items="center"
            justify-content="center"
            variant="secondary"
            padding="0"
          >
            {snippet && <Snippet slug={snippet} />}
            {isHovered && (
              <Core.GdsFlex
                justify-content="space-between"
                align-items="center"
                width="max-content"
                position="absolute"
                inset="20px 20px auto auto"
              >
                <Core.GdsButton rank="tertiary" size="xs" onClick={toggleTheme}>
                  {currentTheme === 'light' ? (
                    <Core.IconMoon size="s" />
                  ) : (
                    <Core.IconSun size="s" />
                  )}
                </Core.GdsButton>
              </Core.GdsFlex>
            )}
          </Core.GdsCard>
        </Core.GdsTheme>
      )}

      <Core.GdsFlex
        flex-direction="column"
        gap="xs"
        padding-inline="m"
        padding-block={!list ? '0' : 'm'}
        flex="1"
        height={!list ? '100%' : 'max-content'}
        margin={!list ? 'none' : 'auto 0'}
      >
        <Core.GdsFlex gap="s" align-items="center">
          <Core.GdsText font-size="display-xs">{title}</Core.GdsText>
          {beta && (
            <Core.GdsBadge size="small" variant="notice" rounded>
              BETA
            </Core.GdsBadge>
          )}
        </Core.GdsFlex>

        {summary && (
          <Core.GdsText
            color="secondary"
            font-size="detail-xs"
            lines={2}
            width="40ch"
          >
            {summary}
          </Core.GdsText>
        )}

        <Core.GdsLink
          key={href}
          href={`/component/${href}`}
          margin="auto 0 0 0"
        >
          <Core.GdsText color="secondary">View Component</Core.GdsText>
          <Core.IconArrowRight size="s" slot="trail" />
        </Core.GdsLink>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
