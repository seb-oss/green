import Badge from './badge'

const Template = ({ ...props }) => <Badge {...props} />

export default {
  title: 'Components/Badge',
  component: Badge,
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  parameters: {
    componentIds: ['component-badge'],
  },

  args: {
    children: 'Default',
    isCloseable: false,
  },
}

export const Info = {
  render: Template.bind({}),
  name: 'Info',

  parameters: {
    componentIds: ['component-badge'],
  },

  args: {
    children: 'Info',
    badgeType: 'info',
    isCloseable: false,
  },
}

export const Success = {
  render: Template.bind({}),
  name: 'Success',

  parameters: {
    componentIds: ['component-badge'],
  },

  args: {
    children: 'Success',
    badgeType: 'success',
    isCloseable: false,
  },
}

export const Warning = {
  render: Template.bind({}),
  name: 'Warning',

  parameters: {
    componentIds: ['component-badge'],
  },

  args: {
    children: 'Warning',
    badgeType: 'warning',
    isCloseable: false,
  },
}

export const Danger = {
  render: Template.bind({}),
  name: 'Danger',

  parameters: {
    componentIds: ['component-badge'],
  },

  args: {
    children: 'Danger',
    badgeType: 'danger',
    isCloseable: false,
  },
}

export const Light = {
  render: Template.bind({}),
  name: 'Light',

  parameters: {
    componentIds: ['component-badge'],
  },

  args: {
    children: 'Light',
    badgeType: 'light',
    isCloseable: false,
  },
}

export const Dark = {
  render: Template.bind({}),
  name: 'Dark',

  parameters: {
    componentIds: ['component-badge'],
  },

  args: {
    children: 'Dark',
    badgeType: 'dark',
    isCloseable: false,
  },
}
