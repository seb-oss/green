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
      options: ['info', 'success', 'warning', 'danger', 'light', 'dark', 'custom'],
      control: 'radio',
      name: 'Badge Type',
      defaultValue: 'info',
    },
  },
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as Meta<NggBadgeComponent>

const Template: Story<NggBadgeComponent> = (args: NggBadgeComponent) => ({
  template: `
    <span ngg-badge [badgeType]="badgeType">Badge</span>
    `,
  props: args,
})

export const Default = Template.bind({})
Default.args = {
  badgeType: 'info',
  isCloseable: false,
}

const DismissibleTemplate: Story<NggBadgeComponent> = (args: NggBadgeComponent) => {
  let isDismissed = false;

  return {
    template: `
      <div *ngIf="!isDismissed">
        <span ngg-badge [badgeType]="badgeType" [isCloseable]="true" (onClose)="isDismissed=true;">Dismissible Badge</span>
      </div>
      <br />
      <div>
        <button (click)="isDismissed=false;" [disabled]="!isDismissed">Reset</button>
      </div>
    `,
    props: {
      ...args,
      isDismissed,
    }
  }
}

export const Dismissible = DismissibleTemplate.bind({})
Dismissible.args = {
  badgeType: 'warning',
}

const CustomTemplate: Story<NggBadgeComponent> = (args: NggBadgeComponent) => ({
  template: `<span ngg-badge [customColor]="customColor" [customBackgroundColor]="customBackgroundColor">Badge</span>`,
  props: args,
})

export const Custom = CustomTemplate.bind({})
Custom.args = {
  customColor: '#062BCC',
  customBackgroundColor: '#E6F5FF',
}
