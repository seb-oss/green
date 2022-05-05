import { moduleMetadata, Story, Meta } from '@storybook/angular'

import Documentation from './documentation.mdx'
import { NggBadgeModule } from './badge.module'
import { NggBadgeComponent } from './badge.component'

export default {
  title: 'Components/Badge',
  component: NggBadgeComponent,
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

const Template: Story<NggBadgeComponent> = (args: NggBadgeComponent) => ({
  template: `
    <span ngg-badge [badgeType]="badgeType" [isCloseable]="isCloseable">{{text}}</span>
    `,
  props: args,
})

export const Default = Template.bind({})
Default.args = {
  isCloseable: undefined,
  badgeType: undefined,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  text: 'Badge',
}
export const Dismissible = Template.bind({})
Dismissible.args = {
  isCloseable: true,
  badgeType: 'success',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  text: 'Badge',
}
