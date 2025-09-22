import * as Core from '@sebgroup/green-core/react'

export default function StudioSearch({ page }: { page?: string }) {
  return (
    <Core.GdsFlex
      align-items="center"
      justify-content="space-between"
      className="studio-search"
    >
      <Core.GdsFlex align-items="center" width="100%" gap="s">
        <Core.GdsInput width="400px" plain>
          <Core.IconMagnifyingGlass slot="lead" size="m" />
        </Core.GdsInput>
        <Core.GdsFlex>
          <Core.GdsDropdown plain>
            <Core.GdsOption value="">Categories</Core.GdsOption>
          </Core.GdsDropdown>
        </Core.GdsFlex>
      </Core.GdsFlex>
      {false && page === 'icons' && (
        <Core.GdsFlex align-items="center" gap="m">
          <Core.GdsFlex width="120px">
            <Core.GdsDropdown plain size="small">
              <Core.IconSettingsSliderHor slot="lead" />
              <Core.GdsOption value="">Size</Core.GdsOption>
            </Core.GdsDropdown>
          </Core.GdsFlex>
          <Core.GdsSegmentedControl
            value="regular"
            size="small"
            width="max-content"
          >
            <Core.GdsSegment value="regular">
              <Core.GdsText font="body-book-s">Regular</Core.GdsText>
            </Core.GdsSegment>
            <Core.GdsSegment value="solid">
              <Core.GdsText font="body-book-s">Solid</Core.GdsText>
            </Core.GdsSegment>
          </Core.GdsSegmentedControl>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
