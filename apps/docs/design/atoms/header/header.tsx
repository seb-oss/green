import { useRouter } from 'next/navigation'
import { internalLink } from '@/apps/docs/hooks'

import {
  GdsButton,
  GdsCard,
  GdsDiv,
  GdsDropdown,
  GdsFlex,
  GdsInput,
  GdsLink,
  GdsOption,
  GdsText,
  IconAi,
  IconBarsTwo,
  IconBrandSeb,
  IconChevronBottom,
  IconCrossLarge,
  IconDevices,
  IconMagnifyingGlass,
  IconMenuSidebar,
} from '@sebgroup/green-core/react'
import { useSettingsContext, useSettingsValue } from '../../../settings'

export default function Header() {
  const router = useRouter()
  const { settings, actions } = useSettingsContext()
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)

  const handleClick = () => {
    actions.toggle('UI.Panel.Sidebar')
  }
  const handleToggleSidebar = (): void => {
    actions.toggle('UI.Panel.Sidebar')
  }

  return (
    <GdsFlex
      background="secondary"
      width="100%"
      align-items="center"
      justify-content="space-between"
      padding="l"
      position="relative"
      gap="m"
    >
      {isOpen ? (
        <GdsButton onClick={handleToggleSidebar} rank="tertiary" size="small">
          <IconMenuSidebar />
        </GdsButton>
      ) : (
        <GdsButton onClick={handleToggleSidebar} rank="tertiary" size="small">
          <IconCrossLarge />
        </GdsButton>
      )}

      <GdsLink onClick={internalLink} href="/">
        <IconBrandSeb />
      </GdsLink>

      <GdsButton
        size="small"
        rank="tertiary"
        onClick={internalLink}
        href="/search"
      >
        <IconMagnifyingGlass size="m"></IconMagnifyingGlass>
      </GdsButton>
    </GdsFlex>
  )
}
