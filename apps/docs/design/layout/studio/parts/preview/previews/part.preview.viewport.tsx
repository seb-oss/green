import * as Core from '@sebgroup/green-core/react'
import { ColorPreviewProps } from '../part.preview.types'

export default function Viewport({ token }: ColorPreviewProps) {
  return (
    <Core.GdsFlex flex-direction="column" gap="s">
      Viewport
    </Core.GdsFlex>
  )
}
