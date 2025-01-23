// 'use client'

// import React, { useEffect, useState } from 'react'
// import { GdsCard, GdsFlex } from '$/import/components'

// // Om du vill använda Papa parse, avkommentera:
// // import Papa from 'papaparse';

// /* =========================================================
//    1) Enums för a11y
//    ========================================================= */
// export enum A11yCategories {
//   ANNOYING = 'Störigt/skadligt',
//   GENERAL = 'Generellt',
//   TIME = 'Tid',
//   PAGE = 'Sida',
//   HEADINGS = 'Rubriker',
//   CONTENT = 'Innehåll',
//   KEYBOARD = 'Använda tangentbord',
//   PREDICTABLE = 'Förutsägbart',
//   RESPONSIVE = 'Responsiv design',
//   DESIGN = 'Färg & form',
//   RESIZE = 'Ändra storlek',
//   MOBILE = 'Använda mobil',
//   CONTRAST = 'Kontraster',
//   IMAGES = 'Ikoner & bilder',
//   AUDIO = 'Ljud',
//   VIDEO = 'Video',
//   LINKS = 'Komponenter - Länkar',
//   BUTTONS = 'Komponenter - Knappar',
//   LISTS = 'Komponenter - Listor',
//   TABLES = 'Komponenter - Tabeller',
//   IFRAMES = 'Komponenter - Iframes',
//   COMPONENTS = 'Komponenter',
//   FORMS = 'Formulär',
//   ERRORS = 'Felhantering',
//   DYNAMICAL = 'Dynamiskt innehåll',
//   CODE = 'Kodkvalite',
//   CONSISTENT = 'Konsekvent',
// }

// export enum A11yLevels {
//   A_REQUIRED = 'A*',
//   A = 'A',
//   AA = 'AA',
// }

// export enum A11yRoles {
//   AD = 'AD',
//   COPY = 'Copy',
//   DEVELOPER = 'Utvecklare',
//   EDITOR = 'Redaktör',
//   UX = 'UX',
//   PRODUCER = 'Producent',
// }

// export enum A11yStatus {
//   IS_NOT_ASSESSED = 'Kravet är ej bedömt',
//   NOT_RELEVANT = 'Kravet är ej relevant',
//   FULFILLED = 'Kravet uppfylls',
//   PARTIALLY_FULFILLED = 'Kravet uppfylls delvis',
//   NOT_FULFILLED = 'Kravet uppfylls inte',
// }

// /* =========================================================
//    2) Typer
//    ========================================================= */
// interface WcagItem {
//   id: string
//   statement: string
//   why: string
//   category: string // "Tid", "Innehåll"...
//   topic: string
//   principle: string
//   guideline: string
//   criteria: string
//   wcag: string
//   level: string // "A", "AA"...
//   role: string // "Utvecklare", "Redaktör / Utvecklare"...
//   howToTest?: { content: string }
//   sort?: number
//   status?: string
//   comment?: string
// }

// interface WcagListResponse {
//   data: WcagItem[]
// }

// /** FilterStore-struktur */
// interface FilterStoreState {
//   filteredWcagCategories: string[]
//   filteredWcagLevels: string[]
//   filteredWcagRoles: string[]
//   filteredWcagStatus: string[]
//   _filterTags: Array<{ category: string; text: string }>
// }

// /** Sparad WCAG-lista */
// interface SavedWcagStoreState {
//   savedWcagList: WcagItem[]
// }

// /* =========================================================
//    3) useLocalStorage
//    ========================================================= */
// function useLocalStorage<T>(key: string, initialValue: T) {
//   const [storedValue, setStoredValue] = useState<T>(() => {
//     if (typeof window === 'undefined') return initialValue
//     try {
//       const item = window.localStorage.getItem(key)
//       return item ? JSON.parse(item) : initialValue
//     } catch {
//       return initialValue
//     }
//   })

//   useEffect(() => {
//     if (typeof window === 'undefined') return
//     window.localStorage.setItem(key, JSON.stringify(storedValue))
//   }, [key, storedValue])

//   return [storedValue, setStoredValue] as const
// }

// /* =========================================================
//    4) (Valfria) CSV helpers
//    ========================================================= */
// function csvToJson(csv: string): any[] {
//   // T.ex. med Papa.parse
//   return []
// }
// function objectToCsv(data: any[]): string {
//   // T.ex. med Papa.unparse
//   return ''
// }
// function downloadCsv(data: string, fileName: string): void {
//   const blob = new Blob(['\uFEFF' + data], { type: 'text/csv;charset=utf8' })
//   const url = window.URL.createObjectURL(blob)
//   const link = document.createElement('a')
//   link.setAttribute('href', url)
//   link.setAttribute('download', fileName)
//   link.click()
// }

// /* =========================================================
//    5) Hämta JSON
//    ========================================================= */
// async function getWcagItems(): Promise<WcagListResponse> {
//   const response = await fetch('/content/a11y-checklist/a11ychecklist.json')
//   const data = (await response.json()) as WcagListResponse
//   return data
// }

// /* =========================================================
//    6) Default states
//    ========================================================= */
// const FILTER_STORE_INIT: FilterStoreState = {
//   filteredWcagCategories: [],
//   filteredWcagLevels: [],
//   filteredWcagRoles: [],
//   filteredWcagStatus: [],
//   _filterTags: [],
// }
// const SAVED_LIST_INIT: SavedWcagStoreState = {
//   savedWcagList: [],
// }

// /* =========================================================
//    7) Arrays från enums
//    ========================================================= */
// const FILTER_CATEGORIES = Object.values(A11yCategories)
// const FILTER_LEVELS = Object.values(A11yLevels)
// const FILTER_ROLES = Object.values(A11yRoles)
// const FILTER_STATUS = Object.values(A11yStatus)

// /* =========================================================
//    8) Huvudkomponent
//    ========================================================= */
// const WcagList: React.FC = () => {
//   const [filterStore, setFilterStore] = useLocalStorage<FilterStoreState>(
//     'wcag-list-filters',
//     FILTER_STORE_INIT,
//   )
//   const [savedStore, setSavedStore] = useLocalStorage<SavedWcagStoreState>(
//     'saved-wcag-list',
//     SAVED_LIST_INIT,
//   )

//   // Full WCAG-lista vs. den vi visar
//   const [wcagList, setWcagList] = useState<WcagItem[]>([])
//   const [filteredWcagList, setFilteredWcagList] = useState<WcagItem[]>([])

//   const [resetValidation, setResetValidation] = useState(false)
//   const [fileUploadValidation, setFileUploadValidation] = useState(false)
//   const [showResults, setShowResults] = useState(true)
//   const [fileName, setFileName] = useState('')
//   const [wcagListError, setWcagListError] = useState<string | null>(null)

//   // Hämta JSON första gången
//   useEffect(() => {
//     initWcagList()
//     // eslint-disable-next-line
//   }, [])

//   async function initWcagList() {
//     try {
//       const resp = await getWcagItems()
//       setWcagList(resp.data)

//       if (!savedStore.savedWcagList || savedStore.savedWcagList.length === 0) {
//         setSavedStore({ savedWcagList: resp.data })
//       }
//       setFilteredWcagList(resp.data) // initialt visa allt
//     } catch (error) {
//       setWcagListError('Fel vid hämtning av checklistan.')
//     }
//   }

//   /** Filtrerar hela listan utifrån newStore */
//   function setFilterList(newStore: FilterStoreState) {
//     console.log(
//       'setFilterList() start. full lista:',
//       savedStore.savedWcagList.length,
//     )

//     let newList = [...(savedStore.savedWcagList || [])]

//     // Kategori
//     if (newStore.filteredWcagCategories.length > 0) {
//       newList = newList.filter((item) =>
//         newStore.filteredWcagCategories.some(
//           (cat) =>
//             cat.toLowerCase().replace(/\s+/g, '') ===
//             item.category.toLowerCase().replace(/\s+/g, ''),
//         ),
//       )
//     }
//     console.log('Efter kategori-filter:', newList.length)

//     // Nivå
//     if (newStore.filteredWcagLevels.length > 0) {
//       newList = newList.filter((item) =>
//         newStore.filteredWcagLevels.some(
//           (lvl) =>
//             lvl.toLowerCase().replace(/\s+/g, '') ===
//             item.level.toLowerCase().replace(/\s+/g, ''),
//         ),
//       )
//     }
//     console.log('Efter nivå-filter:', newList.length)

//     // Roll
//     if (newStore.filteredWcagRoles.length > 0) {
//       newList = newList.filter((item) => {
//         const roles = item.role.toLowerCase().replace(/\s+/g, '').split('/')
//         return newStore.filteredWcagRoles.some((r) =>
//           roles.includes(r.toLowerCase().replace(/\s+/g, '')),
//         )
//       })
//     }
//     console.log('Efter roll-filter:', newList.length)

//     // Status
//     if (newStore.filteredWcagStatus.length > 0) {
//       newList = newList.filter((item) => {
//         if (!item.status) return false
//         return newStore.filteredWcagStatus.some(
//           (sts) =>
//             sts.toLowerCase().replace(/\s+/g, '') ===
//             item.status!.toLowerCase().replace(/\s+/g, ''),
//         )
//       })
//     }
//     console.log('Efter status-filter:', newList.length)

//     setShowResults(false)
//     setTimeout(() => {
//       setFilteredWcagList(newList)
//       setShowResults(true)
//     }, 0)
//   }

//   /** Hjälpfunktion för att uppdatera taggar i store (om du vill visa dem) */
//   function setFilterTags(newStore: FilterStoreState) {
//     const {
//       filteredWcagCategories,
//       filteredWcagLevels,
//       filteredWcagRoles,
//       filteredWcagStatus,
//     } = newStore

//     const cats = filteredWcagCategories.map((text) => ({
//       category: 'Kategori',
//       text,
//     }))
//     const lvls = filteredWcagLevels.map((text) => ({
//       category: 'Nivå',
//       text,
//     }))
//     const roles = filteredWcagRoles.map((text) => ({
//       category: 'Roll',
//       text,
//     }))
//     const stat = filteredWcagStatus.map((text) => ({
//       category: 'Status',
//       text,
//     }))

//     const newTags = [...cats, ...lvls, ...roles, ...stat]
//     setFilterStore({
//       ...newStore,
//       _filterTags: newTags,
//     })
//   }

//   /** Checkbox-change: lägg till/ta bort filter, kolla om allt är tomt -> visa alla */
//   function handleFilterChange(
//     group: 'Kategori' | 'Nivå' | 'Roll' | 'Status',
//     value: string,
//     checked: boolean,
//   ) {
//     let storeKey: keyof FilterStoreState
//     if (group === 'Kategori') storeKey = 'filteredWcagCategories'
//     else if (group === 'Nivå') storeKey = 'filteredWcagLevels'
//     else if (group === 'Roll') storeKey = 'filteredWcagRoles'
//     else storeKey = 'filteredWcagStatus'

//     // Kopiera den array vi ska uppdatera
//     const arr = [...filterStore[storeKey]]

//     debugger

//     if (checked) {
//       if (!arr.includes(value)) arr.push(value)
//     } else {
//       const idx = arr.indexOf(value)
//       if (idx > -1) arr.splice(idx, 1)
//     }

//     // Nytt filterStore
//     const newStore: FilterStoreState = { ...filterStore, [storeKey]: arr }

//     // Kolla om ALLA filter-arrayer är tomma
//     const allEmpty =
//       newStore.filteredWcagCategories.length === 0 &&
//       newStore.filteredWcagLevels.length === 0 &&
//       newStore.filteredWcagRoles.length === 0 &&
//       newStore.filteredWcagStatus.length === 0

//     if (allEmpty) {
//       // Om allt tomt -> visa hela listan
//       setFilterStore(newStore)
//       setFilteredWcagList(savedStore.savedWcagList)
//     } else {
//       // Annars kör normal filtrering
//       setFilterStore(newStore)
//       setFilterTags(newStore) // om du vill sätta taggar
//       setFilterList(newStore)
//     }
//   }

//   /** Exempel: visa hur många som överlever */
//   const filterLengthStr = `Visar ${filteredWcagList.length} av ${wcagList.length} riktlinjer`

//   // Exempel: andra funktioner, reset, import, export...
//   function resetWcagList(mode: 'hard' | 'soft') {
//     // ...
//   }
//   function openFile() {
//     // ...
//   }
//   function exportCsv() {
//     // ...
//   }

//   return (
//     // <GdsFlex>
//     <div>
//       <h1>Tillgänglighetslistan (Uppdaterad “visa alla eller filtrera”)</h1>

//       {wcagListError && (
//         <div style={{ color: 'red' }}>
//           <strong>Fel:</strong> {wcagListError}
//         </div>
//       )}

//       {/* === Filter-sektion === */}
//       <div style={{ border: '1px solid #ccc', padding: 12, marginBottom: 16 }}>
//         <h2>Filter</h2>

//         {/* Kategori */}
//         <div style={{ marginBottom: 10 }}>
//           <strong>Kategori:</strong>
//           {FILTER_CATEGORIES.map((cat) => {
//             const checked = filterStore.filteredWcagCategories.includes(cat)
//             return (
//               <label
//                 key={cat}
//                 style={{ marginLeft: 8, display: 'inline-block' }}
//               >
//                 <input
//                   type="checkbox"
//                   checked={checked}
//                   onChange={(e) =>
//                     handleFilterChange('Kategori', cat, e.target.checked)
//                   }
//                 />
//                 {cat}
//               </label>
//             )
//           })}
//         </div>

//         {/* Nivå */}
//         <div style={{ marginBottom: 10 }}>
//           <strong>Nivå:</strong>
//           {FILTER_LEVELS.map((lvl) => {
//             const checked = filterStore.filteredWcagLevels.includes(lvl)
//             return (
//               <label
//                 key={lvl}
//                 style={{ marginLeft: 8, display: 'inline-block' }}
//               >
//                 <input
//                   type="checkbox"
//                   checked={checked}
//                   onChange={(e) =>
//                     handleFilterChange('Nivå', lvl, e.target.checked)
//                   }
//                 />
//                 {lvl}
//               </label>
//             )
//           })}
//         </div>

//         {/* Roll */}
//         <div style={{ marginBottom: 10 }}>
//           <strong>Roll:</strong>
//           {FILTER_ROLES.map((r) => {
//             const checked = filterStore.filteredWcagRoles.includes(r)
//             return (
//               <label key={r} style={{ marginLeft: 8, display: 'inline-block' }}>
//                 <input
//                   type="checkbox"
//                   checked={checked}
//                   onChange={(e) =>
//                     handleFilterChange('Roll', r, e.target.checked)
//                   }
//                 />
//                 {r}
//               </label>
//             )
//           })}
//         </div>

//         {/* Status */}
//         <div style={{ marginBottom: 10 }}>
//           <strong>Krav (status):</strong>
//           {FILTER_STATUS.map((s) => {
//             const checked = filterStore.filteredWcagStatus.includes(s)
//             return (
//               <label key={s} style={{ marginLeft: 8, display: 'inline-block' }}>
//                 <input
//                   type="checkbox"
//                   checked={checked}
//                   onChange={(e) =>
//                     handleFilterChange('Status', s, e.target.checked)
//                   }
//                 />
//                 {s}
//               </label>
//             )
//           })}
//         </div>
//       </div>

//       {/* Exempelknappar */}
//       <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
//         <button onClick={exportCsv}>Exportera CSV</button>
//         <button onClick={() => resetWcagList('hard')}>Återställ listan</button>
//         <button onClick={() => resetWcagList('soft')}>Återställ filter</button>
//       </div>

//       {/* Notiser */}
//       {resetValidation && (
//         <div style={{ background: '#cce', padding: 8, marginBottom: 8 }}>
//           <strong>Listan och filtren är återställda!</strong>{' '}
//           <button onClick={() => setResetValidation(false)}>x</button>
//         </div>
//       )}
//       {fileUploadValidation && (
//         <div style={{ background: '#cec', padding: 8, marginBottom: 8 }}>
//           <strong>{fileName} importerad. Listan är uppdaterad!</strong>{' '}
//           <button onClick={() => setFileUploadValidation(false)}>x</button>
//         </div>
//       )}

//       <p>{filterLengthStr}</p>

//       {/* Rendera den filtrerade listan */}
//       {showResults ? (
//         <GdsFlex flex-direction="column">
//           <ul style={{ listStyle: 'none', padding: 0 }}>
//             {filteredWcagList.map((item) => (
//               <li
//                 key={item.id}
//                 style={{
//                   border: '1px solid #ccc',
//                   marginBottom: 12,
//                   padding: 12,
//                 }}
//               >
//                 <GdsFlex>
//                   {item.id} - {item.topic}
//                 </GdsFlex>
//                 <p>
//                   <strong>Kategori:</strong> {item.category} |{' '}
//                   <strong>Nivå:</strong> {item.level} | <strong>Roll:</strong>{' '}
//                   {item.role}
//                 </p>
//                 <p>
//                   <strong>Påstående:</strong> {item.statement}
//                 </p>
//                 <p>
//                   <strong>Syfte:</strong> {item.why}
//                 </p>
//                 <p>
//                   <strong>WCAG:</strong> {item.wcag} | <strong>Princip:</strong>{' '}
//                   {item.principle} | <strong>Riktlinje:</strong>{' '}
//                   {item.guideline} | <strong>Kriterium:</strong> {item.criteria}
//                 </p>

//                 {/* Exempel på hurToTest */}
//                 {item.howToTest && (
//                   <details>
//                     <summary>Hur du kan testa</summary>
//                     <div>{item.howToTest.content}</div>
//                   </details>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </GdsFlex>
//       ) : (
//         <p>Laddar...</p>
//       )}

//       {filteredWcagList.length === 0 && (
//         <div style={{ background: '#fcc', padding: 8 }}>
//           <h2>Inga träffar</h2>
//           <p>Ändra dina filter och försök igen.</p>
//         </div>
//       )}
//       {/* </GdsFlex> */}
//     </div>
//   )
// }

// export default WcagList

'use client'

import React, { useEffect, useState } from 'react'
// Importera Gds-komponenterna från ditt designbibliotek
import {
  GdsCard,
  GdsDropdown,
  GdsFlex,
  GdsOption,
  GdsTheme,
} from '$/import/components'

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
    <GdsTheme>
      <div style={{ padding: 16 }}>
        <h1>Tillgänglighetslistan</h1>

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
          <GdsFlex flex-direction="row">
            <ul style={{ width: '100%', listStyle: 'none', padding: 0 }}>
              {Array.isArray(filteredWcagList) &&
                filteredWcagList.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      border: '1px solid #ccc',
                      marginBottom: 12,
                      padding: 12,
                    }}
                  >
                    <GdsFlex>
                      <strong>{item.id}</strong>: {item.topic}
                    </GdsFlex>
                    <GdsFlex
                      align-items="flex-start"
                      justify-content="space-between"
                      flex-direction="column"
                    >
                      <GdsFlex flex-direction="column">
                        <GdsFlex flex-direction="column">
                          <p>{item.statement}</p>
                          <p>{item.why}</p>
                        </GdsFlex>
                        <GdsCard>
                          <details>
                            <summary>Hur du kan testa</summary>
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
                        {/* Ändra till select för status om det är lämpligt */}
                        <label>
                          <strong>Är kravet uppfyllt?</strong>
                          <select
                            value={item.status || A11yStatus.IS_NOT_ASSESSED}
                            onChange={(e) =>
                              updateWcagItemStatus(item.id, e.target.value)
                            }
                          >
                            {Object.values(A11yStatus).map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label>
                          <strong>Egen kommentar:</strong>
                          <textarea
                            rows={3}
                            cols={40}
                            value={item.comment || ''}
                            onChange={(e) =>
                              updateWcagItemComment(item.id, e.target.value)
                            }
                          />
                        </label>
                      </GdsFlex>
                    </GdsFlex>
                  </li>
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
      </div>
    </GdsTheme>
  )
}

export default WcagList
