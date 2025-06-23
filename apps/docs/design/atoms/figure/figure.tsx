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
        min-height="240px"
        justify-content="center"
        align-items="center"
      />
      <GdsText tag="small" padding-inline="s 0" color="secondary">
        {caption}
      </GdsText>
    </GdsFlex>
  )
}
