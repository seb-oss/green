import { moduleMetadata, Story, Meta } from '@storybook/angular'

import Documentation from './documentation.mdx'
import { NggRadioGroupModule } from './radio-group.module'
import { NggRadioGroupComponent } from './radio-group.component'

export default {
  title: 'Components/Forms/Radio Group',
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

const Template: Story<NggRadioGroupComponent> = (args: NggRadioGroupComponent) => ({
  template: `
    <span ngg-badge [badgeType]="badgeType" [isCloseable]="isCloseable">{{text}}</span>
    `,
  props: args,
})

export const Default = Template.bind({})
Default.args = {
  isCloseable: undefined,
}
