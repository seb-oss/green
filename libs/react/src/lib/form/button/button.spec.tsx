import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from './button'

describe('Button', () => {
  it('renders', () => {
    render(<Button>Hello</Button>)

    expect(screen.getByRole('button').textContent).toEqual('Hello')
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

  it('ref becomes button element', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(
      <Button variant="primary" ref={ref}>
        Label
      </Button>,
    )

    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})
