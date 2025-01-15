'use client'

import React, { useEffect, useState } from 'react'
import { GdsCard, GdsFlex } from '$/import/components'

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
    <GdsFlex
      flex-direction="row"
      justify-content="space-between"
      align-items="space-between"
      gap="2xl"
      width="500px"
    >
      <h1>Accessibility Checklist</h1>
      {error && <p>Error: {error}</p>} {/* Visa felmeddelande om det finns */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.id}</strong>: {item.topic}
            <p>{item.statement}</p>
            <p>{item.why}</p>
          </li>
        ))}
      </ul>
    </GdsFlex>
  )
}

// 'use client'

// import { GdsCard, GdsFlex } from '$/import/components'
// import { IconSquareCheck } from '$/import/icons'

// //import { Checkbox } from '@sebgroup/green-react'

// export default async function A11yChecklist() {
//   const response = await fetch('/content/a11y-checklist/a11ychecklist.json')

//   const items = await response.json()

//   console.log(items.id)

//   return (
//     <GdsFlex
//       flex-direction="column"
//       justify-content="space-between"
//       align-items="space-between"
//       gap="2xl"
//       width="500px"
//     >
//       <GdsCard>
//         <GdsFlex align-items="center" justify-content="space-between">
//           <GdsFlex>
//             <IconSquareCheck />
//             Isabelle
//           </GdsFlex>
//           <IconSquareCheck />
//         </GdsFlex>
//       </GdsCard>
//       <GdsCard>
//         <GdsFlex align-items="center" justify-content="space-between">
//           <GdsFlex>
//             <IconSquareCheck />
//             Isabelle
//           </GdsFlex>
//           <IconSquareCheck />
//         </GdsFlex>
//       </GdsCard>
//       <GdsCard>
//         <GdsFlex align-items="center" justify-content="space-between">
//           <GdsFlex>
//             <IconSquareCheck />
//             Isabelle
//           </GdsFlex>
//           <IconSquareCheck />
//         </GdsFlex>
//       </GdsCard>
//     </GdsFlex>
//   )
// }
