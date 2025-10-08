import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './card-dynamic'
import '../button'
import '../text'
import '../link'
import '../divider'

const meta: Meta = {
  title: 'Components/Card Dynamic',
  component: 'gds-card-dynamic',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-card-dynamic'),
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

export const CardDynamic: Story = {
  ...DefaultParams,
  args: {
    href: '#',
    title: 'test',
    excerpt: 'test',
    label: 'test',
    src: 'https://api.seb.io/assets/launch-hero.jpg',
  },
}

/**
 * Examples of different color variants
 */
export const Patterns: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid columns="3" gap="xl">
      <gds-card-dynamic
        href="#"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        label="footer label instead"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          Link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        href="#"
        rank="outlined"
        label="footer label instead"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-dynamic>
      <gds-card-dynamic
        href="#"
        rank="plain"
        label="footer label instead"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-dynamic>
      <!-- 
      <gds-card-dynamic
        href="#"
        label="footer label instead"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <span slot="header">header slot</span>

        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          Link
        </gds-link>
      </gds-card-dynamic> -->
    </gds-grid>
  `,
}
