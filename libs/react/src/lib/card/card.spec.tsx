import { render, screen } from '@testing-library/react'
import Card from './card'
import Button from '../form/button/button'
describe('Card', () => {
  const Header = () => <h3>Card Headline</h3>

  const Footer = () => (
    <>
      <Button>Default button</Button>
      <Button variant="primary">Primary</Button>
    </>
  )
  it('renders', () => {
    render(<Card>Hello</Card>)
    expect(screen.getByText('Hello')).toBeVisible()
  })
  it('renders header, content and footer', () => {
    render(
      <Card header={<Header />} footer={<Footer />}>
        Hello
      </Card>
    )

    expect(screen.getByRole('heading')).toHaveTextContent('Card Headline')
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('Default button')
    expect(screen.getAllByRole('button')[1]).toHaveTextContent('Primary')
  })
})
