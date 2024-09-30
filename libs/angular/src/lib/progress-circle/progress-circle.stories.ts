import { moduleMetadata, Meta, StoryFn } from '@storybook/angular'
import { NggProgressCircleModule } from './progress-circle.module'
import { NggProgressCircleComponent } from './progress-circle.component'

export default {
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
} as Meta<NggProgressCircleComponent>

const Template: StoryFn<NggProgressCircleComponent> = (args) => ({
  template: `
      <ngg-progress-circle [theme]="theme" [value]="value">
        <div>Current progress is</div>
        <div style="margin:6px 0;font-size:32px;font-weight:700;line-height:32px;">70%</div>
        <div>out of 100</div>
      </ngg-progress-circle>`,
  props: args,
})

export const Default = Template.bind({})
Default.args = {
  theme: 'warning',
  value: 70,
}
