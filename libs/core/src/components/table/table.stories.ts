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
  render: (args) => html`
    <gds-table
      ?plain="${args.plain}"
      .columns="${args.columns}"
      .data="${args.data}"
    ></gds-table>
  `,
}

export const Striped: Story = {
  args: {
    columns: Users.Columns,
    data: Users.Data,
    striped: true,
  },
  render: (args) => html`
    <gds-table
      ?striped="${args.striped}"
      .columns="${args.columns}"
      .data="${args.data}"
    ></gds-table>
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
  render: (args) => html`
    <gds-table
      .density="${args.density}"
      .columns="${args.columns}"
      .data="${args.data}"
    ></gds-table>
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
  render: (args) => html`
    <gds-table
      ?responsive="${args.responsive}"
      .columns="${args.columns}"
      .data="${args.data}"
    ></gds-table>
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
    responsive: true,
  },
  render: (args) => html`
    <gds-table
      ?responsive="${args.responsive}"
      .columns="${args.columns}"
      .data="${args.data}"
    ></gds-table>
  `,
}
