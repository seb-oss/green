import Badge from './badge'

const Template = ({ ...props }) => <Badge {...props} />

export default {
  title: 'Components/Badge',
  component: Badge,
}

export const Default = {
  render: Template.bind({}),
  name: 'Badge',

  parameters: {
    componentIds: ['component-badge'],
  },

  args: {
    children: 'Primary',
    badgeType: 'info',
    isCloseable: false,
  },
}
