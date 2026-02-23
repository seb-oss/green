import { describe, expect, it, vi } from 'vitest'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'
import { aTimeout, fixture, html as testingHtml } from '../../utils/testing'

import type { GdsTable } from './table.component'
import { Slot, isSlotValue } from './table.types'

import '@sebgroup/green-core/components/table'

const html = htmlTemplateTagFactory(testingHtml)

describe('<gds-table>', () => {
  const mockData = async (request: any) => ({
    rows: [
      { id: 1, name: 'Item 1', status: 'Active' },
      { id: 2, name: 'Item 2', status: 'Inactive' },
      { id: 3, name: 'Item 3', status: 'Active' },
    ],
    total: 3,
  })

  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'status', label: 'Status' },
  ]

  describe('Rendering', () => {
    it('should render table', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${mockData}></gds-table>`,
      )

      await el.updateComplete
      const table = el.shadowRoot?.querySelector('table')
      expect(table).toBeDefined()
    })

    it('should render table headers', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${mockData}></gds-table>`,
      )

      await el.updateComplete
      const headers = el.shadowRoot?.querySelectorAll('thead th')
      expect(headers?.length).toBeGreaterThan(0)
    })

    it('should render table rows', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${mockData}></gds-table>`,
      )

      await el.updateComplete
      const rows = el.shadowRoot?.querySelectorAll('tbody tr')
      expect(rows?.length).toBe(3)
    })
  })

  describe('API', () => {
    it('should load data on connect', async () => {
      const dataSpy = vi.fn()
      const wrappedData = async (request: any) => {
        dataSpy(request)
        return mockData(request)
      }

      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${wrappedData}></gds-table>`,
      )

      await el.updateComplete
      expect(dataSpy).toHaveBeenCalled()
    })

    it('should support selectable attribute', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${mockData}
          selectable
        ></gds-table>`,
      )

      await el.updateComplete
      const checkboxes = el.shadowRoot?.querySelectorAll('.rbcb-wrapper')
      expect(checkboxes?.length).toBeGreaterThan(0)
    })

    it('should support striped attribute', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${mockData}
          striped
        ></gds-table>`,
      )

      await el.updateComplete
      expect(el.striped).toBe(true)
    })

    it('should emit selection change event', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${mockData}
          selectable
        ></gds-table>`,
      )

      await el.updateComplete
      const spy = vi.fn()
      el.addEventListener('gds-table-selection', spy)

      el.selectAll()
      await el.updateComplete

      expect(spy).toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('should pass axe smoke test', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${mockData}></gds-table>`,
      )

      await el.updateComplete
      await expect(el).toBeAccessible()
    })
  })

  describe('Caching', () => {
    it('should cache data requests with same parameters', async () => {
      const dataSpy = vi.fn()
      const wrappedData = async (request: any) => {
        dataSpy(request)
        return mockData(request)
      }

      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${wrappedData}></gds-table>`,
      )

      await el.updateComplete
      expect(dataSpy).toHaveBeenCalledTimes(1)

      // Trigger render with same parameters - should use cache
      el.requestUpdate()
      await el.updateComplete
      expect(dataSpy).toHaveBeenCalledTimes(1)
    })

    it('should not cache when nocache is true', async () => {
      const dataSpy = vi.fn()
      const wrappedData = async (request: any) => {
        dataSpy(request)
        return mockData(request)
      }

      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${wrappedData}
          nocache
        ></gds-table>`,
      )

      await el.updateComplete
      expect(dataSpy).toHaveBeenCalledTimes(1)

      // Trigger another load with nocache - should call data again even with same params
      el.dataLoadKey = 'trigger-reload'
      await el.updateComplete
      expect(dataSpy).toHaveBeenCalledTimes(2)
    })

    it('should clear cache when dataLoadKey changes', async () => {
      const dataSpy = vi.fn()
      const wrappedData = async (request: any) => {
        dataSpy(request)
        return mockData(request)
      }

      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${wrappedData}></gds-table>`,
      )

      await el.updateComplete
      expect(dataSpy).toHaveBeenCalledTimes(1)

      // Change dataLoadKey to force cache clear
      el.dataLoadKey = 'new-key'
      await el.updateComplete
      expect(dataSpy).toHaveBeenCalledTimes(2)
    })
  })

  describe('Filtering', () => {
    it('should filter data when search query changes', async () => {
      const dataSpy = vi.fn()
      const wrappedData = async (request: any) => {
        dataSpy(request)
        return mockData(request)
      }

      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${wrappedData}
          searchable
        ></gds-table>`,
      )

      await el.updateComplete
      expect(dataSpy).toHaveBeenCalledTimes(1)

      // Simulate search input - get the input element
      const searchInput = el.shadowRoot?.querySelector(
        'gds-input',
      ) as HTMLInputElement & { value: string }
      if (searchInput) {
        searchInput.value = 'Item 1'
        searchInput.dispatchEvent(new Event('input', { bubbles: true }))
        await el.updateComplete

        // Should call data with search query
        expect(dataSpy.mock.lastCall[0].searchQuery).toBe('Item 1')
      }
    })
  })

  describe('Sorting', () => {
    it('should sort by column when header clicked', async () => {
      const dataSpy = vi.fn()
      const wrappedData = async (request: any) => {
        dataSpy(request)
        return mockData(request)
      }

      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${wrappedData}></gds-table>`,
      )

      await el.updateComplete

      // Find and click sortable column header
      const sortableHeaders = el.shadowRoot?.querySelectorAll('th.sortable')
      if (sortableHeaders && sortableHeaders.length > 0) {
        const header = sortableHeaders[0] as HTMLElement
        header.click()
        await el.updateComplete

        // Should have called data with sort parameters
        const lastCall = dataSpy.mock.lastCall[0]
        expect(lastCall.sortColumn).toBe('id')
        expect(lastCall.sortDirection).toBe('asc')
      }
    })

    it('should toggle sort direction on repeated clicks', async () => {
      const dataSpy = vi.fn()
      const wrappedData = async (request: any) => {
        dataSpy(request)
        return mockData(request)
      }

      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${wrappedData}></gds-table>`,
      )

      await el.updateComplete

      const sortableHeaders = el.shadowRoot?.querySelectorAll('th.sortable')
      if (sortableHeaders && sortableHeaders.length > 0) {
        const header = sortableHeaders[0] as HTMLElement

        // First click - ascending
        header.click()
        await el.updateComplete
        expect(dataSpy.mock.lastCall[0].sortDirection).toBe('asc')

        // Second click - descending
        header.click()
        await el.updateComplete
        expect(dataSpy.mock.lastCall[0].sortDirection).toBe('desc')
      }
    })
  })

  describe('Data Changes', () => {
    it('should reload data when data function changes', async () => {
      const dataSpy1 = vi.fn()
      const wrappedData1 = async (request: any) => {
        dataSpy1(request)
        return mockData(request)
      }

      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${wrappedData1}></gds-table>`,
      )

      await el.updateComplete
      expect(dataSpy1).toHaveBeenCalledTimes(1)

      // Change data function
      const dataSpy2 = vi.fn()
      const wrappedData2 = async (request: any) => {
        dataSpy2(request)
        return mockData(request)
      }

      el.data = wrappedData2
      await el.updateComplete
      expect(dataSpy2).toHaveBeenCalledTimes(1)
    })

    it('should update visible columns when columns change', async () => {
      const newColumns = [
        { key: 'id', label: 'ID', sortable: true, visible: true },
        { key: 'name', label: 'Name', sortable: true, visible: false },
        { key: 'status', label: 'Status', visible: true },
      ]

      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${mockData}></gds-table>`,
      )

      await el.updateComplete

      // Change columns
      el.columns = newColumns
      await el.updateComplete

      // Table should still be renderable (no errors)
      const table = el.shadowRoot?.querySelector('table')
      expect(table).toBeDefined()
    })
  })

  // ==========================================================================
  // SLOT HELPER
  // ==========================================================================

  describe('Slot() helper', () => {
    it('should create a SlotValue with value and slots', () => {
      const sv = Slot('hello', ['lead', 'value'])
      expect(isSlotValue(sv)).toBe(true)
      expect(sv.value).toBe('hello')
      expect(sv.slots).toEqual(['lead', 'value'])
    })

    it('should default slots to ["value"] when only value is provided', () => {
      const sv = Slot('text')
      expect(sv.slots).toEqual(['value'])
    })

    it('should support custom key', () => {
      const sv = Slot('text', ['value'], 'custom-key')
      expect(sv.key).toBe('custom-key')
    })

    it('should coerce to string using value', () => {
      const sv = Slot('hello', ['badge'])
      expect(String(sv)).toBe('hello')
      expect(`${sv}`).toBe('hello')
    })

    it('should coerce to number using value', () => {
      const sv = Slot(42, ['formatted'])
      expect(Number(sv)).toBe(42)
    })

    it('should return the same object if already a SlotValue', () => {
      const sv = Slot('text', ['value'])
      const sv2 = Slot(sv)
      expect(sv2).toBe(sv)
    })
  })

  // ==========================================================================
  // SLOT COMPOSITION IN TABLE
  // ==========================================================================

  describe('Slot Composition', () => {
    const slotColumns = [
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Name' },
      { key: 'status', label: 'Status' },
    ]

    const slotMockData = async () => ({
      rows: [
        { id: 1, name: Slot('Alice', ['avatar', 'value']), status: Slot('Active', ['badge']) },
        { id: 2, name: Slot('Bob', ['avatar', 'value']), status: Slot('Inactive', ['badge']) },
      ],
      total: 2,
    })

    it('should render named slot elements for Slot() values', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${slotColumns} .data=${slotMockData}></gds-table>`,
      )

      await el.updateComplete

      // Should have slot elements for avatar and badge
      const slots = el.shadowRoot?.querySelectorAll('slot[name]')
      const slotNames = Array.from(slots || []).map((s) => s.getAttribute('name'))

      // name column: avatar slots
      expect(slotNames).toContain('name:1:avatar')
      expect(slotNames).toContain('name:2:avatar')

      // status column: badge slots
      expect(slotNames).toContain('status:1:badge')
      expect(slotNames).toContain('status:2:badge')
    })

    it('should render inline text for the "value" slot ID', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${slotColumns} .data=${slotMockData}></gds-table>`,
      )

      await el.updateComplete

      // The name column uses ['avatar', 'value'] — 'value' should render "Alice" / "Bob" as text
      const cells = el.shadowRoot?.querySelectorAll('tbody td')
      const nameCells = Array.from(cells || []).filter((_, i) => i % 3 === 1) // name is 2nd column
      const textContents = nameCells.map((c) => c.textContent?.trim())

      expect(textContents[0]).toContain('Alice')
      expect(textContents[1]).toContain('Bob')
    })

    it('should NOT render a <slot> element for the "value" slot ID', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${slotColumns} .data=${slotMockData}></gds-table>`,
      )

      await el.updateComplete

      const slots = el.shadowRoot?.querySelectorAll('slot[name]')
      const slotNames = Array.from(slots || []).map((s) => s.getAttribute('name'))

      // Should not have name:1:value or name:2:value — those render as inline text
      expect(slotNames).not.toContain('name:1:value')
      expect(slotNames).not.toContain('name:2:value')
    })

    it('should render plain text for non-Slot values', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${slotColumns} .data=${slotMockData}></gds-table>`,
      )

      await el.updateComplete

      // ID column is plain number (not wrapped in Slot)
      const cells = el.shadowRoot?.querySelectorAll('tbody td')
      const idCells = Array.from(cells || []).filter((_, i) => i % 3 === 0) // id is 1st column
      expect(idCells[0]?.textContent?.trim()).toContain('1')
      expect(idCells[1]?.textContent?.trim()).toContain('2')
    })

    it('should emit gds-table-data-loaded with rows for slot rendering', async () => {
      const spy = vi.fn()

      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${slotColumns} .data=${slotMockData}></gds-table>`,
      )

      el.addEventListener('gds-table-data-loaded', spy)

      // Trigger a reload
      el.dataLoadKey = 'test'
      await el.updateComplete

      expect(spy).toHaveBeenCalled()
      const detail = spy.mock.calls[0][0].detail
      expect(detail.rows).toHaveLength(2)
      expect(detail.rows[0].id).toBe(1)
    })

    it('should project light DOM elements into named slots', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${slotColumns} .data=${slotMockData}>
          <span slot="status:1:badge">Active Badge</span>
          <span slot="status:2:badge">Inactive Badge</span>
        </gds-table>`,
      )

      await el.updateComplete

      // Verify the light DOM children have the right slot attributes
      const slotted = el.querySelectorAll('[slot^="status:"]')
      expect(slotted.length).toBe(2)
      expect(slotted[0].getAttribute('slot')).toBe('status:1:badge')
      expect(slotted[1].getAttribute('slot')).toBe('status:2:badge')

      // Verify the shadow DOM has matching slot elements
      const shadowSlots = el.shadowRoot?.querySelectorAll('slot[name^="status:"]')
      expect(shadowSlots?.length).toBeGreaterThanOrEqual(2)
    })
  })

  // ==========================================================================
  // ACTIONS COLUMN (Slot-based)
  // ==========================================================================

  describe('Actions Column', () => {
    const actionsColumns = [
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Name' },
    ]

    const actionsMockData = async () => ({
      rows: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ],
      total: 2,
    })

    it('should render actions column header from object config', async () => {
      const actions = { label: 'Actions', justify: 'end' as const }

      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${actionsColumns}
          .data=${actionsMockData}
          .actions=${actions}
        ></gds-table>`,
      )

      await el.updateComplete

      const headers = el.shadowRoot?.querySelectorAll('thead th')
      const headerTexts = Array.from(headers || []).map((h) => h.textContent?.trim())
      expect(headerTexts).toContain('Actions')
    })

    it('should render action slot elements with correct names', async () => {
      const actions = { label: 'Actions', justify: 'end' as const }

      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${actionsColumns}
          .data=${actionsMockData}
          .actions=${actions}
        ></gds-table>`,
      )

      await el.updateComplete

      const slots = el.shadowRoot?.querySelectorAll('slot[name^="actions:"]')
      const slotNames = Array.from(slots || []).map((s) => s.getAttribute('name'))

      expect(slotNames).toContain('actions:1:main')
      expect(slotNames).toContain('actions:2:main')
    })

    it('should project light DOM action elements into slots', async () => {
      const actions = { label: 'Actions', justify: 'end' as const }

      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${actionsColumns}
          .data=${actionsMockData}
          .actions=${actions}
        >
          <button slot="actions:1:main">Edit Alice</button>
          <button slot="actions:2:main">Edit Bob</button>
        </gds-table>`,
      )

      await el.updateComplete

      const slotted = el.querySelectorAll('[slot^="actions:"]')
      expect(slotted.length).toBe(2)
    })
  })

  // ==========================================================================
  // REACTIVE PROPERTIES
  // ==========================================================================

  describe('Reactive Properties', () => {
    it('should reload data when page is set externally', async () => {
      const dataSpy = vi.fn()
      const wrappedData = async (request: any) => {
        dataSpy(request)
        return mockData(request)
      }

      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${wrappedData}></gds-table>`,
      )

      await el.updateComplete
      expect(dataSpy).toHaveBeenCalledTimes(1)

      el.page = 3
      await el.updateComplete
      await aTimeout(50)

      expect(dataSpy.mock.lastCall[0].page).toBe(3)
    })

    it('should reload data and reset to page 1 when rows is set externally', async () => {
      const dataSpy = vi.fn()
      const wrappedData = async (request: any) => {
        dataSpy(request)
        return mockData(request)
      }

      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${wrappedData}></gds-table>`,
      )

      await el.updateComplete

      el.rows = 25
      await el.updateComplete
      await aTimeout(50)

      const lastCall = dataSpy.mock.lastCall[0]
      expect(lastCall.rows).toBe(25)
      expect(lastCall.page).toBe(1)
    })
  })

  // ==========================================================================
  // DISABLE SELECT ALL
  // ==========================================================================

  describe('Disable Select All', () => {
    it('should hide header checkbox when disable-select-all is set', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${mockData}
          selectable
          disable-select-all
        ></gds-table>`,
      )

      await el.updateComplete

      // The header row's checkbox cell should not have a checkbox
      const headerRow = el.shadowRoot?.querySelector('thead tr')
      const headerCheckbox = headerRow?.querySelector('.rbcb-wrapper')
      expect(headerCheckbox).toBeNull()
    })

    it('should still show row checkboxes when disable-select-all is set', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${mockData}
          selectable
          disable-select-all
        ></gds-table>`,
      )

      await el.updateComplete

      const bodyCheckboxes = el.shadowRoot?.querySelectorAll('tbody .rbcb-wrapper')
      expect(bodyCheckboxes?.length).toBeGreaterThan(0)
    })
  })
})
