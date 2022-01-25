import { render, screen } from '@testing-library/react'
import Alert from './alert'
import Button from '../form/button/button'

describe('Alert', () => {
  const Header = () => <h3>Card Headline</h3>

  const Footer = () => <Button>Default Button</Button>

  it('renders', () => {
    render(<Alert type="info">Alert</Alert>)

    expect(screen.getByRole('alert')).toBeVisible()
  })
  it('sets type class', () => {
    render(<Alert type="warning">Alert</Alert>)

    expect(screen.getByRole('alert')).toHaveClass('warning')
  })
  it('renders content', () => {
    render(<Alert type="info">Alert</Alert>)

    expect(screen.getByRole('alert')).toHaveTextContent('Alert')
  })
  it('renders heading', () => {
    render(
      <Alert type="info" header={<Header />}>
        Alert
      </Alert>
    )

    expect(screen.getByRole('heading')).toHaveTextContent('Card Headline')
  })

  it('renders footer', () => {
    render(
      <Alert type="info" footer={<Footer />}>
        Alert
      </Alert>
    )

    expect(screen.getByRole('contentinfo')).toHaveTextContent('Default Button')
  })
})
