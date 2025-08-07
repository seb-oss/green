'use client'

import { ReactNode, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'

export interface PlaygroundProps {
  theme?: 'light' | 'dark'
  toolbar?: ReactNode
  defaultView?: 'preview' | 'inspect'
  height?: string
  previewContent: ReactNode
  inspectContent: ReactNode
}

export default function Playground({
  theme: initialTheme = 'light',
  toolbar,
  defaultView = 'preview',
  height = '80vh',
  previewContent,
  inspectContent,
}: PlaygroundProps) {
  const [view, setView] = useState<'preview' | 'inspect'>(defaultView)
  const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme)

  const handleViewChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    setView(target.value as 'preview' | 'inspect')
  }

  return (
    <Core.GdsTheme color-scheme={theme}>
      <Core.GdsCard
        flex-direction="column"
        gap="2xl"
        width="100%"
        height={height}
        overflow="hidden"
        position="relative"
      >
        <Core.GdsCard
          variant="primary"
          width="100%"
          height="100%"
          justify-content="center"
          align-items="center"
          overflow={view === 'inspect' ? 'auto' : 'hidden'}
        >
          {view === 'preview' ? previewContent : inspectContent}
        </Core.GdsCard>

        <Core.GdsCard
          position="absolute"
          variant="secondary"
          inset="auto 10px 10px 10px"
          flex-direction="row"
          justify-content="space-between"
          align-items="center"
          padding="xs"
        >
          <Core.GdsFlex
            gap="s"
            align-items="center"
            justify-content="center"
            height="100%"
          >
            {toolbar}
          </Core.GdsFlex>

          <Core.GdsFlex gap="s">
            <Core.GdsFlex>
              <Core.GdsButton
                rank={theme === 'light' ? 'secondary' : 'tertiary'}
                onClick={() => setTheme('light')}
              >
                <Core.IconSun size="s" />
              </Core.GdsButton>
              <Core.GdsButton
                rank={theme === 'dark' ? 'secondary' : 'tertiary'}
                onClick={() => setTheme('dark')}
              >
                <Core.IconMoon size="s" />
              </Core.GdsButton>
            </Core.GdsFlex>

            <Core.GdsSegmentedControl
              size="small"
              value={view}
              onchange={handleViewChange}
            >
              <Core.GdsSegment value="preview">Preview</Core.GdsSegment>
              <Core.GdsSegment value="inspect">Tokens</Core.GdsSegment>
            </Core.GdsSegmentedControl>
          </Core.GdsFlex>
        </Core.GdsCard>
      </Core.GdsCard>
    </Core.GdsTheme>
  )
}
