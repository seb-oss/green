import type { Meta, StoryObj } from '@storybook/web-components'

import './formatted-date'
import '../../card'
import '../../container'
import '../../flex'
import '../../divider'

import { html } from 'lit'

import { argTablePropsFor } from '../../../../.storybook/argTableProps'
import { DateTimeFormat, dateTimeFormats } from './date-time-formatter'
import { GdsFormattedDate } from './formatted-date.component'

/**
 * `gds-text` extends `gds-div` and adds the ability to set an internal tag name, such as `h1`, `h2`, etc. It also adds line clamping and text decoration properties.
 *
 * Style expression properties apply to the outer element unless otherwise specified.
 *
 * @beta
 */
const meta: Meta = {
  title: 'Components/Formatted Text/Date and time',
  component: 'gds-formatted-date',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-formatted-date'),
  },
}

export default meta
type Story = StoryObj<GdsFormattedDate>

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
  args: {
    locale: 'sv-SE',
    value: new Date(2025, 1, 25, 14, 17, 30),
  },
}

const formats = Object.keys(dateTimeFormats).map((format) => {
  const formatted = format.replace(/([a-z])([A-Z])/g, '$1 $2')
  return {
    name: formatted.charAt(0).toUpperCase() + formatted.slice(1),
    value: format as DateTimeFormat,
  }
})

export const Formats: Story = {
  ...DefaultParams,
  name: 'Formats',
  render: (args) =>
    html`<gds-flex flex-direction="column" gap="m">
      ${formats.map(
        (format) =>
          html`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${format.name}:</gds-text>
              <gds-formatted-date
                .value=${args.value}
                .locale=${args.locale}
                .format=${format.value}
              ></gds-formatted-date>
            </gds-flex>

            <gds-divider></gds-divider>`,
      )}
    </gds-flex>`,
}
