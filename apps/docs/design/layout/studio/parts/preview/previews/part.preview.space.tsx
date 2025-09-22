import * as Core from '@sebgroup/green-core/react'
import { ColorPreviewProps } from '../part.preview.types'

export default function Space({ token }: ColorPreviewProps) {
  return (
    <Core.GdsFlex flex-direction="column" gap="s">
      <Core.GdsFlex gap="m">
        <div
          style={{
            background: token.value,
            width: '100px',
            height: '100px',
            borderRadius: 'var(--gds-radius-m)',
          }}
        />
      </Core.GdsFlex>
      <Core.GdsText>{token.value}</Core.GdsText>
    </Core.GdsFlex>
  )
}
