import * as Core from '@sebgroup/green-core/react'
import { ColorPreviewProps } from '../part.preview.types'

export default function Radius({ token }: ColorPreviewProps) {
  return (
    <Core.GdsCard
      width="xl"
      min-height="xl"
      border="2xs"
      border-width="2xs 0 0 2xs"
      padding="0"
      variant="secondary"
      border-color="subtle-01"
      border-radius={`${token.token} 0 0 0`}
    />
  )
}
