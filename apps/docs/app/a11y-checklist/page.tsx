'use client'

import React, { useEffect, useState } from 'react'
import { GdsCard, GdsFlex } from '$/import/components'

// Om du vill använda Papa parse, avkommentera:
// import Papa from 'papaparse';

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
  category: string // "Tid", "Innehåll"...
  topic: string
  principle: string
  guideline: string
  criteria: string
  wcag: string
  level: string // "A", "AA"...
  role: string // "Utvecklare", "Redaktör / Utvecklare"...
  howToTest?: { content: string }
  sort?: number
  status?: string
  comment?: string
}

interface WcagListResponse {
  data: WcagItem[]
}

/** FilterStore-struktur */
interface FilterStoreState {
  filteredWcagCategories: string[]
  filteredWcagLevels: string[]
  filteredWcagRoles: string[]
  filteredWcagStatus: string[]
  _filterTags: Array<{ category: string; text: string }>
}

/** Sparad WCAG-lista */
interface SavedWcagStoreState {
  savedWcagList: WcagItem[]
}

/* =========================================================
   3) useLocalStorage
   ========================================================= */
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}

/* =========================================================
   4) (Valfria) CSV helpers
   ========================================================= */
function csvToJson(csv: string): any[] {
  // T.ex. med Papa.parse
  return []
}
function objectToCsv(data: any[]): string {
  // T.ex. med Papa.unparse
  return ''
}
function downloadCsv(data: string, fileName: string): void {
  const blob = new Blob(['\uFEFF' + data], { type: 'text/csv;charset=utf8' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', fileName)
  link.click()
}

/* =========================================================
   5) Hämta JSON
   ========================================================= */
async function getWcagItems(): Promise<WcagListResponse> {
  const response = await fetch('/content/a11y-checklist/a11ychecklist.json')
  const data = (await response.json()) as WcagListResponse
  return data
}

/* =========================================================
   6) Default states
   ========================================================= */
const FILTER_STORE_INIT: FilterStoreState = {
  filteredWcagCategories: [],
  filteredWcagLevels: [],
  filteredWcagRoles: [],
  filteredWcagStatus: [],
  _filterTags: [],
}
const SAVED_LIST_INIT: SavedWcagStoreState = {
  savedWcagList: [],
}

/* =========================================================
   7) Arrays från enums
   ========================================================= */
const FILTER_CATEGORIES = Object.values(A11yCategories)
const FILTER_LEVELS = Object.values(A11yLevels)
const FILTER_ROLES = Object.values(A11yRoles)
const FILTER_STATUS = Object.values(A11yStatus)

/* =========================================================
   8) Huvudkomponent
   ========================================================= */
const WcagList: React.FC = () => {
  const [filterStore, setFilterStore] = useLocalStorage<FilterStoreState>(
    'wcag-list-filters',
    FILTER_STORE_INIT,
  )
  const [savedStore, setSavedStore] = useLocalStorage<SavedWcagStoreState>(
    'saved-wcag-list',
    SAVED_LIST_INIT,
  )

  // Full WCAG-lista vs. den vi visar
  const [wcagList, setWcagList] = useState<WcagItem[]>([])
  const [filteredWcagList, setFilteredWcagList] = useState<WcagItem[]>([])

  const [resetValidation, setResetValidation] = useState(false)
  const [fileUploadValidation, setFileUploadValidation] = useState(false)
  const [showResults, setShowResults] = useState(true)
  const [fileName, setFileName] = useState('')
  const [wcagListError, setWcagListError] = useState<string | null>(null)

  // Hämta JSON första gången
  useEffect(() => {
    initWcagList()
    // eslint-disable-next-line
  }, [])

  async function initWcagList() {
    try {
      const resp = await getWcagItems()
      setWcagList(resp.data)

      if (!savedStore.savedWcagList || savedStore.savedWcagList.length === 0) {
        setSavedStore({ savedWcagList: resp.data })
      }
      setFilteredWcagList(resp.data) // initialt visa allt
    } catch (error) {
      setWcagListError('Fel vid hämtning av checklistan.')
    }
  }

  /** Filtrerar hela listan utifrån newStore */
  function setFilterList(newStore: FilterStoreState) {
    console.log(
      'setFilterList() start. full lista:',
      savedStore.savedWcagList.length,
    )

    let newList = [...(savedStore.savedWcagList || [])]

    // Kategori
    if (newStore.filteredWcagCategories.length > 0) {
      newList = newList.filter((item) =>
        newStore.filteredWcagCategories.some(
          (cat) =>
            cat.toLowerCase().replace(/\s+/g, '') ===
            item.category.toLowerCase().replace(/\s+/g, ''),
        ),
      )
    }
    console.log('Efter kategori-filter:', newList.length)

    // Nivå
    if (newStore.filteredWcagLevels.length > 0) {
      newList = newList.filter((item) =>
        newStore.filteredWcagLevels.some(
          (lvl) =>
            lvl.toLowerCase().replace(/\s+/g, '') ===
            item.level.toLowerCase().replace(/\s+/g, ''),
        ),
      )
    }
    console.log('Efter nivå-filter:', newList.length)

    // Roll
    if (newStore.filteredWcagRoles.length > 0) {
      newList = newList.filter((item) => {
        const roles = item.role.toLowerCase().replace(/\s+/g, '').split('/')
        return newStore.filteredWcagRoles.some((r) =>
          roles.includes(r.toLowerCase().replace(/\s+/g, '')),
        )
      })
    }
    console.log('Efter roll-filter:', newList.length)

    // Status
    if (newStore.filteredWcagStatus.length > 0) {
      newList = newList.filter((item) => {
        if (!item.status) return false
        return newStore.filteredWcagStatus.some(
          (sts) =>
            sts.toLowerCase().replace(/\s+/g, '') ===
            item.status!.toLowerCase().replace(/\s+/g, ''),
        )
      })
    }
    console.log('Efter status-filter:', newList.length)

    setShowResults(false)
    setTimeout(() => {
      setFilteredWcagList(newList)
      setShowResults(true)
    }, 0)
  }

  /** Hjälpfunktion för att uppdatera taggar i store (om du vill visa dem) */
  function setFilterTags(newStore: FilterStoreState) {
    const {
      filteredWcagCategories,
      filteredWcagLevels,
      filteredWcagRoles,
      filteredWcagStatus,
    } = newStore

    const cats = filteredWcagCategories.map((text) => ({
      category: 'Kategori',
      text,
    }))
    const lvls = filteredWcagLevels.map((text) => ({
      category: 'Nivå',
      text,
    }))
    const roles = filteredWcagRoles.map((text) => ({
      category: 'Roll',
      text,
    }))
    const stat = filteredWcagStatus.map((text) => ({
      category: 'Status',
      text,
    }))

    const newTags = [...cats, ...lvls, ...roles, ...stat]
    setFilterStore({
      ...newStore,
      _filterTags: newTags,
    })
  }

  /** Checkbox-change: lägg till/ta bort filter, kolla om allt är tomt -> visa alla */
  function handleFilterChange(
    group: 'Kategori' | 'Nivå' | 'Roll' | 'Status',
    value: string,
    checked: boolean,
  ) {
    let storeKey: keyof FilterStoreState
    if (group === 'Kategori') storeKey = 'filteredWcagCategories'
    else if (group === 'Nivå') storeKey = 'filteredWcagLevels'
    else if (group === 'Roll') storeKey = 'filteredWcagRoles'
    else storeKey = 'filteredWcagStatus'

    // Kopiera den array vi ska uppdatera
    const arr = [...(filterStore as any)[storeKey]]

    if (checked) {
      if (!arr.includes(value)) arr.push(value)
    } else {
      const idx = arr.indexOf(value)
      if (idx > -1) arr.splice(idx, 1)
    }

    // Nytt filterStore
    const newStore: FilterStoreState = { ...filterStore, [storeKey]: arr }

    // Kolla om ALLA filter-arrayer är tomma
    const allEmpty =
      newStore.filteredWcagCategories.length === 0 &&
      newStore.filteredWcagLevels.length === 0 &&
      newStore.filteredWcagRoles.length === 0 &&
      newStore.filteredWcagStatus.length === 0

    if (allEmpty) {
      // Om allt tomt -> visa hela listan
      setFilterStore(newStore)
      setFilteredWcagList(savedStore.savedWcagList)
    } else {
      // Annars kör normal filtrering
      setFilterStore(newStore)
      setFilterTags(newStore) // om du vill sätta taggar
      setFilterList(newStore)
    }
  }

  /** Exempel: visa hur många som överlever */
  const filterLengthStr = `Visar ${filteredWcagList.length} av ${wcagList.length} riktlinjer`

  // Exempel: andra funktioner, reset, import, export...
  function resetWcagList(mode: 'hard' | 'soft') {
    // ...
  }
  function openFile() {
    // ...
  }
  function exportCsv() {
    // ...
  }

  return (
    // <GdsFlex>
    <div>
      <h1>Tillgänglighetslistan (Uppdaterad “visa alla eller filtrera”)</h1>

      {wcagListError && (
        <div style={{ color: 'red' }}>
          <strong>Fel:</strong> {wcagListError}
        </div>
      )}

      {/* === Filter-sektion === */}
      <div style={{ border: '1px solid #ccc', padding: 12, marginBottom: 16 }}>
        <h2>Filter</h2>

        {/* Kategori */}
        <div style={{ marginBottom: 10 }}>
          <strong>Kategori:</strong>
          {FILTER_CATEGORIES.map((cat) => {
            const checked = filterStore.filteredWcagCategories.includes(cat)
            return (
              <label
                key={cat}
                style={{ marginLeft: 8, display: 'inline-block' }}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) =>
                    handleFilterChange('Kategori', cat, e.target.checked)
                  }
                />
                {cat}
              </label>
            )
          })}
        </div>

        {/* Nivå */}
        <div style={{ marginBottom: 10 }}>
          <strong>Nivå:</strong>
          {FILTER_LEVELS.map((lvl) => {
            const checked = filterStore.filteredWcagLevels.includes(lvl)
            return (
              <label
                key={lvl}
                style={{ marginLeft: 8, display: 'inline-block' }}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) =>
                    handleFilterChange('Nivå', lvl, e.target.checked)
                  }
                />
                {lvl}
              </label>
            )
          })}
        </div>

        {/* Roll */}
        <div style={{ marginBottom: 10 }}>
          <strong>Roll:</strong>
          {FILTER_ROLES.map((r) => {
            const checked = filterStore.filteredWcagRoles.includes(r)
            return (
              <label key={r} style={{ marginLeft: 8, display: 'inline-block' }}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) =>
                    handleFilterChange('Roll', r, e.target.checked)
                  }
                />
                {r}
              </label>
            )
          })}
        </div>

        {/* Status */}
        <div style={{ marginBottom: 10 }}>
          <strong>Krav (status):</strong>
          {FILTER_STATUS.map((s) => {
            const checked = filterStore.filteredWcagStatus.includes(s)
            return (
              <label key={s} style={{ marginLeft: 8, display: 'inline-block' }}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) =>
                    handleFilterChange('Status', s, e.target.checked)
                  }
                />
                {s}
              </label>
            )
          })}
        </div>
      </div>

      {/* Exempelknappar */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button onClick={exportCsv}>Exportera CSV</button>
        <button onClick={() => resetWcagList('hard')}>Återställ listan</button>
        <button onClick={() => resetWcagList('soft')}>Återställ filter</button>
      </div>

      {/* Notiser */}
      {resetValidation && (
        <div style={{ background: '#cce', padding: 8, marginBottom: 8 }}>
          <strong>Listan och filtren är återställda!</strong>{' '}
          <button onClick={() => setResetValidation(false)}>x</button>
        </div>
      )}
      {fileUploadValidation && (
        <div style={{ background: '#cec', padding: 8, marginBottom: 8 }}>
          <strong>{fileName} importerad. Listan är uppdaterad!</strong>{' '}
          <button onClick={() => setFileUploadValidation(false)}>x</button>
        </div>
      )}

      <p>{filterLengthStr}</p>

      {/* Rendera den filtrerade listan */}
      {showResults ? (
        <GdsFlex flex-direction="column">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {filteredWcagList.map((item) => (
              <li
                key={item.id}
                style={{
                  border: '1px solid #ccc',
                  marginBottom: 12,
                  padding: 12,
                }}
              >
                <GdsFlex>
                  {item.id} - {item.topic}
                </GdsFlex>
                <p>
                  <strong>Kategori:</strong> {item.category} |{' '}
                  <strong>Nivå:</strong> {item.level} | <strong>Roll:</strong>{' '}
                  {item.role}
                </p>
                <p>
                  <strong>Påstående:</strong> {item.statement}
                </p>
                <p>
                  <strong>Syfte:</strong> {item.why}
                </p>
                <p>
                  <strong>WCAG:</strong> {item.wcag} | <strong>Princip:</strong>{' '}
                  {item.principle} | <strong>Riktlinje:</strong>{' '}
                  {item.guideline} | <strong>Kriterium:</strong> {item.criteria}
                </p>

                {/* Exempel på hurToTest */}
                {item.howToTest && (
                  <details>
                    <summary>Hur du kan testa</summary>
                    <div>{item.howToTest.content}</div>
                  </details>
                )}
              </li>
            ))}
          </ul>
        </GdsFlex>
      ) : (
        <p>Laddar...</p>
      )}

      {filteredWcagList.length === 0 && (
        <div style={{ background: '#fcc', padding: 8 }}>
          <h2>Inga träffar</h2>
          <p>Ändra dina filter och försök igen.</p>
        </div>
      )}
      {/* </GdsFlex> */}
    </div>
  )
}

export default WcagList

// 'use client'

// import React, { useEffect, useState } from 'react'
// import { GdsCard, GdsFlex } from '$/import/components'

// //import { Accordion } from '@sebgroup/green-react'

// // Definiera typen för objekten i checklistan

// interface HowToTest {
//   id: number
//   title: string
//   content: string
// }

// interface ChecklistItem {
//   id: number
//   sort: number | null // Kan vara null
//   topic: string
//   criteria: string
//   category: string
//   level: string
//   principle: string
//   guideline: string
//   statement: string
//   why: string
//   role: string
//   wcag: string
//   howToTest: HowToTest // Innehåller en inre struktur
// }

// export default function A11yChecklist() {
//   const [items, setItems] = useState<ChecklistItem[]>([]) // Typ: Array av ChecklistItem
//   const [error, setError] = useState<string | null>(null) // Typ: string eller null

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           '/content/a11y-checklist/a11ychecklist.json',
//         )
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status}`)
//         }

//         const reponseData = await response.json()

//         if (reponseData.data && Array.isArray(reponseData.data)) {
//           setItems(reponseData.data)
//         } else {
//           throw new Error(`Error: Unexpected format`)
//         }
//       } catch (err: unknown) {
//         if (err instanceof Error) {
//           setError(err.message)
//         } else {
//           setError('Ett okänt fel inträffade.')
//         }
//       }
//     }

//     fetchData()
//   }, []) // Körs endast en gång när komponenten mountas

//   return (
//     <GdsFlex flex-direction="row">
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <GdsFlex>
//               <strong>{item.id}</strong>: {item.topic}
//             </GdsFlex>
//             <GdsFlex
//               align-items="flex-start; m{center}"
//               justify-content="space-between"
//               flex-direction="column; m{row}"
//             >
//               <GdsFlex flex-direction="column">
//                 <GdsFlex flex-direction="column">
//                   <p>{item.statement}</p>
//                   <p>{item.why}</p>
//                 </GdsFlex>
//                 <GdsCard>
//                   <details>
//                     <summary>Title of the accordion</summary>
//                     <GdsCard variant="secondary">
//                       <GdsFlex flex-direction="column" gap="m">
//                         <GdsFlex>{item.principle}</GdsFlex>
//                         <GdsFlex>{item.guideline}</GdsFlex>
//                       </GdsFlex>
//                     </GdsCard>
//                   </details>
//                 </GdsCard>
//               </GdsFlex>
//               <GdsFlex flex-direction="column">
//                 <input></input>
//                 <textarea></textarea>
//               </GdsFlex>
//             </GdsFlex>
//           </li>
//         ))}
//       </ul>
//     </GdsFlex>
//   )
// }
