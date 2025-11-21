import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggCoreWrapperModule } from '../shared/core-element/core-element.module'

import '@sebgroup/green-core/components/grouped-list/index.js'

import * as GroupedListTransStyles from '@sebgroup/green-core/components/grouped-list/grouped-list.trans.styles.js'

GroupedListTransStyles.register()

const meta: Meta = {
  title: 'Components/Grouped List',
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
    <gds-grouped-list *nggCoreElement label="${args.label}">
        <gds-list-item *nggCoreElement>Item 1</gds-list-item>
        <gds-list-item *nggCoreElement>Item 2</gds-list-item>
        <gds-list-item *nggCoreElement>Item 3</gds-list-item>
    </gds-grouped-list>
    `,
    props: args,
  }),
  args: {
    label: 'Grouped list label',
  },
}
