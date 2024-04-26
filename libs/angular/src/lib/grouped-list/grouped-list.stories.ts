import { moduleMetadata, Story, Meta } from '@storybook/angular'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import '@sebgroup/green-core/components/grouped-list'
import { NggCoreWrapperModule } from '../shared/core-element/core-element.module'
import docs from './grouped-list.docs.mdx'

export default {
  title: 'Components/Grouped List',
  decorators: [
    moduleMetadata({
      imports: [NggCoreWrapperModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  parameters: {
    docs: {
      page: docs,
    },
  },
} as Meta

const Template: Story = (args) => ({
  template: `
    <gds-grouped-list *nggCoreElement label="${args.label}">
        <gds-list-item *nggCoreElement>Item 1</gds-list-item>
        <gds-list-item *nggCoreElement>Item 2</gds-list-item>
        <gds-list-item *nggCoreElement>Item 3</gds-list-item>
    </gds-grouped-list>
    `,
  props: args,
})

export const Default = Template.bind({})

Default.args = {
  label: 'Grouped list label',
}
