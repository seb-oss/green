import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import './index.ts'
import '../layout/grid/index.js'
import '../layout/flex/index.js'
import '../content/divider/index.js'
import '../icon/icons/circle-info.js'
import '../icon/icons/circle-check.js'
import '../icon/icons/plus-small.ts'
import '../icon/icons/minus-small.ts'
import '../icon/icons/rocket.ts'
import '../icon/icons/arrow-rotate-counter-clockwise.ts'
import '../icon/icons/triangle-exclamation.js'

/**
 * A badge is a small status or notification indicator that can be used to display a message or status.
 *
 * Variants: `information`, `notice`, `success`, `warning`, `error`
 */
const meta: Meta = {
  title: 'Docs/Components/Badge',
  component: 'gds-badge',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj

/**
 *
 */
export const Variants: Story = {
  name: 'Variants',
  parameters: {
    controls: { include: [] }
  },
  render: args => html`
    <gds-grid columns="2" gap="2xl">
      <gds-flex gap="xl" direction="column" width="20ch">
        <gds-flex direction="column" gap="s">
          <gds-text>Icon</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-badge variant="information">
          <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
          Information
        </gds-badge>
        <gds-badge variant="notice">
          <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
          Notice
        </gds-badge>
        <gds-badge variant="success">
          <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
          Success
        </gds-badge>
        <gds-badge variant="warning">
          <gds-icon-circle-check slot="lead"></gds-icon-circle-check>
          Success
        </gds-badge>
        <gds-badge variant="error">
          <gds-icon-triangle-exclamation slot="lead"> </gds-icon-triangle-exclamation>
          Error
        </gds-badge>
      </gds-flex>
      <gds-flex gap="xl" direction="column" width="20ch">
        <gds-flex direction="column" gap="s">
          <gds-text>Basic</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-badge variant="information"> Information </gds-badge>
        <gds-badge variant="notice"> Notice </gds-badge>
        <gds-badge variant="success"> Success </gds-badge>
        <gds-badge variant="warning"> Success </gds-badge>
        <gds-badge variant="error"> Error </gds-badge>
      </gds-flex>
    </gds-grid>
  `
}

/**
 * `gds-badge` has a lead slot that can be used to add leading content to the badge like `gds-icon`.
 */
export const Lead: Story = {
  name: 'Lead',
  parameters: {
    controls: { include: [] }
  },
  render: args => html`
    <gds-flex gap="xl" width="20ch">
      <gds-badge variant="success">
        <gds-icon-rocket slot="lead"></gds-icon-rocket>
        Launch
      </gds-badge>
      <gds-badge variant="warning">
        <gds-icon-arrow-rotate-counter-clockwise slot="lead"> </gds-icon-arrow-rotate-counter-clockwise>
        Discard
      </gds-badge>
    </gds-flex>
  `
}

/**
 * `gds-badge` has a trail slot that can be used to add additional content to the badge.
 */
export const Trail: Story = {
  name: 'Trail',
  parameters: {
    controls: { include: [] }
  },
  render: args => html`
    <gds-flex gap="xl" width="20ch">
      <gds-badge variant="success">
        <gds-icon-plus-small slot="lead"></gds-icon-plus-small>
        Information
        <span slot="trail">%</span>
      </gds-badge>
      <gds-badge variant="error">
        <gds-icon-minus-small slot="lead"></gds-icon-minus-small>
        Information
        <span slot="trail">%</span>
      </gds-badge>
    </gds-flex>
  `
}
