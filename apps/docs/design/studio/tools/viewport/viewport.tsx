// color.tsx
import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import * as Part from '../../parts'

export default function Viewport() {
  return (
    <Core.GdsFlex flex-direction="column" gap="4xl" padding="xl">
      <Part.Header
        title="Viewport"
        description="viewport description"
        search={
          <Core.GdsInput plain width="100%" clearable>
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>
        }
      />
    </Core.GdsFlex>
  )
}
