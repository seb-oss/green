'use client'

import * as Core from '@sebgroup/green-core/react'

export default function Table() {
  const mockData = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      status: 'Active',
      role: 'Engineer',
      salary: 95000,
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      status: 'Active',
      role: 'Designer',
      salary: 85000,
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie@example.com',
      status: 'Inactive',
      role: 'Manager',
      salary: 105000,
    },
    {
      id: 4,
      name: 'Diana Prince',
      email: 'diana@example.com',
      status: 'Active',
      role: 'Engineer',
      salary: 98000,
    },
    {
      id: 5,
      name: 'Eve Wilson',
      email: 'eve@example.com',
      status: 'Active',
      role: 'Analyst',
      salary: 78000,
    },
    {
      id: 6,
      name: 'Frank Miller',
      email: 'frank@example.com',
      status: 'Active',
      role: 'Engineer',
      salary: 92000,
    },
    {
      id: 7,
      name: 'Grace Lee',
      email: 'grace@example.com',
      status: 'Inactive',
      role: 'Designer',
      salary: 82000,
    },
    {
      id: 8,
      name: 'Henry Davis',
      email: 'henry@example.com',
      status: 'Active',
      role: 'Manager',
      salary: 110000,
    },
  ]

  const dataProvider = async (request: any) => {
    let filtered = [...mockData]

    if (request.searchQuery) {
      const query = request.searchQuery.toLowerCase()
      filtered = filtered.filter(
        (item: any) =>
          item.name.toLowerCase().includes(query) ||
          item.email.toLowerCase().includes(query),
      )
    }

    if (request.sortColumn) {
      filtered.sort((a: any, b: any) => {
        const aVal = String(a[request.sortColumn])
        const bVal = String(b[request.sortColumn])
        return request.sortDirection === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal)
      })
    }

    const startIndex = (request.page - 1) * request.rows
    const endIndex = startIndex + request.rows
    const paginatedData = filtered.slice(startIndex, endIndex)

    return {
      rows: paginatedData,
      total: filtered.length,
    }
  }

  const columns: any[] = [
    { key: 'id', label: '#', sortable: true, width: '60px' },
    { key: 'name', label: 'Name', sortable: true, width: '200px' },
    { key: 'email', label: 'Email', sortable: true, width: '20px' },
    { key: 'role', label: 'Role', sortable: true, width: '120px' },
    { key: 'status', label: 'Status', sortable: true, width: '100px' },
    {
      key: 'salary',
      label: 'Salary',
      sortable: true,
      align: 'right',
      width: '140px',
    },
  ]

  const actions: any = {
    label: 'Actions',
    cell: {
      type: 'action-menu',
      items: [
        {
          label: 'View Details',
          onClick: (row: any) => alert(`Viewing ${row.name}`),
        },
        {
          label: 'Edit',
          onClick: (row: any) => alert(`Editing ${row.name}`),
        },
        {
          divider: true,
          label: 'Delete',
          onClick: (row: any) => {
            if (confirm(`Delete ${row.name}?`)) {
              console.log('Deleted:', row.name)
            }
          },
        },
      ],
    },
  }

  return (
    <Core.GdsTheme>
      <Core.GdsTable
        selectable
        density="comfortable"
        columns={columns}
        data={dataProvider}
        actions={actions}
        searchable
        height="40vh"
        rows={5}
      >
        <Core.GdsButton slot="header-lead" size="small" rank="secondary">
          Export
        </Core.GdsButton>
        <Core.GdsButton
          slot="header-trail"
          size="small"
          rank="secondary"
          variant="positive"
        >
          Add New
        </Core.GdsButton>
      </Core.GdsTable>
    </Core.GdsTheme>
  )
}
