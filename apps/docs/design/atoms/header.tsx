import {
  GdsButton,
  GdsCard,
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

export default function Header() {
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
      <GdsButton rank="tertiary" size="small">
        <IconMenuSidebar />
      </GdsButton>
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
