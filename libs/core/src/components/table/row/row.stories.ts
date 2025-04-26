import type { Meta, StoryObj } from '@storybook/web-components'

import './row'

const meta: Meta = {
  title: 'Components/Table/Row',
  component: 'gds-table-row',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
}

/**
 * TODO: Add documentation
 */
export const Table: Story = {
  ...DefaultParams,
  name: 'table-rw',

  args: {
    label: 'Pick an option',
    supportingText: 'Label support text.',
    innerHTML: `
     
          Row stuff
    
    `,
  },
}

// <!-- Basic row -->
// <gds-table-row>
//   <gds-table-cell>Cell 1</gds-table-cell>
//   <gds-table-cell>Cell 2</gds-table-cell>
// </gds-table-row>

// <!-- Sortable and selectable row -->
// <gds-table-row
//   sortable
//   selectable
//   @row-drag-start=${handleDragStart}
//   @row-drop=${handleDrop}
//   @row-select=${handleSelect}
// >
//   <gds-table-cell>Draggable Cell</gds-table-cell>
//   <gds-table-cell>Another Cell</gds-table-cell>
// </gds-table-row>

// <!-- Clickable row with options -->
// <gds-table-row
//   href="/details/123"
//   hasOptions
//   @row-click=${handleRowClick}
// >
//   <gds-table-cell>Clickable Content</gds-table-cell>
//   <gds-table-cell>More Content</gds-table-cell>

//   <!-- Custom options menu -->
//   <div slot="options">
//     <gds-dropdown>
//       <gds-option>Custom Option 1</gds-option>
//       <gds-option>Custom Option 2</gds-option>
//     </gds-dropdown>
//   </div>
// </gds-table-row>
