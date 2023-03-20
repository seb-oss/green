import { Meta, moduleMetadata, Story } from '@storybook/angular'

import { NggSliderComponent } from './slider.component'
import { NggSliderModule } from './slider.module'
import Documentation from './documentation.mdx'

export default {
  title: 'Components/Slider',
  component: NggSliderComponent,
  decorators: [
    moduleMetadata({
      imports: [NggSliderModule],
    }),
  ],
  parameters: {
    docs: {
      page: Documentation,
    },
    componentIds: ['component-slider'],
  },
} as Meta<NggSliderComponent>

const Template: Story<NggSliderComponent> = (args: NggSliderComponent) => {
  return {
    template: `
      <ngg-slider 
        label="Slider label text in one line"
        instruction="Element instruction"
        placeholder="%"
        [value]="50"
        [hasTextbox]="hasTextbox"
        [disabled]="disabled"
        [errorMessage]="errorMessage"
      >
      </ngg-slider>
    `,
    props: {
      ...args,
    },
  }
}

export const Default = Template.bind({})

export const Textbox = Template.bind({})
Textbox.args = {
  hasTextbox: true,
}

export const Error = Template.bind({})
Error.args = {
  hasTextbox: true,
  errorMessage: 'Error text can be quite long',
}

export const Disabled = Template.bind({})
Disabled.args = {
  hasTextbox: true,
  disabled: true,
}
