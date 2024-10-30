'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsFlex = dynamic(
  () => import('@sebgroup/green-react/core/flex').then((mod) => mod.GdsFlex),
  {
    ssr: false,
  },
)

const GdsText = dynamic(
  () => import('@sebgroup/green-react/core/text').then((mod) => mod.GdsText),
  {
    ssr: false,
  },
)

const GdsCoachmark = dynamic(
  () =>
    import('@sebgroup/green-react/core/coachmark').then(
      (mod) => mod.GdsCoachmark,
    ),
  {
    ssr: false,
  },
)

const IconPin = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconPin').then(
      (mod) => mod.IconPin,
    ),
  {
    ssr: false,
  },
)

const Coachmark = () => (
  <>
    <GdsFlex id="target" align-items="center" gap="s">
      <IconPin></IconPin>
      <GdsText>Coachmark</GdsText>
    </GdsFlex>
    <GdsCoachmark target="target" placement="bottom">
      This is the coachmark content.
    </GdsCoachmark>
  </>
)

export default Coachmark
