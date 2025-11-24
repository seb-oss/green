import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './table'
import '../card'
import '../dropdown/dropdown'
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
import { Feedback, Users } from './table.data'

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
A comprehensive table component with enterprise features:

- **Data Management**: Async data loading with pagination
- **Search & Filter**: Built-in search functionality
- **Sorting**: Column-based sorting (ascending/descending)
- **Selection**: Row selection with select all capability
- **Responsive**: Mobile-friendly responsive design
- **Customization**: Flexible column rendering with slots
- **Actions**: Row-level actions via context menu
- **Performance**: Client-side caching for better UX
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
    data: Users.Data,
    selectable: true,
    searchable: true,
    settings: true,
  },
  render: (args) =>
    html` <gds-table
      density="${args.density}"
      ?searchable="${args.searchable}"
      ?settings="${args.settings}"
      ?selectable="${args.selectable}"
      .columns="${args.columns}"
      .data="${args.data}"
      .actions="${args.actions}"
    >
      <template slot="email-copy">
        <gds-icon-copy size="s"></gds-icon-copy>
      </template>
      <template slot="download-image">
        <gds-icon-cloud-download
          size="m"
          slot="trail"
        ></gds-icon-cloud-download>
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
  },
  render: (args) => html`
    <gds-table
      ?selectable="${args.selectable}"
      .columns="${args.columns}"
      .data="${args.data}"
    ></gds-table>
  `,
}

// ============================================================================
// FEATURES - SEARCH & FILTERING
// ============================================================================

export const searchable: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
    searchable: true,
    settings: true,
  },
  render: (args) => html`
    <gds-table
      ?searchable="${args.searchable}"
      ?settings="${args.settings}"
      .columns="${args.columns}"
      .data="${args.data}"
    ></gds-table>
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
  render: (args) => html`
    <gds-table .columns="${args.columns}" .data="${args.data}"></gds-table>
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
  render: (args) => html`
    <gds-table .columns="${args.columns}" .data="${args.data}">
      <template slot="email-copy">
        <gds-icon-copy size="m" slot="trail"></gds-icon-copy>
      </template>
      <template slot="role-link">
        <gds-icon-cloud-download
          size="m"
          slot="trail"
        ></gds-icon-cloud-download>
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
  render: (args) => html`
    <gds-table
      plain
      .rows=${2}
      .page=${2}
      .columns="${args.columns}"
      .data="${args.data}"
      .actions="${args.actions}"
    >
      <template slot="actions-activate">
        <gds-icon-pin></gds-icon-pin>
      </template>
      <template slot="actions-delete">
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
// STYLING - VARIANTS
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
When \`plain\` boolean is set, the table is stripped of pagination and header elements, displaying only the core table content.<br/>
Ideal for embedding tables within other components or creating minimalist data presentations.
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
      <template slot="email-copy">
        <gds-icon-copy size="s"></gds-icon-copy>
      </template>
      <template slot="download-image">
        <gds-icon-cloud-download
          size="m"
          slot="trail"
        ></gds-icon-cloud-download>
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
When \`striped\` boolean is set, alternating row colors improve visual scanning and readability.<br/>
Helps distinguish between adjacent rows, especially in dense data tables.
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
      <template slot="email-copy">
        <gds-icon-copy size="s"></gds-icon-copy>
      </template>
      <template slot="download-image">
        <gds-icon-cloud-download
          size="m"
          slot="trail"
        ></gds-icon-cloud-download>
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
The \`density\` property allows customizing the table's visual spacing with three distinct options:

- **\`comfortable\`** (Default) · Standard spacing for balanced readability
- **\`compact\`** · Reduced spacing to maximize information density
- **\`spacious\`** · Increased spacing for enhanced readability

Adjust density to optimize the table's visual hierarchy and information presentation based on your specific data.
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
      <template slot="email-copy">
        <gds-icon-copy size="s"></gds-icon-copy>
      </template>
      <template slot="download-image">
        <gds-icon-cloud-download
          size="m"
          slot="trail"
        ></gds-icon-cloud-download>
      </template>
    </gds-table>
  `,
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

This approach enhances readability and usability across different device sizes, providing an optimal viewing experience on mobile and tablet devices.
        `,
      },
    },
  },
  render: (args) => html`
    <gds-table
      ?responsive="${args.responsive}"
      .columns="${args.columns}"
      .data="${args.data}"
    >
      <template slot="email-copy">
        <gds-icon-copy size="s"></gds-icon-copy>
      </template>
      <template slot="download-image">
        <gds-icon-cloud-download
          size="m"
          slot="trail"
        ></gds-icon-cloud-download>
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
-  **Header Lead**: Add dropdowns or buttons for filtering/sorting.
-  **Header Trail**: Include actions like export buttons.
-  **Footer**: This slot is recommended for displaying string-based context information. <br />By default it shows pagination details and indicate selected rows with a clearable button.


> Avoid overloading the table slots with multiple components to maintain a clean interface.
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
        <gds-option value="by-name"> Sort by Name </gds-option>
        <gds-option value="by-status"> Sort by Status </gds-option>
      </gds-dropdown>
      <gds-button slot="header-trail" rank="secondary" size="small">
        Export
      </gds-button>
      <gds-text slot="footer-lead"> Last updated: November 2025 </gds-text>
      <template slot="email-copy">
        <gds-icon-copy size="s"></gds-icon-copy>
      </template>
      <template slot="download-image">
        <gds-icon-cloud-download
          size="m"
          slot="trail"
        ></gds-icon-cloud-download>
      </template>
    </gds-table>
  `,
}
