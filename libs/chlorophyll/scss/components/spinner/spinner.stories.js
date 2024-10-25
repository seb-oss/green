export default {
  title: 'Components/Spinner',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-spinners'],
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        labels: { 'gds-spinner-sm': 'Small', 'gds-spinner-lg': 'Large' },
      },
      options: ['', 'gds-spinner-sm', 'gds-spinner-lg'],
    },
  },
}

export const Spinner = {
  render: (args) => `
    <div class="gds-spinner ${args.size}"></div>`,
}

export const Sizes = {
  render: () => `
    <div class="gds-spinner gds-spinner-sm"></div>
    <div class="gds-spinner"></div>
    <div class="gds-spinner gds-spinner-lg"></div>`,
}

/**
 * Cover takes up the parent element size. Use the `gds-spinner-backdrop` class to add a backdrop.
 */
export const Cover = {
  render: (args) => `
    <div class="gds-spinner${args.cover ? '-cover' : ''} ${args.size}"></div>`,
  decorators: [
    (story) =>
      `<div class="gds-spinner-wrapper gds-spinner-cover gds-spinner-backdrop">${story()}</div>`,
  ],
}

/**
 * Fullscreen spinner takes up the entire screen. Use the `gds-spinner-backdrop` class to add a backdrop.
 */
export const Fullscreen = {
  render: (args) => `
    <div class="gds-spinner ${args.size}"></div>`,
  decorators: [
    (story) =>
      `<div class="gds-spinner-wrapper gds-spinner-fullscreen gds-spinner-backdrop">${story()}</div>`,
  ],
}
