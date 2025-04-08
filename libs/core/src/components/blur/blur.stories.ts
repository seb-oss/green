import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'
import { GdsBlur } from './index.ts'

import '../text/text.ts'
import './index.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/blur)
 *
 * The Blur component is used to apply a blur effect over content,
 * often used to obscure sensitive or background information.
 *
 * The component acts as a container that wraps the target element
 * and applies a blur effect based on the `shouldBlur` property.
 *
 * Note: When multiple blur components are rendered, each manages its own
 * blur effect independently.
 *
 * @status beta
 *
 */
const meta: Meta = {
  title: 'Components/Blur',
  component: 'gds-blur',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-formatted-number'),
  },
}

export default meta
type Story = StoryObj<GdsBlur>

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
  args: {
    shouldBlur: true,
  },
}

export const Default: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-blur .shouldBlur=${args.shouldBlur}>
      <gds-text>Blur</gds-text>
    </gds-blur>
  `,
}
