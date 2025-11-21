import { moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggSliderComponent } from './slider.component'
import { NggSliderModule } from './slider.module'

interface SliderStoryArgs {
  defaultValue: number
}

const meta: Meta<NggSliderComponent & SliderStoryArgs> = {
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
}

export default meta
type Story = StoryObj<NggSliderComponent>

const DefaultArgs = {
  label: 'Slider label text in one line',
  instruction: 'Element instruction',
  defaultValue: 50,
  min: 0,
  max: 100,
  step: 1,
}

export const Default: Story = {
  render: (args) => ({
    template: `
      <ngg-slider
        [label]="label"
        [instruction]="instruction"
        placeholder="%"
        [value]="defaultValue"
        [min]="min"
        [max]="max"
        [step]="step"
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
  }),
  args: {
    ...DefaultArgs,
  },
}

export const Textbox: Story = {
  render: (args) => ({
    template: `
      <ngg-slider
        [label]="label"
        [instruction]="instruction"
        placeholder="%"
        [value]="defaultValue"
        [min]="min"
        [max]="max"
        [step]="step"
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
  }),
  args: {
    hasTextbox: true,
    ...DefaultArgs,
  },
}

export const UnitTextbox: Story = {
  render: (args) => ({
    template: `
      <ngg-slider
        [label]="label"
        [instruction]="instruction"
        placeholder="%"
        [value]="defaultValue"
        [min]="min"
        [max]="max"
        [step]="step"
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
  }),
  args: {
    hasTextbox: true,
    unitLabel: 'kr',
    ...DefaultArgs,
  },
}

export const Error: Story = {
  render: (args) => ({
    template: `
      <ngg-slider
        [label]="label"
        [instruction]="instruction"
        placeholder="%"
        [value]="defaultValue"
        [min]="min"
        [max]="max"
        [step]="step"
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
  }),
  args: {
    hasTextbox: true,
    errorMessage: 'Error text can be quite long',
    ...DefaultArgs,
  },
}

export const Disabled: Story = {
  render: (args) => ({
    template: `
      <ngg-slider
        [label]="label"
        [instruction]="instruction"
        placeholder="%"
        [value]="defaultValue"
        [min]="min"
        [max]="max"
        [step]="step"
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
  }),
  args: {
    hasTextbox: true,
    disabled: true,
    ...DefaultArgs,
  },
}
