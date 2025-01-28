import { CommonModule } from '@angular/common'
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular'

import { NggvTooltipModule } from '../tooltip/tooltip.module'
import { NggvInfoCircleComponent } from './info-circle.component'

export default {
  title: 'V-Angular/Info Circle',
  component: NggvInfoCircleComponent,
  decorators: [
    moduleMetadata({
      declarations: [NggvInfoCircleComponent],
      imports: [CommonModule, NggvTooltipModule],
    }),
  ],
} as Meta

type StoryArgs = NggvInfoCircleComponent

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
