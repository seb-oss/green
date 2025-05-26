'use client'

import { useEffect } from 'react'
import * as CookieConsent from 'vanilla-cookieconsent'

import pluginConfig from './config'

import './consent.css'

const Consent = () => {
  useEffect(() => {
    CookieConsent.run(pluginConfig)
  }, [CookieConsent, pluginConfig])
  return <div id="cookie-consent"></div>
}

export default Consent
