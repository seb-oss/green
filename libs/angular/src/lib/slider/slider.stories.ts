import { Meta, moduleMetadata, StoryFn } from '@storybook/angular'

import { NggSliderComponent } from './slider.component'
import { NggSliderModule } from './slider.module'

export default {
  title: 'Components/Slider',
  component: NggSliderComponent,
  decorators: [
    moduleMetadata({
      imports: [NggSliderModule],
    }),
  ],
  parameters: {
    componentIds: ['component-slider'],
  },
  argTypes: {
    name: {
      name: 'name',
      control: {
        type: 'text',
      },
    },
    defaultValue: {
      name: 'defaultValue',
      defaultValue: 50,
      control: {
        type: 'number',
      },
    },
    min: {
      name: 'min',
      defaultValue: 0,
      control: {
        type: 'number',
      },
    },
    max: {
      name: 'max',
      defaultValue: 100,
      control: {
        type: 'number',
      },
    },
    step: {
      name: 'step',
      defaultValue: 1,
      control: {
        type: 'number',
      },
    },
    label: {
      name: 'label',
      defaultValue: 'Slider label text in one line',
      control: {
        type: 'text',
      },
    },
    instruction: {
      name: 'instruction',
      defaultValue: 'Element instruction',
      control: {
        type: 'text',
      },
    },
    hasTextbox: {
      name: 'hasTextbox',
      control: {
        type: 'boolean',
      },
    },
    unitLabel: {
      name: 'Unit label',
      control: {
        type: 'text',
      },
    },
    errorMessage: {
      name: 'errorMessage',
      control: {
        type: 'text',
      },
    },
    disabled: {
      name: 'disabled',
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<NggSliderComponent>

const Template: StoryFn<NggSliderComponent> = (args) => {
  return {
    template: `
      <ngg-slider
        label="Slider label text in one line"
        instruction="Element instruction"
        placeholder="%"
        [value]="50"
        [hasTextbox]="hasTextbox"
        [unitLabel]="unitLabel"
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

export const UnitTextbox = Template.bind({})
UnitTextbox.args = {
  hasTextbox: true,
  unitLabel: 'kr',
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
