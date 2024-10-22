export default {
  title: 'Components/Button',
  tags: ['autodocs'],
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
      options: ['', 'primary', 'secondary', 'tertiary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['', 'small', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    text: {
      control: 'text',
    },
  },
}

/**
 *  [Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/button)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-button)
 */
export const Button = {
  render: (args) =>
    `<button type="${args.type}" class="${args.variant} ${args.size}" ${args.disabled ? 'disabled' : ''}>${args.text}</button>`,
  args: {
    type: 'button',
    text: 'Click me!',
  },
}
