import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './card-interactive'
import '../button'

const meta: Meta = {
  title: 'Components/Card Interactive',
  component: 'gds-card-interactive',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-card-interactive'),
  },
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { disable: true },
  },
}

/**
 * TODO: Add documentation here. Also add the beta
 * flag in green/libs/core/.storybook/manager.ts to
 * mark the component as beta in the menu of the
 * core storybook.
 */
export const CardInteractive: Story = {
  ...DefaultParams,
  args: {
    innerHTML: 'Card content',
  },
}

/**
 * Examples of different color variants
 */
export const Variants: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid gap="l" columns="2" width="600px">
      <gds-card-interactive
        type="linked"
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
        title="Title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        prompt="Read more"
        media="square"
      >
      </gds-card-interactive>
      <gds-card-interactive
        type="linked"
        href="#"
        title="Title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        prompt="Read more"
      >
        <span slot="header">hello</span>
      </gds-card-interactive>
      <gds-card-interactive
        type="dynamic"
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
        title="Title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        prompt="Read more"
      >
      </gds-card-interactive>

      <gds-card-interactive
        type="dynamic"
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
        title="Title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        prompt="Read more"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="secondary">Secondary</gds-button>
      </gds-card-interactive>
    </gds-grid>
  `,
}
