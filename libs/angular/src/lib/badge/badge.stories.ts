import { moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggBadgeComponent } from './badge.component'
import { NggBadgeModule } from './badge.module'

const meta: Meta<NggBadgeComponent> = {
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
}

export default meta
type Story = StoryObj<NggBadgeComponent>

export const Multiple: Story = {
  render: (args) => ({
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
  }),
}

export const Default: Story = {
  render: (args) => ({
    template: `
    <span ngg-badge [badgeType]="badgeType" [customColor]="customColor" [customBackgroundColor]="customBackgroundColor">Badge</span>
    `,
    props: args,
  }),
  args: {
    badgeType: 'success',
  },
}

export const Custom: Story = {
  render: (args) => ({
    template: `
    <span ngg-badge [badgeType]="badgeType" [customColor]="customColor" [customBackgroundColor]="customBackgroundColor">Badge</span>
    `,
    props: args,
  }),
  args: {
    customColor: '#062BCC',
    customBackgroundColor: '#E6F5FF',
  },
}
