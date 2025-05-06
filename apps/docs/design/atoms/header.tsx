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
  const { settings, actions } = useSettingsContext()
  const isOpen = useSettingsValue((settings) => settings.UI.Panel.Sidebar)

  const handleClick = () => {
    actions.toggle('UI.Panel.Sidebar')
  }

  return (
    <GdsFlex
      background="secondary"
      width="100%"
      align-items="center"
      justify-content="space-between"
      padding="xs"
      position="relative"
      gap="m"
    >
      {isOpen ? (
        <GdsDiv></GdsDiv>
      ) : (
        <GdsButton rank="tertiary" size="small" onClick={handleClick}>
          <IconMenuSidebar />
        </GdsButton>
      )}
      <GdsFlex height="100%" padding="xs">
        <GdsCard
          border-radius="max"
          flex-direction="row"
          gap="m"
          background="primary"
          padding="s m"
        >
          <IconMagnifyingGlass />
          <GdsText>What are you looking for?</GdsText>
        </GdsCard>
      </GdsFlex>
      <GdsButton size="small" rank="tertiary">
        <IconDevices size="m" slot="lead"></IconDevices>
        Web
      </GdsButton>
    </GdsFlex>
  )
}
