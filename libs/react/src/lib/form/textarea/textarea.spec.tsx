/* eslint-disable jsx-a11y/no-redundant-roles */
import { ChangeEvent, createRef } from 'react'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TextArea } from './textarea'

describe('TextArea', () => {
  it('renders', () => {
    render(<TextArea label="Label" />)
    expect(screen.getByLabelText('Label')).toBeVisible()
  })

  it('has the correct value', () => {
    render(<TextArea label="Label" value="Value" />)
    expect(screen.getByLabelText('Label')).toHaveValue('Value')
  })

  it('has the correct label', () => {
    render(<TextArea label="Label" value="Value" />)
    expect(screen.getByLabelText('Label')).toHaveValue('Value')
  })

  it('should fire onChange', async () => {
    const user = userEvent.setup()
    const mockFn: jest.Mock = jest
      .fn()
      .mockImplementation(
        (event: ChangeEvent<HTMLTextAreaElement>) => event.target.value,
      )

    render(<TextArea label="Label" onChange={mockFn} />)

    const inputElement = await screen.findByLabelText('Label')
    await act(async () => await user.click(inputElement))
    await act(async () => await user.keyboard('cat'))

    expect(mockFn).toBeCalled()
    expect(mockFn).lastReturnedWith('cat')
  })

  it('should be controlled with value prop', async () => {
    const user = userEvent.setup()
    const mockFn = jest.fn()

    const { rerender } = render(
      <TextArea
        label="Label"
        value="12345"
        onChange={(e) => mockFn(e.currentTarget.value)}
      />,
    )
    const inputElement = await screen.findByLabelText('Label')

    expect(inputElement).toHaveValue('12345')

    await act(async () => await user.click(inputElement))
    await act(async () => await user.keyboard('GDS'))
    expect(mockFn).toHaveBeenCalledTimes(3)
    expect(mockFn).toHaveBeenNthCalledWith(1, '12345G')
    expect(mockFn).toHaveBeenNthCalledWith(2, '12345GD')
    expect(mockFn).toHaveBeenNthCalledWith(3, '12345GDS')
    rerender(<TextArea label="Label" value="54321" />)
    expect(inputElement).toHaveValue('54321')
  })

  it('value can be changed to empty string', async () => {
    const mockFn = jest.fn()

    const { rerender } = render(
      <TextArea
        label="Label"
        value="12345"
        onChange={(e) => mockFn(e.currentTarget.value)}
      />,
    )

    const inputElement = await screen.findByLabelText('Label')

    expect(inputElement).toHaveValue('12345')

    await rerender(<TextArea label="Label" value="" />)

    expect(inputElement).toHaveValue('')
  })

  it('resets correctly', async () => {
    render(
      <form role="form">
        <TextArea label="Label" />
      </form>,
    )

    const input = screen.getByLabelText('Label') as HTMLInputElement
    input.value = 'Hello'
    expect(screen.getByLabelText('Label')).toHaveValue('Hello')

    const form = screen.getByRole('form') as HTMLFormElement
    form.reset()

    expect(screen.getByLabelText('Label')).toHaveValue('')
  })

  it('validates', () => {
    render(
      <TextArea
        label="Label"
        validator={{ message: 'valid message', indicator: 'success' }}
      />,
    )
    expect(screen.getByText('valid message')).toBeVisible()
  })

  it('ref becomes button element', () => {
    const ref = createRef<HTMLTextAreaElement>()
    render(<TextArea label="label" ref={ref} />)

    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })
})
