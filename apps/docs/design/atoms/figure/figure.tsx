'use client'

import { GdsCard, GdsFlex, GdsText } from '@sebgroup/green-core/react'

import './figure.css'

export default function Figure({
  caption,
  id,
}: {
  id?: string
  caption?: string
}) {
  return (
    <GdsFlex flex-direction="column" gap="s" width="100%">
      <GdsCard
        padding="xs"
        dangerouslySetInnerHTML={{ __html: id || '' }}
        className="figure-svg"
      />
      <GdsText tag="small" padding-inline="s 0" color="secondary">
        {caption}
      </GdsText>
    </GdsFlex>
  )
}
