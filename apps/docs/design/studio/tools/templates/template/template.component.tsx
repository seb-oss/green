// components/template.component.tsx
import * as Core from '@sebgroup/green-core/react'

interface ComponentInspectorProps {
  componentName: string
  onClose: () => void
}

export function ComponentInspector({
  componentName,
  onClose,
}: ComponentInspectorProps) {
  return (
    <Core.GdsCard
      variant="secondary"
      padding="l"
      className="component-inspector"
    >
      <Core.GdsFlex flex-direction="column" gap="l">
        <Core.GdsFlex
          justify-content="space-between"
          align-items="center"
          border-width="0 0 4xs 0"
          border-color="subtle-02"
          padding-bottom="m"
        >
          <Core.GdsText font="heading-s">{componentName}</Core.GdsText>
          <Core.GdsButton onClick={onClose} size="small" rank="secondary">
            {/* <Core.IconClose /> */}
            Close
          </Core.GdsButton>
        </Core.GdsFlex>

        <Core.GdsFlex flex-direction="column" gap="m">
          <Core.GdsText font="detail-book-m">Component Details</Core.GdsText>
          {/* Add component documentation, props, examples etc */}
        </Core.GdsFlex>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
