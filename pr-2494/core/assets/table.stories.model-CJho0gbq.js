import{u as r,j as e,M as l}from"./iframe-CB9v7xF1.js";import"./preload-helper-Dp1pzeXC.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/Table/Model"}),`
`,e.jsx(n.h1,{id:"table-data-model-guide",children:"Table Data Model Guide"}),`
`,e.jsx(n.p,{children:"This guide explains how to implement the table component with proper data handling, pagination, and filtering."}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#data-model-structure",children:"Data Model Structure"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#data-provider-function",children:"Data Provider Function"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#column-configuration",children:"Column Configuration"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#framework-integration",children:"Framework Integration"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#complete-examples",children:"Complete Examples"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"data-model-structure",children:"Data Model Structure"}),`
`,e.jsx(n.h3,{id:"request-interface",children:"Request Interface"}),`
`,e.jsx(n.p,{children:"The table sends a request object to your data provider:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface TableRequest {
  page: number              // Current page (1-indexed)
  rows: number              // Rows per page
  sortColumn?: string       // Column key to sort by
  sortDirection?: 'asc' | 'desc'
  searchQuery?: string      // Search term from search input
}
`})}),`
`,e.jsx(n.h3,{id:"response-interface",children:"Response Interface"}),`
`,e.jsx(n.p,{children:"Your data provider must return:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface TableResponse<T> {
  rows: T[]                 // Array of data rows
  total: number             // Total count (for pagination)
}
`})}),`
`,e.jsx(n.h3,{id:"row-type",children:"Row Type"}),`
`,e.jsx(n.p,{children:"Define your data structure:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface UserRow {
  id: number
  name: string
  email: string
  role: 'Admin' | 'User' | 'Editor'
  status: 'Active' | 'Inactive'
  lastLogin: string
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"data-provider-function",children:"Data Provider Function"}),`
`,e.jsx(n.p,{children:"The data provider is an async function that handles fetching, filtering, sorting, and pagination."}),`
`,e.jsx(n.h3,{id:"basic-implementation",children:"Basic Implementation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const dataProvider = async (
  request: TableRequest
): Promise<TableResponse<UserRow>> => {
  // 1. Fetch data from your API
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  })
  
  const data = await response.json()
  
  return {
    rows: data.users,
    total: data.totalCount,
  }
}
`})}),`
`,e.jsx(n.h3,{id:"client-side-implementation",children:"Client-Side Implementation"}),`
`,e.jsx(n.p,{children:"If you have all data client-side and want to handle filtering/sorting locally:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const allUsers: UserRow[] = [
  // Your complete dataset
]

const dataProvider = async (
  request: TableRequest
): Promise<TableResponse<UserRow>> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  let processedData = [...allUsers]
  
  // 1. Apply search filter
  if (request.searchQuery) {
    const query = request.searchQuery.toLowerCase()
    processedData = processedData.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(query)
      )
    )
  }
  
  // 2. Apply sorting
  if (request.sortColumn) {
    processedData.sort((a, b) => {
      const aValue = String(a[request.sortColumn as keyof UserRow])
      const bValue = String(b[request.sortColumn as keyof UserRow])
      
      return request.sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    })
  }
  
  // 3. Apply pagination
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
    key: 'name',           // Property key in your data
    label: 'Name',         // Column header text
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
      value: (row: UserRow) => row.status,
      variant: (row: UserRow) => 
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
    size: 'small' | 'medium',
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
    href: (row) => \`/users/\${row.id}\`,
    target: '_blank',
  }
}
`})}),`
`,e.jsx(n.h4,{id:"image",children:"Image"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`cell: {
  lead: {
    type: 'image',
    src: (row) => row.avatarUrl,
    alt: (row) => row.name,
    width: 'xl',
    height: 'xl',
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
    currency: 'SEK',
  }
}
`})}),`
`,e.jsx(n.h4,{id:"formatted-date",children:"Formatted Date"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`cell: {
  value: {
    type: 'formatted-date',
    value: (row) => row.lastLogin,
    format: 'dateLong',
    locale: 'sv-SE',
  }
}
`})}),`
`,e.jsx(n.h3,{id:"cell-slots",children:"Cell Slots"}),`
`,e.jsx(n.p,{children:"You can add content before (lead) or after (trail) the main cell value:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  key: 'email',
  label: 'Email',
  cell: {
    trail: {
      type: 'button',
      size: 'xs',
      rank: 'tertiary',
      template: 'copy-icon',
      onClick: (row) => navigator.clipboard.writeText(row.email),
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
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
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
    settings
  ></gds-table>
\`
`})}),`
`,e.jsx(n.h3,{id:"react",children:"React"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@sebgroup/green-core/components/table'

function UserTable() {
  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
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
      settings
    />
  )
}
`})}),`
`,e.jsx(n.h3,{id:"angular",children:"Angular"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Component } from '@angular/core'
import '@sebgroup/green-core/components/table'

@Component({
  selector: 'app-user-table',
  template: \`
    <gds-table
      [columns]="columns"
      [data]="dataProvider"
      [rows]="10"
      searchable
      settings
    ></gds-table>
  \`
})
export class UserTableComponent {
  columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
  ]

  dataProvider = async (request: any) => {
    // Your implementation
  }
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"complete-examples",children:"Complete Examples"}),`
`,e.jsx(n.h3,{id:"full-user-table-with-all-features",children:"Full User Table with All Features"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface UserRow {
  id: number
  name: string
  email: string
  role: 'Admin' | 'User' | 'Editor'
  status: 'Active' | 'Inactive'
  amount: number
  lastLogin: string
  avatarUrl: string
}

const columns: TableColumn[] = [
  {
    key: 'id',
    label: 'ID',
    sortable: false,
  },
  {
    key: 'name',
    label: 'Name',
    sortable: true,
    cell: {
      lead: {
        type: 'image',
        src: (row: UserRow) => row.avatarUrl,
        alt: (row: UserRow) => row.name,
        width: 'xl',
        height: 'xl',
      }
    }
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
    justify: 'space-between',
    cell: {
      trail: {
        type: 'button',
        size: 'xs',
        rank: 'tertiary',
        template: 'copy-icon',
        onClick: (row: UserRow) => 
          navigator.clipboard.writeText(row.email),
      }
    }
  },
  {
    key: 'role',
    label: 'Role',
    sortable: true,
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    cell: {
      value: {
        type: 'badge',
        value: (row: UserRow) => row.status,
        variant: (row: UserRow) =>
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
        value: (row: UserRow) => row.amount,
      },
      trail: {
        type: 'badge',
        value: 'SEK',
      }
    }
  },
  {
    key: 'lastLogin',
    label: 'Last Login',
    sortable: true,
    cell: {
      value: {
        type: 'formatted-date',
        value: (row: UserRow) => row.lastLogin,
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
        label: (row: UserRow) =>
          row.status === 'Active' ? 'Deactivate' : 'Activate',
        onClick: (row: UserRow) => console.log('Toggle status', row),
      },
      {
        label: 'View Details',
        onClick: (row: UserRow) => console.log('View user', row),
      },
      {
        label: 'Edit Profile',
        onClick: (row: UserRow) => console.log('Edit user', row),
      },
      {
        divider: true,
        label: 'Delete User',
        onClick: (row: UserRow) => {
          if (confirm(\`Delete \${row.name}?\`)) {
            console.log('Delete user', row)
          }
        },
      },
    ]
  }
}

const dataProvider = async (
  request: TableRequest
): Promise<TableResponse<UserRow>> => {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  })
  
  const data = await response.json()
  
  return {
    rows: data.users,
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
    options="[5, 10, 25, 50]"
    searchable
    settings
    selectable
    striped
    density="comfortable"
  >
    <template name="copy-icon">
      <gds-icon-copy></gds-icon-copy>
    </template>
  </gds-table>
\`
`})}),`
`,e.jsx(n.h3,{id:"with-selection-handling",children:"With Selection Handling"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Listen to selection changes
const table = document.querySelector('gds-table')

table.addEventListener('gds-table-selection', (e) => {
  console.log('Selected indices:', e.detail.selectedIndices)
  console.log('Selected data:', e.detail.selectedData)
  console.log('Count:', e.detail.count)
})

// Programmatic selection
table.setSelection([0, 2, 5])  // Select rows by index
table.selectAll()               // Select all rows
table.clearSelection()          // Clear selection

// Get current selection
const selection = table.getSelection()
console.log(selection.indices)  // [0, 2, 5]
console.log(selection.data)     // [row0, row2, row5]
`})}),`
`,e.jsx(n.h3,{id:"with-custom-state-slots",children:"With Custom State Slots"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`html\`
  <gds-table
    .columns=\${columns}
    .data=\${dataProvider}
    searchable
  >
    <gds-flex slot="error" flex-direction="column" gap="s">
      <gds-text font="heading-s">Connection Error</gds-text>
      <gds-text font="detail-book-m">
        Unable to reach the server. Check your connection.
      </gds-text>
      <gds-button size="small" @click=\${retry}>
        Retry
      </gds-button>
    </gds-flex>

    <gds-flex slot="empty" flex-direction="column" gap="s">
      <gds-text font="heading-s">No users yet</gds-text>
      <gds-text font="detail-book-m">
        Get started by adding your first user.
      </gds-text>
      <gds-button size="small" @click=\${openAddDialog}>
        Add User
      </gds-button>
    </gds-flex>

    <gds-flex slot="no-results" flex-direction="column" gap="s">
      <gds-text font="heading-s">No matches</gds-text>
      <gds-text font="detail-book-m">
        Try different search terms.
      </gds-text>
      <gds-button size="small" @click=\${clearSearch}>
        Clear Search
      </gds-button>
    </gds-flex>
  </gds-table>
\`
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx(n.h3,{id:"1-data-provider-performance",children:"1. Data Provider Performance"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Implement server-side pagination for large datasets (>1000 rows)"}),`
`,e.jsx(n.li,{children:"Use debouncing for search queries"}),`
`,e.jsx(n.li,{children:"Cache responses when appropriate"}),`
`,e.jsx(n.li,{children:"Show loading states"}),`
`]}),`
`,e.jsx(n.h3,{id:"2-column-configuration",children:"2. Column Configuration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep column count reasonable (5-10 visible columns)"}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"width"})," property for columns with long content"]}),`
`,e.jsx(n.li,{children:"Enable sorting only on indexed database columns"}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"justify"})," for numeric columns (align right)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"3-user-experience",children:"3. User Experience"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always provide ",e.jsx(n.code,{children:"searchable"})," for tables with >20 rows"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"settings"})," to let users customize visible columns"]}),`
`,e.jsxs(n.li,{children:["Implement ",e.jsx(n.code,{children:"selectable"})," for bulk actions"]}),`
`,e.jsx(n.li,{children:"Provide clear empty and error states"}),`
`]}),`
`,e.jsx(n.h3,{id:"4-accessibility",children:"4. Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Column labels are automatically used as headers"}),`
`,e.jsx(n.li,{children:"Search input has proper ARIA labels"}),`
`,e.jsx(n.li,{children:"Sortable columns announce sort state"}),`
`,e.jsx(n.li,{children:"Selection checkboxes have descriptive labels"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.h3,{id:"table-not-loading-data",children:"Table not loading data"}),`
`,e.jsx(n.p,{children:"Check that your data provider:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Returns a Promise"}),`
`,e.jsxs(n.li,{children:["Returns an object with ",e.jsx(n.code,{children:"rows"})," and ",e.jsx(n.code,{children:"total"})]}),`
`,e.jsx(n.li,{children:"Handles errors properly"}),`
`]}),`
`,e.jsx(n.h3,{id:"sorting-not-working",children:"Sorting not working"}),`
`,e.jsx(n.p,{children:"Ensure:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Column has ",e.jsx(n.code,{children:"sortable: true"})]}),`
`,e.jsxs(n.li,{children:["Data provider handles ",e.jsx(n.code,{children:"sortColumn"})," and ",e.jsx(n.code,{children:"sortDirection"})]}),`
`,e.jsxs(n.li,{children:["Column ",e.jsx(n.code,{children:"key"})," matches your data property names"]}),`
`]}),`
`,e.jsx(n.h3,{id:"search-not-working",children:"Search not working"}),`
`,e.jsx(n.p,{children:"Verify:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Table has ",e.jsx(n.code,{children:"searchable"})," attribute"]}),`
`,e.jsxs(n.li,{children:["Data provider handles ",e.jsx(n.code,{children:"searchQuery"})," parameter"]}),`
`,e.jsx(n.li,{children:"Search logic covers relevant fields"}),`
`]}),`
`,e.jsx(n.h3,{id:"pagination-issues",children:"Pagination issues"}),`
`,e.jsx(n.p,{children:"Confirm:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"total"})," in response matches actual total count"]}),`
`,e.jsx(n.li,{children:"Pagination calculations use 1-indexed pages"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rows"})," parameter is respected in data provider"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(n.p,{children:"For complete API documentation, see the main Table component documentation."})]})}function i(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{i as default};
