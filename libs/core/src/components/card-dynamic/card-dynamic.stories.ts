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
    title: 'Card title',
    excerpt:
      'Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both.',
    label: 'This is a link',
    src: 'https://api.seb.io/assets/launch-hero.jpg',
  },
}

/**
 *
 */
export const Ranks: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid columns="3" gap="xl">
      <gds-card-dynamic
        href="#"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        label="Link text"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-dynamic>
      <gds-card-dynamic
        href="#"
        rank="outlined"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        label="Link text"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-dynamic>
      <gds-card-dynamic
        href="#"
        rank="plain"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        label="Link text"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-dynamic>
    </gds-grid>
  `,
}

/**
 * Footer slot
 */
export const Actions: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid columns="3" gap="xl">
      <!-- Combined -->
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="outlined"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="plain"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>

      <!-- Buttons only -->
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="secondary">Secondary</gds-button>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="outlined"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="secondary">Secondary</gds-button>
      </gds-card-dynamic>
      <gds-card-dynamic
        rank="plain"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-button slot="footer" rank="secondary">Secondary</gds-button>
      </gds-card-dynamic>
    </gds-grid>
  `,
}

/**
 * Footer slot
 */
export const Media: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid columns="1; m{3}" gap="xl" width="100%">
      <!-- Combined -->
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
        media="square"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
      <gds-card-dynamic
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        media="square"
        src="https://api.seb.io/assets/launch-hero.jpg"
        srcset="https://api.seb.io/assets/launch-hero.jpg 300w, https://api.seb.io/assets/primitives_hero.png 900w"
        sizes="(max-width: 600px) 300px, 900px"
      >
        <gds-button slot="footer">Primary</gds-button>
        <gds-link href="#" slot="footer" size="medium">
          <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
          This is a link
        </gds-link>
      </gds-card-dynamic>
    </gds-grid>
  `,
}
