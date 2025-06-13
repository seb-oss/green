import { GdsButton, GdsFlex } from '@sebgroup/green-core/react'
import { Link } from '../link/link'

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
      margin="4xl 0 0 0"
    >
      <GdsFlex justify-content="space-between" align-items="center">
        {text}
        <Link
          component="button"
          href="/settings/consent"
          rank="tertiary"
          size="small"
        >
          Cookie preferences
        </Link>
      </GdsFlex>
    </GdsFlex>
  )
}
