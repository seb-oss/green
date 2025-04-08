import { Meta, moduleMetadata, StoryFn } from '@storybook/angular'

import { NggButtonComponent } from './button.component'
import { NggButtonModule } from './button.module'

export default {
  title: 'Components/Button',
  component: NggButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [NggButtonModule],
    }),
  ],
  parameters: {
    componentIds: ['component-button'],
  },
} as Meta<NggButtonComponent>

const Template: StoryFn = () => {
  return {
    template: `
    <button ngg-button>Button</button>
    `,
  }
}

export const Default = Template.bind({})

const TemplateTypes: StoryFn = () => {
  return {
    template: `
    <div class="horizontal">
      <button ngg-button type="button">Button</button>
      <button ngg-button type="submit" variant="secondary">Submit</button>
      <button ngg-button type="reset" variant="tertiary">Reset</button>
    </div>
    `,
  }
}
export const Types = TemplateTypes.bind({})

const TemplateVariants: StoryFn = () => {
  return {
    template: `
    <div class="horizontal">
      <button ngg-button variant="primary">Primary</button>
      <button ngg-button variant="secondary">Secondary</button>
      <button ngg-button variant="tertiary">Tertiary</button>
      <button ngg-button variant="ghost-dark">Ghost dark</button>
      <button ngg-button variant="ghost-light">Ghost light</button>
    </div>
    `,
  }
}
export const Variants = TemplateVariants.bind({})

const TemplateSizes: StoryFn = () => {
  return {
    template: `
    <div class="horizontal">
      <button ngg-button>Default</button>
      <button ngg-button size="small">Small</button>
      <button ngg-button size="large">Large</button>
    </div>
    `,
  }
}
export const Sizes = TemplateSizes.bind({})
