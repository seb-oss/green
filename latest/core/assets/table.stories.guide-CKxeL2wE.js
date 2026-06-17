import{u as o,j as e,M as l}from"./iframe-BQBiNmH_.js";import"./preload-helper-PPVm8Dsz.js";function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/Table/Developer Guide"}),`
`,e.jsx(n.h1,{id:"table-developer-guide",children:"Table Developer Guide"}),`
`,e.jsx(n.p,{children:"This guide explains how to implement the table component with data handling, pagination, slot-based cell composition, and filtering."}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#data-model-structure",children:"Data Model Structure"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#data-provider-function",children:"Data Provider Function"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#column-configuration",children:"Column Configuration"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#slot-based-cell-composition",children:"Slot-Based Cell Composition"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#sticky-columns",children:"Sticky Columns"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#action-column-slot-based",children:"Action Column (Slot-Based)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#expandable-rows",children:"Expandable Rows"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#table-footer-row",children:"Table Footer Row"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#framework-integration",children:"Framework Integration"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#selection-handling",children:"Selection Handling"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#custom-state-slots",children:"Custom State Slots"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#reactive-properties",children:"Reactive Properties"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#best-practices",children:"Best Practices"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#migration-guide-cell-types-to-slots",children:"Migration Guide: Cell Types to Slots"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"data-model-structure",children:"Data Model Structure"}),`
`,e.jsx(n.h3,{id:"request-interface",children:"Request Interface"}),`
`,e.jsx(n.p,{children:"The table sends this request object to your data provider:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface TableRequest {
  page: number              // Current page (1-indexed)
  rows: number              // Rows per page
  sortColumn?: string       // Column key to sort by
  sortDirection?: 'asc' | 'desc'
  searchQuery?: string      // Search term
}
`})}),`
`,e.jsx(n.h3,{id:"response-interface",children:"Response Interface"}),`
`,e.jsx(n.p,{children:"Your data provider must return:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface TableResponse<T> {
  rows: T[]                 // Array of data rows
  total: number             // Total count (for pagination)
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"data-provider-function",children:"Data Provider Function"}),`
`,e.jsx(n.p,{children:"The data provider handles fetching, filtering, sorting, and pagination."}),`
`,e.jsx(n.h3,{id:"server-side-implementation",children:"Server-Side Implementation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const dataProvider = async (
  request: TableRequest
): Promise<TableResponse<DataRow>> => {
  const response = await fetch('/api/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  })
  
  const data = await response.json()
  
  return {
    rows: data.items,
    total: data.totalCount,
  }
}
`})}),`
`,e.jsx(n.h3,{id:"client-side-implementation",children:"Client-Side Implementation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const allData: DataRow[] = [
  // Your complete dataset
]

const dataProvider = async (
  request: TableRequest
): Promise<TableResponse<DataRow>> => {
  await new Promise(resolve => setTimeout(resolve, 300))
  
  let processedData = [...allData]
  
  // Apply search filter
  if (request.searchQuery) {
    const query = request.searchQuery.toLowerCase()
    processedData = processedData.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(query)
      )
    )
  }
  
  // Apply sorting
  if (request.sortColumn) {
    processedData.sort((a, b) => {
      const aValue = String(a[request.sortColumn as keyof DataRow])
      const bValue = String(b[request.sortColumn as keyof DataRow])
      
      return request.sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    })
  }
  
  // Apply pagination
  const startIndex = (request.page - 1) * request.rows
  const endIndex = startIndex + request.rows
  const paginatedData = processedData.slice(startIndex, endIndex)
  
  return {
    rows: paginatedData,
    total: processedData.length,
  }
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"column-configuration",children:"Column Configuration"}),`
`,e.jsx(n.h3,{id:"type-imports",children:"Type Imports"}),`
`,e.jsx(n.p,{children:"All table-related TypeScript types are exported from the component for use in your application:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type { Types } from '@sebgroup/green-core/components/table'

// Use the types
const columns: Types.Column[] = [...]
const dataProvider = async (request: Types.Request): Promise<Types.Response<DataRow>> => {...}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Why ",e.jsx(n.code,{children:"import type"}),"?"]})," A regular ",e.jsx(n.code,{children:"import { Types }"})," triggers ",e.jsx(n.code,{children:"GdsTable.define()"})," as a side effect, defeating tree-shaking. ",e.jsx(n.code,{children:"import type"})," is erased at compile time, avoiding this. The ",e.jsx(n.code,{children:"Slot"})," helper is imported directly from ",e.jsx(n.code,{children:"table.types"})," for the same reason."]}),`
`]}),`
`,e.jsx(n.h3,{id:"basic-column",children:"Basic Column"}),`
`,e.jsx(n.p,{children:"A column configuration maps data properties to table columns with display and behavior options."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const columns: Types.Column[] = [
  {
    key: 'title',     // Property key in your data row object
    label: 'Title',   // Column header text displayed to users
    sortable: true,   // Enables click-to-sort on column header
    align: 'start',   // Vertical alignment: 'start' | 'center' | 'stretch' | 'end'
    justify: 'start', // Justify content horizontally: 'start' | 'center' | 'space-between' | 'end'
    visible: true,    // Controls column visibility (used on the settings dropdown)
    width: '200px',   // Fixed column width (When set content wraps automatically)
  }
]
`})}),`
`,e.jsx(n.h3,{id:"custom-value-extractor",children:"Custom Value Extractor"}),`
`,e.jsxs(n.p,{children:["The optional ",e.jsx(n.code,{children:"value"})," function lets you control what raw value the table uses for display, sorting, and search. This is useful when your row data shape doesn't match a simple key lookup:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  key: 'fullName',
  label: 'Full Name',
  sortable: true,
  value: (row) => \`\${row.firstName} \${row.lastName}\`,
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"slot-based-cell-composition",children:"Slot-Based Cell Composition"}),`
`,e.jsxs(n.p,{children:["The table uses a ",e.jsx(n.strong,{children:"slot composition model"})," for rich cell content. Instead of declaring cell types in column configuration, you use the ",e.jsx(n.code,{children:"Slot()"})," helper and named HTML slots to inject any Green Design System component (or custom HTML) into cells."]}),`
`,e.jsx(n.p,{children:"This approach gives you full control over cell rendering any component, any layout, any interaction without the table needing to know about the content."}),`
`,e.jsx(n.h3,{id:"how-it-works",children:"How It Works"}),`
`,e.jsx(n.p,{children:"The slot system has three steps:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Wrap cell values"})," with ",e.jsx(n.code,{children:"Slot()"})," in your data provider to declare which slots each cell uses"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Listen"})," for the ",e.jsx(n.code,{children:"gds-table-data-loaded"})," event"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Render slot content"})," into the table's light DOM using named slot elements"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"the-slot-helper",children:["The ",e.jsx(n.code,{children:"Slot()"})," Helper"]}),`
`,e.jsxs(n.p,{children:["Import the ",e.jsx(n.code,{children:"Slot"})," function from the types file directly to avoid the component side-effect:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Slot } from '@sebgroup/green-core/components/table/table.types'
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Slot()"})," wraps a cell value and declares slot positions:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`Slot(value, slots, key?)
`})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value"})}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"The fallback display value (also used for sorting and search)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"slots"})}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:"Ordered array of slot IDs that define the cell layout"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"key"})}),e.jsx("td",{children:e.jsx("code",{children:"string | number"})}),e.jsxs("td",{children:["Optional custom row key (defaults to ",e.jsx("code",{children:"row.id"})," or row index)"]})]})]})]}),`
`,e.jsxs(n.p,{children:["The special slot ID ",e.jsx(n.code,{children:"'value'"})," renders the plain text value inline. All other IDs create named slot elements."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Text value with a trailing copy button
Slot(row.email, ['value', 'copy-button'])
//    ↑ value     ↑ renders text   ↑ renders <slot name="email:ROW_KEY:copy-button">

// Only slotted content, no plain text
Slot(row.status, ['status'])
//    ↑ used for sort/search   ↑ renders <slot name="status:ROW_KEY:status">

// Leading image, then text value
Slot(row.name, ['avatar', 'value'])
//                ↑ slot        ↑ plain text
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Slot()"})," objects transparently participate in sorting, searching, and string operations the table uses the ",e.jsx(n.code,{children:"value"})," parameter for all comparisons."]}),`
`]}),`
`,e.jsx(n.h3,{id:"slot-naming-convention",children:"Slot Naming Convention"}),`
`,e.jsx(n.p,{children:"All cell slots follow the pattern:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`columnKey:rowKey:slotId
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"columnKey"})," The ",e.jsx(n.code,{children:"key"})," from the column configuration (e.g. ",e.jsx(n.code,{children:"'name'"}),", ",e.jsx(n.code,{children:"'email'"}),", ",e.jsx(n.code,{children:"'status'"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"rowKey"})," Resolved in order: custom ",e.jsx(n.code,{children:"Slot"})," key → ",e.jsx(n.code,{children:"row.id"})," → row index + 1"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"slotId"})," The arbitrary string you defined in the ",e.jsx(n.code,{children:"slots"})," array"]}),`
`]}),`
`,e.jsx(n.h3,{id:"step-1-define-slots-in-row-data",children:"Step 1: Define Slots in Row Data"}),`
`,e.jsxs(n.p,{children:["Wrap cell values that need rich content with ",e.jsx(n.code,{children:"Slot()"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const defineSlots = (row: any) => ({
  ...row,
  name:     Slot(row.name, ['avatar', 'value']),       // image + text
  email:    Slot(row.email, ['value', 'copy-button']),  // text + button
  status:   Slot(row.status, ['status']),               // badge only
  amount:   Slot(row.amount, ['amount', 'currency']),   // formatted number + badge
  account:  Slot(row.account, ['main']),                // formatted account
  login:    Slot(row.lastLogin, ['main']),              // formatted date
  download: Slot(row.download ?? '#', ['main']),        // link
})
`})}),`
`,e.jsxs(n.p,{children:["Cells without ",e.jsx(n.code,{children:"Slot()"})," render as plain text automatically."]}),`
`,e.jsx(n.h3,{id:"step-2-listen-for-data-loaded",children:"Step 2: Listen for Data Loaded"}),`
`,e.jsxs(n.p,{children:["The table emits ",e.jsx(n.code,{children:"gds-table-data-loaded"})," after each data fetch. The event detail contains the current page rows. Use this to render slot content into the table's light DOM:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`table.addEventListener('gds-table-data-loaded', (e) => {
  render(slotContent(e.detail.rows), table)
})
`})}),`
`,e.jsx(n.h3,{id:"step-3-render-slot-content",children:"Step 3: Render Slot Content"}),`
`,e.jsxs(n.p,{children:["Create slot elements using the ",e.jsx(n.code,{children:"columnKey:rowKey:slotId"})," naming convention:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const slotContent = (rows) => html\`
  \${rows.map((row) => html\`
    <!-- name column: avatar image -->
    <gds-img
      slot="name:\${row.id}:avatar"
      src="\${row.avatarUrl}"
      alt="\${String(row.name)}"
      width="xl"
      height="xl"
    ></gds-img>

    <!-- email column: copy button -->
    <gds-button
      slot="email:\${row.id}:copy-button"
      rank="tertiary"
      size="small"
    >
      <gds-icon-copy></gds-icon-copy>
    </gds-button>

    <!-- status column: badge -->
    <gds-badge
      slot="status:\${row.id}:status"
      variant="\${String(row.status) === 'Active' ? 'positive' : 'negative'}"
      size="small"
    >
      \${String(row.status)}
    </gds-badge>

    <!-- amount column: formatted number + currency badge -->
    <gds-formatted-number
      slot="amount:\${row.id}:amount"
      .value=\${row.amount}
    ></gds-formatted-number>
    <gds-badge slot="amount:\${row.id}:currency" size="small">
      SEK
    </gds-badge>

    <!-- account column: formatted account -->
    <gds-formatted-account
      slot="account:\${row.id}:main"
      account="\${row.account}"
      format="seb-account"
    ></gds-formatted-account>

    <!-- login column: formatted date -->
    <gds-formatted-date
      slot="login:\${row.id}:main"
      .value="\${String(row.login)}"
      locale="sv-SE"
      format="dateLong"
    ></gds-formatted-date>

    <!-- download column: link with icon -->
    <gds-link
      slot="download:\${row.id}:main"
      href="\${row.download ?? '#'}"
      text-decoration="underline"
      download
    >
      Download file
      <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
    </gds-link>
  \`)}
\`
`})}),`
`,e.jsx(n.h3,{id:"multiple-slots-in-a-single-cell",children:"Multiple Slots in a Single Cell"}),`
`,e.jsxs(n.p,{children:["A cell can have multiple slot positions. The order in the ",e.jsx(n.code,{children:"slots"})," array controls the layout order:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Image on the left, text in the middle, badge on the right
Slot(row.name, ['avatar', 'value', 'verified-badge'])
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:'<gds-img slot="name:${row.id}:avatar" src="${row.avatar}" width="xl" height="xl"></gds-img>\n<gds-badge slot="name:${row.id}:verified-badge" variant="positive" size="small">Verified</gds-badge>\n'})}),`
`,e.jsx(n.h3,{id:"multiple-elements-in-a-single-slot",children:"Multiple Elements in a Single Slot"}),`
`,e.jsx(n.p,{children:"Multiple elements can share the same slot name. They render in DOM order within that slot position:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Two buttons sharing the same slot -->
<gds-button slot="actions:\${row.id}:main" rank="tertiary" size="small">
  <gds-icon-pin></gds-icon-pin> Activate
</gds-button>
<gds-button slot="actions:\${row.id}:main" rank="tertiary" size="small">
  <gds-icon-cross-small></gds-icon-cross-small> Delete
</gds-button>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sticky-columns",children:"Sticky Columns"}),`
`,e.jsx(n.p,{children:"The table supports built-in sticky behavior and user-defined sticky columns."}),`
`,e.jsx(n.h3,{id:"default-sticky-behavior",children:"Default Sticky Behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The expand toggle column is sticky on the left by default when expandable rows are present."}),`
`,e.jsxs(n.li,{children:["The selection checkbox column (",e.jsx(n.code,{children:"selectable"}),") is sticky on the left by default."]}),`
`,e.jsx(n.li,{children:"These built-in sticky columns stay visible while horizontally scrolling."}),`
`]}),`
`,e.jsx(n.h3,{id:"user-defined-sticky-columns",children:"User-Defined Sticky Columns"}),`
`,e.jsxs(n.p,{children:["You can make any data column sticky by setting ",e.jsx(n.code,{children:"sticky: 'left'"})," or ",e.jsx(n.code,{children:"sticky: 'right'"})," in the column definition:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const columns: Types.Column[] = [
  { key: 'name', label: 'Name', sticky: 'left' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Actions', sticky: 'right', justify: 'end' },
]
`})}),`
`,e.jsx(n.h3,{id:"how-offsets-are-calculated",children:"How Offsets Are Calculated"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Left sticky offsets are calculated from left to right."}),`
`,e.jsx(n.li,{children:"Right sticky offsets are calculated from right to left."}),`
`,e.jsx(n.li,{children:"Offsets are measured from actual rendered header widths, so mixed widths and responsive content are handled automatically."}),`
`,e.jsxs(n.li,{children:["Built-in left sticky columns (expander/checkbox) are included before user-defined ",e.jsx(n.code,{children:"sticky: 'left'"})," columns."]}),`
`]}),`
`,e.jsx(n.p,{children:"This means you can combine built-in sticky controls with custom sticky data columns and the table will keep alignment and divider behavior consistent."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"action-column-slot-based",children:"Action Column (Slot-Based)"}),`
`,e.jsxs(n.p,{children:["Action cells are regular table columns. There is no dedicated ",e.jsx(n.code,{children:"actions"})," property."]}),`
`,e.jsx(n.h3,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(n.p,{children:["Define an ",e.jsx(n.code,{children:"actions"})," column in ",e.jsx(n.code,{children:"columns"})," and set slot values in row data:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const columns: Types.Column[] = [
  // ...other columns
  {
    key: 'actions',
    label: 'Actions',
    justify: 'end',
    sticky: 'right',
  },
]

const defineSlots = (row: RowData) => ({
  ...row,
  actions: Slot(undefined, ['main']),
})
`})}),`
`,e.jsx(n.h3,{id:"slot-content",children:"Slot Content"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"actions:rowKey:main"})," slot:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const actionSlotContent = (rows) => html\`
  \${rows.map((row) => html\`
    <gds-context-menu slot="actions:\${row.id}:main">
      <gds-button slot="trigger" rank="tertiary" size="small">
        <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
      </gds-button>
      <gds-menu-item>Edit \${String(row.name)}</gds-menu-item>
      <gds-menu-item>Delete</gds-menu-item>
    </gds-context-menu>
  \`)}
\`
`})}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"sticky: 'right'"})," on the column to keep actions visible while horizontally scrolling."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"expandable-rows",children:"Expandable Rows"}),`
`,e.jsx(n.p,{children:"Rows drive expansion through row metadata. The table renders a toggle column automatically when expandable rows exist."}),`
`,e.jsx(n.h3,{id:"two-expansion-modes",children:"Two Expansion Modes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Child rows:"})," provide a ",e.jsx(n.code,{children:"subRows"})," function that returns a promise of nested rows. ",e.jsx("br",{}),"The table shows skeleton rows while resolving ",e.jsx(n.code,{children:"subRows"}),", then renders children using the same column structure. Consumers can resolve immediately with pre-fetched data or after a dynamic fetch."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Custom content:"})," place content in ",e.jsx(n.code,{children:'slot="expand:ROW_KEY:full"'})," and optionally provide a ",e.jsx(n.code,{children:"fullContent"})," readiness signal. ",e.jsx("br",{}),"ROW_KEY is ",e.jsx(n.code,{children:"row.id"})," if present, otherwise the 1-based row index. The ",e.jsx(n.code,{children:"fullContent"})," function returns a ",e.jsx(n.code,{children:"Promise<boolean>"})," that tells the table when the slotted content is ready (e.g. after fetching data). While the promise is pending, the table shows a loading skeleton."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-table .columns=\${columns} .data=\${dataProvider}>
  <gds-card slot="expand:42:full">
    Any content here spans all columns.
  </gds-card>
</gds-table>
`})}),`
`,e.jsxs(n.p,{children:["The table infers expandability automatically. A row is expandable if it has a ",e.jsx(n.code,{children:"subRows"})," function, a ",e.jsx(n.code,{children:"fullContent"})," function, or if a matching ",e.jsx(n.code,{children:"expand:ROW_KEY:full"})," slot is present. You can explicitly control it with row-level ",e.jsx(n.code,{children:"isExpandable"}),"."]}),`
`,e.jsx(n.h3,{id:"configuration-1",children:"Configuration"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type AccountRow = Types.Row<{
  id: string
  name: string
  accountNumber: number
}>

const dataProvider = async (): Promise<Types.TableResponse<AccountRow>> => {
  return {
    rows: [
      {
        id: '1',
        name: 'Operating Account',
        accountNumber: 50011012345,
        // Optional: force expandability even before async data resolves.
        isExpandable: true,
        // Controls how many placeholder child rows are shown while loading.
        // Use an estimate close to the expected async result for stable layout.
        subRowCount: 2,
        // Returns a promise of child rows. Resolved on demand when expanded.
        subRows: async () => {
          // Fetch or resolve sub rows lazily (on demand per expanded row).
          return [
            {
              id: '1-1',
              name: 'Payroll Batch',
              accountNumber: 50011012345,
            },
            {
              id: '1-2',
              name: 'Tax Reserve',
              accountNumber: 50011012345,
            },
          ]
        },
      },
    ],
    total: 1,
  }
}

const rows: AccountRow[] = [
  {
    id: '1',
    name: 'Operating Account',
    accountNumber: 50011012345,
    // Per-row accessibility labels for the expand/collapse button.
    isExpandable: true,
    expandLabel: 'Expand row',
    collapseLabel: 'Collapse row',
    // Same loading placeholder behavior while subRows resolves.
    subRowCount: 2,
    // Returns a promise of child rows. Resolve immediately or after fetching.
    subRows: async () => [
      {
        id: '1-1',
        name: 'Payroll Batch',
        accountNumber: 50011012345,
      },
      {
        id: '1-2',
        name: 'Tax Reserve',
        accountNumber: 50011012345,
      },
    ],
  },
  {
    id: '2',
    name: 'Treasury Reserve',
    accountNumber: 50011012801,
    // Full-width details mode (instead of child rows in table columns).
    isExpandable: true,
    // Used as a fallback placeholder size while fullContent promise resolves.
    subRowCount: 1,
    // Readiness signal: resolves when slotted content is ready to display.
    // The actual content comes from slot="expand:2:full".
    fullContent: async () => {
      // Optional: fetch data and update slot content before resolving.
      return true
    },
  },
]
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-table
  .columns=\${columns}
  .data=\${dataProvider}
>
  <!-- Full-width expanded content for row 2, rendered via slot -->
  <gds-card slot="expand:2:full">
    <gds-text>Reserve details loaded.</gds-text>
  </gds-card>
</gds-table>
`})}),`
`,e.jsx(n.h3,{id:"programmatic-api",children:"Programmatic API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const table = document.querySelector('gds-table')

await table.expandRow(0)
table.collapseRow(0)
await table.toggleRowExpansion(1)
const expanded = table.getExpandedIndices()
`})}),`
`,e.jsxs(n.p,{children:["Expansion changes emit ",e.jsx(n.code,{children:"gds-table-expand-change"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  index: number
  row: RowData
  expanded: boolean
  expandedIndices: number[]
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"table-footer-row",children:"Table Footer Row"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"tfoot"})," property adds a tfoot footer row at the bottom of the table for displaying aggregated values. The table doesn't compute aggregations  it provides slot insertion points and you render whatever content you need (sums, averages, counts, formatted values, badges, etc.)."]}),`
`,e.jsxs(n.p,{children:["When a ",e.jsx(n.code,{children:"label"})," is provided, the first cell renders as a ",e.jsx(n.code,{children:"th"})," with ",e.jsx(n.code,{children:'scope="row"'})," for proper accessibility semantics."]}),`
`,e.jsx(n.h3,{id:"configuration-2",children:"Configuration"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface Tfoot {
  label?: string     // Optional label in the first cell (renders as <th scope="row">)
  sticky?: boolean   // Pin to the bottom of the scroll area
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Minimal  no label, just slot content
const tfoot: Types.Tfoot = {
  sticky: true,
}

// With an explicit label in the first cell
const tfoot: Types.Tfoot = {
  label: 'Total',
  sticky: true,
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:"<gds-table .tfoot=${tfoot} .columns=${columns} .data=${dataProvider}></gds-table>\n"})}),`
`,e.jsx(n.h3,{id:"slot-naming-convention-1",children:"Slot Naming Convention"}),`
`,e.jsxs(n.p,{children:["Table footer slots use the pattern ",e.jsx(n.code,{children:"tfoot:columnKey"})," where ",e.jsx(n.strong,{children:"columnKey"})," matches the ",e.jsx(n.code,{children:"key"})," from the column configuration. For example: ",e.jsx(n.code,{children:"tfoot:name"}),", ",e.jsx(n.code,{children:"tfoot:amount"}),", ",e.jsx(n.code,{children:"tfoot:status"}),"."]}),`
`,e.jsx(n.h3,{id:"rendering-footer-content",children:"Rendering Footer Content"}),`
`,e.jsxs(n.p,{children:["Compute your aggregations in the ",e.jsx(n.code,{children:"gds-table-data-loaded"})," handler and render slot elements:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const tfootContent = (rows) => {
  const totalAmount = rows.reduce(
    (sum, row) => sum + (Number(row.amount) || 0),
    0,
  )

  return html\`
    <span slot="tfoot:name">\${rows.length} Users</span>

    <gds-formatted-number
      slot="tfoot:amount"
      .value=\${totalAmount}
    ></gds-formatted-number>

    <gds-badge slot="tfoot:status" variant="information" size="small">
      \${rows.length} rows
    </gds-badge>
  \`
}

table.addEventListener('gds-table-data-loaded', (e) => {
  render(
    html\`
      \${slotContent(e.detail.rows)}
      \${tfootContent(e.detail.rows)}
    \`,
    table,
  )
})
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The footer row receives only the current page's rows via the ",e.jsx(n.code,{children:"gds-table-data-loaded"})," event. For grand totals across all pages, compute them server-side or from your full dataset and pass them into the slot content."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"framework-integration",children:"Framework Integration"}),`
`,e.jsx(n.p,{children:"The table works across all frameworks. Explore full, interactive code examples for each framework in the playground:"}),`
`,e.jsxs("div",{style:{display:"flex",gap:"8px",margin:"16px 0"},children:[e.jsx("a",{href:"https://seb.io/studio/playground/table?preset=users&framework=lit&view=code",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"6px 14px",borderRadius:"999px",background:"#000",color:"#fff",textDecoration:"none",fontSize:"13px"},children:"Lit"}),e.jsx("a",{href:"https://seb.io/studio/playground/table?preset=users&framework=react&view=code",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"6px 14px",borderRadius:"999px",background:"#000",color:"#fff",textDecoration:"none",fontSize:"13px"},children:"React"}),e.jsx("a",{href:"https://seb.io/studio/playground/table?preset=users&framework=angular&view=code",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"6px 14px",borderRadius:"999px",background:"#000",color:"#fff",textDecoration:"none",fontSize:"13px"},children:"Angular"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"selection-handling",children:"Selection Handling"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"selectable"})," property enables row selection with checkbox controls."]}),`
`,e.jsx(n.h3,{id:"selection-events",children:"Selection Events"}),`
`,e.jsxs(n.p,{children:["The table emits ",e.jsx(n.code,{children:"gds-table-selection"})," events when selection changes:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`table.addEventListener('gds-table-selection', (e) => {
  console.log('Selected indices:', e.detail.selectedIndices)  // [0, 2, 5]
  console.log('Selected data:', e.detail.selectedData)        // [row0, row2, row5]
  console.log('Count:', e.detail.count)                       // 3
})
`})}),`
`,e.jsx(n.h3,{id:"selection-methods",children:"Selection Methods"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const table = document.querySelector('gds-table')

// Programmatic selection
table.setSelection([0, 2, 5])  // Select specific rows by index
table.selectAll()               // Select all rows
table.clearSelection()          // Clear all selections

// Get current selection
const selection = table.getSelection()
console.log(selection.indices)  // [0, 2, 5]
console.log(selection.data)     // [row0, row2, row5]
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"custom-state-slots",children:"Custom State Slots"}),`
`,e.jsx(n.p,{children:"The table provides three slots to customize empty and error states. Each slot has a default fallback that displays if no custom content is provided."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Available slots:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"error"})," Shown when the data provider throws an error"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"empty"})," Shown when the data provider returns zero rows with no active search"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"no-results"})," Shown when the data provider returns zero rows with an active search query"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-table .columns=\${columns} .data=\${dataProvider} searchable>
  <!-- Error state -->
  <gds-flex slot="error" flex-direction="column" gap="s">
    <gds-text font="heading-s">Unable to load data</gds-text>
    <gds-text font="detail-m-book">
      An error occurred. Please try again.
    </gds-text>
    <gds-button size="small" @click=\${retry}>Retry</gds-button>
  </gds-flex>

  <!-- Empty state (no data at all) -->
  <gds-flex slot="empty" flex-direction="column" gap="s">
    <gds-text font="heading-s">No data available</gds-text>
    <gds-text font="detail-m-book">
      There are no records to display.
    </gds-text>
  </gds-flex>

  <!-- No results state (search returned nothing) -->
  <gds-flex slot="no-results" flex-direction="column" gap="s">
    <gds-text font="heading-s">No matches found</gds-text>
    <gds-text font="detail-m-book">
      Try different search terms.
    </gds-text>
    <gds-button size="small" @click=\${clearSearch}>
      Clear Search
    </gds-button>
  </gds-flex>
</gds-table>
`})}),`
`,e.jsx(n.h3,{id:"static-layout-slots",children:"Static Layout Slots"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Slot Name"}),e.jsx("th",{children:"Purpose"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"header-lead"})}),e.jsx("td",{children:"Content at the start of the table header bar (after search input)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"header-trail"})}),e.jsx("td",{children:"Content at the end of the table header bar (before settings dropdown)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"footer"})}),e.jsx("td",{children:"Custom content replacing the default pagination footer"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"error"})}),e.jsx("td",{children:"Custom error state when data loading fails"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"empty"})}),e.jsx("td",{children:"Custom empty state when no data exists"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"tfoot:columnKey"})}),e.jsx("td",{children:"Aggregated value content for each column in the tfoot footer row"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"no-results"})}),e.jsx("td",{children:"Custom empty state when search returns nothing"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"reactive-properties",children:"Reactive Properties"}),`
`,e.jsx(n.h3,{id:"page",children:"Page"}),`
`,e.jsxs(n.p,{children:["Setting ",e.jsx(n.code,{children:"page"})," navigates to the specified page and loads the corresponding data."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:'<!-- Attribute -->\n<gds-table page="3" .columns=${columns} .data=${dataProvider}></gds-table>\n\n<!-- Property binding (Lit) -->\n<gds-table .page=${currentPage} .columns=${columns} .data=${dataProvider}></gds-table>\n'})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// Programmatic
const table = document.querySelector('gds-table')
table.page = 5 // Navigates to page 5 and loads data
`})}),`
`,e.jsx(n.h3,{id:"rows",children:"Rows"}),`
`,e.jsxs(n.p,{children:["Setting ",e.jsx(n.code,{children:"rows"})," changes the number of rows per page. This resets to page 1 since changing page size invalidates the current page position."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:'<!-- Attribute -->\n<gds-table rows="25" .columns=${columns} .data=${dataProvider}></gds-table>\n\n<!-- Property binding (Lit) -->\n<gds-table .rows=${rowsPerPage} .columns=${columns} .data=${dataProvider}></gds-table>\n'})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// Programmatic
table.rows = 50 // Shows 50 rows per page, resets to page 1
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx(n.h3,{id:"performance",children:"Performance"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use server-side pagination for large datasets (>1000 rows)"}),`
`,e.jsx(n.li,{children:"Implement debouncing for search queries"}),`
`,e.jsx(n.li,{children:"Cache responses when appropriate"}),`
`,e.jsxs(n.li,{children:["The table caches data provider responses for 5 minutes by default (keyed on page/rows/sort/search). Use ",e.jsx(n.code,{children:"nocache"})," to disable."]}),`
`]}),`
`,e.jsx(n.h3,{id:"column-configuration-1",children:"Column Configuration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep column count reasonable (5-10 visible)"}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"width"})," for columns with long content"]}),`
`,e.jsx(n.li,{children:"Enable sorting only on indexed columns"}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'justify="end"'})," for numeric columns"]}),`
`]}),`
`,e.jsx(n.h3,{id:"user-experience",children:"User Experience"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"searchable"})," boolean to enable search for the data"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"settings"})," to let users customize columns"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"selectable"})," for bulk actions"]}),`
`,e.jsx(n.li,{children:"Provide clear empty and error states"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"migration-guide-cell-types-to-slots",children:"Migration Guide: Cell Types to Slots"}),`
`,e.jsxs(n.p,{children:["This section helps you migrate from the ",e.jsx(n.strong,{children:"old cell type configuration"})," (where cell types were declared in column definitions) to the ",e.jsx(n.strong,{children:"new slot composition model"}),"."]}),`
`,e.jsx(n.h3,{id:"what-changed",children:"What Changed"}),`
`,e.jsxs(n.p,{children:["The old approach embedded cell rendering logic directly in column configuration using a ",e.jsx(n.code,{children:"cell"})," property with predefined types (",e.jsx(n.code,{children:"badge"}),", ",e.jsx(n.code,{children:"button"}),", ",e.jsx(n.code,{children:"link"}),", ",e.jsx(n.code,{children:"image"}),", ",e.jsx(n.code,{children:"context-menu"}),", ",e.jsx(n.code,{children:"formatted-number"}),", etc.). The table component itself was responsible for rendering all cell types."]}),`
`,e.jsxs(n.p,{children:["The new approach moves cell rendering ",e.jsx(n.strong,{children:"out of the table"})," and into your application via web component slots. The table only provides slot insertion points you control what components render in each cell."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Benefits of the new approach:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.strong,{children:"any"})," Green Design System component or custom HTML in cells"]}),`
`,e.jsx(n.li,{children:"No dependency on predefined cell types the table doesn't need to know about your content"}),`
`,e.jsx(n.li,{children:"Compose multiple components in a single cell with full control over order"}),`
`,e.jsx(n.li,{children:"Simpler table internals, better tree-shaking"}),`
`]}),`
`,e.jsx(n.h3,{id:"quick-comparison",children:"Quick Comparison"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:e.jsx("strong",{children:"Side-by-side: Old vs New"})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Old cell types in column config:"})}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const columns = [
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    cell: {
      value: {
        type: 'badge',
        value: (row) => row.status,
        variant: (row) => row.status === 'Active' ? 'positive' : 'negative',
      }
    }
  }
]
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"New slot composition:"})}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// 1. Column (no cell config)
const columns = [
  { key: 'status', label: 'Status', sortable: true }
]

// 2. Define slots in row data with Slot()
const defineSlots = (row) => ({
  ...row,
  status: Slot(row.status, ['badge']),
})

// 3. Render slot content on data load
const slotContent = (rows) => html\`
  \${rows.map((row) => html\`
    <gds-badge
      slot="status:\${row.id}:badge"
      variant="\${String(row.status) === 'Active' ? 'positive' : 'negative'}"
      size="small"
    >\${String(row.status)}</gds-badge>
  \`)}
\`
`})})]}),`
`,e.jsx(n.h3,{id:"step-by-step-migration",children:"Step-by-Step Migration"}),`
`,e.jsxs(n.h4,{id:"1-remove-cell-from-column-definitions",children:["1. Remove ",e.jsx(n.code,{children:"cell"})," from Column Definitions"]}),`
`,e.jsxs(n.p,{children:["Strip the ",e.jsx(n.code,{children:"cell"})," property from all column configurations. Keep ",e.jsx(n.code,{children:"key"}),", ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"sortable"}),", ",e.jsx(n.code,{children:"align"}),", ",e.jsx(n.code,{children:"justify"}),", ",e.jsx(n.code,{children:"visible"}),", and ",e.jsx(n.code,{children:"width"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`  {
    key: 'status',
    label: 'Status',
    sortable: true,
-   cell: {
-     value: {
-       type: 'badge',
-       value: (row) => row.status,
-       variant: (row) => row.status === 'Active' ? 'positive' : 'negative',
-     }
-   }
  }
`})}),`
`,e.jsxs(n.h4,{id:"2-define-slots-in-row-data-with-slot",children:["2. Define Slots in Row Data with ",e.jsx(n.code,{children:"Slot()"})]}),`
`,e.jsxs(n.p,{children:["Create a function that wraps cell values needing rich content with ",e.jsx(n.code,{children:"Slot()"}),"."]}),`
`,e.jsxs(n.p,{children:["For each column that previously had a ",e.jsx(n.code,{children:"cell"})," configuration, decide which slot IDs you need:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Slot } from '@sebgroup/green-core/components/table/table.types'

const defineSlots = (row) => ({
  ...row,
  // Previously: cell.value.type = 'badge'
  status: Slot(row.status, ['badge']),

  // Previously: cell.value.type = 'formatted-number' + trail badge
  amount: Slot(row.amount, ['formatted', 'currency']),

  // Previously: cell.lead.type = 'image', cell.value = plain text
  name: Slot(row.name, ['avatar', 'value']),

  // Previously: cell.value = plain text, cell.trail.type = 'button'
  email: Slot(row.email, ['value', 'copy-btn']),
})
`})}),`
`,e.jsx(n.h4,{id:"3-update-your-data-provider",children:"3. Update Your Data Provider"}),`
`,e.jsxs(n.p,{children:["Call ",e.jsx(n.code,{children:"defineSlots"})," on each row in your data provider response:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`  const dataProvider = async (request) => {
    const response = await fetch('/api/data', { ... })
    const data = await response.json()
    return {
-     rows: data.items,
+     rows: data.items.map(defineSlots),
      total: data.totalCount,
    }
  }
`})}),`
`,e.jsx(n.h4,{id:"4-create-slot-content-renderer",children:"4. Create Slot Content Renderer"}),`
`,e.jsx(n.p,{children:"Write a function that generates the slot HTML for each row:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const slotContent = (rows) => html\`
  \${rows.map((row) => html\`
    <!-- Map each old cell type to its GDS component with slot attribute -->
    ...
  \`)}
\`
`})}),`
`,e.jsx(n.h4,{id:"5-wire-up-the-data-loaded-event",children:"5. Wire Up the Data Loaded Event"}),`
`,e.jsxs(n.p,{children:["Add an event listener for ",e.jsx(n.code,{children:"gds-table-data-loaded"})," and render slot content:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`  <gds-table
    .columns=\${columns}
    .data=\${dataProvider}
+   @gds-table-data-loaded=\${(e) => {
+     render(slotContent(e.detail.rows), tableElement)
+   }}
  ></gds-table>
`})}),`
`,e.jsx(n.h3,{id:"cell-type-migration-reference",children:"Cell Type Migration Reference"}),`
`,e.jsx(n.p,{children:"Below is a mapping of every old cell type to its slot-based equivalent."}),`
`,e.jsx(n.h4,{id:"badge",children:"Badge"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- // Old: column config
- cell: {
-   value: {
-     type: 'badge',
-     value: (row) => row.status,
-     variant: (row) => row.status === 'Active' ? 'positive' : 'negative',
-   }
- }

+ // New: define slots
+ status: Slot(row.status, ['badge'])
+
+ // New: slot content
+ <gds-badge
+   slot="status:\${row.id}:badge"
+   variant="\${String(row.status) === 'Active' ? 'positive' : 'negative'}"
+   size="small"
+ >\${String(row.status)}</gds-badge>
`})}),`
`,e.jsx(n.h4,{id:"image",children:"Image"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- cell: {
-   lead: {
-     type: 'image',
-     src: (row) => row.avatar,
-     width: '32px',
-     height: '32px',
-   },
-   value: (row) => row.name,
- }

+ // New: define slots
+ name: Slot(row.name, ['avatar', 'value'])
+
+ // New: slot content
+ <gds-img
+   slot="name:\${row.id}:avatar"
+   src="\${row.avatarUrl}"
+   alt="\${String(row.name)}"
+   width="xl" height="xl"
+ ></gds-img>
`})}),`
`,e.jsx(n.h4,{id:"button",children:"Button"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- cell: {
-   trail: {
-     type: 'button',
-     label: 'Copy',
-     size: 'xs',
-     rank: 'tertiary',
-     onClick: (row) => navigator.clipboard.writeText(row.email),
-   }
- }

+ // New: define slots
+ email: Slot(row.email, ['value', 'copy-btn'])
+
+ // New: slot content
+ <gds-button
+   slot="email:\${row.id}:copy-btn"
+   rank="tertiary" size="small"
+   @click=\${() => navigator.clipboard.writeText(String(row.email))}
+ >
+   <gds-icon-copy></gds-icon-copy>
+ </gds-button>
`})}),`
`,e.jsx(n.h4,{id:"link",children:"Link"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- cell: {
-   value: {
-     type: 'link',
-     label: 'View',
-     href: (row) => \`/items/\${row.id}\`,
-   }
- }

+ // New: define slots
+ link: Slot(row.title, ['main'])
+
+ // New: slot content
+ <gds-link slot="link:\${row.id}:main" href="/items/\${row.id}">
+   View
+ </gds-link>
`})}),`
`,e.jsx(n.h4,{id:"context-menu",children:"Context Menu"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- // New: regular actions column + slot data
+ const columns = [...baseColumns, { key: 'actions', label: 'Actions', justify: 'end', sticky: 'right' }]
+ const rows = data.map((row) => ({ ...row, actions: Slot(undefined, ['main']) }))
+
+ // New: slot content
+ <gds-context-menu slot="actions:\${row.id}:main">
+   <gds-button slot="trigger" rank="tertiary" size="small">
+     <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
+   </gds-button>
+   <gds-menu-item @click=\${() => edit(row)}>Edit</gds-menu-item>
+   <gds-menu-item @click=\${() => remove(row)}>Delete</gds-menu-item>
+ </gds-context-menu>
`})}),`
`,e.jsx(n.h4,{id:"formatted-number",children:"Formatted Number"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- cell: {
-   value: {
-     type: 'formatted-number',
-     value: (row) => row.amount,
-     format: 'decimalsAndThousands',
-     locale: 'sv-SE',
-   }
- }

+ // New: define slots
+ amount: Slot(row.amount, ['formatted'])
+
+ // New: slot content
+ <gds-formatted-number
+   slot="amount:\${row.id}:formatted"
+   .value=\${row.amount}
+ ></gds-formatted-number>
`})}),`
`,e.jsx(n.h4,{id:"formatted-date",children:"Formatted Date"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- cell: {
-   value: {
-     type: 'formatted-date',
-     value: (row) => row.date,
-     format: 'dateLong',
-     locale: 'sv-SE',
-   }
- }

+ // New: define slots
+ date: Slot(row.date, ['main'])
+
+ // New: slot content
+ <gds-formatted-date
+   slot="date:\${row.id}:main"
+   .value="\${String(row.date)}"
+   locale="sv-SE" format="dateLong"
+ ></gds-formatted-date>
`})}),`
`,e.jsx(n.h4,{id:"formatted-account",children:"Formatted Account"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- cell: {
-   value: {
-     type: 'formatted-account',
-     value: (row) => row.accountNumber,
-     format: 'seb-account',
-   }
- }

+ // New: define slots
+ account: Slot(row.account, ['main'])
+
+ // New: slot content
+ <gds-formatted-account
+   slot="account:\${row.id}:main"
+   account="\${row.account}"
+   format="seb-account"
+ ></gds-formatted-account>
`})}),`
`,e.jsx(n.h4,{id:"composite-cells-lead--value--trail",children:"Composite Cells (lead / value / trail)"}),`
`,e.jsxs(n.p,{children:["The old approach used ",e.jsx(n.code,{children:"lead"}),", ",e.jsx(n.code,{children:"value"}),", and ",e.jsx(n.code,{children:"trail"})," slots within the ",e.jsx(n.code,{children:"cell"})," config. The new approach lets you define any number of slot positions in any order:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- cell: {
-   lead: { type: 'image', src: (row) => row.avatar, width: '32px', height: '32px' },
-   value: (row) => row.email,
-   trail: {
-     type: 'badge',
-     value: (row) => row.verified ? 'Verified' : 'Pending',
-     variant: (row) => row.verified ? 'positive' : 'information',
-   }
- }

+ // New: define slots  slot order is flexible
+ email: Slot(row.email, ['avatar', 'value', 'verified'])
+
+ // New: slot content
+ <gds-img slot="email:\${row.id}:avatar" src="\${row.avatar}" width="xl" height="xl"></gds-img>
+ <gds-badge
+   slot="email:\${row.id}:verified"
+   variant="\${row.verified ? 'positive' : 'information'}"
+   size="small"
+ >\${row.verified ? 'Verified' : 'Pending'}</gds-badge>
`})}),`
`,e.jsx(n.h3,{id:"checklist",children:"Checklist"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["[ ] Remove all ",e.jsx(n.code,{children:"cell"})," properties from column configurations"]}),`
`,e.jsxs(n.li,{children:["[ ] Define action cells as a regular ",e.jsx(n.code,{children:"actions"})," column"]}),`
`,e.jsxs(n.li,{children:["[ ] Import ",e.jsx(n.code,{children:"Slot"})," from ",e.jsx(n.code,{children:"@sebgroup/green-core/components/table/table.types"})]}),`
`,e.jsxs(n.li,{children:["[ ] Create a function to define slots in row data, wrapping values with ",e.jsx(n.code,{children:"Slot()"})]}),`
`,e.jsx(n.li,{children:"[ ] Update data provider to call your slot definition function on each row"}),`
`,e.jsx(n.li,{children:"[ ] Create a slot content renderer function"}),`
`,e.jsxs(n.li,{children:["[ ] Add ",e.jsx(n.code,{children:"@gds-table-data-loaded"})," event handler to render slot content"]}),`
`,e.jsxs(n.li,{children:["[ ] Import all Green Design System components used in slot content (",e.jsx(n.code,{children:"gds-badge"}),", ",e.jsx(n.code,{children:"gds-button"}),", etc.)"]}),`
`,e.jsxs(n.li,{children:["[ ] Test sorting and search still work (they use ",e.jsx(n.code,{children:"Slot.value"})," transparently)"]}),`
`]})]})}function i(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{i as default};
