'use client'

import {
  GdsCard,
  GdsDiv,
  GdsFlex,
  GdsText,
  GdsTheme,
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
      gap="xs"
      width="100%"
      data-node={identifier}
    >
      <GdsTheme>
        <GdsCard
          padding="xs"
          dangerouslySetInnerHTML={{ __html: id || '' }}
          className="figure-svg"
          min-height="max-content; m{240px}"
          justify-content="center"
          align-items="center"
        />
      </GdsTheme>
      {showDoLabel && (
        <GdsFlex align-items="center" gap="xs" padding="0 s">
          <GdsDiv
            display="flex"
            background="positive"
            min-width="20px"
            max-width="20px"
            min-height="20px"
            max-height="20px"
            border-radius="max"
            justify-content="center"
            align-items="center"
            color="positive-01"
          >
            <IconCheckmark size="s" />
          </GdsDiv>
          <GdsText font="detail-regular-s">{`Do`}</GdsText>
        </GdsFlex>
      )}
      {showDontLabel && (
        <GdsFlex align-items="center" gap="xs" padding="0 s">
          <GdsDiv
            display="flex"
            background="negative"
            min-width="20px"
            max-width="20px"
            min-height="20px"
            max-height="20px"
            border-radius="max"
            justify-content="center"
            align-items="center"
            color="negative-01"
          >
            <IconCrossLarge size="s" />
          </GdsDiv>
          <GdsText font="detail-regular-s">{`Don't`}</GdsText>
        </GdsFlex>
      )}
      {shouldShowCaption && (
        <GdsText
          tag="small"
          font="detail-book-xs"
          padding-inline="s 0"
          color="neutral-02"
        >
          {caption}
        </GdsText>
      )}
    </GdsFlex>
  )
}
