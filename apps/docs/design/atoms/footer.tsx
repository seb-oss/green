import { GdsButton, GdsFlex } from '@sebgroup/green-core/react'

export default function Footer() {
  const year = new Date().getFullYear()
  const symbol = '\u00A9'
  const text = `${symbol}  ${year} Green Design System`

  return (
    <GdsFlex
      flex-direction="column"
      padding="m 0"
      gap="2xl; s{5xl}"
      border="4xs/primary 0 0 0"
    >
      <GdsFlex justify-content="space-between" align-items="center">
        {text}
        <GdsButton data-cc="c-settings" rank="tertiary">
          Cookie preferences
        </GdsButton>
      </GdsFlex>
    </GdsFlex>
  )
}
