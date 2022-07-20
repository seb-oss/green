import { moduleMetadata, Story, Meta } from '@storybook/angular'

import Documentation from './documentation.mdx'
import { NggBadgeModule } from './toggle-selector.module'
import { NggToggleSelectorComponent } from './toggle-selector.component'

export default {
  title: 'Components/Badge',
  component: NggToggleSelectorComponent,
  decorators: [
    moduleMetadata({
      imports: [NggBadgeModule],
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
} as Meta

const Template: Story<NggToggleSelectorComponent> = (args: NggToggleSelectorComponent) => ({
  template: `
    <span ngg-badge [badgeType]="badgeType" [isCloseable]="isCloseable">{{text}}</span>
    `,
  props: args,
})

export const Default = Template.bind({})
Default.args = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  text: 'Badge',
}
export const Dismissible = Template.bind({})
Dismissible.args = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  text: 'Badge',
}
