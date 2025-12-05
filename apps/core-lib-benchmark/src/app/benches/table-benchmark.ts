import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import '@sebgroup/green-core/components/table/index.js'
import '@sebgroup/green-core/components/icon/icons/copy.js'
import { html } from '@sebgroup/green-core/scoping.js'
import type { Column, Request, Response } from '@sebgroup/green-core/components/table/table.types'

type Pokemon = {
  id: number
  name: string
  type: 'fire' | 'water' | 'grass' | 'electric' | 'psychic'
  height: string
  weight: string
  abilities: number
  sprite: string
  baseExp: number
}

@customElement('table-benchmark')
export class TableBenchmark extends LitElement {
  private readonly ROW_COUNT = 20000
  private readonly DATA: Pokemon[] = Array.from({ length: this.ROW_COUNT }, (_, i) => ({
    id: i + 1,
    name: `Pokemon ${i + 1}`,
    type: ['fire', 'water', 'grass', 'electric', 'psychic'][i % 5] as Pokemon['type'],
    height: ((i % 20) + 1) / 10 + ' m',
    weight: ((i % 100) + 1) / 10 + ' kg',
    abilities: (i % 5) + 1,
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(i % 151) + 1}.png`,
    baseExp: (i % 300) + 50
  }))

  private columns: Column[] = [
    { key: 'id', label: '#', sortable: true },
    { 
      key: 'name', 
      label: 'Name', 
      sortable: true, 
      cell: {
        trail: {
          type: 'button',
          value: (row: { email: any }) => row.email,
          size: 'xs',
          slot: 'email-copy',
          label: 'Copy',
          onClick: () => alert('email copied'),
        },
      } 
    },
    {
      key: 'type',
      label: 'Type',
      sortable: true,
      cell: {
        value: {
          type: 'badge',
          value: (row: Pokemon) => row.type,
          variant: (row: Pokemon) => {
            const colors = {
              fire: 'negative',
              water: 'information',
              grass: 'positive',
              electric: 'warning',
              psychic: 'notice'
            } as const
            return colors[row.type]
          },
          size: 'small'
        }
      }
    },
    { key: 'height', label: 'Height', sortable: true, justify: 'end' },
    { key: 'weight', label: 'Weight', sortable: true, justify: 'end' },
    { key: 'abilities', label: 'Abilities', sortable: true, justify: 'end' },
    {
      key: 'baseExp',
      label: 'Base XP',
      sortable: true,
      justify: 'end',
      cell: { value: { type: 'formatted-number', value: row => row.baseExp } }
    }
  ]

  private dataProvider = async (request: Request): Promise<Response<Pokemon>> => {
    const start = performance.now()
    const result: Response<Pokemon> = { rows: this.DATA, total: this.ROW_COUNT }
    const end = performance.now()
    console.log(`DataProvider executed in ${(end - start).toFixed(2)} ms`)
    return result
  }

  render() {
    const start = performance.now()
    const table = html`
      <gds-table 
        selectable
        density="compact"
        .columns=${this.columns}
        .data=${this.dataProvider}
        .options=${[50, 100, 200]}
      >
        <template slot="email-copy">
        <gds-icon-copy size="m" slot="trail"></gds-icon-copy>
      </template>
    </gds-table>
    `
    const end = performance.now()

    return html`
      <div>
        <div>
          <strong>Total Rows:</strong> ${this.ROW_COUNT.toLocaleString()}<br />
          <strong>Render setup time (ms):</strong> ${(end - start).toFixed(2)}
        </div>
        ${table}
      </div>
    `
  }
}
