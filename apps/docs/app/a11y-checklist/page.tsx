'use client'

import React, { useEffect, useState } from 'react'
import { Link } from 'next-view-transitions'
// Importera Gds-komponenterna från ditt designbibliotek
import {
  GdsBadge,
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
  ANNOYING = 'Störigt / Skadligt',
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

//const something: 'Störigt/skadligt' | 'Generellt' = 'Generellt';

//const categories = ['Störigt/skadligt', 'Generellt']

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

// Factory function

// Filter functions to each DropDown

function catergoryFilter(criteria: string[]) {
  return (item: WcagItem) =>
    criteria.length === 0 ? true : criteria.includes(item.category)
}

// Level Filter

function levelFilter(level: string[]) {
  return (item: WcagItem) =>
    level.length === 0 ? true : level.includes(item.level)
}

export default function WcagList() {
  // state for the wcagList
  // wcagObjects is the state variable
  // setWcagObjects is a function
  // We can call the setWcagObjects function to set the new state
  const [wcagObjects, setWcagObjects] = useState<WcagItem[]>()
  //create a new state to new state in selectedCategories, string or tom array
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])

  useEffect(() => {
    async function fetchWcagObjects() {
      const res = await fetch('/content/a11y-checklist/a11ychecklist.json')
      const a11ychecklist_json = await res.json()
      setWcagObjects(a11ychecklist_json.data)
    }
    fetchWcagObjects()
  }, [])

  // We sending (item: WcagItem) like a param into the function CategoryFilter

  // const catergoryFilter = (item: WcagItem) => {
  //   if (item.category === )
  // }

  if (!wcagObjects) return <div>Loading...</div>

  // Filter function

  //console.log(setSelectedCategories)

  return (
    <GdsFlex flex-direction="column">
      <GdsFlex>
        <GdsDropdown
          multiple
          value={selectedCategories}
          onChange={(e) =>
            setSelectedCategories((e as CustomEvent).detail.value)
          }
        >
          <GdsOption isplaceholder="">Kategori</GdsOption>
          {Object.values(A11yCategories).map((category) => (
            <GdsOption key={category} value={category}>
              {category}
            </GdsOption>
          ))}
        </GdsDropdown>
        <GdsDropdown
          multiple
          value={selectedLevels}
          onChange={(e) => setSelectedLevels((e as CustomEvent).detail.value)}
        >
          <GdsOption value="" isplaceholder="">
            Nivå
          </GdsOption>
          {Object.values(A11yLevels).map((level) => (
            <GdsOption key={level} value={level}>
              {level}
            </GdsOption>
          ))}
        </GdsDropdown>
        <GdsDropdown>
          <GdsOption value="" isplaceholder="">
            Roll
          </GdsOption>
        </GdsDropdown>
        <GdsDropdown>
          <GdsOption value="" isplaceholder="">
            Krav
          </GdsOption>
        </GdsDropdown>
      </GdsFlex>
      {wcagObjects
        .filter(catergoryFilter(selectedCategories))
        .filter(levelFilter(selectedLevels))
        .map((wcagObject) => (
          <li key={wcagObject.id}>
            <GdsText>
              {wcagObject.id}
              {wcagObject.topic}
            </GdsText>
            <GdsFlex>
              <GdsCard>
                <GdsBadge>{wcagObject.category}</GdsBadge>
                <GdsBadge>{wcagObject.level}</GdsBadge>
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
    </GdsFlex>
  )
}
