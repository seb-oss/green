export default {
  title: 'Components/Skeleton loader',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-skeleton-loader'],
  },
}

/**
 * Skeleton loaders are used to show a loading state while data is being fetched.
 */

/**
 * A skeleton loader for generic content.
 */
export const Default = {
  render: () => `
  <div class="skeleton-loader" aria-busy="true">
    Loading content
  </div>`,
}

/**
 * Since examples here are rendered in canvas elements that resemble using skeleton loaders in cards, here's and example of a skeleton loader against the default background color.
 */

export const BackgroundColor = {
  render: () => `
  <div class="skeleton-loader" aria-busy="true">
    Loading content
  </div>`,
  decorators: [(story) => `<div class="bg-light p-5 m-n5">${story()}</div>`],
}

export const Table = {
  render: () => `
  <div class="skeleton-loader skeleton-loader-table" aria-busy="true">
    Loading table
  </div>`,
}

/**
 * Use `skeleton-loader-fill` to create custom skeleton templates for things like forms, buttons etc. Add utility classes like `rounded` or `rounded-circle` to adjust the shape and specify size using custom class or with inline styles.
 */

export const Fill = {
  render: () => `

<div class="d-flex align-items-center gx-4">
  <div class="gds-form-group">
    <label for="inputInvalid">Input label</label>

    <span class="form-info">
      Lorem ipsum very long description of input and what should be entered
    </span>

    <input id="inputInvalid" type="text" />

    <span class="form-info">Neutral</span>
  </div>
  <div>
  <div class="skeleton-loader skeleton-loader-fill mb-3 rounded" aria-busy="true" style="height:1.125rem; width:100px;"></div>
  <div class="skeleton-loader skeleton-loader-fill mb-3 rounded" aria-busy="true" style="height:1.75rem;width:160px;"></div>
  <div class="skeleton-loader skeleton-loader-fill mb-3 rounded" aria-busy="true" style="height:2.75rem;width:200px;">
    Loading form
  </div>
  <div class="skeleton-loader skeleton-loader-fill mb-4 rounded" aria-busy="true" style="height:1rem;width: 80px;"></div>
  </div>
  <div class="skeleton-loader skeleton-loader-fill mb-3 rounded-circle" aria-busy="true" style="min-height:100px;width:100px;">
    Loading circle
  </div>
</div>`,
}

/**
 * Skeleton loaders for donut, bar and area charts placed inside a flexbox grid.
 */
export const Chart = {
  render: () => `
    <div class="col-12 col-sm">
    <div class="mx-sm-5 my-5 skeleton-loader skeleton-loader-chart-donut skeleton-loader-no-stretch" aria-busy="true">
      Loading chart
    </div>
  </div>

  <div class="col-12 col-sm">
    <div class="mx-sm-5 my-5 skeleton-loader skeleton-loader-chart-bar skeleton-loader-no-stretch" aria-busy="true">
      Loading chart
    </div>
  </div>

  <div class="col-12 col-sm">
    <div class="mx-sm-5 my-5 skeleton-loader skeleton-loader-chart-area skeleton-loader-no-stretch" aria-busy="true">
      Loading chart
    </div>
  </div>`,
  decorators: [(story) => `<div class="row gy-3">${story()}</div>`],
}

/**
 * Use the `skeleton-loader-no-stretch` modifier to disable mask stretch.
 */
export const Stretch = {
  render: () => `
  <div class="skeleton-loader skeleton-loader-chart-bar" aria-busy="true">
    Loading content
  </div>

  <div class="skeleton-loader skeleton-loader-chart-bar skeleton-loader-no-stretch" aria-busy="true">
  Loading chart
  </div>`,
}

export const HorizontalBarChart = {
  render: () => `
  <div class="skeleton-loader skeleton-loader-chart-bar-horizontal" aria-busy="true">
    Loading chart
  </div>`,
}

export const HorizontalAreaChart = {
  render: () => `
  <div class="skeleton-loader skeleton-loader-chart-area" aria-busy="true">
    Loading chart
  </div>`,
}

export const HorizontalBubbleChart = {
  render: () => `
  <div class="skeleton-loader skeleton-loader-chart-bubble" aria-busy="true">
    Loading chart
  </div>`,
}
