import { CommonModule } from '@angular/common'
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular'

import { AccountNumberPipe } from './account-number.pipe'

interface PipeInput {
  rawValue: string
}

export default {
  title: 'V-Angular/Account Number',
  decorators: [
    moduleMetadata({
      imports: [AccountNumberPipe, CommonModule],
    }),
  ],
  argTypes: {
    rawValue: {
      control: 'text',
    },
  },
} as Meta

const Template: StoryFn<PipeInput> = (args: PipeInput) => ({
  template: /* html*/ `
    <label class="sdv-field-label">Transformed value:</label>
    <div class="pipe-result">
      {{ rawValue | accountNumber }}
    </div>`,
  styles: [
    `.pipe-result {
    border: 1px solid silver;
    border-radius: 0.25em;
    padding: 1em;
    min-height: 1.6rem;
  }`,
  ],
  props: args,
})

export const Primary = Template.bind({})
Primary.args = {
  rawValue: '1234Number',
}
