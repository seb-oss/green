// app/settings/consent/page.tsx
'use client'

import { useSettingsContext } from '../../../settings/hooks'

export default function ConsentPage() {
  const { settings, actions } = useSettingsContext()
  const consent = settings.UX.Global.Consent

  const handleToggleConsent = () => {
    actions.toggle('UX.Global.Consent')
  }

  return (
    <div className="consent-page">
      <h1>Cookie Consent Settings</h1>
      <div className="consent-status">
        <p>Current status: {consent ? 'Accepted' : 'Not accepted'}</p>
        <button onClick={handleToggleConsent}>
          {consent ? 'Revoke Consent' : 'Accept Consent'}
        </button>
      </div>
    </div>
  )
}
