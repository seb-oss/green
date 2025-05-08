import { CommonModule } from '@angular/common'
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular'

import { SlugPipe } from './slug.pipe'

interface PipeInput {
  rawValue: string
}

export default {
  title: 'V-Angular/Slug',
  decorators: [
    moduleMetadata({
      declarations: [SlugPipe],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    rawValue: {
      control: 'text',
    },
  },
} as Meta

const Template: StoryFn<PipeInput> = (args: PipeInput) => ({
  template: `
    <label class="gds-field-label">Transformed value:</label>
    <div class="pipe-result">
      {{ rawValue | slug }}
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
  rawValue: 'Hej hOpSan!',
}
