// settings/consent/script.ts
'use client'

import { useEffect } from 'react'

import { useSettingsContext } from '../hooks'

export function useConsentScript() {
  const { settings } = useSettingsContext()
  const consent = settings.UX.Global.Consent

  useEffect(() => {
    if (consent && location.hostname === 'seb.io') {
      const script = document.createElement('script')
      script.src =
        'https://content.seb.se/dsc/da/launch/public/30e54a9d6c99/f9d07ef22744/launch-89d260357525.min.js'
      script.type = 'application/javascript'
      document.head.appendChild(script)
    }
  }, [consent])
}
