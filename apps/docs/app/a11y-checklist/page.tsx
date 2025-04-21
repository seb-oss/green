'use client'

import React, { useEffect, useState } from 'react'
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
import {
  IconBrandGreen,
  IconCrossLarge,
  IconEyeSlash,
  IconSquareGridCircle,
  IconSquareInfo,
  IconTextEdit,
} from '$/import/icons'
import { marked } from 'marked'

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
    status.length === 0 ? true : status.includes(item.status)
}

export default function WcagList() {
  const [wcagObjects, setWcagObjects] = useState<WcagItem[]>([])
  const [filteredWcagList, setFilteredWcagList] = useState<WcagItem[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [csvImportError, setCsvImportError] = useState<string>('')

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
      .filter(statusFilter(selectedStatuses))
    setFilteredWcagList(filteredList)
  }, [
    wcagObjects,
    selectedCategories,
    selectedLevels,
    selectedRoles,
    selectedStatuses,
  ])

  // Reset the filters
  const resetFilters = () => {
    setSelectedCategories([])
    setSelectedLevels([])
    setSelectedRoles([])
    setSelectedStatuses([])
  }

  // Update item status and comment
  const updateWcagItem = (id: string, status: string, comment: string) => {
    setWcagObjects((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, status, comment } : item,
      ),
    )
  }

  // CSV Export functionality
  const exportToCSV = () => {
    // Definiera alla CSV-rubriker
    const headers = [
      'id',
      'topic',
      'criteria',
      'category',
      'level',
      'principle',
      'guideline',
      'statement',
      'why',
      'role',
      'wcag',
      'status',
      'comment',
    ]

    // Starta CSV-strängen med headern, separerad med kommatecken och avslutad med en radbrytning
    let csvContent = headers.join(',') + '\n'

    // Lägg till data-rader: för varje objekt i wcagObjects skapar vi en rad
    wcagObjects.forEach((item) => {
      const row = [
        item.id,
        `"${item.topic.replace(/"/g, '""')}"`, // Escape quotes i 'topic'
        `"${item.criteria.replace(/"/g, '""')}"`, // Escape quotes i 'criteria'
        `"${item.category.replace(/"/g, '""')}"`, // Escape quotes i 'category'
        `"${item.level.replace(/"/g, '""')}"`, // Escape quotes i 'level'
        `"${item.principle.replace(/"/g, '""')}"`, // Escape quotes i 'principle'
        `"${item.guideline.replace(/"/g, '""')}"`, // Escape quotes i 'guideline'
        `"${item.statement.replace(/"/g, '""')}"`, // Escape quotes i 'statement'
        `"${item.why.replace(/"/g, '""')}"`, // Escape quotes i 'why'
        `"${item.role.replace(/"/g, '""')}"`, // Escape quotes i 'role'
        `"${item.wcag.replace(/"/g, '""')}"`, // Escape quotes i 'wcag'
        item.status || '', // Lägg till status eller använd en tom sträng om den saknas
        `"${(item.comment || '').replace(/"/g, '""')}"`, // Escape quotes i 'comment'
      ]
      // Slå samman radens fält med kommatecken och avsluta med en radbrytning
      csvContent += row.join(',') + '\n'
    })

    // Skapa en Blob med CSV-innehållet och specificera rätt MIME-typ
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })

    // Skapa en temporär nedladdningslänk
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', 'wcag_checklist.csv')
    link.style.visibility = 'hidden'

    // Lägg till länken i dokumentet, trigga nedladdningen och ta sedan bort länken
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // CSV Import functionality
  const importFromCSV = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setCsvImportError('')

    console.log(file)

    if (!file) return

    const reader = new FileReader()

    //callback

    //debugger efter try

    reader.onload = (e) => {
      try {
        const csvText = e.target?.result as string
        const lines = csvText.split('\n')
        const headers = lines[0].split(',')

        // Validate CSV structure
        const requiredHeaders = ['id', 'status', 'comment']
        const hasRequiredHeaders = requiredHeaders.every((h) =>
          headers.includes(h),
        )

        if (!hasRequiredHeaders) {
          setCsvImportError(
            'CSV filen saknar nödvändiga kolumner (id, status, comment)',
          )
          return
        }

        // Create a map of current wcagObjects for easy lookup
        const currentItems = new Map(wcagObjects.map((item) => [item.id, item]))
        const updatedItems: WcagItem[] = [...wcagObjects]

        // Process data rows
        for (let i = 1; i < lines.length; i++) {
          if (!lines[i].trim()) continue // Skip empty lines

          const values = parseCSVLine(lines[i])
          if (values.length !== headers.length) continue // Skip malformed lines

          // Create object from row
          const rowData: Record<string, string> = {}
          headers.forEach((header, index) => {
            rowData[header] = values[index]
          })

          // Find and update existing item
          const itemId = rowData['id']
          const existingItem = currentItems.get(itemId)

          if (existingItem) {
            const itemIndex = updatedItems.findIndex(
              (item) => item.id === itemId,
            )
            if (itemIndex !== -1) {
              updatedItems[itemIndex] = {
                ...existingItem,
                status: rowData['status'],
                comment: rowData['comment'],
              }
            }
          }
        }

        // Update state with imported data
        setWcagObjects(updatedItems)
      } catch (error) {
        console.error('Error importing CSV:', error)
        setCsvImportError('Ett fel uppstod vid import av CSV-filen')
      }

      // Reset file input
      event.target.value = ''
    }

    reader.readAsText(file)
  }

  // Helper function to parse CSV line considering quoted fields
  const parseCSVLine = (line: string): string[] => {
    const result: string[] = []
    let currentField = ''
    let inQuotes = false

    for (let i = 0; i < line.length; i++) {
      const char = line[i]

      if (char === '"') {
        // Check if this is an escaped quote (double quote)
        if (i + 1 < line.length && line[i + 1] === '"') {
          currentField += '"'
          i++ // Skip the next quote
        } else {
          // Toggle quote mode
          inQuotes = !inQuotes
        }
      } else if (char === ',' && !inQuotes) {
        // End of field
        result.push(currentField)
        currentField = ''
      } else {
        // Add character to current field
        currentField += char
      }
    }

    // Add the last field
    result.push(currentField)

    return result
  }

  if (!wcagObjects) return <div>Loading...</div>

  return (
    <GdsFlex flex-direction="column">
      <GdsFlex flex-direction="column" gap="2xl; m{4xl}" max-width="80ch">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </GdsText>
        </GdsFlex>
      </GdsFlex>

      {/* Export/Import CSV buttons */}
      <GdsFlex gap="m" margin-bottom="m">
        <GdsButton onClick={exportToCSV} variant="secondary">
          Exportera till CSV
        </GdsButton>
        Importera från CSV
        <input type="file" accept=".csv" onChange={importFromCSV} />
      </GdsFlex>

      {csvImportError && (
        <GdsDiv padding="m" margin-bottom="m" border="error">
          <GdsText color="error">{csvImportError}</GdsText>
        </GdsDiv>
      )}

      {/* Filters */}
      <GdsFlex width="70%" gap="s">
        <GdsDropdown
          multiple
          searchable
          value={selectedCategories}
          onInput={(e) => setSelectedCategories((e.target as any).value)}
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
          searchable
          value={selectedLevels}
          onInput={(e) => setSelectedLevels((e.target as any).value)}
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
          searchable
          value={selectedRoles}
          onInput={(e) => setSelectedRoles((e.target as any).value)}
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
          searchable
          value={selectedStatuses}
          onInput={(e) => setSelectedStatuses((e.target as any).value)}
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

      {/* Active filters */}
      <h3>Valda filter:</h3>
      <GdsFlex flex-direction="row" gap="m">
        {/* Kategorier */}
        {selectedCategories.length > 0 && (
          <div>
            <strong>Kategori:</strong>
            <ul>
              {selectedCategories.map((cat) => (
                <GdsButton key={cat}>{cat}</GdsButton>
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
                <GdsButton key={lvl}>{lvl}</GdsButton>
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
                <GdsButton key={role}>{role}</GdsButton>
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
                <GdsButton key={status}>
                  {status}
                  <IconCrossLarge slot="trail" width={12} height={12} />
                </GdsButton>
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

      {/* WCAG Items List */}
      <GdsFlex role="list" flex-direction="column" gap="m">
        {filteredWcagList.map((wcagObject) => (
          <GdsCard key={wcagObject.id} role="listitem">
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
            <GdsFlex flex-direction="column; s{row}" gap="m" padding="m">
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
                  <details>
                    <summary>Hur du kan testa</summary>
                    <GdsDiv border="outline">
                      <GdsFlex flex-direction="column" gap="m">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: marked.parse(
                              wcagObject.howToTest?.content ?? '',
                            ),
                          }}
                        />
                      </GdsFlex>
                    </GdsDiv>
                  </details>
                </GdsCard>
              </GdsFlex>
              <GdsFlex flex="1" flex-direction="column" gap="m">
                <GdsDropdown
                  value={wcagObject.status || ''}
                  onInput={(e) =>
                    updateWcagItem(
                      wcagObject.id,
                      (e.target as any).value,
                      wcagObject.comment || '',
                    )
                  }
                >
                  <GdsOption value="" isplaceholder="">
                    Välj status
                  </GdsOption>
                  {Object.values(A11yStatus).map((status) => (
                    <GdsOption key={status} value={status}>
                      {status}
                    </GdsOption>
                  ))}
                </GdsDropdown>
                <GdsTextarea
                  value={wcagObject.comment || ''}
                  placeholder="Lägg till kommentar"
                  onInput={(e) =>
                    updateWcagItem(
                      wcagObject.id,
                      wcagObject.status || '',
                      (e.target as any).value,
                    )
                  }
                ></GdsTextarea>
              </GdsFlex>
            </GdsFlex>
          </GdsCard>
        ))}
      </GdsFlex>
    </GdsFlex>
  )
}
