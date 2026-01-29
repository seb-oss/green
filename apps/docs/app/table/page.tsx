'use client'

import { useParams } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'

export default function StatusDetail() {
  const params = useParams()
  const status = params.status
    ? decodeURIComponent(params.status as string)
    : null

  return (
    <Core.GdsCard align-items="flex-start">
      {status ? (
        <>
          <Core.GdsText tag="h2">Selected Status</Core.GdsText>
          <Core.GdsBadge variant="notice">{status}</Core.GdsBadge>
        </>
      ) : (
        <p>Click a status in the table to view details</p>
      )}
    </Core.GdsCard>
  )
}
