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
})
