import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders', () => {
    render(<Button>Hello</Button>)

    expect(screen.getByRole('button')).toHaveTextContent('Hello')
  })
  it('sets type', () => {
    render(<Button type="submit">Hello</Button>)

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })
  it('defaults to button type', () => {
    render(<Button>Hello</Button>)

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })
  it('sets variant', () => {
    render(<Button variant="ghost">Hello</Button>)

    expect(screen.getByRole('button')).toHaveClass('ghost')
  })
})
