'use client'

import React, { useEffect, useState } from 'react'
import { Link } from 'next-view-transitions'
// Importera Gds-komponenterna från ditt designbibliotek
import {
  GdsCard,
  GdsDropdown,
  GdsFlex,
  GdsImg,
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
  level: string // t.ex. "A", "AA", "A*"
  role: string // t.ex. "Utvecklare", "Redaktör / Utvecklare"
  howToTest?: { content: string }
  sort?: number
  status?: string // "Kravet uppfylls" etc.
  comment?: string
}

/* =========================================================
   3) Huvudkomponent
========================================================= */
const WcagList: React.FC = () => {
  // a) State för WCAG-listan
  const [wcagList, setWcagList] = useState<WcagItem[]>([])
  // b) State för filtrerad lista
  const [filteredWcagList, setFilteredWcagList] = useState<WcagItem[]>([])
  // c) States för filter via dropdowns
  const [filteredCategories, setFilteredCategories] = useState<string[]>([])
  const [filteredLevels, setFilteredLevels] = useState<string[]>([])
  const [filteredRoles, setFilteredRoles] = useState<string[]>([])
  const [filteredStatus, setFilteredStatus] = useState<string[]>([])
  // d) States för notifications
  const [resetValidation, setResetValidation] = useState(false)
  const [fileUploadValidation, setFileUploadValidation] = useState(false)
  const [fileName, setFileName] = useState('')
  // e) State för fel vid hämtning
  const [wcagListError, setWcagListError] = useState<string | null>(null)
  // f) Loading state
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // a) Hämta data vid komponentens mount
  useEffect(() => {
    initWcagList()
  }, [])

  // b) Initiera WCAG-listan
  async function initWcagList() {
    setIsLoading(true)
    try {
      const response = await fetch('/content/a11y-checklist/a11ychecklist.json')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const jsonData = await response.json()
      let data: WcagItem[] = []

      // Kontrollera om jsonData är en direkt array eller innesluten i ett objekt
      if (Array.isArray(jsonData)) {
        data = jsonData
      } else if (jsonData.data && Array.isArray(jsonData.data)) {
        data = jsonData.data
      } else {
        throw new Error('JSON-strukturen är oväntad.')
      }

      console.log('Hämtad data:', data) // Kontrollera att detta är en array
      setWcagList(data)
      setFilteredWcagList(data)
    } catch (error) {
      console.error('Error fetching WCAG list:', error)
      setWcagListError('Fel vid hämtning av checklistan.')
    } finally {
      setIsLoading(false)
    }
  }

  // c) Hantera filterändringar via dropdowns
  const handleDropdownChange = (
    group: 'Kategori' | 'Nivå' | 'Roll' | 'Status',
    selectedValues: any, // Temporärt 'any' för felsökning
  ) => {
    console.log(`Group: ${group}, Selected Values:`, selectedValues)

    let valuesArray: string[] = []

    if (Array.isArray(selectedValues)) {
      valuesArray = selectedValues
    } else if (typeof selectedValues === 'string') {
      valuesArray = selectedValues ? [selectedValues] : []
    } else if (selectedValues instanceof Array) {
      // Extra kontroll
      valuesArray = selectedValues
    } else {
      // Om selectedValues är ett event, extrahera de valda värdena
      if (selectedValues && selectedValues.target) {
        const options = selectedValues.target.options
        for (let i = 0; i < options.length; i++) {
          if (options[i].selected) {
            valuesArray.push(options[i].value)
          }
        }
      }
    }

    // Sätt state
    if (group === 'Kategori') {
      setFilteredCategories(valuesArray)
    } else if (group === 'Nivå') {
      setFilteredLevels(valuesArray)
    } else if (group === 'Roll') {
      setFilteredRoles(valuesArray)
    } else if (group === 'Status') {
      setFilteredStatus(valuesArray)
    }
  }

  // d) Filtrera listan när filter ändras
  useEffect(() => {
    filterList()
  }, [
    filteredCategories,
    filteredLevels,
    filteredRoles,
    filteredStatus,
    wcagList,
  ])

  function filterList() {
    // Om inga filter är aktiva, visa hela listan
    if (
      filteredCategories.length === 0 &&
      filteredLevels.length === 0 &&
      filteredRoles.length === 0 &&
      filteredStatus.length === 0
    ) {
      setFilteredWcagList(wcagList)
      return
    }

    // Filtrera baserat på aktiva filter
    const newList = wcagList.filter((item) => {
      const categoryMatch =
        filteredCategories.length === 0 ||
        filteredCategories.some(
          (cat) =>
            cat.toLowerCase().replace(/\s+/g, '') ===
            item.category.toLowerCase().replace(/\s+/g, ''),
        )

      const levelMatch =
        filteredLevels.length === 0 ||
        filteredLevels.some(
          (lvl) =>
            lvl.toLowerCase().replace(/\s+/g, '') ===
            item.level.toLowerCase().replace(/\s+/g, ''),
        )

      const roleMatch =
        filteredRoles.length === 0 ||
        filteredRoles.some((role) => {
          const roles = item.role.toLowerCase().replace(/\s+/g, '').split('/')
          return roles.includes(role.toLowerCase().replace(/\s+/g, ''))
        })

      const statusMatch =
        filteredStatus.length === 0 ||
        (item.status &&
          filteredStatus.some(
            (sts) =>
              sts.toLowerCase().replace(/\s+/g, '') ===
              item.status!.toLowerCase().replace(/\s+/g, ''),
          ))

      return categoryMatch && levelMatch && roleMatch && statusMatch
    })

    console.log('Filtered Wcag List:', newList) // För felsökning
    setFilteredWcagList(newList)
  }

  // e) Uppdatera status för ett WCAG-item
  function updateWcagItemStatus(id: string, newStatus: string) {
    setWcagList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item,
      ),
    )
  }

  // f) Uppdatera kommentar för ett WCAG-item
  function updateWcagItemComment(id: string, comment: string) {
    setWcagList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, comment } : item)),
    )
  }

  // g) Återställ filter
  function resetFilters() {
    setFilteredCategories([])
    setFilteredLevels([])
    setFilteredRoles([])
    setFilteredStatus([])
    setResetValidation(true)
    setTimeout(() => setResetValidation(false), 3000) // Dölj efter 3 sekunder
  }

  return (
    <GdsFlex flex-direction="column" gap="2xl; m{6xl}">
      <GdsFlex flex-direction="column" gap="4xl; m{l}" margin="0 auto">
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
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </GdsText>
            <GdsText font-size="body-l" color="secondary">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
            </GdsText>
          </GdsFlex>
        </GdsFlex>

        {/* Visa eventuella fel */}
        {wcagListError && (
          <div style={{ color: 'red' }}>
            <strong>Fel:</strong> {wcagListError}
          </div>
        )}

        {/* === Filtersektion === */}
        <GdsFlex flex-direction="row" gap="s">
          {/* Kategori Dropdown */}
          <GdsTheme>
            <GdsDropdown
              label="Välj kategori"
              searchable
              multiple
              onChange={(selected) =>
                handleDropdownChange('Kategori', selected)
              }
              value={filteredCategories}
            >
              <GdsOption value="">Kategori</GdsOption>
              {Object.values(A11yCategories).map((cat) => (
                <GdsOption key={cat} value={cat}>
                  {cat}
                </GdsOption>
              ))}
            </GdsDropdown>
          </GdsTheme>

          {/* Nivå Dropdown */}
          <GdsTheme>
            <GdsDropdown
              label="Välj nivå"
              searchable
              multiple
              onChange={(selected) => handleDropdownChange('Nivå', selected)}
              value={filteredLevels}
            >
              <GdsOption value="">Nivå</GdsOption>
              {Object.values(A11yLevels).map((lvl) => (
                <GdsOption key={lvl} value={lvl}>
                  {lvl}
                </GdsOption>
              ))}
            </GdsDropdown>
          </GdsTheme>

          {/* Roll Dropdown */}
          <GdsTheme>
            <GdsDropdown
              label="Välj roll"
              searchable
              multiple
              onChange={(selected) => handleDropdownChange('Roll', selected)}
              value={filteredRoles}
            >
              <GdsOption value="">Roll</GdsOption>
              {Object.values(A11yRoles).map((role) => (
                <GdsOption key={role} value={role}>
                  {role}
                </GdsOption>
              ))}
            </GdsDropdown>
          </GdsTheme>

          {/* Status Dropdown */}
          <GdsTheme>
            <GdsDropdown
              label="Välj status"
              searchable
              multiple
              onChange={(selected) => handleDropdownChange('Status', selected)}
              value={filteredStatus}
            >
              <GdsOption value="">Status</GdsOption>
              {Object.values(A11yStatus).map((status) => (
                <GdsOption key={status} value={status}>
                  {status}
                </GdsOption>
              ))}
            </GdsDropdown>
          </GdsTheme>
        </GdsFlex>

        {/* === Visa aktiva filter === */}
        <h3>Valda filter:</h3>
        <GdsFlex flex-direction="row" gap="m">
          {/* Kategorier */}
          {filteredCategories.length > 0 && (
            <div>
              <strong>Kategori:</strong>
              <ul>
                {filteredCategories.map((cat) => (
                  <li key={cat}>{cat}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Nivåer */}
          {filteredLevels.length > 0 && (
            <div>
              <strong>Nivå:</strong>
              <ul>
                {filteredLevels.map((lvl) => (
                  <li key={lvl}>{lvl}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Roller */}
          {filteredRoles.length > 0 && (
            <div>
              <strong>Roll:</strong>
              <ul>
                {filteredRoles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Statusar */}
          {filteredStatus.length > 0 && (
            <div>
              <strong>Status:</strong>
              <ul>
                {filteredStatus.map((status) => (
                  <li key={status}>{status}</li>
                ))}
              </ul>
            </div>
          )}
        </GdsFlex>

        {/* === Knappar för reset === */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <button onClick={resetFilters}>Återställ filter</button>
        </div>

        {/* === Notification Messages === */}
        {resetValidation && (
          <div style={{ background: '#cce', padding: 8, marginBottom: 8 }}>
            <strong>Filtren är återställda!</strong>{' '}
            <button onClick={() => setResetValidation(false)}>x</button>
          </div>
        )}
        {fileUploadValidation && (
          <div style={{ background: '#cec', padding: 8, marginBottom: 8 }}>
            <strong>{fileName} importerad. Listan är uppdaterad!</strong>{' '}
            <button onClick={() => setFileUploadValidation(false)}>x</button>
          </div>
        )}

        {/* === Antal Filtrerade === */}
        <p>
          Visar {filteredWcagList.length} av {wcagList.length} riktlinjer
        </p>

        {/* === Rendera den filtrerade WCAG-listan === */}
        {isLoading ? (
          <p>Laddar...</p>
        ) : (
          <GdsFlex flex-direction="row" gap="l">
            <ul>
              {Array.isArray(filteredWcagList) &&
                filteredWcagList.map((item) => (
                  <GdsCard variant="secondary" border-color="secondary">
                    <li key={item.id}>
                      <GdsFlex>
                        <strong>{item.id}</strong>: {item.topic}
                      </GdsFlex>
                      <GdsFlex
                        align-items="flex-start; m{center}"
                        justify-content="space-between"
                        flex-direction="column; s{row}"
                        gap="m"
                      >
                        <GdsFlex flex="1" flex-direction="column" gap="m">
                          <GdsFlex flex-direction="column">
                            <p>{item.statement}</p>
                            <p>{item.why}</p>
                          </GdsFlex>
                          <GdsCard>
                            <details>
                              <summary>Lagkrav och standarder</summary>
                              <GdsCard variant="secondary">
                                <GdsFlex flex-direction="column" gap="m">
                                  <p>{item.wcag}</p>
                                  <p>{item.guideline}</p>
                                  <p>{item.criteria}</p>
                                </GdsFlex>
                              </GdsCard>
                            </details>
                          </GdsCard>
                          <GdsCard>
                            <details>
                              <summary>Hur du kan testa</summary>
                              <GdsCard variant="secondary">
                                <GdsFlex flex-direction="column" gap="m">
                                  <p>{item.howToTest?.content}</p>
                                </GdsFlex>
                              </GdsCard>
                            </details>
                          </GdsCard>
                        </GdsFlex>
                        <GdsFlex flex="1" flex-direction="column" gap="m">
                          {/* Ändra till select för status om det är lämpligt */}
                          <GdsTheme>
                            <GdsDropdown
                              value={item.status || A11yStatus.IS_NOT_ASSESSED}
                              onChange={(e) =>
                                updateWcagItemStatus(item.id, e.target.value)
                              }
                            >
                              {Object.values(A11yStatus).map((s) => (
                                <GdsOption key={s} value={s}>
                                  {s}
                                </GdsOption>
                              ))}
                            </GdsDropdown>
                          </GdsTheme>
                          <GdsTheme>
                            <GdsFlex>
                              <GdsTextarea
                                label="Egen kommentar:"
                                flex-direction="column"
                                gap="xl"
                                value={item.comment || ''}
                                onChange={(e) =>
                                  updateWcagItemComment(item.id, e.target.value)
                                }
                              />
                            </GdsFlex>
                          </GdsTheme>
                        </GdsFlex>
                      </GdsFlex>
                    </li>
                  </GdsCard>
                ))}
            </ul>
          </GdsFlex>
        )}

        {/* === Inga träffar === */}
        {!isLoading &&
          Array.isArray(filteredWcagList) &&
          filteredWcagList.length === 0 && (
            <div style={{ background: '#fcc', padding: 8 }}>
              <h2>Inga träffar</h2>
              <p>Ändra dina filter och försök igen.</p>
            </div>
          )}
      </GdsFlex>
    </GdsFlex>
  )
}

export default WcagList
