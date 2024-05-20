import { moduleMetadata, StoryFn, Meta } from '@storybook/angular'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { NggCoreWrapperModule } from '../shared/core-element/core-element.module'
import '@sebgroup/green-core/components/grouped-list/index.js'
import * as GroupedListTransStyles from '@sebgroup/green-core/components/grouped-list/grouped-list.trans.styles.js'

GroupedListTransStyles.register()

export default {
  title: 'Components/Grouped List',
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
