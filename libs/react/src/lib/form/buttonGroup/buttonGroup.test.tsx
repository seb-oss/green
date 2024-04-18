import { fireEvent, render, screen } from '@testing-library/react'
import { Button, ButtonGroup } from '..'

describe('ButtonGroup', () => {
  const buttonClick = jest.fn()
  const MockButtonGroup = () => {
    return (
      <ButtonGroup>
        <Button onClick={buttonClick}>Hello</Button>
        <Button>Hello</Button>
      </ButtonGroup>
    )
  }

  it('renders single button', () => {
    render(
      <ButtonGroup>
        <Button>Hello</Button>
      </ButtonGroup>,
    )

    expect(screen.getAllByRole('button')).toHaveLength(1)
  })
  it('renders buttons', () => {
    render(<MockButtonGroup />)

    expect(screen.getAllByRole('button')).toHaveLength(2)
  })

  it('should click button', () => {
    render(<MockButtonGroup />)

    fireEvent.click(screen.getAllByRole('button')[0])
    expect(buttonClick).toBeCalled()
  })
})
