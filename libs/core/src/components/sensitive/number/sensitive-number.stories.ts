import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../../.storybook/argTableProps.ts'
import { Default as formattedNumberDefault } from '../../formatted-text/number/formatted-number.stories.ts'
import { GdsSensitiveNumber } from './index.ts'

import './index.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitiv/number)
 *
 * Coachmarks are contextual tips that focus on making the user
 * aware of a new feature, the benefits of an existing one or a moved feature within an interface.
 *
 * The component is primarily a container that follows the targeted element.
 * The coachmark will be invisible and disabled if another element covered the targeted element or its simply out of view.
 * The coachmark will close and dispatch a CustomEvent of `gds-ui-state`
 *
 * Note: the component can only view one coachmark at the time therefore the tooltip won't be
 * rendered in second storybook panel and testing the tooltip behaviour will be in the first panel only
 *
 * @status beta
 *
 */
const meta: Meta = {
  title: 'Components/Sensitive/Number',
  component: 'gds-sensitive-number',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-sensitive-number'),
  },
}

export default meta
type Story = StoryObj<GdsSensitiveNumber>

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
  },
  args: {
    ...formattedNumberDefault.args,
    currency: 'SEK',
    hide: true,
  },
}

export const Default: Story = {
  ...DefaultParams,
  render: (args) =>
    html`<gds-sensitive-number
      .hide=${args.hide}
      .value=${args.value}
      .locale=${args.locale}
      .currency=${args.currency}
    ></gds-sensitive-number>`,
}
