import { render, screen } from '@testing-library/react'
import { Button, ButtonGroup } from '..'

describe('ButtonGroup', () => {
  it('renders single button', () => {
    render(
      <ButtonGroup>
        <Button>Hello</Button>
      </ButtonGroup>
    )

    expect(screen.getAllByRole('button')).toHaveLength(1)
  })
  it('renders buttons', () => {
    render(
      <ButtonGroup>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </ButtonGroup>
    )

    expect(screen.getAllByRole('button')).toHaveLength(2)
  })
})
