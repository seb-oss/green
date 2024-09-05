const Template = () => {
  return `Dropdown should be used from <a href="https://storybook.seb.io/latest/angular/?path=/docs/components-dropdown--custom-option#dropdown">Angular</a>, <a href="https://storybook.seb.io/latest/react/?path=/docs/components-dropdown--dropdown#dropdown">React</a> or <a href="https://storybook.seb.io/latest/core/?path=/docs/components-dropdown--page#dropdown">Core</a> (Web Components, framework agnostic)`
}

export default {
  title: 'Components/Dropdown',

  parameters: {
    componentIds: ['component-dropdown'],
  },

  argTypes: {
    validation: {
      control: 'select',
      options: ['', 'is-valid', 'is-invalid'],
    },

    enabled: {
      control: 'boolean',
    },

    text: {
      control: 'text',
    },
  },
}

export const Dropdown = {
  render: Template.bind({}),
  name: 'Dropdown',

  args: {
    text: 'Option 2',
    enabled: true,
  },

  parameters: {
    docs: {
      disable: true,
    },
  },
}
