import React from 'react'
import GdsFlex from '@sebgroup/green-react/src/core/flex'
import GdsText from '@sebgroup/green-react/src/core/text'
import GdsCoachmark from '@sebgroup/green-react/src/core/coachmark'
import { IconPin } from '@sebgroup/green-react/src/lib/icon/icons/IconPin'

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
