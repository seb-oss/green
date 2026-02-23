import { html, render } from 'lit'
import { createRef, ref } from 'lit/directives/ref.js'

import type { Meta, StoryObj } from '@storybook/web-components'

import './table'
import '../card'
import '../badge'
import '../dropdown/dropdown'
import '../segmented-control/segmented-control'
import '../context-menu/context-menu'
import '../input/input'
import '../img/img'
import '../formatted-text/account'
import '../formatted-text/number'
import '../formatted-text/date'
import '../pagination/pagination'
import '../icon/icons/dot-grid-one-horizontal'
import '../icon/icons/plus-small'
import '../icon/icons/settings-slider-hor'
import '../icon/icons/cloud-download'
import '../icon/icons/copy'
import '../icon/icons/pin'
import '../icon/icons/buildings'
import '../icon/icons/circle-check'
import '../icon/icons/cross-small'

import { argTablePropsFor } from '../../../.storybook/argTableProps'
import { Feedback, Users } from './table.stories.data'

/**
 * Defers rendering until the element scrolls into view.
 * Only used in Docs mode where all stories render on one page.
 */
const _lazyObserved = new WeakSet<Element>()

const lazyStory = (renderFn: () => unknown) => html`
  <div
    ${ref((el) => {
      if (!el || _lazyObserved.has(el)) return
      _lazyObserved.add(el)
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            observer.disconnect()
            const content = renderFn()
            render(content, el as HTMLElement)
            // Unwrap: move children out and remove the wrapper div
            const parent = el.parentNode
            if (parent) {
              while (el.firstChild) parent.insertBefore(el.firstChild, el)
              parent.removeChild(el)
            }
          }
        },
        { rootMargin: '200px' },
      )
      observer.observe(el)
    })}
    style="min-height:40vh"
  ></div>
`

const meta: Meta = {
  title: 'Components/Table',
  component: 'gds-table',
  argTypes: {
    ...argTablePropsFor('gds-table'),
    density: {
      control: { type: 'select' },
      options: ['comfortable', 'compact', 'spacious'],
      defaultValue: 'comfortable',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'secondary',
    },
    selectable: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    searchLabel: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'string' },
      defaultValue: false,
    },
  },
  tags: ['autodocs'],
  decorators: [
    (storyFn: any, context: any) =>
      context.viewMode === 'docs' ? lazyStory(() => storyFn()) : storyFn(),
  ],
  parameters: {
    docs: {
      description: {
        component: `
A data table component that handles asynchronous data loading, pagination, sorting, and filtering through a provider function. Supports row selection, searchable columns, responsive layouts, and customizable cell rendering including badges, buttons, links, and formatted values.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj

// ============================================================================
// OVERVIEW
// ============================================================================

export const Overview: Story = {
  args: {
    columns: Users.Columns,
    actions: Users.Actions,
    density: 'comfortable',
    variant: 'secondary',
    data: Users.Data,
    selectable: true,
    searchable: true,
    searchLabel: 'Search users',
    settings: true,
    plain: false,
    height: '80vh',
    responsive: false,
    nocache: false,
    striped: false,
  },

  render: (args) => {
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-table
        ${ref(tableRef)}
        density="${args.density}"
        variant="${args.variant}"
        search-label="${args.searchLabel}"
        ?searchable="${args.searchable}"
        ?settings="${args.settings}"
        ?plain="${args.plain}"
        ?responsive="${args.responsive}"
        ?nocache="${args.nocache}"
        ?height="${args.height}"
        ?striped="${args.striped}"
        ?selectable="${args.selectable}"
        .columns="${args.columns}"
        .data="${args.data}"
        .actions="${args.actions}"
        rows="60"
        @gds-table-data-loaded=${handleDataLoaded}
      >
      </gds-table>
    `
  },
}

// ============================================================================
// FEATURES - SELECTION
// ============================================================================

export const Selection: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
    selectable: true,
    density: 'comfortable',
  },
  parameters: {
    docs: {
      description: {
        story: `
The \`selectable\` boolean enables row selection with checkboxes. Supports individual row selection, select all via header checkbox, and partial selection indication.

Emits \`gds-table-selection\` event with selected row data and indices. Provides methods for programmatic selection control.

See Developer Guide for complete selection API documentation.
        `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-table
        ${ref(tableRef)}
        .density="${args.density}"
        ?selectable="${args.selectable}"
        .columns="${args.columns}"
        .data="${args.data}"
        @gds-table-data-loaded=${handleDataLoaded}
      >
      </gds-table>
    `
  },
}

// ============================================================================
// FEATURES - SEARCH & FILTERING
// ============================================================================

export const Filtering: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
    searchable: true,
    settings: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
#### Search Functionality
The \`searchable\` property adds a search input to the table, enabling real-time filtering across all columns.

#### Column Settings
The \`settings\` property adds a column visibility dropdown, allowing users to show/hide specific columns.
        `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-table
        ${ref(tableRef)}
        ?searchable="${args.searchable}"
        ?settings="${args.settings}"
        .columns="${args.columns}"
        .data="${args.data}"
        @gds-table-data-loaded=${handleDataLoaded}
      >
      </gds-table>
    `
  },
}

// ============================================================================
// FEATURES - Caching
// ============================================================================

export const Caching: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
    searchable: true,
    settings: true,
    nocache: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
The \`nocache\` property provides direct control over data retrieval. When set to \`true\`, the table bypasses its internal caching mechanism, fetching fresh data on each request. By default, the table caches sorted and filtered results for 5 minutes to improve performance.

> Note: The example is simulated with a mock data provider introducing a 1000ms delay to demonstrate real-world data fetching scenarios.
        `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-table
        ${ref(tableRef)}
        ?nocache="${args.nocache}"
        ?searchable="${args.searchable}"
        ?settings="${args.settings}"
        .columns="${args.columns}"
        .data="${args.data}"
        @gds-table-data-loaded=${handleDataLoaded}
      >
      </gds-table>
    `
  },
}

// ============================================================================
// FEATURES - SORTING

// ============================================================================

export const Sorting: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
  },
  parameters: {
    docs: {
      description: {
        story: `
Sorting is enabled by setting \`sortable: true\` on column configuration. <br />
Clicking a sortable column header toggles between ascending and descending order, resetting the table to the first page. <br />
The sorting mechanism generates a unique cache key, caching sorted results for 5 minutes, and emits a \`gds-table-data-loaded\` event with the sorted data.
        `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-table
        ${ref(tableRef)}
        .columns="${args.columns}"
        .data="${args.data}"
        @gds-table-data-loaded=${handleDataLoaded}
      >
      </gds-table>
    `
  },
}

// ============================================================================
// FEATURES - CELL TYPES
// ============================================================================

export const Cell: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
  },
  parameters: {
    docs: {
      description: {
        story: `
The table supports multiple cell types: badge, image, button, link, context menu, and formatted text (number, account, date).

Cell types correspond to their respective Green Design System components and accept their available properties for customization.
        `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-table
        ${ref(tableRef)}
        .columns="${args.columns}"
        .data="${args.data}"
        @gds-table-data-loaded=${handleDataLoaded}
      >
      </gds-table>
    `
  },
}

// ============================================================================
// FEATURES - CELL FORMATTING
// ============================================================================

export const Formatting: Story = {
  args: {
    columns: Feedback.Columns,
    data: Feedback.Data,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Column justification** <br />
Default alignment is left (start), with options to justify content to the right (end), and supports space-between layouts. <br /> Example: in email columns where cell value and action buttons need clear distinction and consistent alignment across rows.

---

**Column width and wrapping** <br />
Columns can have custom width. When width is set, content will wrap within the cell.

---

**Cell vertical alignment** <br />
Cells can be vertically aligned to start (default centered). Recommended to align to start when long or wrapped content is present, ensuring consistent top alignment for labels or values across rows.

---

**Sortable columns** <br />
When justified to the right, sorting indicator appears on the left. Column label positioned to the right of the indicator.
        `,
      },
    },
  },
  render: (args) => html`
    <gds-table .columns="${args.columns}" .data="${args.data}"></gds-table>
  `,
}

// ============================================================================
// FEATURES - ROW ACTIONS
// ============================================================================

export const Actions: Story = {
  args: {
    columns: Feedback.Columns,
    actions: Feedback.MultipleActions,
    data: Feedback.Data,
  },
  parameters: {
    docs: {
      description: {
        story: `
The \`actions\` property defines row interactions shown as the last cell of each row.

Supports all cell types (button, link, context-menu, badge, etc.) and can contain multiple actions.

When passed as an object \`{ label, align, justify }\`, it configures the actions column header and cell layout.
The actual action content is provided through named slots using the \`actions:rowKey:main\` convention.

        `,
      },
    },
  },
  render: (args) => {
    const multiRef = createRef<any>()
    const ctxRef = createRef<any>()
    const linkRef = createRef<any>()

    return html`
      <gds-table
        ${ref(multiRef)}
        plain
        .rows=${2}
        .page=${2}
        .columns="${args.columns}"
        .data="${args.data}"
        .actions="${args.actions}"
        @gds-table-data-loaded=${(e: CustomEvent) => {
          const table = multiRef.value
          if (table)
            render(Feedback.MultipleActionsSlotContent(e.detail.rows), table)
        }}
      >
      </gds-table>

      <br />
      <br />
      <br />

      <gds-table
        ${ref(ctxRef)}
        plain
        .rows=${2}
        .page=${2}
        .columns="${args.columns}"
        .data="${args.data}"
        .actions="${Feedback.ActionContextMenu}"
        @gds-table-data-loaded=${(e: CustomEvent) => {
          const table = ctxRef.value
          if (table)
            render(Feedback.ActionContextMenuSlotContent(e.detail.rows), table)
        }}
      >
      </gds-table>

      <br />
      <br />
      <br />

      <gds-table
        ${ref(linkRef)}
        plain
        .rows=${2}
        .page=${2}
        .columns="${args.columns}"
        .data="${args.data}"
        .actions="${Feedback.ActionLink}"
        @gds-table-data-loaded=${(e: CustomEvent) => {
          const table = linkRef.value
          if (table)
            render(Feedback.ActionLinkSlotContent(e.detail.rows), table)
        }}
      >
      </gds-table>
    `
  },
}

// ============================================================================
// STYLING - Plain
// ============================================================================

export const Headline: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
    headline: 'User Management',
    headlineTag: 'h2',
    summary: 'Overview of all users in the system',
  },
  parameters: {
    docs: {
      description: {
        story: `
When the \`headline\` and \`summary\` properties are set, they will be displayed at the top of the table.

You can change the \`headline-tag\` to any valid heading tag (e.g., 'h1-h5') to customize the semantic structure without altering the appearance.
        `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-table
        ${ref(tableRef)}
        headline="${args.headline}"
        headline-tag="${args.headlineTag}"
        summary="${args.summary}"
        .columns="${args.columns}"
        .data="${args.data}"
        @gds-table-data-loaded=${handleDataLoaded}
      >
      </gds-table>
    `
  },
}

export const Plain: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
    plain: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
When \`plain\` boolean is set, the table header and footer are removed, rendering only the data table.
        `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-table
        ${ref(tableRef)}
        ?plain="${args.plain}"
        .columns="${args.columns}"
        .data="${args.data}"
        @gds-table-data-loaded=${handleDataLoaded}
      >
      </gds-table>
    `
  },
}

export const Striped: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
    striped: true,
    density: 'compact',
  },
  parameters: {
    docs: {
      description: {
        story: `
When \`striped\` boolean is set, alternating row background colors are applied to even-numbered rows.
        `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-table
        ${ref(tableRef)}
        .density="${args.density}"
        ?striped="${args.striped}"
        .columns="${args.columns}"
        .data="${args.data}"
        rows="20"
        @gds-table-data-loaded=${handleDataLoaded}
      >
      </gds-table>
    `
  },
}

// ============================================================================
// STYLING - DENSITY
// ============================================================================

export const Density: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
    density: 'compact',
    headline: 'User Management',
    summary: 'Overview of all users in the system',
  },
  parameters: {
    docs: {
      description: {
        story: `
The \`density\` property controls the table's visual spacing and affects the table's **built-in UI** (search input, column settings dropdown, pagination).

- **\`comfortable\`** (Default) · Standard spacing for balanced readability
- **\`compact\`** · Reduced spacing to maximize information density
- **\`spacious\`** · Increased spacing for enhanced readability

> **Slot content sizing** — The density mode does **not** automatically resize components you provide via slots. When using a specific density, size your slotted components accordingly. For example, use \`size="small"\` on badges and buttons in \`compact\` or \`comfortable\` mode, and \`size="medium"\` in \`spacious\` mode to maintain visual consistency.
        `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-table
        ${ref(tableRef)}
        headline="${args.headline}"
        summary="${args.summary}"
        searchable
        settings
        .density="${args.density}"
        .columns="${args.columns}"
        .data="${args.data}"
        @gds-table-data-loaded=${handleDataLoaded}
      >
      </gds-table>
    `
  },
}

// ============================================================================
// STYLING - VARIANT
// ============================================================================

export const Variant: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
    variant: 'secondary',
    density: 'comfortable',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
  parameters: {
    docs: {
      description: {
        story: `
The \`variant\` property controls the visual style of the table container card.
These variants can be used: \`primary\`, \`secondary\` (Default), \`tertiary\` 

> Variant naming subject to change on the next major release
        `,
      },
    },
  },
  render: (args) => {
    const wrapperVariant = args.variant === 'tertiary' ? 'primary' : 'tertiary'
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-card variant="${wrapperVariant}" padding="l" border-radius="m">
        <gds-table
          ${ref(tableRef)}
          .density="${args.density}"
          .variant="${args.variant}"
          .columns="${args.columns}"
          .data="${args.data}"
          searchable
          settings
          selectable
          rows="5"
          @gds-table-data-loaded=${handleDataLoaded}
        >
        </gds-table>
      </gds-card>
    `
  },
}

// ============================================================================
// RESPONSIVE
// ============================================================================

export const Responsive: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
    responsive: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
When the \`responsive\` boolean is set to \`true\`, the table transforms its layout for smaller screens:

- **Mobile Layout**: Rows are restructured into a card-like format
- **Column Presentation**: 
  - Column names are displayed on the left side
  - Corresponding cell values are shown on the right side
- **Header Behavior**: On larger screens table header becomes sticky, ensuring column labels remain visible during scrolling.
        `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-table
        ${ref(tableRef)}
        ?responsive="${args.responsive}"
        .columns="${args.columns}"
        .data="${args.data}"
        height="80vh"
        @gds-table-data-loaded=${handleDataLoaded}
      >
      </gds-table>
    `
  },
}

// ============================================================================
// SLOTS
// ============================================================================

/* Header slots and footer slots  */
export const Slots: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
  },
  parameters: {
    docs: {
      description: {
        story: `
Use slots to add custom controls to the table header and footer areas.

- **header-lead**: Add filtering/sorting controls at the start of the header.
- **header-trail**: Add actions (e.g., export buttons) at the end of the header.

> Avoid overloading slots to maintain clarity.
        `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-table
        ${ref(tableRef)}
        .columns="${args.columns}"
        .data="${args.data}"
        rows="4"
        settings
        searchable
        @gds-table-data-loaded=${handleDataLoaded}
      >
        <gds-dropdown size="small" slot="header-lead" plain searchable>
          <span slot="trigger">Sorting</span>
          <gds-option value="by-name">Sort by Name</gds-option>
          <gds-option value="by-status">Sort by Status</gds-option>
        </gds-dropdown>
        <gds-button slot="header-trail" rank="secondary" size="small">
          Export
        </gds-button>
      </gds-table>
    `
  },
}

export const StateSlots: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
    simulatedState: 'normal',
  },
  argTypes: {
    simulatedState: {
      control: 'select',
      options: ['normal', 'error', 'empty', 'no-results'],
      description: 'Simulate different table states',
    },
  },
  parameters: {
    docs: {
      description: {
        story: `
Override default error, empty, and no-results states with custom content.

- **error**: Displayed when data loading fails.
- **empty**: Displayed when no data is available.
- **no-results**: Displayed when search returns no results.

Each slot provides a default fallback if not specified.

Use the **Simulated State** control below to switch between states.
        `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()

    const dataProvider = async (request: any) => {
      await new Promise((resolve) => setTimeout(resolve, 500))

      if (args.simulatedState === 'error') {
        throw new Error('Simulated error state')
      }

      if (args.simulatedState === 'empty') {
        return { rows: [], total: 0 }
      }

      if (args.simulatedState === 'no-results') {
        return { rows: [], total: 0 }
      }

      return args.data(request)
    }

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    const handleRetry = () => {
      args.simulatedState = 'normal'
      if (tableRef.value) {
        tableRef.value.dataLoadKey = `retry-${Date.now()}`
      }
    }

    const handleClearSearch = () => {
      args.simulatedState = 'normal'
      if (tableRef.value) {
        tableRef.value.dataLoadKey = `clear-${Date.now()}`

        const searchInput =
          tableRef.value.shadowRoot?.querySelector('gds-input')
        if (searchInput) {
          searchInput.value = ''
        }
      }
    }

    // Simulate search query for no-results state
    setTimeout(() => {
      if (args.simulatedState === 'no-results' && tableRef.value) {
        const searchInput =
          tableRef.value.shadowRoot?.querySelector('gds-input')
        if (searchInput) {
          searchInput.value = 'test search'
          searchInput.dispatchEvent(new Event('input', { bubbles: true }))
        }
      }
    }, 100)

    return html`
      <gds-table
        ${ref(tableRef)}
        .columns="${args.columns}"
        .data="${dataProvider}"
        .dataLoadKey="${args.simulatedState}"
        rows="4"
        searchable
        settings
        @gds-table-data-loaded=${handleDataLoaded}
      >
        <gds-flex
          slot="error"
          flex-direction="column"
          gap="s"
          align-items="flex-start"
        >
          <gds-text font="heading-s">Unable to load data</gds-text>
          <gds-text font="detail-book-m">
            An error occurred while loading the data. Please try again.
          </gds-text>
          <gds-button rank="secondary" size="small" @click=${handleRetry}>
            Retry
          </gds-button>
        </gds-flex>

        <gds-flex
          slot="empty"
          flex-direction="column"
          gap="s"
          align-items="flex-start"
        >
          <gds-text font="heading-s">No data available</gds-text>
          <gds-text font="detail-book-m">
            There are currently no records to display in this table.
          </gds-text>
        </gds-flex>

        <gds-flex
          slot="no-results"
          flex-direction="column"
          gap="s"
          align-items="flex-start"
        >
          <gds-text font="heading-s">No search results</gds-text>
          <gds-text font="detail-book-m">
            Your search did not match any records. Try different keywords.
          </gds-text>
          <gds-button rank="secondary" size="small" @click=${handleClearSearch}>
            Clear search
          </gds-button>
        </gds-flex>
      </gds-table>
    `
  },
}

export const DynamicContent: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
  },
  parameters: {
    docs: {
      description: {
        story: `



⚠️ REWRITE FOR SLOTS

See Developer Guide for complete documentation.

          `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-table
        ${ref(tableRef)}
        .columns="${args.columns}"
        .data="${args.data}"
        rows="4"
        plain
        @gds-table-data-loaded=${handleDataLoaded}
      >
      </gds-table>
    `
  },
}

// ============================================================================
// EVENTS
// ============================================================================

export const Events: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
  },
  parameters: {
    docs: {
      description: {
        story: `
The table component dispatches events for various user interactions. 

**Pagination Events**
- **gds-page-change**: Fired when the active page changes. Detail: \`{ page: number }\`
- **gds-rows-change**: Fired when the rows per page value changes. Detail: \`{ rows: number }\`

**Sorting Events**
- **gds-sort-change**: Fired when sorting changes. Detail: \`{ sortColumn: string, sortDirection: 'asc' | 'desc' }\`

**Data Events**
- **gds-table-data-loaded**: Fired when data is successfully loaded
- **gds-table-data-error**: Fired when data loading fails
- **gds-table-selection**: Fired when row selection changes

This example demonstrates listening to pagination and sorting events and displaying the current state.
        `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()
    const state = {
      currentPage: 1,
      currentRows: 10,
      sortColumn: '',
      sortDirection: 'asc',
    }

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    const handlePageChange = (e: CustomEvent) => {
      console.log('🔔 Page change event:', e.detail)
      state.currentPage = e.detail.page
      const pageEl = document.querySelector('#page-status')
      if (pageEl) {
        pageEl.textContent = `Page: ${state.currentPage}`
      }
    }

    const handleRowsChange = (e: CustomEvent) => {
      console.log('🔔 Rows change event:', e.detail)
      state.currentRows = e.detail.rows
      const rowsEl = document.querySelector('#rows-status')
      if (rowsEl) {
        rowsEl.textContent = `Rows: ${state.currentRows}`
      }
    }

    const handleSortChange = (e: CustomEvent) => {
      console.log('🔔 Sort change event:', e.detail)
      state.sortColumn = e.detail.sortColumn
      state.sortDirection = e.detail.sortDirection
      const sortEl = document.querySelector('#sort-status')
      if (sortEl) {
        sortEl.textContent = `${state.sortColumn} (${state.sortDirection})`
      }
    }

    return html`
      <gds-flex flex-direction="column" gap="l">
        <gds-flex flex-direction="column" gap="m">
          <gds-card variant="secondary" padding="m" border-radius="m">
            <gds-flex flex-direction="column" gap="s">
              <gds-text font="heading-s">Event Monitor</gds-text>
              <gds-text font="detail-book-s" color="neutral-01">
                Open your browser console (F12) to see event logs
              </gds-text>
              <gds-flex gap="m">
                <gds-flex flex-direction="column" gap="xs" flex="1">
                  <gds-text font="detail-book-s" color="neutral-01">
                    Current Page
                  </gds-text>
                  <gds-text
                    id="page-status"
                    font="body-regular-m"
                    color="primary"
                  >
                    Page: ${state.currentPage}
                  </gds-text>
                </gds-flex>
                <gds-flex flex-direction="column" gap="xs" flex="1">
                  <gds-text font="detail-book-s" color="neutral-01">
                    Rows Per Page
                  </gds-text>
                  <gds-text
                    id="rows-status"
                    font="body-regular-m"
                    color="primary"
                  >
                    Rows: ${state.currentRows}
                  </gds-text>
                </gds-flex>
                <gds-flex flex-direction="column" gap="xs" flex="1">
                  <gds-text font="detail-book-s" color="neutral-01">
                    Sort Column
                  </gds-text>
                  <gds-text
                    id="sort-status"
                    font="body-regular-m"
                    color="primary"
                  >
                    ${state.sortColumn
                      ? `${state.sortColumn} (${state.sortDirection})`
                      : 'None'}
                  </gds-text>
                </gds-flex>
              </gds-flex>
            </gds-flex>
          </gds-card>
        </gds-flex>

        <gds-table
          ${ref(tableRef)}
          .columns="${args.columns}"
          .data="${args.data}"
          rows="5"
          selectable
          searchable
          settings
          @gds-table-data-loaded=${handleDataLoaded}
          @gds-page-change=${(e: CustomEvent) => handlePageChange(e)}
          @gds-rows-change=${(e: CustomEvent) => handleRowsChange(e)}
          @gds-sort-change=${(e: CustomEvent) => handleSortChange(e)}
        >
        </gds-table>
      </gds-flex>
    `
  },
}

// ============================================================================
// FEATURES - SLOT COMPOSITION
// ============================================================================

export const SlotComposition: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
    headline: 'User Management',
    summary: 'Overview of all users in the system',
    selectable: true,
    searchable: true,
    settings: true,
    density: 'comfortable',
  },

  parameters: {
    docs: {
      description: {
        story: `
Demonstrates dynamic slot composition for data-driven content injection into table cells.

**Pattern:** Generate slots using \`columnKey:rowKey:slotId\` naming convention.

Slot content is generated from \`Users.SlotContent(rows)\` which receives the current page's rows from the \`gds-table-data-loaded\` event and creates per-row elements (avatars, copy icons, download icons).

Only the current page's slot content is rendered — when pages change, previous slot elements are replaced with new ones for the visible rows.
        `,
      },
    },
  },
  render: (args) => {
    const tableRef = createRef<any>()

    const handleDataLoaded = (e: CustomEvent) => {
      const table = tableRef.value
      if (table) render(Users.SlotContent(e.detail.rows), table)
    }

    return html`
      <gds-table
        ${ref(tableRef)}
        .columns="${args.columns}"
        .data="${args.data}"
        .headline="${args.headline}"
        .summary="${args.summary}"
        ?selectable="${args.selectable}"
        ?searchable="${args.searchable}"
        ?settings="${args.settings}"
        density="${args.density}"
        responsive
        rows="5"
        @gds-table-data-loaded=${handleDataLoaded}
      >
      </gds-table>
    `
  },
}
