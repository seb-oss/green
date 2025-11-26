import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import '@sebgroup/green-core/components/filter-chips/index.js'

import { NggCoreWrapperModule } from '../shared/core-element/core-element.module'

const meta: Meta = {
  title: 'Components/Filter Chips',
  decorators: [
    moduleMetadata({
      imports: [NggCoreWrapperModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  parameters: {},
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: (args) => ({
    template: `
  <gds-filter-chips *nggCoreElement value="top-news" label="${args.label}">
    <gds-filter-chip *nggCoreElement value="all">All</gds-filter-chip>
    <gds-filter-chip *nggCoreElement value="top-news">Top news</gds-filter-chip>
    <gds-filter-chip *nggCoreElement value="division">Division</gds-filter-chip>
    <gds-filter-chip *nggCoreElement value="global">Global</gds-filter-chip>
    <gds-filter-chip *nggCoreElement value="country">Country</gds-filter-chip>
    <gds-filter-chip *nggCoreElement value="lcfi">
      Large Corporate & Financial Institutions
    </gds-filter-chip>
  </gds-filter-chips>
    `,
    props: args,
  }),
  args: {
    label: 'Select a category to filter results on',
  },
}
