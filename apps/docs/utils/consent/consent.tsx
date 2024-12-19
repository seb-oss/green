import { useEffect } from 'react'
import { GdsTheme } from '$/import/components'
import * as CookieConsent from 'vanilla-cookieconsent'

import pluginConfig from './config'

import './consent.css'

const Consent = () => {
  useEffect(() => {
    CookieConsent.run(pluginConfig)
  }, [CookieConsent, pluginConfig])

  return <GdsTheme id="cookie-consent"></GdsTheme>
}

export default Consent;
