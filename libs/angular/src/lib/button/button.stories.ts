import { Story, Meta, moduleMetadata } from '@storybook/angular'
import { NggButtonComponent } from './button.component'
import { NggButtonModule } from './button.module'
import Documentation from './documentation.mdx'

export default {
  title: 'Components/Form/Button',
  component: NggButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [NggButtonModule],
    }),
  ],
  parameters: {
    docs: {
      page: Documentation,
    },
    componentIds: ['component-button']
  },
} as Meta<NggButtonComponent>

const Template: Story = () => {
  return {
    template: `
    <button ngg-button>Button</button>
    `,
  }
}

export const Default = Template.bind({})

const TemplateTypes: Story = () => {
  return {
    template: `
    <div class="horizontal">
      <button ngg-button type="button">Button</button>
      <button ngg-button type="submit">Submit</button>
      <button ngg-button type="reset">Reset</button>
    </div>
    `,
  }
}
export const Types = TemplateTypes.bind({})

const TemplateVariants: Story = () => {
  return {
    template: `
    <div class="horizontal">
      <button ngg-button variant="primary">Primary</button>
      <button ngg-button variant="secondary">Secondary</button>
      <button ngg-button variant="ghost">Ghost</button>
    </div>
    `,
  }
}
export const Variants = TemplateVariants.bind({})