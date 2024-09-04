import { Select, Option, OptionGroup } from './select'

const Template = ({ children, ...props }) => (
  <Select {...props}>{children}</Select>
)

export default {
  title: 'Components/Select',
  component: Select,

  argTypes: {
    id: {
      name: 'id',

      type: {
        name: 'string',
        required: false,
      },

      description: 'Id for select element',

      table: {
        type: {
          summary: 'string',
        },
      },

      control: {
        type: 'text',
      },
    },

    className: {
      name: 'className',

      type: {
        name: 'string',
        required: false,
      },

      description: 'Label for the select element',

      table: {
        type: {
          summary: 'string',
        },
      },

      control: {
        type: 'text',
      },
    },

    label: {
      name: 'label',

      type: {
        name: 'string',
        required: false,
      },

      defaultValue: 'Select label',
      description: 'Label for the select element',

      table: {
        type: {
          summary: 'string',
        },
      },

      control: {
        type: 'text',
      },
    },

    labelInformation: {
      name: 'labelInformation',

      type: {
        name: 'string',
        required: false,
      },

      defaultValue: 'Select label information',
      description: 'Label information for the select element',

      table: {
        type: {
          summary: 'string',
        },
      },

      control: {
        type: 'text',
      },
    },

    children: {
      name: 'children',

      type: {
        name: 'ReactNode',
        required: false,
      },

      description: 'Children of Select component, should be SelectOptions',

      table: {
        type: {
          summary: 'ReactNode',
        },
      },

      control: {
        type: null,
      },
    },

    name: {
      name: 'name',

      type: {
        name: 'string',
      },

      description:
        'This will be used for the name attribute on the select element',

      table: {
        type: {
          summary: 'string',
        },
      },

      control: {
        type: 'text',
      },
    },
  },
}

export const WithOptions = {
  render: Template.bind({}),
  name: 'With options',

  args: {
    children: (
      <>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
        <Option value={5}>5</Option>
        <Option value={6}>6</Option>
        <Option value={7}>7</Option>
        <Option value={8}>8</Option>
      </>
    ),

    name: 'my-select',
  },
}

export const WithPlaceholder = {
  render: Template.bind({}),
  name: 'With placeholder',

  args: {
    defaultValue: 'placeholder',

    children: (
      <>
        <Option value={'placeholder'} hidden>
          Placeholder
        </Option>
        <Option value={2}>Label 2</Option>
        <Option value={3}>Label 3</Option>
        <Option value={4}>Label 4</Option>
      </>
    ),
  },
}

export const WithOptionGroups = {
  render: Template.bind({}),
  name: 'With option groups',

  args: {
    children: (
      <>
        <OptionGroup label="First group">
          <Option value={1}>Label 1</Option>
          <Option value={2}>Label 2</Option>
          <Option value={3}>Label 3</Option>
          <Option value={4}>Label 4</Option>
        </OptionGroup>
        <OptionGroup label="Second group">
          <Option value={1}>Label 1</Option>
          <Option value={2}>Label 2</Option>
          <Option value={3}>Label 3</Option>
          <Option value={4}>Label 4</Option>
        </OptionGroup>
      </>
    ),
  },
}

export const WithDisabledGroup = {
  render: Template.bind({}),
  name: 'With disabled group',

  args: {
    children: (
      <>
        <OptionGroup label="First group">
          <Option value={1}>Label 1</Option>
          <Option value={2}>Label 2</Option>
          <Option value={3}>Label 3</Option>
          <Option value={4}>Label 4</Option>
        </OptionGroup>
        <OptionGroup label="Second group" disabled={true}>
          <Option value={1}>Label 1</Option>
          <Option value={2}>Label 2</Option>
          <Option value={3}>Label 3</Option>
          <Option value={4}>Label 4</Option>
        </OptionGroup>
      </>
    ),
  },
}

export const WithValidation = {
  render: Template.bind({}),
  name: 'With validation',

  args: {
    label: 'How many will live in your house?',

    validator: {
      indicator: 'error',
      message: 'You need to select how many live in your house',
    },

    children: (
      <>
        <Option value={1}>Label 1</Option>
        <Option value={2}>Label 2</Option>
        <Option value={3}>Label 3</Option>
        <Option value={4}>Label 4</Option>
      </>
    ),
  },
}

export const ExpandableInformation = {
  render: Template.bind({}),
  name: 'Expandable information',

  args: {
    label: 'How many will live in your house?',
    labelInformation: 'Include both children and adults',
    expandableInfo:
      'In order for us to give a correct estimation we need you to enter how many will live in your house',
    expandableInfoButtonLabel: 'Toggle additional information',

    children: (
      <>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
        <Option value={5}>5</Option>
        <Option value={6}>6</Option>
        <Option value={7}>7</Option>
        <Option value={8}>8</Option>
      </>
    ),
  },
}
