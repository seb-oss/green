import type { Meta, StoryObj } from '@storybook/web-components'

import './dialog'

import { html } from 'lit'

import type { GdsDialog } from './dialog'

const meta: Meta = {
  title: 'Components/Dialog',
  component: 'gds-dialog',
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
 *
 */
export const Default: Story = {
  ...DefaultParams,
  name: 'Default',
  render: () =>
    html`<gds-dialog @gds-close=${console.log} heading="Dialog heading">
        <gds-button slot="trigger">Open Dialog</gds-button>
        This is the content of the dialog.
      </gds-dialog>
      <gds-dialog
        @gds-close=${console.log}
        @gds-show=${console.log}
        @gds-ui-state=${console.log}
        heading="Dialog heading"
        variant="slide-out"
        id="my-dialog"
      >
        <gds-button slot="trigger">Open Slide-out dialog</gds-button>
        This is the content of the dialog.
        <gds-button rank="secondary" slot="footer">Custom btn</gds-button>
        <gds-button
          slot="footer"
          @click=${() =>
            (document.getElementById('my-dialog') as GdsDialog)?.close(
              'closed it',
            )}
          >Custom btn 2</gds-button
        >
      </gds-dialog>`,
}
