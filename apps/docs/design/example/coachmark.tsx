'use client'

import { GdsCoachmark, GdsFlex, GdsText } from '$/import/components'
import { IconPin } from '$/import/icons'

const Coachmark = () => (
  <>
    <GdsFlex id="target" align-items="center" gap="s">
      <IconPin />
      <GdsText>Coachmark</GdsText>
    </GdsFlex>
    <GdsCoachmark target={['target']} placement="bottom">
      This is the coachmark content.
    </GdsCoachmark>
  </>
)

export default Coachmark
