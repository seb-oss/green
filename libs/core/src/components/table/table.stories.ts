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

import { Source } from '@storybook/addon-docs/blocks'

import { argTablePropsFor } from '../../../.storybook/argTableProps'
import { Feedback, Users } from './table.stories.data'

const Welcome = () => {
  return html`
    <gds-card>
      <gds-flex flex-direction="column" gap="xl">
        <gds-text tag="h1" font="heading-xl">Green Design System</gds-text>

        <gds-text font="body-regular-l">
          Welcome to the Green Design System documentation.
        </gds-text>

        <gds-flex gap="m">
          <gds-button href="#" rank="primary"> Get Started </gds-button>
          <gds-button href="#" rank="secondary"> View Components </gds-button>
        </gds-flex>

        <gds-text font="detail-book-m"> Version: 1.0.0 </gds-text>
      </gds-flex>
    </gds-card>
  `
}

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
The \`selectable\` property enables row-level selection with a checkbox column. Provides comprehensive selection control:
- Individual row selection
- Select/deselect all rows via header checkbox
- Partial selection state indication

---

#### Selection Events
When rows are selected, the table emits a \`gds-table-selection\` event containing:
- Selected row indices
- Selected row data
- Total selection count

---

#### Footer Selection Summary
- Displays number of selected rows
- Provides a "Clear" button to reset selection

---

#### Methods
- \`selectAll()\`: Select all rows
- \`clearSelection()\`: Deselect all rows
- \`setSelection(indices)\`: Select specific rows
- \`getSelection()\`: Retrieve selected rows
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

The table supports multiple cell types for flexible data rendering:
- Badge
- Image 
- Button
- Link
- Context menu (intended for actions)
- Formatted text: \`formatted-number\`, \`formatted-account\` and \`formatted-date\`

**Note**: Most cell types (badge, image, button) accept standard component properties, allowing full customization.
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
The \`actions\` property enables flexible interaction methods for each table row:

**Action Types**:
- **Buttons**: Direct, immediate actions (limit to two buttons maximum)
- **Links**: Navigate to detailed views or download files
- **Context Menu**: Multiple related actions in a popover

Actions will always appear at the end of the row. 
Alignment varies by action type: 
- Two buttons align to the left 
- All other actions justify to the end of the cell
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
-  **Header Lead**: Add dropdowns or buttons for filtering/sorting.
-  **Header Trail**: Include actions like export buttons.

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
      <template name="email-copy">
        <gds-icon-copy></gds-icon-copy>
      </template>
      <template name="download-image">
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </template>
    </gds-table>
  `,
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
- Templates can be defined within the table to provide custom content for specific cell types
- Templates are referenced using \`name\` attribute
- Can be used to inject for example icons into cell types such as button on \`main\`, \`lead\` or \`trail\` slot.

\`\`\`typescript
{
  key: 'email',
  label: 'Email',
  sortable: true,
  justify: 'space-between',
  cell: {
    trail: {
      type: 'button',
      value: (row: UserData) => row.email,
      size: 'xs',
      template: 'email-copy',  // References template content
    },
  },
}
\`\`\`

**Template definition**

\`\`\`html
<!-- Used as icon button -->
<template name="email-copy">
  <gds-icon-copy></gds-icon-copy>
</template>

<!-- Used as trail icon on link -->
<template name="download-image">
  <gds-icon-cloud-download
    
    slot="trail" <!-- Slots can be defined here -->
></gds-icon-cloud-download>
</template>
\`\`\`
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
    </gds-table>
  `,
}

export const WelcomePage: Story = {
  render: () => html`<${Welcome} />`,
}
