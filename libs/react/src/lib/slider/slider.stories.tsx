import { Slider } from './slider'

const Template = props => <Slider {...props} />

export default {
  title: 'Components/Slider',
  component: Slider,

  argTypes: {
    name: {
      name: 'name',

      control: {
        type: 'text'
      }
    },

    value: {
      name: 'value',
      defaultValue: 50,

      control: {
        type: 'number'
      }
    },

    min: {
      name: 'min',
      defaultValue: 0,

      control: {
        type: 'number'
      }
    },

    max: {
      name: 'max',
      defaultValue: 100,

      control: {
        type: 'number'
      }
    },

    showMinMax: {
      name: 'showMinMax',
      defaultValue: false,

      control: {
        type: 'boolean'
      }
    },

    step: {
      name: 'step',
      defaultValue: 1,

      control: {
        type: 'number'
      }
    },

    label: {
      name: 'label',
      defaultValue: 'Slider label text in one line',

      control: {
        type: 'text'
      }
    },

    instruction: {
      name: 'instruction',
      defaultValue: 'Element instruction',

      control: {
        type: 'text'
      }
    },

    hasTextbox: {
      name: 'hasTextbox',

      control: {
        type: 'boolean'
      }
    },

    unitLabel: {
      name: 'Unit label',

      control: {
        type: 'text'
      }
    },

    errorMessage: {
      name: 'errorMessage',

      control: {
        type: 'text'
      }
    },

    disabled: {
      name: 'disabled',

      control: {
        type: 'boolean'
      }
    }
  }
}

export const Default = {
  render: Template.bind({}),
  name: 'Default'
}

export const Textbox = {
  render: Template.bind({}),
  name: 'Textbox',

  args: {
    hasTextbox: true
  }
}

export const UnitTextbox = {
  render: Template.bind({}),
  name: 'UnitTextbox',

  args: {
    hasTextbox: true,
    unitLabel: 'kr',
    showMinMax: true
  }
}

export const Error = {
  render: Template.bind({}),
  name: 'Error',

  args: {
    hasTextbox: true,
    errorMessage: 'Error text can be quite long'
  }
}

export const Disabled = {
  render: Template.bind({}),
  name: 'Disabled',

  args: {
    hasTextbox: true,
    disabled: true
  }
}
