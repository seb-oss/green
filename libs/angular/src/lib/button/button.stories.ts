import { moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggButtonComponent } from './button.component'
import { NggButtonModule } from './button.module'

const meta: Meta<NggButtonComponent> = {
  title: 'Components/Form/Button',
  component: NggButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [NggButtonModule],
    }),
  ],
  parameters: {
    componentIds: ['component-button'],
  },
}

export default meta
type Story = StoryObj<NggButtonComponent>

export const Default: Story = {
  render: () => ({
    template: `
    <button ngg-button>Button</button>
    `,
  }),
}

export const Types: Story = {
  render: () => ({
    template: `
    <div class="horizontal">
      <button ngg-button type="button">Button</button>
      <button ngg-button type="submit">Submit</button>
      <button ngg-button type="reset">Reset</button>
    </div>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    template: `
    <div class="horizontal">
      <button ngg-button variant="primary">Primary</button>
      <button ngg-button variant="secondary">Secondary</button>
      <button ngg-button variant="ghost">Ghost</button>
    </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    template: `
    <div class="horizontal">
      <button ngg-button>Default</button>
      <button ngg-button size="small">Small</button>
      <button ngg-button size="large">Large</button>
    </div>
    `,
  }),
}
