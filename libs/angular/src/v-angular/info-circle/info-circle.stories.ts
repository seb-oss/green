import { CommonModule } from '@angular/common'
import { NgvTooltipModule } from '../tooltip/tooltip.module'
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular'

import { NgvInfoCircleComponent } from './info-circle.component'

export default {
  title: 'V-Angular/Info Circle',
  component: NgvInfoCircleComponent,
  decorators: [
    moduleMetadata({
      declarations: [NgvInfoCircleComponent],
      imports: [CommonModule, NgvTooltipModule],
    }),
  ],
} as Meta

type StoryArgs = NgvInfoCircleComponent

const Template: StoryFn<StoryArgs> = (args: StoryArgs) => ({
  template: /*html*/ `
  <div style="height:200px; display:grid; place-content: center;">
    <nggv-info-circle [attr.data-thook]="thook"
    [info]="info">
    </nggv-info-circle>
  </div>`,
  props: { ...args },
})

export const Primary = Template.bind({})

Primary.args = {
  info: 'Very informative and supporting text',
  thook: 'help-text',
}
