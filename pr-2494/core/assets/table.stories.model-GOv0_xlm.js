import{u as r,j as e,M as s}from"./iframe-DyW__FZF.js";import"./preload-helper-Dp1pzeXC.js";function a(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Table/Developer Guide"}),`
`,e.jsx(n.h1,{id:"table-developer-guide",children:"Table Developer Guide"}),`
`,e.jsx(n.p,{children:"This guide explains how to implement the table component with data handling, pagination, and filtering."}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#data-model-structure",children:"Data Model Structure"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#data-provider-function",children:"Data Provider Function"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#column-configuration",children:"Column Configuration"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#framework-integration",children:"Framework Integration"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#complete-example",children:"Complete Example"})}),`
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
`,e.jsx(n.h3,{id:"row-type-example",children:"Row Type Example"}),`
`,e.jsx(n.p,{children:"Define your data structure:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface DataRow {
  id: number
  title: string
  description: string
  category: string
  status: 'Active' | 'Inactive'
  amount: number
  date: string
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
`,e.jsx(n.h3,{id:"basic-column",children:"Basic Column"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const columns: TableColumn[] = [
  {
    key: 'title',          // Property key in your data
    label: 'Title',        // Column header text
    sortable: true,        // Enable sorting
  }
]
`})}),`
`,e.jsx(n.h3,{id:"column-with-cell-configuration",children:"Column with Cell Configuration"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  key: 'status',
  label: 'Status',
  sortable: true,
  cell: {
    value: {
      type: 'badge',
      value: (row: DataRow) => row.status,
      variant: (row: DataRow) => 
        row.status === 'Active' ? 'positive' : 'negative',
    }
  }
}
`})}),`
`,e.jsx(n.h3,{id:"available-cell-types",children:"Available Cell Types"}),`
`,e.jsx(n.h4,{id:"badge",children:"Badge"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`cell: {
  value: {
    type: 'badge',
    value: (row) => row.status,
    variant: (row) => 'positive' | 'negative' | 'information',
  }
}
`})}),`
`,e.jsx(n.h4,{id:"button",children:"Button"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`cell: {
  value: {
    type: 'button',
    label: 'Edit',
    size: 'small',
    rank: 'secondary',
    onClick: (row) => console.log('Edit', row),
  }
}
`})}),`
`,e.jsx(n.h4,{id:"link",children:"Link"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`cell: {
  value: {
    type: 'link',
    label: 'View',
    href: (row) => \`/items/\${row.id}\`,
  }
}
`})}),`
`,e.jsx(n.h4,{id:"context-menu",children:"Context Menu"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`cell: {
  value: {
    type: 'context-menu',
    items: [
      {
        label: 'Edit',
        onClick: (row) => console.log('Edit', row),
      },
      {
        label: 'Delete',
        onClick: (row) => console.log('Delete', row),
      },
    ]
  }
}
`})}),`
`,e.jsx(n.h4,{id:"formatted-number",children:"Formatted Number"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`cell: {
  value: {
    type: 'formatted-number',
    value: (row) => row.amount,
    format: 'decimalsAndThousands',
    locale: 'sv-SE',
  }
}
`})}),`
`,e.jsx(n.h4,{id:"formatted-date",children:"Formatted Date"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`cell: {
  value: {
    type: 'formatted-date',
    value: (row) => row.date,
    format: 'dateLong',
    locale: 'sv-SE',
  }
}
`})}),`
`,e.jsx(n.h3,{id:"cell-slots",children:"Cell Slots"}),`
`,e.jsx(n.p,{children:"Add content before (lead) or after (trail) the main value:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  key: 'description',
  label: 'Description',
  cell: {
    trail: {
      type: 'button',
      size: 'xs',
      rank: 'tertiary',
      template: 'copy-icon',
      onClick: (row) => navigator.clipboard.writeText(row.description),
    }
  }
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"framework-integration",children:"Framework Integration"}),`
`,e.jsx(n.h3,{id:"lit",children:"Lit"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { html } from 'lit'
import '@sebgroup/green-core/components/table'

const columns = [
  { key: 'title', label: 'Title', sortable: true },
  { key: 'description', label: 'Description', sortable: true },
]

const dataProvider = async (request) => {
  // Your implementation
}

html\`
  <gds-table
    .columns=\${columns}
    .data=\${dataProvider}
    rows="10"
    searchable
  ></gds-table>
\`
`})}),`
`,e.jsx(n.h3,{id:"react",children:"React"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@sebgroup/green-core/components/table'

function DataTable() {
  const columns = [
    { key: 'title', label: 'Title', sortable: true },
    { key: 'description', label: 'Description', sortable: true },
  ]

  const dataProvider = async (request) => {
    // Your implementation
  }

  return (
    <gds-table
      columns={columns}
      data={dataProvider}
      rows={10}
      searchable
    />
  )
}
`})}),`
`,e.jsx(n.h3,{id:"angular",children:"Angular"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Component } from '@angular/core'
import '@sebgroup/green-core/components/table'

@Component({
  selector: 'app-data-table',
  template: \`
    <gds-table
      [columns]="columns"
      [data]="dataProvider"
      [rows]="10"
      searchable
    ></gds-table>
  \`
})
export class DataTableComponent {
  columns = [
    { key: 'title', label: 'Title', sortable: true },
    { key: 'description', label: 'Description', sortable: true },
  ]

  dataProvider = async (request: any) => {
    // Your implementation
  }
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"complete-example",children:"Complete Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface DataRow {
  id: number
  title: string
  description: string
  category: string
  status: 'Active' | 'Inactive'
  amount: number
  date: string
}

const columns: TableColumn[] = [
  {
    key: 'id',
    label: 'ID',
    sortable: false,
  },
  {
    key: 'title',
    label: 'Title',
    sortable: true,
  },
  {
    key: 'description',
    label: 'Description',
    sortable: true,
    width: '300px',
  },
  {
    key: 'category',
    label: 'Category',
    sortable: true,
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    cell: {
      value: {
        type: 'badge',
        value: (row: DataRow) => row.status,
        variant: (row: DataRow) =>
          row.status === 'Active' ? 'positive' : 'negative',
      }
    }
  },
  {
    key: 'amount',
    label: 'Amount',
    sortable: true,
    justify: 'end',
    cell: {
      value: {
        type: 'formatted-number',
        value: (row: DataRow) => row.amount,
      }
    }
  },
  {
    key: 'date',
    label: 'Date',
    sortable: true,
    cell: {
      value: {
        type: 'formatted-date',
        value: (row: DataRow) => row.date,
        locale: 'sv-SE',
        format: 'dateLong',
      }
    }
  },
]

const actions = {
  label: 'Actions',
  justify: 'end',
  cell: {
    type: 'context-menu',
    items: [
      {
        label: 'Edit',
        onClick: (row: DataRow) => console.log('Edit', row),
      },
      {
        label: 'View Details',
        onClick: (row: DataRow) => console.log('View', row),
      },
      {
        divider: true,
        label: 'Delete',
        onClick: (row: DataRow) => {
          if (confirm(\`Delete \${row.title}?\`)) {
            console.log('Delete', row)
          }
        },
      },
    ]
  }
}

const dataProvider = async (
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

// Usage
html\`
  <gds-table
    .columns=\${columns}
    .actions=\${actions}
    .data=\${dataProvider}
    rows="10"
    .options=\${[5, 10, 25, 50]}
    searchable
    settings
    selectable
    density="comfortable"
  ></gds-table>
\`
`})}),`
`,e.jsx(n.h3,{id:"selection-handling",children:"Selection Handling"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const table = document.querySelector('gds-table')

// Listen to selection changes
table.addEventListener('gds-table-selection', (e) => {
  console.log('Selected:', e.detail.selectedData)
  console.log('Count:', e.detail.count)
})

// Programmatic selection
table.setSelection([0, 2, 5])
table.selectAll()
table.clearSelection()

// Get current selection
const selection = table.getSelection()
`})}),`
`,e.jsx(n.h3,{id:"custom-state-slots",children:"Custom State Slots"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`  <gds-table .columns=\${columns} .data=\${dataProvider} searchable>
    <gds-flex slot="error" flex-direction="column" gap="s">
      <gds-text font="heading-s">Unable to load data</gds-text>
      <gds-text font="detail-book-m">
        An error occurred. Please try again.
      </gds-text>
      <gds-button size="small" @click=\${retry}>Retry</gds-button>
    </gds-flex>

    <gds-flex slot="empty" flex-direction="column" gap="s">
      <gds-text font="heading-s">No data available</gds-text>
      <gds-text font="detail-book-m">
        There are no records to display.
      </gds-text>
    </gds-flex>

    <gds-flex slot="no-results" flex-direction="column" gap="s">
      <gds-text font="heading-s">No matches found</gds-text>
      <gds-text font="detail-book-m">
        Try different search terms.
      </gds-text>
      <gds-button size="small" @click=\${clearSearch}>
        Clear Search
      </gds-button>
    </gds-flex>
  </gds-table>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx(n.h3,{id:"performance",children:"Performance"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use server-side pagination for large datasets (>1000 rows)"}),`
`,e.jsx(n.li,{children:"Implement debouncing for search queries"}),`
`,e.jsx(n.li,{children:"Cache responses when appropriate"}),`
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
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"searchable"})," boolean to enable search for the data."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"settings"})," to let users customize columns"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"selectable"})," for bulk actions"]}),`
`,e.jsx(n.li,{children:"Provide clear empty and error states"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(n.p,{children:"For complete API documentation, see the main Table component documentation."})]})}function i(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{i as default};
