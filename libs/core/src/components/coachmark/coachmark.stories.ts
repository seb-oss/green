import { html } from 'lit/html.js'
import type { Meta, StoryObj } from '@storybook/web-components'
import '../../../../../dist/libs/core/src/components/coachmark/index.js'

const meta: Meta = {
  title: 'Components/Coachmark',
  component: 'gds-coachmark',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
  },
  argTypes: {
    coachmark: {
      control: { type: 'object' },
    },
  },
}
let dummy = {
  id: 'test-coachmark',
  variant: 'dark',
  tooltip: {
    title: 'This is a coachmark title',
    content: ['This is the coachmark content.'],
    closeButton: { text: 'Close', ariaLabel: 'Close tooltip' },
    preferredPlacement: 'top',
    target: ['#targetElement'],
  },
}

export const Basic: Story = {
  ...DefaultParams,
  args: {},
  render: () => {
    return html`
      <h2 id="targetElement">target Element</h2>

      ${document.getElementById('targetElement')
        ? html`
            <gds-coachmark .coachmark=${dummy}>
              <div class="gds-coachmark" slot="body" aria-modal="false">
                <div>${dummy.tooltip.content}</div>
              </div>
              <div id="gds-arrow"></div>
            </gds-coachmark>
          `
        : html``}
    `
  },
}
