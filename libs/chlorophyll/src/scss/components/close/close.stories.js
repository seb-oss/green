export default {
  title: 'Components/Close button',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-close-button'],
  },
}

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/close)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-button)
 */
export const CloseButton = {
  render: () => `
    <button class="gds-close" type="button">
      <span class="sr-only">Close</span>
      <i></i>
    </button>
  `,
  name: 'Close button',
}
