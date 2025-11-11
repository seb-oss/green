import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import '@sebgroup/green-core/components/table/index.js'
import { html } from '@sebgroup/green-core/scoping.js'

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

type Column = {
  key: keyof Pokemon
  label: string
  sortable?: boolean
  align?: 'right' | 'left' | 'center'
  cell?: {
    lead?: {
      type: 'avatar'
      src: (row: Pokemon) => string
      alt: (row: Pokemon) => string
      size?: string
    }
    value?: {
      type: 'badge' | 'formatted-number'
      value: (row: Pokemon) => any
      variant?: (row: Pokemon) => string
      size?: string
    }
  }
}

@customElement('table-benchmark')
export class TableBenchmark extends LitElement {
  private readonly ROW_COUNT = 20000
  private readonly DATA: Pokemon[] = Array.from({ length: this.ROW_COUNT }, (_, i) => ({
    id: i + 1,
    name: `Pokemon ${i + 1}`,
    type: ['fire', 'water', 'grass', 'electric', 'psychic'][i % 5] as Pokemon['type'],
    height: ((i % 20) + 1) / 10 + ' mx',
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
      // cell: {
      //   lead: { type: 'avatar', src: row => row.sprite, alt: row => row.name, size: '32px' }
      // }
    },
    {
      key: 'type',
      label: 'Type',
      sortable: true,
      // cell: {
      //   value: {
      //     type: 'badge',
      //     value: row => row.type,
      //     variant: row => {
      //       const colors: Record<Pokemon['type'], string> = {
      //         fire: 'negative',
      //         water: 'information',
      //         grass: 'positive',
      //         electric: 'warning',
      //         psychic: 'notice'
      //       }
      //       return colors[row.type]
      //     },
      //     size: 'small'
      //   }
      // }
    },
    { key: 'height', label: 'Height', sortable: true, align: 'right' },
    { key: 'weight', label: 'Weight', sortable: true, align: 'right' },
    { key: 'abilities', label: 'Abilities', sortable: true, align: 'right' },
    {
      key: 'baseExp',
      label: 'Base XP',
      sortable: true,
      align: 'right',
      cell: { value: { type: 'formatted-number', value: row => row.baseExp } }
    }
  ]

  private dataProvider = async () => {
    const start = performance.now()
    const result = { data: this.DATA, total: this.ROW_COUNT }
    const end = performance.now()
    console.log(`DataProvider executed in ${(end - start).toFixed(2)} ms`)
    return result
  }

  render() {
    const start = performance.now()
    const table = html`
      <gds-table 
        selectable
        density="comfortable"
        .pageSizes="${[this.ROW_COUNT]}"
        .pageSize="${this.ROW_COUNT}"
        .columns="${this.columns}"
        .dataProvider="${this.dataProvider}"
      ></gds-table>
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
