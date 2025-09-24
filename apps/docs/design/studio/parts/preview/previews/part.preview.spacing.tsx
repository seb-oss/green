import * as Core from '@sebgroup/green-core/react'
import { ColorPreviewProps } from '../part.preview.types'

export default function Space({ token }: ColorPreviewProps) {
  return (
    <Core.GdsFlex align-items="center" gap="m">
      {token.token === 'max' ? (
        <Core.GdsDiv
          level="1"
          width="90%"
          height="24px"
          background="neutral-02"
          border-radius="s"
        />
      ) : (
        <Core.GdsDiv
          level="1"
          width={token.token}
          height="24px"
          background="neutral-02"
          border-radius="s"
        />
      )}
    </Core.GdsFlex>
  )
}
