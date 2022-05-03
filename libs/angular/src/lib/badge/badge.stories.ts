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
    <ngg-badge [isCloseable]="isCloseable">Default</ngg-badge>
    <ngg-badge badgeType="info" [isCloseable]="isCloseable">Information</ngg-badge>
    <ngg-badge badgeType="success" [isCloseable]="isCloseable">Success</ngg-badge>
    <ngg-badge badgeType="warning" [isCloseable]="isCloseable">Warning</ngg-badge>
    <ngg-badge badgeType="danger" [isCloseable]="isCloseable">Danger</ngg-badge>
    <ngg-badge badgeType="light" [isCloseable]="isCloseable">Light</ngg-badge>
    <ngg-badge badgeType="dark" [isCloseable]="isCloseable">Dark</ngg-badge>
    `,
  props: args,
})

export const Types = Template.bind({})

export const Dismissible = Template.bind({})
Dismissible.args = {
  isCloseable: true,
}
