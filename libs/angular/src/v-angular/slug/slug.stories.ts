import { CommonModule } from '@angular/common'
import { moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { SlugPipe } from './slug.pipe'

interface PipeInput {
  rawValue: string
}

const meta: Meta<PipeInput> = {
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
}

export default meta
type Story = StoryObj<PipeInput>

export const Primary: Story = {
  render: (args: PipeInput) => ({
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
  }),
  args: {
    rawValue: 'Hej hOpSan!',
  },
}
