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
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    showIcon: { control: 'boolean' },
    dismissible: { control: 'boolean' },
    timeOut: { control: 'number' },
    buttonText: { control: 'text', name: 'Button Text (CTA)' },
  },
}

export default meta

type Story = StoryObj<GdsAlert>

const Template = (args: any, { parameters }: any) => html`
  <gds-div padding="xs; l {m}" margin="m">
    <gds-alert
      type="${args.type}"
      ?show-icon=${args.showIcon}
      ?dismissible=${args.dismissible}
      .timeOut=${args.timeOut}
      .buttonText=${args.buttonText || ''}
    >
      ${parameters?.content || ''}
    </gds-alert>
  </gds-div>
`

export const Playground: Story = {
  args: {
    type: 'info',
    showIcon: true,
    dismissible: false,
    timeOut: 0,
    buttonText: '',
  },
  parameters: {
    content: html`<strong>Information</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.`,
  },
  render: Template,
}

export const Info: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    type: 'info',
  },
  parameters: {
    content: html`<strong>Information</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.`,
  },
  render: Template,
}

export const Success: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    type: 'success',
  },
  parameters: {
    content: html`<strong>Success</strong> Body text starts on the same row as
      heading. A link (optional) always ends the message, stand alone or part of
      the sentence.`,
  },
  render: Template,
}

export const Warning: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    type: 'warning',
  },
  parameters: {
    content: html`<strong>Warning</strong> Body text starts on the same row as
      heading. A link (optional) always ends the message, stand alone or part of
      the sentence.`,
  },
  render: Template,
}

export const Error: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    type: 'error',
  },
  parameters: {
    content: html`<strong>Error</strong> Body text starts on the same row as
      heading. A link (optional) always ends the message, stand alone or part of
      the sentence.`,
  },
  render: Template,
}

export const WithAction: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    type: 'info',
    dismissible: true,
    buttonText: 'Take Action',
  },
  parameters: {
    content: html`<strong>Actionable</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.`,
  },
  render: Template,
}

export const Dismissible: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    type: 'info',
    dismissible: true,
  },
  parameters: {
    content: html`<strong>Dismissible</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.`,
  },
  render: Template,
}

export const AutoDismiss: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    type: 'success',
    timeOut: 3000,
  },
  parameters: {
    content: html`<strong>Auto Dismiss</strong> Body text starts on the same row
      as heading. A link (optional) always ends the message, stand alone or part
      of the sentence.`,
  },
  render: Template,
}

export const NoIcon: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    type: 'info',
    showIcon: false,
    dismissible: true,
  },
  parameters: {
    content: html`<strong>No Icon</strong> This alert does not show an icon.`,
  },
  render: Template,
}

export const RichContent: Story = {
  args: {
    type: 'info',
    showIcon: true,
    dismissible: true,
    buttonText: 'Learn More',
  },
  parameters: {
    content: html`<strong>Rich Content Alert</strong> This alert contains
      <a href="#" style="color: inherit; text-decoration: underline;">a link</a
      >, <em>emphasized text</em>, and
      <code
        style="background: rgba(0,0,0,0.1); padding: 2px 4px; border-radius: 3px;"
        >inline code</code
      >.`,
  },
  render: Template,
}

export const ComplexContent: Story = {
  args: {
    type: 'warning',
    showIcon: true,
    dismissible: true,
    buttonText: '',
  },
  parameters: {
    content: html`<strong>Long Content Example</strong> This is a very long
      message that demonstrates how the alert handles extensive content. The
      layout should remain stable and readable even with multiple lines of text.
      The action button and close button should maintain their positions
      appropriately.`,
  },
  render: Template,
}
