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
    expect(screen.getByText('Hello')).toBeDefined()
  })
  it('renders header, content and footer', () => {
    render(
      <Card header={<Header />} footer={<Footer />}>
        Hello
      </Card>
    )

    expect(screen.getByRole('heading')).toContain('Card Headline')
    expect(screen.getByText('Hello')).toBeDefined()
    expect(screen.getAllByRole('button')[0]).toContain('Default button')
    expect(screen.getAllByRole('button')[1]).toContain('Primary')
  })
})
