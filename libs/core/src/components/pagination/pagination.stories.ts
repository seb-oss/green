import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './pagination'
import '../card'
import '../text'
import '../flex'

const meta: Meta = {
  title: 'Components/Pagination',
  component: 'gds-pagination',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    page: 1,
    rows: 10,
    total: 2000,
    options: [5, 10, 20, 50, 100],
  },
  render: (args) => {
    const handlePageChange = (e: CustomEvent) => {
      args.page = e.detail.page
      document.querySelector('[data-page]')!.innerHTML = String(args.page)
      document
        .querySelector('[data-pagination]')!
        .setAttribute('page', String(args.page))
    }

    const handleRowsChange = (e: CustomEvent) => {
      args.rows = e.detail.rows
      args.page = 1
      document.querySelector('[data-rows]')!.innerHTML = String(args.rows)
      document.querySelector('[data-page]')!.innerHTML = '1'
      document.querySelector('[data-pagination]')!.setAttribute('page', '1')
      document
        .querySelector('[data-pagination]')!
        .setAttribute('rows', String(args.rows))
    }

    return html`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="secondary" flex-direction="row" gap="4xl">
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page>${args.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows>${args.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>${args.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination
          page="${args.page}"
          rows="${args.rows}"
          .total=${args.total}
          .options=${args.options}
          @gds-page-change=${handlePageChange}
          @gds-rows-change=${handleRowsChange}
        ></gds-pagination>
      </gds-flex>
    `
  },
}
