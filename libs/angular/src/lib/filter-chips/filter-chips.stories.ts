import { moduleMetadata, StoryFn, Meta } from '@storybook/angular'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import '@sebgroup/green-core/components/filter-chips/index.js'
import { NggCoreWrapperModule } from '../shared/core-element/core-element.module'

export default {
  title: 'Components/Filter Chips',
  decorators: [
    moduleMetadata({
      imports: [NggCoreWrapperModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  parameters: {},
} as Meta

const Template: StoryFn = (args) => ({
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
})

export const Default = Template.bind({})

Default.args = {
  label: 'Select a category to filter results on',
}
