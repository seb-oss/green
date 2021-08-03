import { render, screen } from '@testing-library/react'
import Alert from './Alert'

describe('Alert', () => {
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
      <Alert type="info" heading="Heading">
        Alert
      </Alert>
    )

    expect(screen.getByRole('heading')).toHaveTextContent('Heading')
  })
})
