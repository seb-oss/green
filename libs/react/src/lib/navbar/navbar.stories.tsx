import Navbar from './navbar'

const Template = ({ children, ...props }) => (
  <Navbar {...props}>{children}</Navbar>
)

export default {
  title: 'Components/Navbar',
  component: Navbar,

  argTypes: {
    variant: {
      options: [undefined, 'bg-light', 'bg-dark'],
    },
  },
}

export const Component = {
  render: Template.bind({}),
  name: 'Component',

  args: {
    title: 'Page heading',
    titleLink: '',
    variant: undefined,
  },
}
