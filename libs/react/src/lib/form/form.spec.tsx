import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'

import { FormItems, RadioGroup, TextInput } from '.'
import Form from './form'
import * as FormContext from './formContext'
import { Checkbox, RadioButton } from './input/input'

type MockComponentProps = {
  /* eslint-disable-next-line */
  mockOnSubmit?: (values: any) => void
}

const MockComponent = ({ mockOnSubmit }: MockComponentProps) => (
  <Form onFormSubmit={mockOnSubmit}>
    <FormItems
      name="text"
      validate={{
        message: 'fill in blank',
        indicator: 'error',
        rules: { type: 'Required' },
      }}
    >
      <TextInput label="Text field" placeholder="eg: cat" value={''} />
    </FormItems>
    <button type="submit">submit</button>
    <button type="reset">reset</button>
  </Form>
)

describe('Form component', () => {
  it('Should renders', () => {
    render(<MockComponent />)
    expect(screen.getByText('Text field')).toBeVisible()
  })

  it('Should render correct form direction', () => {
    const { container } = render(<Form direction="horizontal">i am form</Form>)
    expect(
      container.querySelector('form')?.className.includes('horizontal'),
    ).toBe(true)
  })

  it('Should render larger form size', () => {
    const { container } = render(<Form formSize="lg">i am form</Form>)
    expect(container.querySelector('form')?.className.includes('lg')).toBe(true)
  })

  it('Should show error message when input value is empty', () => {
    const { container } = render(<MockComponent />)
    expect(screen.queryByText('fill in blank')).toBeNull()
    fireEvent.change(container.querySelector('input') as HTMLInputElement, {
      target: { value: 'value' },
    })
    fireEvent.change(container.querySelector('input') as HTMLInputElement, {
      target: { value: '' },
    })
    expect(screen.queryByText('fill in blank')).toBeVisible()
  })

  it('Should validate when form is submitted', async () => {
    render(<MockComponent />)
    expect(screen.queryByText('fill in blank')).toBeNull()
    await act(async () => await fireEvent.click(screen.getByText('submit')))
    expect(screen.queryByText('fill in blank')).toBeVisible()
  })

  it('Should reset forms input value', async () => {
    const { container } = render(<MockComponent />)
    await act(() =>
      fireEvent.change(container.querySelector('input') as HTMLInputElement, {
        target: { value: 'value' },
      }),
    )
    expect(container.querySelector('input')?.value).toBe('value')
    fireEvent.click(screen.getByText('reset'))
    expect(container.querySelector('input')?.value).toBe('')
  })

  it('Should reset forms input error', async () => {
    render(<MockComponent />)
    expect(screen.queryByText('fill in blank')).toBeNull()
    await act(() => fireEvent.click(screen.getByText('submit')))
    expect(screen.queryByText('fill in blank')).not.toBeNull()
    await act(() => fireEvent.click(screen.getByText('reset')))
    expect(screen.queryByText('fill in blank')).toBeNull()
  })

  it('Should call onSubmitForm fn', async () => {
    /* eslint-disable-next-line */
    const mockFn: jest.Mock = jest
      .fn()
      .mockImplementation((value: any) => value)
    render(<MockComponent mockOnSubmit={mockFn} />)
    await act(() =>
      fireEvent.change(screen.getByPlaceholderText('eg: cat'), {
        target: { value: 'cat cat' },
      }),
    )
    await act(() => fireEvent.click(screen.getByText('submit')))
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenLastCalledWith({ text: 'cat cat' })
  })

  it('Should call not onSubmitForm fn when input empty', async () => {
    /* eslint-disable-next-line */
    const mockFn: jest.Mock = jest
      .fn()
      .mockImplementation((value: any) => value)
    render(<MockComponent mockOnSubmit={mockFn} />)
    await act(() => fireEvent.click(screen.getByText('submit')))
    expect(mockFn).not.toBeCalled()
  })

  it('Should validate checkbox', async () => {
    render(
      <Form>
        <FormItems
          name="checkbox"
          validate={{
            message: 'required',
            indicator: 'error',
            rules: { type: 'Required' },
          }}
        >
          <Checkbox label="checkbox" checked />
        </FormItems>
      </Form>,
    )
    expect(screen.queryByText('required')).toBeNull()
    await act(() => fireEvent.click(screen.getByText('checkbox')))
    expect(screen.queryByText('required')).not.toBeNull()
  })

  it('Should validate radio group', async () => {
    render(
      <Form>
        <FormItems
          name="checkbox"
          validate={{
            message: 'required',
            indicator: 'error',
            rules: { type: 'Required' },
          }}
        >
          <RadioGroup label="Radio Group">
            <RadioButton label="Radio Button 1" value="button1" />
            <RadioButton label="Radio Button 2" value="button2" />
          </RadioGroup>
        </FormItems>
        <button type="submit">submit</button>
      </Form>,
    )
    expect(screen.queryByText('required')).toBeNull()
    await act(() => fireEvent.click(screen.getByText('submit')))
    expect(screen.queryByText('required')).not.toBeNull()
  })

  it('Should remove inputs and useEffect cleanup should run', async () => {
    const mockFn: jest.Mock = jest.fn().mockImplementation((value) => value())
    const mockFormContext: jest.SpyInstance = jest.spyOn(
      FormContext,
      'useFormContext',
    )
    mockFormContext.mockImplementation(() => ({
      setValues: mockFn,
      setErrors: mockFn,
      setFields: mockFn,
      errors: undefined,
      values: undefined,
    }))
    const MockComponent = () => {
      const [hide, setHide] = React.useState(true)
      return (
        <Form>
          {hide && (
            <FormItems name="blah">
              <TextInput label="text" />
            </FormItems>
          )}
          <button type="button" onClick={() => setHide(false)}>
            click
          </button>
        </Form>
      )
    }

    render(<MockComponent />)
    expect(mockFn).toBeCalledTimes(1)
    expect(screen.getByText('text')).toBeVisible()
    await act(() => fireEvent.click(screen.getByText('click')))
    expect(screen.queryByText('text')).toBeNull()
    expect(mockFn).toBeCalledTimes(4)
  })
})
