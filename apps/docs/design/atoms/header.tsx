import {
  GdsButton,
  GdsDropdown,
  GdsFlex,
  GdsInput,
  GdsLink,
  GdsOption,
  IconAi,
  IconBarsTwo,
  IconBrandSeb,
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
      <GdsFlex
        position="absolute"
        inset="0"
        width="20%"
        height="max-content"
        margin="auto"
      >
        <GdsInput plain size="small" placeholder="What are you looking for?">
          <IconMagnifyingGlass slot="lead" />
        </GdsInput>
      </GdsFlex>

      <GdsFlex>
        <GdsDropdown size="small" plain>
          <IconDevices slot="lead"></IconDevices>
          <GdsOption value="web">Web</GdsOption>
        </GdsDropdown>
      </GdsFlex>
    </GdsFlex>
  )
}
