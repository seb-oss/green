import * as Core from '@sebgroup/green-core/react'
import { ColorPreviewProps } from '../part.preview.types'

export default function Shadow({ token }: ColorPreviewProps) {
  return (
    <Core.GdsCard
      padding="0"
      min-height="4xl; m{2xl}"
      height="100%"
      variant="secondary"
      box-shadow={token.token}
    />
  )
}
