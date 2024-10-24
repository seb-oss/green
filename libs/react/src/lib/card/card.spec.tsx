import { render, screen } from '@testing-library/react'

import Button from '../form/button/button'
import Card from './card'

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
      </Card>,
    )

    expect(screen.getByRole('heading').textContent).toEqual('Card Headline')
    expect(screen.getByText('Hello')).toBeDefined()
    expect(screen.getAllByRole('button')[0].textContent).toContain(
      'Default button',
    )
    expect(screen.getAllByRole('button')[1].textContent).toContain('Primary')
  })
  it('doesnt render header, content and footer', () => {
    const { container } = render(<Card>Hello</Card>)

    expect(container.querySelector('header')).toBeNull()
    expect(container.querySelector('footer')).toBeNull()
    expect(screen.getByText('Hello')).toBeDefined()
  })
})
