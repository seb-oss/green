const Template = ({}) => {
  return `
    <span class="gds-spinner"></span>`
}

export default {
  title: 'Components/Spinner',

  parameters: {
    componentIds: ['component-spinners'],
  },
}

export const Spinner = {
  render: Template.bind({}),
  name: 'Spinner',
}
