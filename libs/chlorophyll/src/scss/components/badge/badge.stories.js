export default {
  title: 'Components/Badge',
  tags: ['autodocs'],
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

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/badge)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-badge)
 *
 * Badges are available in a number of different variants. Please note that the colors used in the examples below are not final yet.
 */
export const Badge = {
  render: (args) => `
    <span class="gds-badge ${args.variant}">
      <strong>${args.text}</strong>
      ${
        args.dismissible
          ? `<button class="gds-close">
          <span class="sr-only">Remove</span>
          <i></i>
        </button>`
          : ``
      }
    </span>`,
  args: {
    text: 'Badge',
    dismissible: false,
  },
}
