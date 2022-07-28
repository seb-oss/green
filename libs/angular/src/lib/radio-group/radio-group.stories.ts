import { moduleMetadata, Story, Meta } from '@storybook/angular'

import Documentation from './documentation.mdx'
import { NggRadioGroupModule } from './radio-group.module'
import { NggRadioGroupComponent } from './radio-group.component'

export default {
  title: 'Components/Radio Group',
  component: NggRadioGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [NggRadioGroupModule],
    }),
  ],
  argTypes: {
    badgeType: {
      options: ['info', 'success', 'warning', 'danger', 'light', 'dark', null],
      control: 'radio',
    },
  },
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as Meta<NggRadioGroupComponent>

const Template: Story<NggRadioGroupComponent> = (
  args: NggRadioGroupComponent
) => {
  const list = [
    { label: '<strong>Malaysia</strong>', value: 'MY' },
    { label: 'Philippines', value: 'PH' },
  ]

  return {
    template: `<ngg-radio-group [list]="list"></ngg-radio-group>`,
    props: {
      ...args,
      list,
    },
  }
}

export const Default = Template.bind({})
Default.args = {}
