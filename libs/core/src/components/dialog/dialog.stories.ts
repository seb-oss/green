import type { Meta, StoryObj } from '@storybook/web-components'

import './dialog'

import { html } from 'lit'

import type { GdsDialog } from './dialog'

/**
 * A dialog is a type of modal window that appears in front of app content
 * to provide critical information or ask for a decision. Dialogs disable
 * all app functionality when they appear, and remain on screen until confirmed,
 * dismissed, or a required action has been taken.
 *
 * @beta
 */
const meta: Meta = {
  title: 'Components/Dialog',
  component: 'gds-dialog',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
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
  args: {
    heading: 'Dialog heading',
    innerHTML: `<gds-button slot="trigger">Open Dialog</gds-button>

This is the content of the dialog.`,
  },
}

/**
 * The easiest way to set up a dialog is to put a button in the trigger slot. This will
 * automatically open the dialog when the button is clicked.
 */
export const Default: Story = {
  ...DefaultParams,
}

/**
 * You can set the `variant` attribute to `slide-out` to make the dialog slide in from the right.
 */
export const SlideOut: Story = {
  ...DefaultParams,
  args: {
    ...DefaultParams.args,
    variant: 'slide-out',
  },
}

/**
 * You can also open and close the dialog programmatically by calling the `show()` and `close()` methods.
 * In this case you should add `aria-haspopup="dialog"` to the trigger element. Slotted triggers will get
 * this attribute automatically.
 *
 * Inside the dialog, you can use the `slot="footer"` to add buttons to the footer of the dialog.
 */
export const CustomButtons: Story = {
  ...DefaultParams,
  render: () =>
    html`<gds-button
        aria-haspopup="dialog"
        onclick="document.getElementById('my-dialog').show()"
        >Open dialog</gds-button
      >
      <gds-dialog heading="Dialog heading" id="my-dialog">
        This is the content of the dialog.
        <gds-button
          slot="footer"
          onclick="document.getElementById('my-dialog').close('custom close')"
          >Custom close button</gds-button
        >
      </gds-dialog>`,
}

/**
 * You can listen to the `gds-show`, `gds-close` and `gds-ui-state` events to know when the dialog is opened or closed.
 *
 * When `close()` or `show()` is called without a parameter, the event will not be emitted. If a parameter is passed, the
 * event will be emitted with the parameter as the event detail. Also when any of the built-in methods are used to open or
 * close the dialog, the event will be emitted with the parameter as the event detail.
 */
export const Events: Story = {
  ...DefaultParams,
  render: () =>
    html`<gds-dialog
      @gds-close=${console.log}
      @gds-show=${console.log}
      @gds-ui-state=${console.log}
      heading="Dialog heading"
      id="my-dialog-events"
    >
      <gds-button slot="trigger">Open dialog</gds-button>
      This is the content of the dialog.
      <gds-button rank="secondary" slot="footer">Custom btn</gds-button>
      <gds-button
        slot="footer"
        onclick="document.getElementById('my-dialog-events').close('custom close')"
        >Custom btn 2</gds-button
      >
    </gds-dialog>`,
}
