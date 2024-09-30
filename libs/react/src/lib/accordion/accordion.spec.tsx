import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Accordion from './accordion'
import { AccordionItemInterface } from './accordion-item'

const items: AccordionItemInterface[] = [
  {
    label: 'This the first Accordion label',
    subLabel: 'This is the first Accordion sub label',
    content: (
      <>
        <p>First accordion region</p>
        <a href="/#">And this is a link</a>
      </>
    ),
    labelElementLevel: 2,
  },
  {
    customLabel: <>This is the second Accordion label</>,
    subLabel: 'This is the second Accordion sub label',
    content: (
      <>
        <p>Second accordion region</p>
        <a href="/#">And this is a link</a>
      </>
    ),
    labelElementLevel: 2,
  },
  {
    label: 'This is the third Accordion label',
    content: (
      <>
        <p>Third accordion region</p>
        <a href="/#">And this is a link</a>
      </>
    ),
    labelElementLevel: 2,
    defaultOpen: true,
  },
]

describe('Accordion', () => {
  it('renders', () => {
    render(<Accordion items={items} />)
    expect(screen.getByText('This the first Accordion label')).toBeTruthy()
  })

  it('should have buttons ', () => {
    render(<Accordion items={items} />)

    expect(screen.getAllByRole('button').length).toEqual(3)
  })

  it('should show item when clicked', () => {
    render(<Accordion items={items} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(screen.getAllByRole('region')[0].hidden).toBeFalsy()
    expect(
      screen.getAllByRole('button')[0].getAttribute('aria-expanded'),
    ).toEqual('true')
  })

  it('should have correct aria attributes', () => {
    render(<Accordion items={items} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(screen.getAllByRole('button')[0].id).toEqual(
      screen.getAllByRole('region')[0].getAttribute('aria-labelledby'),
    )
    expect(screen.getAllByRole('region')[0].id).toEqual(
      screen.getAllByRole('button')[0].getAttribute('aria-controls'),
    )
  })

  it('should call the onClick handler passed as prop', function () {
    const mockFunction = jest.fn()

    render(
      <Accordion
        items={[
          { ...items[0], onClick: mockFunction },
          { ...items[1], onClick: mockFunction },
          { ...items[2], onClick: mockFunction },
        ]}
      />,
    )

    fireEvent.click(screen.getAllByRole('button')[0])
    fireEvent.click(screen.getAllByRole('button')[1])
    fireEvent.click(screen.getAllByRole('button')[2])

    expect(mockFunction).toHaveBeenCalledTimes(3)
  })

  it('should call the onOpen and onClose handler passed as prop when opening/closing', function () {
    const mockFunctionOnOpen = jest.fn()
    const mockFunctionOnClose = jest.fn()

    render(
      <Accordion
        items={[
          {
            ...items[0],
            onOpen: mockFunctionOnOpen,
            onClose: mockFunctionOnClose,
          },
          { ...items[1] },
          { ...items[2] },
        ]}
      />,
    )

    fireEvent.click(screen.getAllByRole('button')[0])
    fireEvent.click(screen.getAllByRole('button')[0])

    expect(mockFunctionOnOpen).toHaveBeenCalledTimes(1)
    expect(mockFunctionOnClose).toHaveBeenCalledTimes(1)
  })

  it('should be able to tab to buttons', async () => {
    const user = userEvent.setup()

    render(<Accordion items={items} />)

    await user.tab()
    await user.tab()
    await user.tab()

    expect(document.activeElement).toBe(screen.getAllByRole('button')[2])
  })

  it('should open with enter', function () {
    userEvent.setup()

    render(<Accordion items={items} />)

    userEvent.type(screen.getAllByRole('button')[0], '{enter}', {
      skipClick: true,
    })

    expect(screen.getByText('First accordion region')).toBeDefined()
  })
  it('should open with space', function () {
    userEvent.setup()

    render(<Accordion items={items} />)

    userEvent.type(screen.getAllByRole('button')[0], '{space}', {
      skipClick: true,
    })

    expect(screen.getByText('First accordion region')).toBeDefined()
  })

  it('accordion is open when defautlOpen is true', () => {
    render(<Accordion items={items} />)
    expect(screen.getByText('Third accordion region')).toBeVisible()

    // Check that the content of the first and second items are not visible
    expect(screen.queryByText('First accordion region')).not.toBeVisible()
    expect(screen.queryByText('Second accordion region')).not.toBeVisible()
  })
})
