import * as Core from '@sebgroup/green-core/react'

export default function StudioSearch() {
  return (
    <Core.GdsFlex
      align-items="center"
      justify-content="space-between"
      className="studio-search"
    >
      <Core.GdsFlex align-items="center" width="100%" gap="s">
        <Core.GdsInput width="400px" plain />
        <Core.GdsFlex>
          <Core.GdsDropdown plain>
            <Core.GdsOption value="">Categories</Core.GdsOption>
          </Core.GdsDropdown>
        </Core.GdsFlex>
      </Core.GdsFlex>
      <Core.GdsFlex align-items="center" gap="m">
        <Core.GdsCheckbox value="solid" label="Solid" />
        <Core.GdsFlex width="120px">
          <Core.GdsDropdown plain size="small">
            <Core.IconSettingsSliderHor slot="lead" />
            <Core.GdsOption value="">Size</Core.GdsOption>
          </Core.GdsDropdown>
        </Core.GdsFlex>
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
