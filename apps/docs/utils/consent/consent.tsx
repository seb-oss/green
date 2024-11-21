import { useEffect } from 'react'
import { GdsTheme } from '$/import/components'
import * as CookieConsent from 'vanilla-cookieconsent'

import pluginConfig from './config'

import 'vanilla-cookieconsent/dist/cookieconsent.css'
import './consent.css'

const Consent = () => {
  useEffect(() => {
    CookieConsent.run(pluginConfig)
  }, [CookieConsent, pluginConfig])

  return (
    <GdsTheme id="cookie-consent">
      {/* <GdsFlex align-items="center" justify-content="center" >
      <GdsText>We use cookies to improve your experience</GdsText>
      <GdsButton>Accept</GdsButton>
      <GdsButton>Reject</GdsButton>
    </GdsFlex> */}
    </GdsTheme>
  )
}

export default Consent
