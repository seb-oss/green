import Badge from './badge'

const Template = ({ ...props }) => <Badge {...props} />

export default {
  title: 'Components/Badge',
  component: Badge,
}

export const Badge = {
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
