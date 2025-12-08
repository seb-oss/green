import { html } from 'lit'
import { createRef, ref } from 'lit/directives/ref.js'

import type { Meta, StoryObj } from '@storybook/web-components'

import './table'
import '../card'
import '../dropdown/dropdown'
import '../segmented-control/segmented-control'
import '../context-menu/context-menu'
import '../input/input'
import '../img/img'
import '../pagination/pagination'
import '../icon/icons/dot-grid-one-horizontal'
import '../icon/icons/plus-small'
import '../icon/icons/settings-slider-hor'
import '../icon/icons/cloud-download'
import '../icon/icons/copy'
import '../icon/icons/pin'
import '../icon/icons/circle-check'
import '../icon/icons/cross-small'

import { argTablePropsFor } from '../../../.storybook/argTableProps'
import { Feedback, Users } from './table.stories.data'

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
  },
  tags: ['autodocs'],
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
    settings: true,
  },
  render: (args) =>
    html` <gds-table
      density="${args.density}"
      variant="${args.variant}"
      ?searchable="${args.searchable}"
      ?settings="${args.settings}"
      ?selectable="${args.selectable}"
      .columns="${args.columns}"
      .data="${args.data}"
      .actions="${args.actions}"
      rows="60"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>`,
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
  render: (args) => html`
    <gds-table
      .density="${args.density}"
      ?selectable="${args.selectable}"
      .columns="${args.columns}"
      .data="${args.data}"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `,
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
  render: (args) => html`
    <gds-table
      ?searchable="${args.searchable}"
      ?settings="${args.settings}"
      .columns="${args.columns}"
      .data="${args.data}"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `,
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
  render: (args) => html`
    <gds-table
      ?nocache="${args.nocache}"
      ?searchable="${args.searchable}"
      ?settings="${args.settings}"
      .columns="${args.columns}"
      .data="${args.data}"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `,
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
  render: (args) => html`
    <gds-table .columns="${args.columns}" .data="${args.data}">
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `,
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
  render: (args) => html`
    <gds-table .columns="${args.columns}" .data="${args.data}">
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `,
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
    <gds-table .columns="${args.columns}" .data="${args.data}">
      <template name="email-copy">
        <gds-icon-copy slot="trail"></gds-icon-copy>
      </template>
      <template name="role-link">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
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

Supports all cell types (button, link, context-menu, badge, etc.) and can contain multiple actions. Column content justification can be controlled via the \`justify\` property.

        `,
      },
    },
  },
  render: (args) => html`
    <gds-table
      plain
      .rows=${2}
      .page=${2}
      .columns="${args.columns}"
      .data="${args.data}"
      .actions="${args.actions}"
    >
      <template name="actions-activate">
        <gds-icon-pin></gds-icon-pin>
      </template>
      <template name="actions-delete">
        <gds-icon-cross-small></gds-icon-cross-small>
      </template>
    </gds-table>

    <br />
    <br />
    <br />

    <gds-table
      plain
      .rows=${2}
      .page=${2}
      .columns="${args.columns}"
      .data="${args.data}"
      .actions="${Feedback.ActionContextMenu}"
    >
    </gds-table>

    <br />
    <br />
    <br />

    <gds-table
      plain
      .rows=${2}
      .page=${2}
      .columns="${args.columns}"
      .data="${args.data}"
      .actions="${Feedback.ActionLink}"
    >
    </gds-table>
  `,
}

// ============================================================================
// STYLING - Plain
// ============================================================================

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
  render: (args) => html`
    <gds-table
      ?plain="${args.plain}"
      .columns="${args.columns}"
      .data="${args.data}"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `,
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
  render: (args) => html`
    <gds-table
      .density="${args.density}"
      ?striped="${args.striped}"
      .columns="${args.columns}"
      .data="${args.data}"
      rows="20"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `,
}

// ============================================================================
// STYLING - DENSITY
// ============================================================================

export const Density: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
    density: 'compact',
  },
  parameters: {
    docs: {
      description: {
        story: `
The \`density\` property allows customizing the table's visual spacing with these options:

- **\`comfortable\`** (Default) · Standard spacing for balanced readability
- **\`compact\`** · Reduced spacing to maximize information density
- **\`spacious\`** · Increased spacing for enhanced readability
        `,
      },
    },
  },
  render: (args) => html`
    <gds-table
      .density="${args.density}"
      .columns="${args.columns}"
      .data="${args.data}"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `,
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

    return html`
      <gds-card variant="${wrapperVariant}" padding="l" border-radius="m">
        <gds-table
          .density="${args.density}"
          .variant="${args.variant}"
          .columns="${args.columns}"
          .data="${args.data}"
          searchable
          settings
          selectable
          rows="5"
        >
          <template name="email-copy">
            <gds-icon-copy></gds-icon-copy>
          </template>
          <template name="download-image">
            <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
          </template>
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
  render: (args) => html`
    <gds-table
      ?responsive="${args.responsive}"
      .columns="${args.columns}"
      .data="${args.data}"
      height="80vh"
    >
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `,
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
  render: (args) => html`
    <gds-table
      .columns="${args.columns}"
      .data="${args.data}"
      rows="4"
      settings
      searchable
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
  `,
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
Templates provide reusable content for cell types. Reference them using the \`template\` property with the template's \`name\` attribute.

**Icon properties:** Icon size and color can be specified either in the column configuration or directly in the template. Column configuration takes precedence.

\`\`\`typescript
{
  cell: {
    lead: {
      type: 'icon',
      template: 'department-icon',
      size: 'm',      // Overrides template size
      color: 'primary' // Overrides template color
    }
  }
}
\`\`\`

See Developer Guide for complete documentation.

          `,
      },
    },
  },
  render: (args) => html`
    <gds-table .columns="${args.columns}" .data="${args.data}" rows="4" plain>
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
      <template name="department-icon">
        <gds-icon-cloud-download></gds-icon-cloud-download>
      </template>
    </gds-table>
  `,
}
