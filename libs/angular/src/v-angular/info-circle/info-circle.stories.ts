import { CommonModule } from '@angular/common'
import { NggTooltipModule } from '../tooltip/tooltip.module'
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular'

import { InfoCircleComponent } from './info-circle.component'

export default {
  title: 'V-Angular/Info Circle',
  component: InfoCircleComponent,
  decorators: [
    moduleMetadata({
      declarations: [InfoCircleComponent],
      imports: [CommonModule, NggTooltipModule],
    }),
  ],
} as Meta

type StoryArgs = InfoCircleComponent

const Template: StoryFn<StoryArgs> = (args: StoryArgs) => ({
  template: /*html*/ `
  <div style="height:200px; display:grid; place-content: center;">
    <ngg-info-circle [attr.data-thook]="thook"
    [info]="info">
    </ngg-info-circle>
  </div>`,
  props: { ...args },
})

export const Primary = Template.bind({})

Primary.args = {
  info: 'Very informative and supporting text',
  thook: 'help-text',
}
