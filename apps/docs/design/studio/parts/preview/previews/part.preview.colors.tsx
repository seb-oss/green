import type { CSSProperties } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { ColorPreviewProps } from '../part.preview.types'

export default function Colors({ token, theme }: ColorPreviewProps) {
  const Preview = () => {
    return (
      <Core.GdsDiv
        width="32px"
        height="32px"
        border-radius="max"
        border-color="inverse"
        border-width="3xs"
        border-style="solid"
        box-shadow="m"
        style={
          { background: token.variable } as CSSProperties & CSSStyleDeclaration
        }
      />
    )
  }
  return (
    <Core.GdsFlex align-items="center" gap="s">
      {theme === 'dark' ? (
        <Core.GdsTheme colorScheme="dark">
          <Preview />
        </Core.GdsTheme>
      ) : (
        <Preview />
      )}
      <Core.GdsText>{token.value}</Core.GdsText>
    </Core.GdsFlex>
  )
}
