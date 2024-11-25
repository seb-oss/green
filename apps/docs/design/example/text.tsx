'use client'

import { GdsFlex, GdsText } from '$/import/components'

const Text = () => (
  <GdsFlex flex-direction="column">
    <GdsText font-weight="bold">Bold</GdsText>
    <GdsText font-size="body-s">Size: Body Small</GdsText>
    <GdsText font-size="display-s" lines={2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </GdsText>
  </GdsFlex>
)

export default Text
