export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-button'],
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        '',
        'primary',
        'secondary',
        'tertiary',
        'ghost-dark',
        'ghost-light',
        'danger',
      ],
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
    `<button class="gds-button ${args.variant} ${args.size}" ${args.disabled ? 'disabled' : ''}>${args.text}</button>`,
  args: {
    type: 'button',
    text: 'Click me!',
  },
}
