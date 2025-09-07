import * as Core from '@sebgroup/green-core/react'

export default function StudioSearch() {
  return (
    <Core.GdsFlex align-items="center" justify-content="space-between">
      <Core.GdsFlex align-items="center" width="100%" gap="s">
        <Core.GdsInput width="400px" plain />
        <Core.GdsFlex>
          <Core.GdsDropdown plain>
            <Core.GdsOption value="">Categories</Core.GdsOption>
          </Core.GdsDropdown>
        </Core.GdsFlex>
      </Core.GdsFlex>
      <Core.GdsFlex>Extra</Core.GdsFlex>
    </Core.GdsFlex>
  )
}
