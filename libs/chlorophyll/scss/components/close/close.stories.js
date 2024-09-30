const Template = () => {
  return `
    <button class="close" type="button">
      <span class="sr-only">Close</span>
      <i></i>
    </button>
  `
}

export default {
  title: 'Components/Close button',

  parameters: {
    componentIds: ['component-close-button'],
  },
}

export const CloseButton = {
  render: Template.bind({}),
  name: 'Close button',
}
