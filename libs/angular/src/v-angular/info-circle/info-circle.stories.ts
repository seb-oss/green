import { CommonModule } from '@angular/common'
import { moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggvTooltipModule } from '../tooltip/tooltip.module'
import { NggvInfoCircleComponent } from './info-circle.component'

const meta: Meta<NggvInfoCircleComponent> = {
  title: 'V-Angular/Info Circle',
  component: NggvInfoCircleComponent,
  decorators: [
    moduleMetadata({
      declarations: [NggvInfoCircleComponent],
      imports: [CommonModule, NggvTooltipModule],
    }),
  ],
}

export default meta
type Story = StoryObj<NggvInfoCircleComponent>

export const Primary: Story = {
  render: (args: NggvInfoCircleComponent) => ({
    template: /*html*/ `
  <div style="height:200px; display:grid; place-content: center;">
    <nggv-info-circle [attr.data-thook]="thook"
    [info]="info">
    </nggv-info-circle>
  </div>`,
    props: { ...args },
  }),
  args: {
    info: 'Very informative and supporting text',
    thook: 'help-text',
  },
}
