// settings/consent/consent.manager.tsx
'use client'

import { ConsentBanner } from './consent.component'
import { useConsentScript } from './consent.script'

export function ConsentManager() {
  useConsentScript()
  return <ConsentBanner />
}
