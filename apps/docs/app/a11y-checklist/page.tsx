'use client'

import React, { useEffect, useState } from 'react'
import { Link } from 'next-view-transitions'
// Importera Gds-komponenterna från ditt designbibliotek
import {
  GdsBadge,
  GdsButton,
  GdsCard,
  GdsDiv,
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
  status: string // "Kravet uppfylls" etc.
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

// Role Filter

const roleFilter = (role: string[]) => {
  return (item: WcagItem) =>
    role.length === 0 ? true : role.includes(item.role)
}

// Status Filter

const statusFilter = (status: string[]) => {
  return (item: WcagItem) =>
    statusFilter.length === 0 ? true : status.includes(item.status)
}

export default function WcagList() {
  // state for the wcagList
  // wcagObjects is the state variable
  // setWcagObjects is a function
  // We can call the setWcagObjects function to set the new state
  const [wcagObjects, setWcagObjects] = useState<WcagItem[]>([])
  const [filteredWcagList, setFilteredWcagList] = useState<WcagItem[]>([])
  //create a new state to new state in selectedCategories, string or tom array
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])

  console.log(filteredWcagList)

  useEffect(() => {
    async function fetchWcagObjects() {
      const res = await fetch('/content/a11y-checklist/a11ychecklist.json')
      const a11ychecklist_json = await res.json()
      setWcagObjects(a11ychecklist_json.data)
    }
    fetchWcagObjects()
  }, [])

  // Second useEffect filteredList

  useEffect(() => {
    const filteredList = wcagObjects
      .filter(catergoryFilter(selectedCategories))
      .filter(levelFilter(selectedLevels))
      .filter(roleFilter(selectedRoles))
    // .filter(statusFilter(selectedStatuses))
    setFilteredWcagList(filteredList)
  }, [
    wcagObjects,
    selectedCategories,
    selectedLevels,
    selectedRoles,
    selectedStatuses,
  ])

  // We sending (item: WcagItem) like a param into the function CategoryFilter

  // const catergoryFilter = (item: WcagItem) => {
  //   if (item.category === )
  // }

  if (!wcagObjects) return <div>Loading...</div>

  //console.log(setSelectedCategories)

  //Resett the filters

  const resetFilters = () => {
    setSelectedCategories([])
    setSelectedLevels([])
    setSelectedRoles([])
    setSelectedStatuses([])
  }

  return (
    <GdsFlex flex-direction="column">
      <GdsFlex gap="2xl; m{4xl}" flex-direction="column" max-width="80ch">
        <GdsFlex flex-direction="column" gap="xl">
          <GdsText tag="h2" id="what-is-green">
            Accessibility
          </GdsText>
          <GdsText font-size="body-l" color="secondary">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </GdsText>
          <GdsText font-size="body-l" color="secondary">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
          </GdsText>
        </GdsFlex>
      </GdsFlex>
      <GdsFlex width="70%">
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
        <GdsDropdown
          multiple
          value={selectedRoles}
          onChange={(e) => setSelectedRoles((e as CustomEvent).detail.value)}
        >
          <GdsOption value="" isplaceholder="">
            Roll
          </GdsOption>
          {Object.values(A11yRoles).map((role) => (
            <GdsOption key={role} value={role}>
              {role}
            </GdsOption>
          ))}
        </GdsDropdown>
        <GdsDropdown
          multiple
          value={selectedStatuses}
          onChange={(e) => setSelectedStatuses((e as CustomEvent).detail.value)}
        >
          <GdsOption value="" isplaceholder="">
            Krav
          </GdsOption>
          {Object.values(A11yStatus).map((status) => (
            <GdsOption key={status} value={status}>
              {status}
            </GdsOption>
          ))}
        </GdsDropdown>
      </GdsFlex>
      {/* === Visa aktiva filter === */}
      <h3>Valda filter:</h3>
      <GdsFlex flex-direction="row" gap="m">
        {/* Kategorier */}
        {selectedCategories.length > 0 && (
          <div>
            <strong>Kategori:</strong>
            <ul>
              {selectedCategories.map((cat) => (
                <GdsBadge key={cat}>{cat}</GdsBadge>
              ))}
            </ul>
          </div>
        )}

        {/* Nivåer */}
        {selectedLevels.length > 0 && (
          <div>
            <strong>Nivå:</strong>
            <ul>
              {selectedLevels.map((lvl) => (
                <li key={lvl}>{lvl}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Roller */}
        {selectedRoles.length > 0 && (
          <div>
            <strong>Roll:</strong>
            <ul>
              {selectedRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Statusar */}
        {selectedStatuses.length > 0 && (
          <div>
            <strong>Status:</strong>
            <ul>
              {selectedStatuses.map((status) => (
                <li key={status}>{status}</li>
              ))}
            </ul>
          </div>
        )}
      </GdsFlex>
      <GdsFlex>
        <p>
          Visar {filteredWcagList.length} av {wcagObjects.length}{' '}
        </p>
        <GdsButton onClick={resetFilters}>Återställ filter</GdsButton>
      </GdsFlex>
      <GdsFlex role="list" flex-direction="column" gap="m">
        {filteredWcagList
          .filter(catergoryFilter(selectedCategories))
          .filter(levelFilter(selectedLevels))
          .filter(roleFilter(selectedRoles))
          // .filter(statusFilter(selectedStatuses))
          .map((wcagObject) => (
            <GdsCard role="listitem">
              <GdsFlex
                align-items="space-between"
                justify-content="space-between"
              >
                <GdsFlex gap="xs">
                  <GdsBadge variant="information">{wcagObject.id}</GdsBadge>
                  <GdsText>{wcagObject.topic}</GdsText>
                </GdsFlex>
                <GdsFlex gap="xs">
                  <GdsBadge>{wcagObject.category}</GdsBadge>
                  <GdsBadge>{wcagObject.level}</GdsBadge>
                  <GdsBadge>{wcagObject.role}</GdsBadge>
                </GdsFlex>
              </GdsFlex>
              <GdsFlex flex-direction="column; s{row}" gap="m">
                <GdsFlex flex="1" flex-direction="column" gap="m">
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
                  <GdsCard>
                    <details>
                      <summary>Lagkrav och standarder</summary>
                      <GdsDiv border="outline">
                        <GdsFlex flex-direction="column" gap="m">
                          <p>{wcagObject.wcag}</p>
                          <p>{wcagObject.guideline}</p>
                          <p>{wcagObject.criteria}</p>
                        </GdsFlex>
                      </GdsDiv>
                    </details>
                  </GdsCard>
                </GdsFlex>
                <GdsFlex flex="1" flex-direction="column" gap="m">
                  <GdsDropdown></GdsDropdown>
                  <GdsTextarea></GdsTextarea>
                </GdsFlex>
              </GdsFlex>
            </GdsCard>
          ))}
      </GdsFlex>
    </GdsFlex>
  )
}
