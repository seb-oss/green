import type { Meta, StoryObj } from '@storybook/web-components'

import './cell'

import { html } from 'lit'

const meta: Meta = {
  title: 'Components/Table/Cell',
  component: 'gds-table-cell',
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
  name: 'table-cell',

  args: {
    label: 'Pick an option',
    supportingText: 'Label support text.',
    innerHTML: `
     
    <!-- Regular editable cell -->
<gds-table-cell 
  value="Editable content" 
  editable
></gds-table-cell>

<!-- Clickable cell (link) -->
<gds-table-cell 
  value="Click to navigate"
  href="/some-path"
>
  <gds-icon-document slot="lead"></gds-icon-document>
</gds-table-cell>

<!-- Clickable cell opening in new tab -->
<gds-table-cell 
  value="Opens in new tab"
  href="https://example.com"
  target="_blank"
>
  <gds-icon-external slot="lead"></gds-icon-external>
</gds-table-cell>

<!-- Cell with custom content and link -->
<gds-table-cell href="/details/123">
  <gds-badge slot="lead" variant="notice">Active</gds-badge>
  <div class="custom-content">
    <strong>Project Name</strong>
    <span>Click for details</span>
  </div>
</gds-table-cell>

    
    `,
  },
}
