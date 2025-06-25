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
  const getFigureType = (identifier?: string) => {
    if (!identifier) return null

    const pattern = /-do(?:nt)?(?:-|$)/i
    const match = identifier.match(pattern)

    if (!match) return null

    return identifier.toLowerCase().includes('-dont') ? 'dont' : 'do'
  }

  const figureType = getFigureType(identifier)

  const captionType =
    caption?.toLowerCase() === 'do'
      ? 'do'
      : caption?.toLowerCase() === 'dont'
        ? 'dont'
        : null

  const showDoLabel = figureType === 'do' || captionType === 'do'
  const showDontLabel = figureType === 'dont' || captionType === 'dont'
  const shouldShowCaption = !captionType && caption

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
      {showDoLabel && (
        <GdsText tag="small" padding-inline="s 0" color="positive">
          <GdsFlex align-items="center" gap="s">
            <IconCheckmark size="m" /> DO
          </GdsFlex>
        </GdsText>
      )}
      {showDontLabel && (
        <GdsText tag="small" padding-inline="s 0" color="negative">
          <GdsFlex align-items="center" gap="s">
            <IconCrossLarge size="m" /> {`Don't`}
          </GdsFlex>
        </GdsText>
      )}
      {shouldShowCaption && (
        <GdsText tag="small" padding-inline="s 0" color="secondary">
          {caption}
        </GdsText>
      )}
    </GdsFlex>
  )
}
