'use client'

import { GdsRichText } from '$/import/components'

const RichText = () => (
  <GdsRichText>
    <p>
      Lorem ipsum <s>dolor</s> sit amet, <strong>consectetur</strong> adipiscing
      elit, sed do eiusmod tempor incididunt ut <mark>labore</mark> et dolore
      magna aliqua.{' '}
    </p>
  </GdsRichText>
)

export default RichText
