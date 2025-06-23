'use client'

import {
  GdsCard,
  GdsFlex,
  GdsText,
  IconCheckmark,
  IconCrossLarge,
} from '@sebgroup/green-core/react'

import './figure.css'

export default function Figure({
  caption,
  identifier,
  id,
}: {
  id?: string
  identifier?: string
  caption?: string
}) {
  return (
    <GdsFlex
      flex-direction="column"
      gap="s"
      width="100%"
      data-node={identifier}
    >
      <GdsCard
        padding="xs"
        dangerouslySetInnerHTML={{ __html: id || '' }}
        className="figure-svg"
        min-height="max-content; m{240px}"
        justify-content="center"
        align-items="center"
      />
      {(identifier == 'do' || identifier == 'ux-do') && (
        <GdsText tag="small" padding-inline="s 0" color="positive">
          <GdsFlex align-items="center" gap="s">
            <IconCheckmark size="m" /> DO
          </GdsFlex>
        </GdsText>
      )}
      {(identifier == 'dont' || identifier == 'ux-dont') && (
        <GdsText tag="small" padding-inline="s 0" color="negative">
          <GdsFlex align-items="center" gap="s">
            <IconCrossLarge size="m" /> {`Don't`}
          </GdsFlex>
        </GdsText>
      )}
      <GdsText tag="small" padding-inline="s 0" color="secondary">
        {caption}
      </GdsText>
    </GdsFlex>
  )
}
