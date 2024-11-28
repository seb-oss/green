'use client'

import { GdsFlex, GdsText } from '$/import/components'

const Text = () => (
  <GdsFlex flex-direction="column">
    <GdsText font-weight="bold">Bold</GdsText>
    <GdsText font-size="body-s">Size: Body Small</GdsText>
    <GdsText font-size="display-s">Lorem ipsum...</GdsText>
  </GdsFlex>
)

export default Text
