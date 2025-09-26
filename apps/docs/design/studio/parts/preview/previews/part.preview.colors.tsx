import type { CSSProperties } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { ColorPreviewProps } from '../part.preview.types'

export default function Colors({ token }: ColorPreviewProps) {
  return (
    <Core.GdsFlex align-items="center" gap="s">
      <Core.GdsDiv
        width="32px"
        height="32px"
        border-radius="max"
        border-color="inverse"
        border-width="3xs"
        border-style="solid"
        box-shadow="m"
        style={
          // { background: token.value } as CSSProperties & CSSStyleDeclaration
          { background: token.variable } as CSSProperties & CSSStyleDeclaration
        }
      />
      <Core.GdsText>{token.value}</Core.GdsText>
    </Core.GdsFlex>
  )
}
