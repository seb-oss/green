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
    hideOptions: false,
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
          ?hide-options="${args.hideOptions}"
          @gds-page-change=${handlePageChange}
          @gds-rows-change=${handleRowsChange}
        ></gds-pagination>
      </gds-flex>
    `
  },
}

/**
 * When the options array contains only a single value, the page size selector
 * is automatically hidden since there's no choice to make. This is useful when
 * you want a fixed page size without showing the selector UI.
 */
export const SingleOption: Story = {
  args: {
    page: 1,
    rows: 8,
    total: 100,
    options: [8],
    hideOptions: false,
    label: '1-8 of 100',
  },
  render: (args) => {
    const handlePageChange = (e: CustomEvent) => {
      args.page = e.detail.page
      document.querySelector('[data-page-single]')!.innerHTML = String(
        args.page,
      )
      document
        .querySelector('[data-pagination-single]')!
        .setAttribute('page', String(args.page))
    }

    const handleRowsChange = (e: CustomEvent) => {
      args.rows = e.detail.rows
      args.page = 1
      document.querySelector('[data-rows-single]')!.innerHTML = String(
        args.rows,
      )
      document.querySelector('[data-page-single]')!.innerHTML = '1'
      document
        .querySelector('[data-pagination-single]')!
        .setAttribute('page', '1')
      document
        .querySelector('[data-pagination-single]')!
        .setAttribute('rows', String(args.rows))
    }

    return html`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="secondary" flex-direction="row" gap="4xl">
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page-single>${args.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows-single>${args.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>${args.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination-single
          page="${args.page}"
          rows="${args.rows}"
          .total=${args.total}
          .options=${args.options}
          ?hide-options="${args.hideOptions}"
          label="${args.label}"
          @gds-page-change=${handlePageChange}
          @gds-rows-change=${handleRowsChange}
        ></gds-pagination>
      </gds-flex>
    `
  },
}

/**
 * When all items fit on a single page (total ≤ rows), the navigation controls
 * are automatically hidden. Only the page size selector remains visible (unless
 * hideOptions is set or options has a single value).
 */
export const OnePage: Story = {
  args: {
    page: 1,
    rows: 10,
    total: 8,
    options: [5, 10, 20, 50, 100],
    hideOptions: false,
    label: '1-8 of 8',
  },
  render: (args) => {
    const handlePageChange = (e: CustomEvent) => {
      args.page = e.detail.page
      document.querySelector('[data-page-one]')!.innerHTML = String(args.page)
      document
        .querySelector('[data-pagination-one]')!
        .setAttribute('page', String(args.page))
    }

    const handleRowsChange = (e: CustomEvent) => {
      args.rows = e.detail.rows
      args.page = 1
      document.querySelector('[data-rows-one]')!.innerHTML = String(args.rows)
      document.querySelector('[data-page-one]')!.innerHTML = '1'
      document.querySelector('[data-pagination-one]')!.setAttribute('page', '1')
      document
        .querySelector('[data-pagination-one]')!
        .setAttribute('rows', String(args.rows))
    }

    return html`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="secondary" flex-direction="row" gap="4xl">
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page-one>${args.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows-one>${args.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>${args.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination-one
          page="${args.page}"
          rows="${args.rows}"
          .total=${args.total}
          .options=${args.options}
          ?hide-options="${args.hideOptions}"
          label="${args.label}"
          @gds-page-change=${handlePageChange}
          @gds-rows-change=${handleRowsChange}
        ></gds-pagination>
      </gds-flex>
    `
  },
}
