'use client'

import * as Core from '@sebgroup/green-core/react'

export default function Table() {
  const pokemonDataProvider = async (request: any) => {
    const limit = request.pageSize
    const offset = (request.page - 1) * request.pageSize

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    )
    const data = await response.json()

    const detailedData = await Promise.all(
      data.results.map(async (pokemon: any) => {
        const detailResponse = await fetch(pokemon.url)
        const detail = await detailResponse.json()

        return {
          id: detail.id,
          name: detail.name.charAt(0).toUpperCase() + detail.name.slice(1),
          type: detail.types[0]?.type.name || 'unknown',
          height: (detail.height / 10).toFixed(1) + ' m',
          weight: (detail.weight / 10).toFixed(1) + ' kg',
          abilities: detail.abilities.length,
          sprite: detail.sprites.front_default,
          baseExp: detail.base_experience || 0,
        }
      }),
    )

    let filtered = detailedData

    if (request.searchQuery) {
      const query = request.searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p: any) =>
          p.name.toLowerCase().includes(query) ||
          p.type.toLowerCase().includes(query),
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

    return {
      data: filtered,
      total: data.count,
    }
  }

  const columns: any[] = [
    { key: 'id', label: '#', sortable: true },
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      cell: {
        lead: {
          type: 'avatar',
          src: (row: any) => row.sprite,
          alt: (row: any) => row.name,
          size: '32px',
        },
      },
    },
    {
      key: 'type',
      label: 'Type',
      sortable: true,
      cell: {
        value: {
          type: 'badge',
          value: (row: any) => row.type,
          variant: (row: any) => {
            const typeColors: Record<string, string> = {
              fire: 'negative',
              water: 'information',
              grass: 'positive',
              electric: 'warning',
            }
            return typeColors[row.type] || 'notice'
          },
          size: 'small',
        },
      },
    },
    { key: 'height', label: 'Height', sortable: true, align: 'right' },
    { key: 'weight', label: 'Weight', sortable: true, align: 'right' },
    { key: 'abilities', label: 'Abilities', sortable: true, align: 'right' },
    {
      key: 'baseExp',
      label: 'Base XP',
      sortable: true,
      align: 'right',
      cell: {
        value: {
          type: 'formatted-number',
          value: (row: any) => row.baseExp,
        },
      },
    },
  ]

  const actions: any = {
    label: 'Actions',
    cell: {
      type: 'action-menu',
      items: [
        {
          label: 'View Details',
          onClick: (row: any) =>
            window.open(
              `https://pokemondb.net/pokedex/${row.name.toLowerCase()}`,
              '_blank',
            ),
        },
        {
          label: 'Add to Team',
          onClick: (row: any) => alert(`Added ${row.name} to team!`),
        },
        {
          label: 'Compare Stats',
          onClick: (row: any) => console.log('Compare:', row.name),
        },
        {
          divider: true,
          label: 'Release',
          onClick: (row: any) => {
            if (confirm(`Release ${row.name}?`)) {
              console.log('Released:', row.name)
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
        data={pokemonDataProvider}
        actions={actions}
        options={[10, 25, 50, 100]}
      >
        <Core.GdsButton slot="header-lead" size="small" rank="secondary">
          Export Team
        </Core.GdsButton>
        <Core.GdsButton
          slot="header-trail"
          size="small"
          rank="secondary"
          variant="positive"
        >
          Catch New
        </Core.GdsButton>
      </Core.GdsTable>
    </Core.GdsTheme>
  )
}
