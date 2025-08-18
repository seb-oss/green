// app/settings/shortcuts/page.tsx
'use client'

import { useState } from 'react'

import {
  GdsBadge,
  GdsBreadcrumbs,
  GdsCard,
  GdsFlex,
  GdsInput,
  GdsText,
  IconHomeOpen,
  IconMagnifyingGlass,
  IconSettingsGear,
} from '@sebgroup/green-core/react'
import { Link } from '../../../design/atoms/link/link'
import { useSettingsContext } from '../../../settings/hooks'
import { useShortcutInfo } from '../../../settings/shortcuts'
import { SettingsNav } from '../nav'

const splitFormattedKeys = (formattedKeys: string) => {
  return formattedKeys.split(' ').filter(Boolean)
}

export default function ShortcutsPage() {
  const shortcutInfo = useShortcutInfo()
  const [searchQuery, setSearchQuery] = useState('')

  const globalShortcuts = Array.from(
    shortcutInfo.getGlobalShortcuts().entries(),
  )
  const pageShortcuts = Array.from(shortcutInfo.getPageShortcuts().entries())

  // Filter shortcuts based on search query
  const filterShortcuts = (shortcuts: [string, any][]) => {
    if (!searchQuery) return shortcuts

    return shortcuts.filter(
      ([_, shortcut]) =>
        shortcut.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shortcut.description
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        shortcutInfo
          .getFormattedKeys(shortcut.keys)
          .toLowerCase()
          .includes(searchQuery.toLowerCase()),
    )
  }

  const filteredGlobalShortcuts = filterShortcuts(globalShortcuts)
  const filteredPageShortcuts = filterShortcuts(pageShortcuts)

  return (
    <GdsFlex flex-direction="column" gap="l" width="100%">
      <GdsBreadcrumbs size="small">
        <Link component="link" href="/">
          <IconHomeOpen slot="lead" size="m" />
          Home
        </Link>
        <Link component="link" href="/settings">
          <IconSettingsGear slot="lead" />
          Settings
        </Link>
        <GdsText>Shortcuts</GdsText>
      </GdsBreadcrumbs>
      <GdsFlex
        flex-direction="column"
        gap="m"
        justify-content="flex-start"
        align-items="flex-start"
        max-width="100ch"
      >
        <GdsText tag="h1">Keyboard Shortcuts</GdsText>
        <GdsText tag="p">
          Custom keyboard shortcuts to navigate quickly through the site
        </GdsText>
        <SettingsNav />
        <GdsInput
          value={searchQuery}
          onInput={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
          clearable
        >
          <IconMagnifyingGlass slot="lead" />
        </GdsInput>
      </GdsFlex>

      <GdsFlex flex-direction="column" gap="m" max-width="100ch">
        <GdsFlex justify-content="space-between" align-items="center">
          <GdsText tag="h2" font-size="heading-m">
            Global Shortcuts
          </GdsText>
          <GdsBadge variant="primary" size="small">
            {filteredGlobalShortcuts.length}
          </GdsBadge>
        </GdsFlex>

        <GdsFlex flex-direction="column" gap="xs" max-width="100ch">
          {filteredGlobalShortcuts.map(([path, shortcut]) => (
            <GdsCard key={path} padding="m" background="secondary">
              <GdsFlex
                justify-content="space-between"
                align-items="center"
                gap="l"
              >
                <GdsFlex flex-direction="column" gap="2xs" flex-grow="1">
                  <GdsText font-weight="book">{shortcut.label}</GdsText>
                  {shortcut.description && (
                    <GdsText color="secondary" font-size="body-s">
                      {shortcut.description}
                    </GdsText>
                  )}
                </GdsFlex>
                <GdsFlex gap="2xs" align-items="center">
                  {splitFormattedKeys(
                    shortcutInfo.getFormattedKeys(shortcut.keys),
                  ).map((key, index) => (
                    <GdsCard
                      key={index}
                      padding="xs s"
                      background="primary"
                      border-radius="s"
                    >
                      <GdsText
                        tag="kbd"
                        font-family="monospace"
                        color="primary"
                        font-size="body-s"
                      >
                        {key}
                      </GdsText>
                    </GdsCard>
                  ))}
                </GdsFlex>
              </GdsFlex>
            </GdsCard>
          ))}
        </GdsFlex>
      </GdsFlex>

      <GdsFlex flex-direction="column" gap="m" width="100%">
        <GdsFlex justify-content="space-between" align-items="center">
          <GdsText tag="h2" font-size="heading-m">
            Page Shortcuts
          </GdsText>
          <GdsBadge variant="primary" size="small">
            {filteredPageShortcuts.length}
          </GdsBadge>
        </GdsFlex>

        <GdsFlex flex-direction="column" gap="xs" width="100%">
          {filteredPageShortcuts.map(([path, shortcut]) => (
            <GdsCard key={path} padding="m" background="secondary">
              <GdsFlex
                justify-content="space-between"
                align-items="center"
                gap="l"
              >
                <GdsFlex flex-direction="column" gap="2xs" flex-grow="1">
                  <GdsText font-weight="bold">{shortcut.label}</GdsText>
                  {shortcut.description && (
                    <GdsText color="secondary" font-size="body-s">
                      {shortcut.description}
                    </GdsText>
                  )}
                </GdsFlex>
                <GdsCard padding="xs s" background="primary" border-radius="s">
                  <GdsText
                    tag="kbd"
                    font-family="monospace"
                    color="primary"
                    font-size="body-s"
                  >
                    {shortcutInfo.getFormattedKeys(shortcut.keys)}
                  </GdsText>
                </GdsCard>
              </GdsFlex>
            </GdsCard>
          ))}
        </GdsFlex>
      </GdsFlex>
    </GdsFlex>
  )
}
