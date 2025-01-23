/* eslint no-console: "off" */
import { ContextMenu, MenuItem } from './context-menu'

const Template = ({ children, ...props }) => (
  <ContextMenu {...props}>{children}</ContextMenu>
)

export default {
  title: 'Components/Context Menu',
  component: ContextMenu,
}

export const Default = {
  render: Template.bind({}),
  name: 'Context Menu',

  parameters: {
    componentIds: ['component-contextmenu'],
  },

  args: {
    onMenuItemClick: (e) => console.log(e),
    children: [
      <MenuItem>Action 1</MenuItem>,
      <MenuItem>Action 2</MenuItem>,
      <MenuItem>Action 3</MenuItem>,
    ],
  },
}
