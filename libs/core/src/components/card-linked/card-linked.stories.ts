import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './card-linked'
import '../button'
import '../icon/icons/chevron-right.component'
import '../text'
import '../link'
import '../divider'

const meta: Meta = {
  title: 'Components/Card Linked',
  component: 'gds-card-linked',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-card-linked'),
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

export const CardLinked: Story = {
  ...DefaultParams,
  args: {
    href: '#',
    label: 'Read more',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
}

/**
 *
 */
export const Ranks: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid columns="3" gap="xl">
      <gds-card-linked
        href="#"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        label="Link text"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
      <gds-card-linked
        href="#"
        rank="outlined"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        label="Link text"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
      <gds-card-linked
        href="#"
        rank="plain"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        label="Link text"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
    </gds-grid>
  `,
}

/**
 * Footer slot
 */
export const Footer: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-grid columns="3" gap="xl">
      <!-- Combined -->
      <gds-card-linked
        href="#"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
        <gds-button rank="secondary" slot="footer">
          <gds-icon-chevron-right></gds-icon-chevron-right>
        </gds-button>
      </gds-card-linked>
      <gds-card-linked
        herf="#"
        label="Link text"
        rank="outlined"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
      <gds-card-linked
        herf="#"
        label="Link text"
        rank="plain"
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
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
      <gds-card-linked
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
      <gds-card-linked
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        src="https://api.seb.io/assets/launch-hero.jpg"
        media="square"
      >
      </gds-card-linked>
      <gds-card-linked
        title="This is a heading"
        excerpt="Regular card – multiple click areas if needed. You can use a button when that suites the context, a separate link or both."
        media="square"
        src="https://api.seb.io/assets/launch-hero.jpg"
      >
      </gds-card-linked>
    </gds-grid>
  `,
}
