// design/studio/parts/template/template.inspect.tsx
import * as Core from '@sebgroup/green-core/react'
import { Template } from '../../../../../settings/content/types'

interface InspectProps {
  content: Template
}

export default function Inspect({ content }: InspectProps) {
  return (
    <Core.GdsFlex flex-direction="column" gap="l">
      <Core.GdsText tag="h1">{content.title}</Core.GdsText>
      {content.code && (
        <Core.GdsCard padding="l">
          <pre>
            <code>{content.code}</code>
          </pre>
        </Core.GdsCard>
      )}
    </Core.GdsFlex>
  )
}
