// design/studio/parts/template/template.preview.tsx
import * as Core from '@sebgroup/green-core/react'
import { Template } from '../../../../../settings/content/types'

interface PreviewProps {
  content: Template
}

export default function Preview({ content }: PreviewProps) {
  return (
    <Core.GdsFlex flex-direction="column" gap="l">
      <Core.GdsText tag="h1">{content.title}</Core.GdsText>
      {content.related_components && (
        <Core.GdsFlex gap="xs" flex-wrap="wrap">
          {content.related_components.map((component) => (
            <Core.GdsBadge key={component} size="small">
              {component}
            </Core.GdsBadge>
          ))}
        </Core.GdsFlex>
      )}

      <Core.GdsCard variant="primary" padding="xs" border-radius="l">
        <Core.GdsCard flex-direction="row" padding="s" border-radius="m">
          <Core.GdsFlex gap="2xs">
            <Core.GdsDiv
              level="3"
              background="negative-03"
              width="s"
              height="s"
              border-radius="max"
            />
            <Core.GdsDiv
              level="3"
              background="warning-03"
              width="s"
              height="s"
              border-radius="max"
            />
            <Core.GdsDiv
              level="3"
              background="positive-03"
              width="s"
              height="s"
              border-radius="max"
            />
          </Core.GdsFlex>
          <Core.GdsText>{content.title}</Core.GdsText>
          <Core.GdsText>·</Core.GdsText>
          <Core.GdsText color="neutral-02">1200px</Core.GdsText>
        </Core.GdsCard>
      </Core.GdsCard>
    </Core.GdsFlex>
  )
}
