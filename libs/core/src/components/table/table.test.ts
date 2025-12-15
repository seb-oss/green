import { expect } from '@esm-bundle/chai'
import { aTimeout, fixture, html as testingHtml } from '@open-wc/testing'
import sinon from 'sinon'

import { htmlTemplateTagFactory } from '@sebgroup/green-core/scoping'

import type { GdsTable } from './table.component'

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
      expect(table).to.exist
    })

    it('should render table headers', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${mockData}></gds-table>`,
      )

      await el.updateComplete
      const headers = el.shadowRoot?.querySelectorAll('thead th')
      expect(headers?.length).to.be.greaterThan(0)
    })

    it('should render table rows', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${mockData}></gds-table>`,
      )

      await el.updateComplete
      const rows = el.shadowRoot?.querySelectorAll('tbody tr')
      expect(rows?.length).to.equal(3)
    })
  })

  describe('API', () => {
    it('should load data on connect', async () => {
      const dataSpy = sinon.spy()
      const wrappedData = async (request: any) => {
        dataSpy(request)
        return mockData(request)
      }

      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${wrappedData}></gds-table>`,
      )

      await el.updateComplete
      expect(dataSpy.called).to.be.true
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
      expect(checkboxes?.length).to.be.greaterThan(0)
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
      expect(el.striped).to.be.true
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
      const spy = sinon.spy()
      el.addEventListener('gds-table-selection', spy)

      el.selectAll()
      await el.updateComplete

      expect(spy.called).to.be.true
    })
  })

  describe('Accessibility', () => {
    it('should pass axe smoke test', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${mockData}></gds-table>`,
      )

      await el.updateComplete
      await expect(el).to.be.accessible()
    })
  })

  describe('Caching', () => {
    it('should cache data requests with same parameters', async () => {
      const dataSpy = sinon.spy()
      const wrappedData = async (request: any) => {
        dataSpy(request)
        return mockData(request)
      }

      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${wrappedData}></gds-table>`,
      )

      await el.updateComplete
      expect(dataSpy.callCount).to.equal(1)

      // Trigger render with same parameters - should use cache
      el.requestUpdate()
      await el.updateComplete
      expect(dataSpy.callCount).to.equal(1)
    })

    it('should not cache when nocache is true', async () => {
      const dataSpy = sinon.spy()
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
      expect(dataSpy.callCount).to.equal(1)

      // Trigger another load with nocache - should call data again even with same params
      el.dataLoadKey = 'trigger-reload'
      await el.updateComplete
      expect(dataSpy.callCount).to.equal(2)
    })

    it('should clear cache when dataLoadKey changes', async () => {
      const dataSpy = sinon.spy()
      const wrappedData = async (request: any) => {
        dataSpy(request)
        return mockData(request)
      }

      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${wrappedData}></gds-table>`,
      )

      await el.updateComplete
      expect(dataSpy.callCount).to.equal(1)

      // Change dataLoadKey to force cache clear
      el.dataLoadKey = 'new-key'
      await el.updateComplete
      expect(dataSpy.callCount).to.equal(2)
    })
  })

  describe('Filtering', () => {
    it('should filter data when search query changes', async () => {
      const dataSpy = sinon.spy()
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
      expect(dataSpy.callCount).to.equal(1)

      // Simulate search input - get the input element
      const searchInput = el.shadowRoot?.querySelector(
        'gds-input',
      ) as HTMLInputElement & { value: string }
      if (searchInput) {
        searchInput.value = 'Item 1'
        searchInput.dispatchEvent(new Event('input', { bubbles: true }))
        await el.updateComplete

        // Should call data with search query
        expect(dataSpy.lastCall.args[0].searchQuery).to.equal('Item 1')
      }
    })
  })

  describe('Sorting', () => {
    it('should sort by column when header clicked', async () => {
      const dataSpy = sinon.spy()
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
        const lastCall = dataSpy.lastCall.args[0]
        expect(lastCall.sortColumn).to.equal('id')
        expect(lastCall.sortDirection).to.equal('asc')
      }
    })

    it('should toggle sort direction on repeated clicks', async () => {
      const dataSpy = sinon.spy()
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
        expect(dataSpy.lastCall.args[0].sortDirection).to.equal('asc')

        // Second click - descending
        header.click()
        await el.updateComplete
        expect(dataSpy.lastCall.args[0].sortDirection).to.equal('desc')
      }
    })
  })

  describe('Data Changes', () => {
    it('should reload data when data function changes', async () => {
      const dataSpy1 = sinon.spy()
      const wrappedData1 = async (request: any) => {
        dataSpy1(request)
        return mockData(request)
      }

      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${wrappedData1}></gds-table>`,
      )

      await el.updateComplete
      expect(dataSpy1.callCount).to.equal(1)

      // Change data function
      const dataSpy2 = sinon.spy()
      const wrappedData2 = async (request: any) => {
        dataSpy2(request)
        return mockData(request)
      }

      el.data = wrappedData2
      await el.updateComplete
      expect(dataSpy2.callCount).to.equal(1)
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
      expect(table).to.exist
    })
  })
})
