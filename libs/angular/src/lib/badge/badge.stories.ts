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
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as Meta

const Template: Story<NggBadgeComponent> = (args: NggBadgeComponent) => ({
  template: `
    <ngg-badge title="Default" [isCloseable]="isCloseable"></ngg-badge>
    <ngg-badge title="Information" badgeType="info" [isCloseable]="isCloseable"></ngg-badge>
    <ngg-badge title="Success" badgeType="success" [isCloseable]="isCloseable"></ngg-badge>
    <ngg-badge title="Warning" badgeType="warning" [isCloseable]="isCloseable"></ngg-badge>
    <ngg-badge title="Danger" badgeType="danger" [isCloseable]="isCloseable"></ngg-badge>
    <ngg-badge title="Light" badgeType="light" [isCloseable]="isCloseable"></ngg-badge>
    <ngg-badge title="Dark" badgeType="dark" [isCloseable]="isCloseable"></ngg-badge>
    `,
  props: args,
})

export const Types = Template.bind({})

export const Dismissible = Template.bind({})
Dismissible.args = {
  isCloseable: true,
}
