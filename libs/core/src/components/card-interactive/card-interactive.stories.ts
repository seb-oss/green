import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './card-interactive'

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
    <gds-grid gap="l" columns="2">
      <gds-card-interactive
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
        title="Title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        prompt="Read more"
      >
      </gds-card-interactive>
      <gds-card-interactive
        href="#"
        src="https://api.seb.io/assets/launch-hero.jpg"
        title="Title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        prompt="Read more"
        aspect-ratio="3/2"
        plain
      >
      </gds-card-interactive>
      <gds-card-interactive
        href="#"
        title="Title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        prompt="Read more"
      >
      </gds-card-interactive>
      <gds-card-interactive
        href="#"
        title="Title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        prompt="Read more"
        plain
      >
      </gds-card-interactive>
    </gds-grid>
  `,
}
