'use client'

import React, { useEffect, useState } from 'react'
import { Link } from 'next-view-transitions'
// Importera Gds-komponenterna från ditt designbibliotek
import {
  GdsCard,
  GdsDropdown,
  GdsFlex,
  GdsImg,
  GdsInput,
  GdsOption,
  GdsRichText,
  GdsText,
  GdsTextarea,
  GdsTheme,
} from '$/import/components'
import { Accordion, AccordionItem } from 'core/accordion'
import Hero from 'core/hero'

// Justera importvägarna

/* =========================================================
   1) Enums för a11y
========================================================= */
export enum A11yCategories {
  ANNOYING = 'Störigt/skadligt',
  GENERAL = 'Generellt',
  TIME = 'Tid',
  PAGE = 'Sida',
  HEADINGS = 'Rubriker',
  CONTENT = 'Innehåll',
  KEYBOARD = 'Använda tangentbord',
  PREDICTABLE = 'Förutsägbart',
  RESPONSIVE = 'Responsiv design',
  DESIGN = 'Färg & form',
  RESIZE = 'Ändra storlek',
  MOBILE = 'Använda mobil',
  CONTRAST = 'Kontraster',
  IMAGES = 'Ikoner & bilder',
  AUDIO = 'Ljud',
  VIDEO = 'Video',
  LINKS = 'Komponenter - Länkar',
  BUTTONS = 'Komponenter - Knappar',
  LISTS = 'Komponenter - Listor',
  TABLES = 'Komponenter - Tabeller',
  IFRAMES = 'Komponenter - Iframes',
  COMPONENTS = 'Komponenter',
  FORMS = 'Formulär',
  ERRORS = 'Felhantering',
  DYNAMICAL = 'Dynamiskt innehåll',
  CODE = 'Kodkvalite',
  CONSISTENT = 'Konsekvent',
}

export enum A11yLevels {
  A_REQUIRED = 'A*',
  A = 'A',
  AA = 'AA',
}

export enum A11yRoles {
  AD = 'AD',
  COPY = 'Copy',
  DEVELOPER = 'Utvecklare',
  EDITOR = 'Redaktör',
  UX = 'UX',
  PRODUCER = 'Producent',
}

export enum A11yStatus {
  IS_NOT_ASSESSED = 'Kravet är ej bedömt',
  NOT_RELEVANT = 'Kravet är ej relevant',
  FULFILLED = 'Kravet uppfylls',
  PARTIALLY_FULFILLED = 'Kravet uppfylls delvis',
  NOT_FULFILLED = 'Kravet uppfylls inte',
}

/* =========================================================
   2) Typer
========================================================= */
interface WcagItem {
  id: string
  statement: string
  why: string
  category: string // t.ex. "Tid", "Innehåll"
  topic: string
  principle: string
  guideline: string
  criteria: string
  wcag: string
  /** t.ex. "A", "AA", "A*" */
  level: string
  role: string // t.ex. "Utvecklare", "Redaktör / Utvecklare"
  howToTest?: { content: string }
  sort?: number
  status?: string // "Kravet uppfylls" etc.
  comment?: string
}

// Fetch the wcag list and render in the consol

export default function WcagList() {
  const [wcagObjects, setWcagObjects] = useState<WcagItem[]>()
  // new state for hardcoded, filter,

  useEffect(() => {
    async function fetchWcagObjects() {
      const res = await fetch('/content/a11y-checklist/a11ychecklist.json')
      const a11ychecklist_json = await res.json()
      setWcagObjects(a11ychecklist_json.data)
    }
    fetchWcagObjects()
  }, [])

  if (!wcagObjects) return <div>Loading...</div>

  return (
    <GdsFlex>
      <ul>
        {wcagObjects.map((wcagObject) => (
          <li key={wcagObject.id}>
            <GdsText>
              {wcagObject.id}
              {wcagObject.topic}
            </GdsText>
            <GdsFlex>
              <GdsCard>
                <GdsFlex>
                  <GdsFlex flex-direction="column">
                    <GdsText>
                      <GdsRichText>Påstående:</GdsRichText>
                      {wcagObject.statement}
                    </GdsText>
                    <GdsText>
                      <GdsRichText>Syfte:</GdsRichText>
                      {wcagObject.why}
                    </GdsText>
                  </GdsFlex>
                  <GdsFlex flex-direction="column">
                    <GdsDropdown></GdsDropdown>
                    <GdsTextarea></GdsTextarea>
                  </GdsFlex>
                </GdsFlex>
              </GdsCard>
            </GdsFlex>
          </li>
        ))}
      </ul>
    </GdsFlex>
  )
}
