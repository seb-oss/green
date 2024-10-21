const Template = ({ type, variant, text }) => {
  const attrType = type ? `type="${type}" ` : ''
  const attrClass = variant ? `class="${variant}" ` : ''
  return `<button ${attrType}${attrClass}>${text}</button>`
}

export default {
  title: 'Components/Form/Elements/Button',

  parameters: {
    componentIds: ['component-button'],
  },

  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },

    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'ghost', 'danger'],
    },

    text: {
      control: 'text',
    },
  },
}

export const Button = {
  render: Template.bind({}),
  name: 'Button',

  args: {
    type: 'button',
    text: 'Click me!',
  },
}
