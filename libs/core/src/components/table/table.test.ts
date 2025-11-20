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
      await aTimeout(100)

      const table = el.shadowRoot?.querySelector('table')

      expect(table).to.exist
    })

    it('should render table headers', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${mockData}></gds-table>`,
      )

      await el.updateComplete
      await aTimeout(100)

      const headers = el.shadowRoot?.querySelectorAll('thead th')

      expect(headers?.length).to.be.greaterThan(0)
    })

    it('should render table rows', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${mockData}></gds-table>`,
      )

      await el.updateComplete
      await aTimeout(100)

      const rows = el.shadowRoot?.querySelectorAll('tbody tr')

      expect(rows?.length).to.equal(3)
    })

    it('should render with density attribute', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${mockData}
          density="compact"
        ></gds-table>`,
      )

      await el.updateComplete

      expect(el.density).to.equal('compact')
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
      await aTimeout(100)

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
      await aTimeout(100)

      const checkboxes = el.shadowRoot?.querySelectorAll('.rbcb-wrapper')

      expect(checkboxes?.length).to.be.greaterThan(0)
    })

    it('should support responsive attribute', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${mockData}
          responsive
        ></gds-table>`,
      )

      await el.updateComplete
      await aTimeout(100)

      const dataContainer = el.shadowRoot?.querySelector('.responsive')

      expect(dataContainer).to.exist
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

    it('should support searchable attribute', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${mockData}
          searchable
        ></gds-table>`,
      )

      await el.updateComplete
      await aTimeout(100)

      const searchInput = el.shadowRoot?.querySelector('gds-input')

      expect(searchInput).to.exist
    })

    it('should clear selection', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${mockData}
          selectable
        ></gds-table>`,
      )

      await el.updateComplete
      await aTimeout(100)

      el.selectAll()
      await el.updateComplete

      expect(el.getSelection().indices.length).to.equal(3)

      el.clearSelection()
      await el.updateComplete

      expect(el.getSelection().indices.length).to.equal(0)
    })

    it('should select all rows', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${mockData}
          selectable
        ></gds-table>`,
      )

      await el.updateComplete
      await aTimeout(100)

      el.selectAll()
      await el.updateComplete

      expect(el.getSelection().indices.length).to.equal(3)
    })

    it('should set selection by indices', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${mockData}
          selectable
        ></gds-table>`,
      )

      await el.updateComplete
      await aTimeout(100)

      el.setSelection([0, 2])
      await el.updateComplete

      expect(el.getSelection().indices).to.deep.equal([0, 2])
    })

    it('should get selection data', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${mockData}
          selectable
        ></gds-table>`,
      )

      await el.updateComplete
      await aTimeout(100)

      el.setSelection([0])
      await el.updateComplete

      const selection = el.getSelection()

      expect(selection.data[0].id).to.equal(1)
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
      await aTimeout(100)

      const spy = sinon.spy()
      el.addEventListener('gds-table-selection', spy)

      el.selectAll()
      await el.updateComplete

      expect(spy.called).to.be.true
    })

    it('should emit data loaded event', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${mockData}></gds-table>`,
      )

      const spy = sinon.spy()
      el.addEventListener('gds-table-data-loaded', spy)

      await el.updateComplete
      await aTimeout(100)

      expect(spy.called).to.be.true
    })
  })

  describe('Accessibility', () => {
    it('should pass axe smoketest', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table .columns=${columns} .data=${mockData}></gds-table>`,
      )

      await el.updateComplete
      await aTimeout(100)

      await expect(el).to.be.accessible()
    })

    it('should have proper checkbox accessibility', async () => {
      const el = await fixture<GdsTable>(
        html`<gds-table
          .columns=${columns}
          .data=${mockData}
          selectable
        ></gds-table>`,
      )

      await el.updateComplete
      await aTimeout(100)

      const checkbox = el.shadowRoot?.querySelector('.rbcb-wrapper')

      expect(checkbox?.getAttribute('role')).to.equal('checkbox')
      expect(checkbox?.hasAttribute('aria-label')).to.be.true
    })
  })
})
