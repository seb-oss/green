import React from 'react'

import Button from '../form/button/button'
import Link from '../link/link'
import Card from './card'

const Template = ({ children, ...props }) => <Card {...props}>{children}</Card>

const Header = () => (
  <>
    <h3>Card Headline</h3>
    <button className="gds-close">
      <span className="sr-only">Close</span>
      <i></i>
    </button>
  </>
)

const Footer = () => (
  <>
    <Link href="https://seb.se" button>
      Link
    </Link>
    <Button variant="secondary">Default button</Button>
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
