import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Button, ButtonGroup } from '..'
import userEvent, { UserEvent } from '@testing-library/user-event'

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

  window.HTMLElement.prototype.scrollIntoView = jest.fn()

  const enableScrolling = async (container: HTMLElement) => {
    const element = container.querySelector('.btn-group') as HTMLElement
    const scrollEvent: Event = new Event('scroll')
    Object.defineProperties(element, {
      scrollWidth: { value: 500, writable: true, configurable: true },
      clientWidth: { value: 400, writable: true, configurable: true },
      scrollLeft: { value: 50, writable: true, configurable: true },
    })
    Object.defineProperty(scrollEvent, 'currentTarget', { value: element })
    await waitFor(() => {
      element.dispatchEvent(scrollEvent)
    })
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

  it('should click button', async () => {
    const { container } = render(<MockButtonGroup />)
    await enableScrolling(container)
    await waitFor(() => {
      window.dispatchEvent(new Event('resize'))
    })
    fireEvent.click(screen.getAllByText('Hello')[0])
    await waitFor(() => {
      expect(screen.getAllByText('Hello')).toHaveLength(2)
    })
    expect(buttonClick).toBeCalled()
  })

  it('Should enable left right control button for scrolling', async () => {
    const { container } = render(<MockButtonGroup />)
    await enableScrolling(container)
    expect(container.querySelector('.control-btn-right')).toBeInTheDocument()
    expect(container.querySelector('.control-btn-left')).toBeInTheDocument()
  })

  it('Should scroll left and right', async () => {
    const user: UserEvent = userEvent.setup()
    const { container } = render(<MockButtonGroup />)
    const element = container.querySelector('.btn-group') as HTMLElement
    await enableScrolling(container)
    await user.click(
      container.querySelector('.control-btn-right') as HTMLElement,
    )
    await user.click(
      container.querySelector('.control-btn-left') as HTMLElement,
    )
    await waitFor(() => {
      expect(element.scrollLeft).toBe(50)
    })
  })
})
