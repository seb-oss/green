'use client'

import { useParams } from 'next/navigation'

export default function StatusDetail() {
  const params = useParams()
  const status = params.status
    ? decodeURIComponent(params.status as string)
    : null

  return (
    <div style={{ marginTop: '2rem', padding: '1rem' }}>
      {status ? (
        <div>
          <h2>Selected Status</h2>
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
            }}
          >
            <strong>Status: </strong>
            <span>{status}</span>
          </div>
        </div>
      ) : (
        <p>Click a status in the table to view details</p>
      )}
    </div>
  )
}
