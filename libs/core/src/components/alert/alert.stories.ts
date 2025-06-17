import { Meta, StoryObj } from '@storybook/web-components'

import { html } from '../../utils/helpers/custom-element-scoping'
import { GdsAlert } from './alert.component'

import './index.ts'
import '../card/card.ts'
import '../button/button.ts'

const meta: Meta<GdsAlert> = {
  title: 'Components/Alert',
  component: 'gds-alert',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['information', 'notice', 'positive', 'warning', 'negative'],
    },
    role: {
      control: 'select',
      options: ['alert', 'status'],
      description:
        'ARIA role. Use "alert" for critical, "status" for less important.',
    },
    dismissible: {
      control: 'boolean',
      description: 'Shows close button when enabled.',
    },
    timeOut: { control: 'number' },
    buttonText: { control: 'text', name: 'Button Text (CTA)' },
    dismissLabel: {
      control: 'text',
      name: 'Dismiss Button Label',
      description: 'Accessible label for the close button (for i18n).',
    },
    timerLabel: {
      control: 'text',
      name: 'Timer Bar Label',
      description: 'Accessible label for the timer bar (for i18n).',
    },
  },
}

export default meta

type Story = StoryObj<GdsAlert>

// Base template
const Template = (
  args: GdsAlert,
  context: { parameters: { content?: unknown } },
) => html`
  <gds-alert
    variant="${args.variant}"
    role="${args.role}"
    ?dismissible=${args.dismissible}
    .timeOut=${args.timeOut}
    .buttonText=${args.buttonText || ''}
    .dismissLabel=${args.dismissLabel || 'Dismiss alert'}
    .timerLabel=${args.timerLabel || 'Auto-dismiss timer'}
  >
    ${context.parameters?.content || ''}
  </gds-alert>
`

// Helper to create stories
const makeStory = (args: Partial<GdsAlert>, content: unknown): Story => ({
  args,
  parameters: { content },
  render: Template,
})

// Stories
export const Playground: Story = makeStory(
  {
    variant: 'information',
    role: 'alert',
    dismissible: false,
    timeOut: 0,
    buttonText: '',
  },
  html`<strong>Information</strong> Body text starts on the same row as heading.
    A link (optional) always ends the message.`,
)

export const Information = makeStory(
  { ...Playground.args!, variant: 'information' },
  Playground.parameters!.content,
)

export const Notice = makeStory(
  { ...Playground.args!, variant: 'notice' },
  html`<strong>Notice</strong> Body text with link or additional context.`,
)

export const Positive = makeStory(
  { ...Playground.args!, variant: 'positive' },
  html`<strong>Positive</strong> Feedback message with optional CTA.`,
)

export const Warning = makeStory(
  { ...Playground.args!, variant: 'warning' },
  html`<strong>Warning</strong> Important information to consider.`,
)

export const Negative = makeStory(
  { ...Playground.args!, variant: 'negative' },
  html`<strong>Negative</strong> Error message requiring user attention.`,
)

export const WithAction = makeStory(
  {
    ...Playground.args!,
    variant: 'information',
    dismissible: true,
    buttonText: 'Take Action',
  },
  html`<strong>Actionable</strong> Alert with a button for quick user
    interaction.`,
)

export const Dismissible = makeStory(
  { ...Playground.args!, variant: 'information', dismissible: true },
  html`<strong>Dismissible</strong> User can dismiss this alert.`,
)

export const AutoDismiss = makeStory(
  { ...Playground.args!, variant: 'positive', timeOut: 3000 },
  html`<strong>Auto Dismiss</strong> This alert disappears automatically after a
    delay.`,
)

export const RichContent = makeStory(
  {
    variant: 'information',
    role: 'alert',
    dismissible: true,
    buttonText: 'Learn More',
  },
  html`<strong>Rich Content</strong> Includes <a href="#">a link</a>,
    <em>emphasis</em>, and <code>code</code>.`,
)

export const ComplexContent = makeStory(
  { variant: 'warning', role: 'alert', dismissible: true },
  html`<strong>Complex Content</strong> Demonstrates how layout adjusts with
    long or wrapped content in alerts.`,
)

export const KeyboardAccessible = makeStory(
  { variant: 'positive', role: 'alert', dismissible: true },
  html`<strong>Keyboard Accessible</strong> Press Escape to dismiss, or use
    keyboard to interact with the alert.`,
)

export const I18nLabels: Story = makeStory(
  {
    variant: 'warning',
    role: 'alert',
    dismissible: true,
    timeOut: 5000,
    buttonText: 'Åtgärda',
    dismissLabel: 'Stäng varning',
    timerLabel: 'Denna varning stängs automatiskt',
  },
  html`<strong>Internationella etiketter</strong> Detta är en varning med
    svenska etiketter för stäng och timer.`,
)
