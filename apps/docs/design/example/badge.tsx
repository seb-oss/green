'use client'

import { GdsBadge } from '$/import/components'
import { IconPlusSmall } from '$/import/icons'

const Badge = () => (
  <>
    <GdsBadge variant="notice">Badge</GdsBadge>
    <GdsBadge variant="positive" notification>
      999 <IconPlusSmall slot="trail" />
    </GdsBadge>
  </>
)

export default Badge
