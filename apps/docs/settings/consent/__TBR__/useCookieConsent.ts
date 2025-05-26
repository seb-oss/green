import { useEffect } from 'react'

const useCookieConsent = () => {
  useEffect(() => {
    const callCC = () => {
      let cc
      try {
        cc = (window as any).initCookieConsent()
      } catch (error) {
        console.error(error)
      }
      if (cc) {
        cc.run({})
      }
    }

    if (
      location.hostname === 'seb.io' &&
      document.cookie
        .split('; ')
        .find((row) => row.startsWith('GDS Cookie Consent'))
    ) {
      const script = document.createElement('script')
      script.src =
        'https://content.seb.se/dsc/da/launch/public/30e54a9d6c99/f9d07ef22744/launch-89d260357525.min.js'
      script.type = 'application/javascript'
      document.head.appendChild(script)

      const timer = setTimeout(() => {
        callCC()
      }, 1000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [])
}

export default useCookieConsent
