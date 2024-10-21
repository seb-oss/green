import Card from './card'
import Button from '../form/button/button'
import Link from '../link/link'

const Template = ({ children, ...props }) => <Card {...props}>{children}</Card>

const Header = () => (
  <>
    <h3>Card Headline</h3>
    <Button variant="close">
      <span className="sr-only">Close</span>
      <i></i>
    </Button>
  </>
)

const Footer = () => (
  <>
    <Link href="https://seb.se" className="button link">
      Link
    </Link>
    <Button>Default button</Button>
    <Button variant="primary">Primary</Button>
  </>
)

export default {
  title: 'Components/Card',
  component: Card,
}

export const Default = {
  render: Template.bind({}),
  name: 'Card',

  parameters: {
    componentIds: ['component-card'],
  },

  args: {
    header: <Header />,
    footer: <Footer />,
    children: 'Card content',
  },
}
