import { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'
import { html } from '../../utils/helpers/custom-element-scoping'
import { GdsAlert } from './alert.component'

import './index.ts'
import '../card/card.ts'
import '../button/button.ts'
import '../rich-text/rich-text.ts'

/**
 * Alert is a message used to inform or update the user about the state of a system, page or function. Icons and color indicate the type and urgency of the information within the message.
 */
const meta: Meta<GdsAlert> = {
  title: 'Components/Alert',
  component: 'gds-alert',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-alert'),
  },
  args: {
    variant: 'information',
    role: 'alert',
    buttonLabel: '',
    innerHTML:
      '<strong>Information</strong> Body text starts on the same row as heading. A link (optional) always ends the message.',
  },
}

export default meta

type Story = StoryObj<GdsAlert>

export const Default: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
}

/**
 * Alert is avaliable in multiple variants to indicate different types of messages.
 * Each variant has a specific color and icon to convey the message type.
 */
export const Variants: Story = {
  render: () => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-alert variant="information" role="alert">
        <strong>Information</strong> Body text starts on the same row as
        heading. A link (optional) always ends the message.
      </gds-alert>
      <gds-alert variant="notice" role="alert">
        <strong>Notice</strong> Body text with link or additional context.
      </gds-alert>
      <gds-alert variant="positive" role="alert">
        <strong>Positive</strong> Feedback message with optional CTA.
      </gds-alert>
      <gds-alert variant="warning" role="alert">
        <strong>Warning</strong> Important information to consider.
      </gds-alert>
      <gds-alert variant="negative" role="alert">
        <strong>Negative</strong> Error message requiring user attention.
      </gds-alert>
    </gds-flex>
  `,
}

/**
 * Alerts can have a action button to allow users to take an immediate action.
 */
export const WithAction: Story = {
  args: {
    variant: 'information',
    buttonLabel: 'Take Action',
    innerHTML:
      '<strong>Actionable</strong> Alert with a button for quick user interaction.',
  },
}

/**
 * Alerts can be dismissed by the user, either by pressing the close button, or by using the Escape key while the alert is focused.
 */
export const Dismissible: Story = {
  args: {
    variant: 'information',
    dismissible: true,
    innerHTML: '<strong>Dismissible</strong> User can dismiss this alert.',
  },
}

/**
 * Alerts can automatically dismiss themselves after a specified timeout.
 */
export const AutoDismiss: Story = {
  args: {
    variant: 'positive',
    timeout: 6400,
    innerHTML:
      '<strong>Auto Dismiss</strong> This alert disappears automatically after a delay.',
  },
}

/**
 * Alerts can contain rich content in the main slot.
 */
export const RichContent: Story = {
  args: {
    variant: 'information',
    dismissible: true,
    buttonLabel: 'Learn More',
    innerHTML:
      '<gds-rich-text><strong>Rich Content</strong> Includes <a href="#">a link</a>, <em>emphasis</em>, and <code>code</code>.</gds-rich-text>',
  },
}
