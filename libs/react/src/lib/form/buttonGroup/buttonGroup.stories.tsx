import { ButtonGroup } from './buttonGroup'
import { Button } from '../button/button'

const Template = ({ children, ...props }) => (
  <ButtonGroup {...props}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
  </ButtonGroup>
)

export default {
  title: 'Components/Form/ButtonGroup',
  component: ButtonGroup,
}

export const Default = {
  render: Template.bind({}),
  name: 'Button Group',

  parameters: {
    componentIds: ['component-segmented-control'],
  },

  args: {
    variant: 'ghost',
    selectedIndex: 1,
  },
}
