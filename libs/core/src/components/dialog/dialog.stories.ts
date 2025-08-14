import type { Meta, StoryObj } from '@storybook/web-components'

import './dialog'

import { html } from 'lit'

import type { GdsDialog } from './dialog'

/**
 * A dialog appears in front of content to provide critical information or ask for a decision.
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
    innerHTML: `<gds-button slot="trigger">Open Dialog</gds-button>This is the content of the dialog. You can add any content here, including other components. You can also add buttons to the footer of the dialog by using the slot="footer" attribute on the button. You can also use the slot="footer" attribute to add buttons to the footer of the dialog. The dialog will automatically close when the user clicks outside of it or presses the Escape key. You can also close the dialog programmatically by calling the close() method on the dialog element. The dialog will also emit a gds-close event when it is closed, which you can listen to if you want to perform some action when the dialog is closed.`,
    variant: 'default',
    size: 'm',
    position: 'initial',
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
 *
 * All the emitted events will have a `detail` object with a reason property that can be used to determine the reason for the event.
 * The `gds-ui-state` event can also be cancelled to prevent the dialog from closing.
 *
 * Possible reasons are:
 * - `btn-close`: The dialog was closed by the user clicking the close button.
 * - `btn-cancel`: The dialog was closed by the user clicking the default cancel button.
 * - `btn-ok`: The dialog was closed by the user clicking the default OK button.
 * - `native-close`: The dialog was closed by an action native to the HTML dialog element, such as pressing the Escape key.
 * - `click-outside`: The dialog was closed by the user clicking outside the dialog.
 * - `slotted-trigger`: The dialog was opened by the user clicking the slotted trigger button.
 *
 * The reason can also be a custom string supplied when calling the `close()` or `show()` methods.
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
