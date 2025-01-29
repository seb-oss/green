import { GdsFlex } from '$/import/components'
import Components from 'core/components'
import Empower from 'core/empower'
import Hero from 'core/hero'
import Resources from 'core/resources'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://seb.io'),
  title: 'Green Design System',
  description:
    'Green Design System is more than a polished user interface, its places the user at the very forefront of design, usability and accessibility.',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'vhAE3wh75Jg9hnVBtCn30CPNnXyzEw-JAcS9Q1LwewY',
  },
}

export default function Home() {
  return (
    <GdsFlex
      flex-direction="column"
      max-width="1400ch"
      margin="0 auto"
      gap="xl"
      padding="2xl 0 0 0"
    >
      <Hero
        heading="Designed to bring unity to our digital experiences."
        preamble="Green Design System is more than a polished user interface, its places the user at the very forefront of design, usability and accessibility."
      />

      <Components title="Components" />
    </GdsFlex>
  )
}
