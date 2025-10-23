// components/template.component.tsx
import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../../../settings/content'
import Card from '../../../../atoms/card/card'

interface ComponentInspectorProps {
  componentName: string
  onClose: () => void
}

export function ComponentInspector({
  componentName,
  onClose,
}: ComponentInspectorProps) {
  const { actions } = useContent()
  const component = actions.getComponent(componentName.replace('gds-', ''))

  if (!component) {
    return (
      <Core.GdsCard
        variant="secondary"
        padding="l"
        className="component-inspector"
        width="400px"
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
          <Core.GdsText color="neutral-02">Component not found</Core.GdsText>
        </Core.GdsFlex>
      </Core.GdsCard>
    )
  }

  return (
    <Core.GdsCard
      variant="secondary"
      padding="l"
      className="component-inspector"
      width="400px"
    >
      <Core.GdsFlex flex-direction="column" gap="l">
        <Core.GdsFlex
          justify-content="space-between"
          align-items="center"
          border-width="0 0 4xs 0"
          border-color="subtle-02"
          padding-bottom="m"
        >
          <Core.GdsText font="heading-s">Component Details</Core.GdsText>
          <Core.GdsButton onClick={onClose} size="small" rank="secondary">
            {/* <Core.IconClose /> */}
            Close
          </Core.GdsButton>
        </Core.GdsFlex>

        <Card
          title={component.title}
          href={component.slug}
          summary={component.summary}
          beta={component.beta}
          layout={
            Array.isArray(component.category)
              ? component.category.includes('Layout')
              : component.category === 'Layout'
          }
          snippet={component.hero_snippet}
          list={false}
        />
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
