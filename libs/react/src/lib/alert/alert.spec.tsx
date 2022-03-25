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

  it('renders heading with h3 tag if just string', () => {
    render(
      <Alert type="info" header={'header'}>
        Alert
      </Alert>
    )

    expect(screen.getByRole('heading')).toContainHTML('<h3>header</h3>')
  })

  it('renders footer', () => {
    render(
      <Alert type="info" footer={<Footer />}>
        Alert
      </Alert>
    )

    expect(screen.getByRole('contentinfo')).toHaveTextContent('Default Button')
  })

  it('renders close text', () => {
    render(
      <Alert type="info" closeText="this is close text" header={<Header />}>
        Alert
      </Alert>
    )

    expect(screen.getByRole('button')).toHaveTextContent('this is close text')
  })

  it('should not render close button', () => {
    render(
      <Alert type="info" isCloseable={false} header={<Header />}>
        Alert
      </Alert>
    )

    expect(screen.getByRole('heading')).not.toContain(<button />)
  })
})
