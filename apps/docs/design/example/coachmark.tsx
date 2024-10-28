// eslint-disable-next-line
'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// import { GdsCoachmark } from '@sebgroup/green-react/core/coachmark'
// import { GdsFlex } from '@sebgroup/green-react/core/flex'
// import { GdsText } from '@sebgroup/green-react/core/text'
// import { IconPin } from '@sebgroup/green-react/src/lib/icon/icons/IconPin'

const GdsFlex = dynamic(() => import('@sebgroup/green-react/src/core/flex'), {
  ssr: false,
})

const GdsText = dynamic(() => import('@sebgroup/green-react/src/core/text'), {
  ssr: false,
})
const GdsCoachmark = dynamic(
  () => import('@sebgroup/green-react/src/core/coachmark'),
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
