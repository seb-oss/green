import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormItems, TextInput } from '.'
import * as FormContext from './formContext'

describe('FormItems Component', () => {
  const mockFormContext: jest.SpyInstance = jest.spyOn(
    FormContext,
    'useFormContext'
  )

  beforeEach(() => {
    mockFormContext.mockImplementation(() => ({
      setValues: jest.fn(),
      setErrors: jest.fn(),
      setFields: jest.fn(),
      errors: null,
      values: null,
    }))
  })

  it('Should render', () => {
    const { container } = render(
      <FormItems name="text">
        <TextInput label="Some field" />
      </FormItems>
    )
    expect(screen.getByText('Some field')).not.toBeNull()
    expect(container.querySelector('input')?.getAttribute('name')).toBe('text')
  })

  it('Should fire onChangeText', () => {
    const mockFn: jest.Mock = jest.fn()
    mockFormContext.mockImplementation(() => ({
      setValues: mockFn,
      setFields: jest.fn(),
      setErrors: mockFn,
    }))
    const { container } = render(
      <FormItems name="text">
        <TextInput label="Some field" />
      </FormItems>
    )
    fireEvent.change(container.querySelector('input') as HTMLInputElement, {
      target: { value: 'new value' },
    })
    expect(mockFn).toBeCalledTimes(2)
  })

  it('Should propagate onChange event to callback when provided', async () => {
    const inputText = 'new value'
    const user = userEvent.setup()
    const mockFn: jest.Mock = jest.fn()
    render(
      <FormItems name="text" onChange={mockFn}>
        <TextInput label="Some field" />
      </FormItems>
    )
    expect(mockFn).not.toBeCalled()
    await user.type(screen.getByRole('textbox'), inputText)
    expect(mockFn).toBeCalledTimes(inputText.length)
  })
})
