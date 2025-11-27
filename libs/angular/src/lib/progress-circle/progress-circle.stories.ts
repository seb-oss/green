import { moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggProgressCircleComponent } from './progress-circle.component'
import { NggProgressCircleModule } from './progress-circle.module'

const meta: Meta<NggProgressCircleComponent> = {
  title: 'Components/Progress Circle',
  component: NggProgressCircleComponent,
  decorators: [
    moduleMetadata({
      imports: [NggProgressCircleModule],
    }),
  ],
  argTypes: {
    theme: {
      options: [
        'success',
        'warning',
        'info',
        'danger',
        'light',
        'dark',
        'disabled',
      ],
      control: 'radio',
      name: 'Theme',
      defaultValue: 'warning',
    },
    value: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
      },
      name: 'Value',
      defaultValue: '70',
    },
  },
  parameters: {},
}

export default meta
type Story = StoryObj<NggProgressCircleComponent>

export const Default: Story = {
  render: (args) => ({
    template: `
      <ngg-progress-circle [theme]="theme" [value]="value">
        <div>Current progress is</div>
        <div style="margin:6px 0;font-size:32px;font-weight:700;line-height:32px;">70%</div>
        <div>out of 100</div>
      </ngg-progress-circle>`,
    props: args,
  }),
  args: {
    theme: 'warning',
    value: 70,
  },
}
