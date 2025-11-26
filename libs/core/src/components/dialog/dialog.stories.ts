import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../.storybook/argTableProps.js'

import './dialog'
import '../index.js'

import { html } from 'lit'
import { he } from 'date-fns/locale'

import type { GdsDialog } from './dialog'

/**
 * A dialog appears in front of content to provide critical information or ask for a decision.
 *
 */
const meta: Meta = {
  title: 'Components/Dialog',
  component: 'gds-dialog',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-dialog'),
  },
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
    <gds-rich-text>
      <p>You can add any content here, including other components. It's a good idea to wrap the content in <code>gds-rich-text</code> to get the correct typography styles.</p>

      <p>You can also add buttons to the footer of the dialog by using the <code>slot="footer"</code> attribute on the button.</p>

      <p>The dialog will automatically close when the user clicks outside of it or presses the Escape key.</p>

      <p>You can also close the dialog programmatically by calling the close() method on the dialog element.</p>

      <p>A <code>gds-close</code> event is emitted when it is closed, which you can listen to if you want to perform some action when the dialog is closed.</p>
    </gds-rich-text>
    `,
    variant: 'default',
    placement: 'initial',
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
 * To enable scroll for overflowing content, you can set the `scrollable` property to `true`.
 *
 * This only has an effect of the default content slot.
 */
export const Scrollable: Story = {
  ...DefaultParams,
  args: {
    ...DefaultParams.args,
    height: '400px',
    scrollable: true,
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
 *
 * ### Preventing close
 * The `gds-ui-state` event can be cancelled by calling `preventDefault()` on the event to prevent the dialog from closing. Presently, only the `gds-ui-state` event can be cancelled in this way.
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

/**
 * You can customize the dialog completely by putting content in the `dialog` slot.
 * This will replace the default content of the dialog, including the header and footer.
 *
 * When this slot is used, the footer slot will not be rendered, so you need to add a custom footer manually.
 *
 * **Important:** Make sure to still use the `heading` property, as it is used to give the dialog an accessible name.
 */
export const CustomDialog: Story = {
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
      <div slot="dialog">
        If you put stuff here, you can customize the entire dialog, including
        header and footer.
      </div>
    </gds-dialog>`,
}
