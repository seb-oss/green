const Template = ({ variant, dismissible, text }) => {
  return `
    <span class="badge ${variant}">
      <strong>${text}</strong>
      ${
        dismissible
          ? `<button class="close">
          <span class="sr-only">Remove</span>
          <i></i>
        </button>`
          : ``
      }
    </span>`
}

export default {
  title: 'Components/Badge',

  parameters: {
    componentIds: ['component-badge'],
  },

  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'info', 'success', 'warning', 'danger', 'light', 'dark'],
    },

    dismissible: {
      control: 'boolean',
    },

    text: {
      control: 'text',
    },
  },
}

export const Badge = {
  render: Template.bind({}),
  name: 'Badge',

  args: {
    text: 'Badge',
    dismissible: false,
  },

  parameters: {
    docs: {
      disable: true,
    },
  },
}
