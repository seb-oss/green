import{u as s,j as e,M as a}from"./iframe-C_OmzNQG.js";function l(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Table/Developer Guide"}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Types } from '@sebgroup/green-core/components/table'

// Use the types
const columns: Types.Column[] = [...]
const dataProvider = async (request: Types.Request): Promise<Types.Response<DataRow>> => {...}
`})}),`
`,e.jsx(n.h3,{id:"basic-column",children:"Basic Column"}),`
`,e.jsx(n.p,{children:"A column configuration maps data properties to table columns with display and behavior options."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const columns: TableColumn[] = [
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
`,e.jsx(n.h3,{id:"cell-slots",children:"Cell Slots"}),`
`,e.jsxs(n.p,{children:["Cell configuration supports three slots: ",e.jsx(n.code,{children:"lead"}),", ",e.jsx(n.code,{children:"value"}),", and ",e.jsx(n.code,{children:"trail"}),". Each slot accepts any of the predefined cell types (badge, button, link, image, context-menu, formatted values) and can contain single or multiple cell definitions."]}),`
`,e.jsxs(n.p,{children:["Cell types correspond to Green Design System components (",e.jsx(n.code,{children:"gds-badge"}),", ",e.jsx(n.code,{children:"gds-button"}),", ",e.jsx(n.code,{children:"gds-link"}),", ",e.jsx(n.code,{children:"gds-img"}),", etc.). Most component properties are available in the cell configuration, with the exception of layout and positioning properties which are handled by the table."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Structure:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`cell: {
  lead?: Cell | Cell[]    // Content before main value
  value?: Cell | Cell[]   // Main cell content
  trail?: Cell | Cell[]   // Content after main value
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example with trail slot:"})}),`
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
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example with multiple slots:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  key: 'email',
  label: 'Email',
  cell: {
    lead: {
      type: 'image',
      src: (row) => row.avatar,
      width: '32px',
      height: '32px',
    },
    value: (row) => row.email,  // Plain text
    trail: {
      type: 'badge',
      value: (row) => row.verified ? 'Verified' : 'Pending',
      variant: (row) => row.verified ? 'positive' : 'information',
    }
  }
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The same cell slot structure applies to the ",e.jsx(n.code,{children:"actions"})," configuration."]}),`
`]}),`
`,e.jsx(n.h3,{id:"cell-types",children:"Cell Types"}),`
`,e.jsx(n.h4,{id:"badge",children:"Badge"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`cell: {
  value: {
    type: 'badge',
    value: (row) => row.status,
    variant: (row) => 'positive' | 'negative' | 'information',
  }
}
`})}),`
`,e.jsx(n.h4,{id:"image",children:"Image"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`cell: {
  value: {
    type: 'image',
    src: (row) => row.imageUrl,
    alt: (row) => row.title,
    width: '48px', // supports all sizing tokens
    height: '48px', // supports all sizing tokens
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
`,e.jsx(n.h4,{id:"formatted-account",children:"Formatted Account"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`cell: {
  value: {
    type: 'formatted-account',
    value: (row) => row.accountNumber,
    format: 'seb-account',
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
`,e.jsx(n.h4,{id:"dynamic-content",children:"Dynamic Content"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Templates can be defined within the table to provide custom content for specific cell types"}),`
`,e.jsxs(n.li,{children:["Templates are referenced using ",e.jsx(n.code,{children:"name"})," attribute"]}),`
`,e.jsxs(n.li,{children:["Can be used to inject for example icons into cell types such as button on ",e.jsx(n.code,{children:"main"}),", ",e.jsx(n.code,{children:"lead"})," or ",e.jsx(n.code,{children:"trail"})," slot."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  key: 'email',
  label: 'Email',
  sortable: true,
  justify: 'space-between',
  cell: {
    trail: {
      type: 'button',
      value: (row: UserData) => row.email,
      size: 'xs',
      template: 'email-copy',  // References template content
    },
  },
}
`})}),`
`,e.jsx(n.h4,{id:"icon",children:"Icon"}),`
`,e.jsx(n.p,{children:"Icons can be used in any cell slot (lead, value, trail) via templates."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`cell: {
  lead: {
    type: 'icon',
    template: 'department-icon',
    size: 'm',        // All the sizing tokens
    color: 'neutral-02', // Optional: Any valid color token
  }
}


**Template definition**

\`\`\`html
<!-- Used as icon button -->
<template name="email-copy">
  <gds-icon-copy></gds-icon-copy>
</template>

<!-- Used as trail icon on link -->
<template name="download-image">
  <gds-icon-cloud-download
    slot="trail" <!-- Slots can be defined here -->
></gds-icon-cloud-download>
</template>

<template name="department-icon">
  <gds-icon-cloud-download></gds-icon-cloud-download>
</template>

<!-- Or with default size/color in template -->
<template name="status-icon">
  <gds-icon-check size="l" color="positive"></gds-icon-check>
</template>

`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"framework-integration",children:"Framework Integration"}),`
`,e.jsx(n.p,{children:"Coming soon..."}),`
`,e.jsx(n.h3,{id:"lit",children:"Lit"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript"})}),`
`,e.jsx(n.h3,{id:"react",children:"React"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx"})}),`
`,e.jsx(n.h3,{id:"angular",children:"Angular"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:` 
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
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"error"})," - Shown when the data provider throws an error"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"empty"})," - Shown when the data provider returns zero rows with no active search"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"no-results"})," - Shown when the data provider returns zero rows with an active search query"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-table .columns=\${columns} .data=\${dataProvider} searchable>
  <!-- Error state -->
  <gds-flex slot="error" flex-direction="column" gap="s">
    <gds-text font="heading-s">Unable to load data</gds-text>
    <gds-text font="detail-book-m">
      An error occurred. Please try again.
    </gds-text>
    <gds-button size="small" @click=\${retry}>Retry</gds-button>
  </gds-flex>

  <!-- Empty state (no data at all) -->
  <gds-flex slot="empty" flex-direction="column" gap="s">
    <gds-text font="heading-s">No data available</gds-text>
    <gds-text font="detail-book-m">
      There are no records to display.
    </gds-text>
  </gds-flex>

  <!-- No results state (search returned nothing) -->
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
`,e.jsx(n.p,{children:"For complete API documentation, see the main Table component documentation."})]})}function r(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{r as default};
