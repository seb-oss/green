'use client'

import { _, Icon } from '../../../hooks'
import { useSettingsContext, useSettingsValue } from '../../../settings/hooks'
import { Link } from '../link/link'

export default function Toggle() {
  const THEME = useSettingsValue((s) => s.UI.Theme.ColorScheme)
  const { actions: SET } = useSettingsContext()

  const handleThemeToggle = () => {
    SET.toggle('UI.Theme.ColorScheme')
  }

  const THEME_ICON = () => {
    switch (THEME) {
      case 'light':
        return <Icon name="IconSun" size="m" />
      case 'dark':
        return <Icon name="IconMoon" size="m" />
      case 'auto':
        return <Icon name="IconTelevision" size="m" />
    }
  }

  return (
    <Link
      component="button"
      rank="tertiary"
      size="small"
      onClick={() => handleThemeToggle()}
      data-theme={THEME}
    >
      {THEME_ICON()}
    </Link>
  )
}
