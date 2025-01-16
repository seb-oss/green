'use client'

import React, { useEffect, useState } from 'react'
import { GdsCard, GdsFlex } from '$/import/components'

//import { Accordion } from '@sebgroup/green-react'

// Definiera typen för objekten i checklistan

interface HowToTest {
  id: number
  title: string
  content: string
}

interface ChecklistItem {
  id: number
  sort: number | null // Kan vara null
  topic: string
  criteria: string
  category: string
  level: string
  principle: string
  guideline: string
  statement: string
  why: string
  role: string
  wcag: string
  howToTest: HowToTest // Innehåller en inre struktur
}

export default function A11yChecklist() {
  const [items, setItems] = useState<ChecklistItem[]>([]) // Typ: Array av ChecklistItem
  const [error, setError] = useState<string | null>(null) // Typ: string eller null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          '/content/a11y-checklist/a11ychecklist.json',
        )
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const reponseData = await response.json()

        if (reponseData.data && Array.isArray(reponseData.data)) {
          setItems(reponseData.data)
        } else {
          throw new Error(`Error: Unexpected format`)
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Ett okänt fel inträffade.')
        }
      }
    }

    fetchData()
  }, []) // Körs endast en gång när komponenten mountas

  return (
    <GdsFlex flex-direction="row">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <GdsFlex>
              <strong>{item.id}</strong>: {item.topic}
            </GdsFlex>
            <GdsFlex
              align-items="flex-start; m{center}"
              justify-content="space-between"
              flex-direction="column; m{row}"
            >
              <GdsFlex flex-direction="column">
                <GdsFlex flex-direction="column">
                  <p>{item.statement}</p>
                  <p>{item.why}</p>
                </GdsFlex>
                <GdsCard>
                  <details>
                    <summary>Title of the accordion</summary>
                    <GdsCard variant="secondary">
                      <GdsFlex flex-direction="column" gap="m">
                        <GdsFlex>{item.principle}</GdsFlex>
                        <GdsFlex>{item.guideline}</GdsFlex>
                      </GdsFlex>
                    </GdsCard>
                  </details>
                </GdsCard>
              </GdsFlex>
              <GdsFlex flex-direction="column">
                <input></input>
                <textarea></textarea>
              </GdsFlex>
            </GdsFlex>
          </li>
        ))}
      </ul>
    </GdsFlex>
  )
}
