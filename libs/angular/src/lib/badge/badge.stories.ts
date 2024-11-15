import { Meta, moduleMetadata, StoryFn } from '@storybook/angular'

import { NggBadgeComponent } from './badge.component'
import { NggBadgeModule } from './badge.module'

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
      options: ['info', 'success', 'warning', 'danger', 'light', 'dark'],
      control: 'radio',
      name: 'Badge Type',
      defaultValue: 'info',
    },
  },
  parameters: {
    componentIds: ['component-badge'],
  },
} as Meta<NggBadgeComponent>

const Template: StoryFn<NggBadgeComponent> = (args) => ({
  template: `
    <span ngg-badge [badgeType]="badgeType" [customColor]="customColor" [customBackgroundColor]="customBackgroundColor">Badge</span>
    `,
  props: args,
})

const BadgesTemplate: StoryFn<NggBadgeComponent> = (args) => ({
  template: `
    <div class="d-flex flex-wrap" style="gap: 1rem;">
      <span ngg-badge >Badge</span>
      <span ngg-badge badgeType="info">Info</span>
      <span ngg-badge badgeType="success">Success</span>
      <span ngg-badge badgeType="warning">Warning</span>
      <span ngg-badge badgeType="danger">Danger</span>
      <span ngg-badge badgeType="light">Light</span>
      <span ngg-badge badgeType="dark">Dark</span>
    </div>
    `,
  props: args,
})

export const Multiple = BadgesTemplate.bind({})
export const Default = Template.bind({})
Default.args = {
  badgeType: 'success',
}

export const Custom = Template.bind({})
Custom.args = {
  customColor: '#062BCC',
  customBackgroundColor: '#E6F5FF',
}
