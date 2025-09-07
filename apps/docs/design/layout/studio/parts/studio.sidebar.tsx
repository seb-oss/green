import * as Core from '@sebgroup/green-core/react'
import { Link } from '../../../atoms/link/link'

export default function StudioSidebar({ pages }: { pages?: string }) {
  return (
    <Core.GdsCard
      variant="secondary"
      flex-direction="column"
      grid-column="1 / 4"
      padding="0"
    >
      <Core.GdsFlex align-items="center" gap="m" padding="l l 0 l">
        <Link href="/studio/colors">
          <Core.IconBrandGreen size="l" />
          <Core.GdsText font="heading-xs">Green Studio</Core.GdsText>
        </Link>
      </Core.GdsFlex>
      <Core.GdsDivider color="subtle-01" />
      <Core.GdsFlex
        flex-direction="column"
        padding="0 s"
        gap="s"
        aria-label="Sidebar"
      >
        <Link
          key="hello"
          href={`/play/`}
          component="button"
          size="small"
          width="max-content"
          rank="tertiary"
          justify-content="flex-start"
        >
          buttons
        </Link>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
