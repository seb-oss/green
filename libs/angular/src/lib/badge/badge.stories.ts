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
      options: ['info', 'success', 'warning', 'danger', 'light', 'dark'],
      control: 'radio',
      name: 'Badge Type',
      defaultValue: 'info',
    },
  },
  parameters: {
    docs: {
      page: Documentation,
    },
    componentIds: ['component-badge'],
  },
} as Meta<NggBadgeComponent>

const Template: Story<NggBadgeComponent> = (args: NggBadgeComponent) => ({
  template: `
    <span ngg-badge [badgeType]="badgeType" [customColor]="customColor" [customBackgroundColor]="customBackgroundColor">Badge</span>
    `,
  props: args,
})

const BadgesTemplate: Story<NggBadgeComponent> = (args: NggBadgeComponent) => ({
  template: `
    <div class="d-flex justify-content-between">
      <span ngg-badge >Badge</span>
      <span ngg-badge badgeType="info">Badge</span>
      <span ngg-badge badgeType="success">Badge</span>
      <span ngg-badge badgeType="warning">Badge</span>
      <span ngg-badge badgeType="danger">Badge</span>
      <span ngg-badge badgeType="light">Badge</span>
      <span ngg-badge badgeType="dark">Badge</span>
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
