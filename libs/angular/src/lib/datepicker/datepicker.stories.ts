// Datepicker.stories.ts
import Documentation from './documentation.mdx'

import { moduleMetadata, Story, Meta } from '@storybook/angular'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NggDatepickerComponent } from './datepicker.component'
import { NggDatepickerModule } from './datepicker.module'

export default {
  title: 'Components/Datepicker',
  component: NggDatepickerComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, NggDatepickerModule],
    }),
  ],
  parameters: {
    docs: {
      page: Documentation,
    },
  },
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    value: {
      control: 'date',
    },
  },
} as Meta<NggDatepickerComponent>

const Template: Story<NggDatepickerComponent> = (
  args: NggDatepickerComponent
) => ({
  props: args,
})

export const Simple = Template.bind({})
Simple.args = {
  value: new Date(),
  label: 'Date',
}
