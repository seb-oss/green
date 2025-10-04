// design/studio/parts/template.single.tsx
import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../../settings/content'

export function Template({ template }: { template: string }) {
  const { actions } = useContent()
  const CONTENT = actions.getTemplate(template)

  if (!CONTENT) return null

  return (
    <Core.GdsFlex flex-direction="column" gap="xl">
      <Core.GdsFlex flex-direction="column" gap="l">
        <Core.GdsText tag="h1">{CONTENT.title}</Core.GdsText>

        {CONTENT.related_components && (
          <Core.GdsFlex gap="xs" flex-wrap="wrap">
            {CONTENT.related_components.map((component) => (
              <Core.GdsBadge key={component} size="small">
                {component}
              </Core.GdsBadge>
            ))}
          </Core.GdsFlex>
        )}
      </Core.GdsFlex>

      {CONTENT.code && (
        <Core.GdsCard padding="l">
          <pre>
            <code>{CONTENT.code}</code>
          </pre>
        </Core.GdsCard>
      )}
    </Core.GdsFlex>
  )
}
