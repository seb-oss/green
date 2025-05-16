import { useRouter } from 'next/navigation'

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
  IconDevices,
  IconMagnifyingGlass,
  IconMenuSidebar,
} from '@sebgroup/green-core/react'
import { useSettingsContext, useSettingsValue } from '../../settings'

export default function Header() {
  const router = useRouter()
  const { settings, actions } = useSettingsContext()
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)

  const handleClick = () => {
    actions.toggle('UI.Panel.Sidebar')
  }

  const handleInternalClick = (path: string, isExternal?: boolean) => {
    return (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()
      if (isExternal) {
        window.open(path, '_blank')
      } else {
        router.push(path)
      }
    }
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
      <span></span>

      <GdsButton
        size="small"
        rank="tertiary"
        onClick={handleInternalClick('/search', false)}
      >
        <IconMagnifyingGlass size="m"></IconMagnifyingGlass>
      </GdsButton>
    </GdsFlex>
  )
}
