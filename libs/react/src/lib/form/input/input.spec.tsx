/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {
  Checkbox,
  EmailInput,
  NumberInput,
  RadioButton,
  TextInput,
} from './input'

describe('Inputs', () => {
  describe('Checkbox', () => {
    it('renders', () => {
      render(<Checkbox defaultChecked />)

      expect(screen.getByRole('checkbox')).toBeVisible()
    })
    it('has the correct value', () => {
      render(<Checkbox defaultChecked />)

      expect(screen.getByRole('checkbox')).toBeChecked()
    })
    it('has the correct label', () => {
      render(<Checkbox label="Input" defaultChecked />)

      expect(screen.getByLabelText('Input')).toBeChecked()
    })
    it('resets correctly', async () => {
      render(
        <form role="form">
          <Checkbox label="Input" />
        </form>,
      )

      const input = screen.getByRole('checkbox') as HTMLInputElement
      input.checked = true
      expect(screen.getByLabelText('Input')).toBeChecked()

      const form = screen.getByRole('form') as HTMLFormElement
      form.reset()

      expect(screen.getByLabelText('Input')).not.toBeChecked()
    })
    it('gets the correct ref', () => {
      const ref = React.createRef<HTMLInputElement>()
      render(<Checkbox ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })
  })
  describe('EmailInput', () => {
    it('renders', () => {
      render(<EmailInput value="foo@bar.baz" />)

      expect(screen.getByRole('textbox')).toBeVisible()
    })
    it('has the correct value', () => {
      render(<EmailInput value="foo@bar.baz" />)

      expect(screen.getByRole('textbox')).toHaveValue('foo@bar.baz')
    })
    it('has the correct label', () => {
      render(<EmailInput value="foo@bar.baz" label="Input" />)

      expect(screen.getByLabelText('Input')).toHaveValue('foo@bar.baz')
    })
    it('resets correctly', async () => {
      render(
        <form role="form">
          <EmailInput label="Input" />
        </form>,
      )

      const input = screen.getByRole('textbox') as HTMLInputElement
      input.value = 'foo@bar.baz'
      expect(screen.getByLabelText('Input')).toHaveValue('foo@bar.baz')

      const form = screen.getByRole('form') as HTMLFormElement
      form.reset()

      expect(screen.getByLabelText('Input')).toHaveValue('')
    })
    it('gets the correct ref', () => {
      const ref = React.createRef<HTMLInputElement>()
      render(<EmailInput ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })
    it('Should set the correct aria-live value', () => {
      const { container } = render(
        <EmailInput
          label="Radio button"
          validator={{ message: 'Error', indicator: 'error' }}
          aria-live="off"
        />,
      )
      expect(
        container
          .querySelector('.gds-form-item__footer')
          ?.getAttribute('aria-live'),
      ).toEqual('off')
    })
  })
  describe('NumberInput', () => {
    it('renders', () => {
      render(<NumberInput value={1337} />)

      expect(screen.getByRole('spinbutton')).toBeVisible()
    })
    it('has the correct value', () => {
      render(<NumberInput value={1337} />)

      expect(screen.getByRole('spinbutton')).toHaveValue(1337)
    })
    it('has the correct label', () => {
      render(<NumberInput value={1337} label="Input" />)

      expect(screen.getByLabelText('Input')).toHaveValue(1337)
    })
    it('resets correctly', async () => {
      render(
        <form role="form">
          <NumberInput label="Input" />
        </form>,
      )

      const input = screen.getByRole('spinbutton') as HTMLInputElement
      input.value = '1337'
      expect(screen.getByLabelText('Input')).toHaveValue(1337)

      const form = screen.getByRole('form') as HTMLFormElement
      form.reset()

      expect(screen.getByLabelText('Input')).toHaveValue(null)
    })
    it('gets the correct ref', () => {
      const ref = React.createRef<HTMLInputElement>()
      render(<NumberInput ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })
    it('Should set the correct aria-live value', () => {
      const { container } = render(
        <NumberInput
          label="Radio button"
          validator={{ message: 'Error', indicator: 'error' }}
          aria-live="off"
        />,
      )
      expect(
        container
          .querySelector('.gds-form-item__footer')
          ?.getAttribute('aria-live'),
      ).toEqual('off')
    })
  })
  describe('TextInput', () => {
    it('renders', () => {
      render(<TextInput value="Hello" />)

      expect(screen.getByRole('textbox')).toBeVisible()
    })
    it('has the correct value', () => {
      render(<TextInput value="Hello" />)

      expect(screen.getByRole('textbox')).toHaveValue('Hello')
    })
    it('has the correct label', () => {
      render(<TextInput value="Hello" label="Input" />)

      expect(screen.getByLabelText('Input')).toHaveValue('Hello')
    })

    it('Should fire onChangeInput', async () => {
      const user = userEvent.setup()
      const mockFn: jest.Mock = jest
        .fn()
        .mockImplementation((value: string) => value)

      render(
        <TextInput
          placeholder="text field"
          testId={'text-input'}
          onChangeInput={mockFn}
        />,
      )

      const inputElement = await screen.findByTestId('text-input')
      await act(async () => await user.click(inputElement))
      await act(async () => await user.keyboard('cat'))

      expect(mockFn).toBeCalled()
      expect(mockFn).lastReturnedWith('cat')
    })

    it('Should fire onChange', async () => {
      const user = userEvent.setup()

      const mockFn: jest.Mock = jest
        .fn()
        .mockImplementation((value: string) => value)

      render(<TextInput testId="text-input" onChange={mockFn} />)
      const inputElement = await screen.findByTestId('text-input')

      await act(async () => await user.click(inputElement))
      await act(async () => await user.keyboard('GDS'))

      expect(mockFn).toBeCalledTimes(3)
    })

    it('Should be controlled with value prop', async () => {
      const user = userEvent.setup()

      const mockFn = jest.fn()

      const { rerender } = render(
        <TextInput
          testId="text-input"
          value={'12345'}
          onChange={(e) => {
            mockFn(e.currentTarget.value)
          }}
        />,
      )
      const inputElement = (await screen.findByTestId(
        'text-input',
      )) as HTMLInputElement

      expect(inputElement.value).toEqual('12345')

      await act(async () => await user.click(inputElement))
      await act(async () => await user.keyboard('GDS'))
      expect(mockFn).toHaveBeenCalledTimes(3)
      expect(mockFn).toHaveBeenNthCalledWith(1, '12345G')
      expect(mockFn).toHaveBeenNthCalledWith(2, '12345GD')
      expect(mockFn).toHaveBeenNthCalledWith(3, '12345GDS')
      await rerender(<TextInput testId="text-input" value={'54321'} />)
      expect(inputElement.value).toEqual('54321')
    })

    it('value can be changed to empty string', async () => {
      const mockFn = jest.fn()

      const { rerender } = render(
        <TextInput
          testId="text-input"
          value={'12345'}
          onChange={(e) => {
            mockFn(e.currentTarget.value)
          }}
        />,
      )

      const inputElement = (await screen.findByTestId(
        'text-input',
      )) as HTMLInputElement

      expect(inputElement.value).toEqual('12345')

      await rerender(<TextInput testId="text-input" value={''} />)

      expect(inputElement.value).toEqual('')
    })

    it('resets correctly', async () => {
      render(
        <form role="form">
          <TextInput label="Input" />
        </form>,
      )

      const input = screen.getByRole('textbox') as HTMLInputElement
      input.value = 'Hello'
      expect(screen.getByLabelText('Input')).toHaveValue('Hello')

      const form = screen.getByRole('form') as HTMLFormElement
      form.reset()

      expect(screen.getByLabelText('Input')).toHaveValue('')
    })
  })

  it('gets the correct ref', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<TextInput ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
  it('Should set the correct aria-live value', () => {
    const { container } = render(
      <TextInput
        label="Radio button"
        validator={{ message: 'Error', indicator: 'error' }}
        aria-live="off"
      />,
    )
    expect(
      container
        .querySelector('.gds-form-item__footer')
        ?.getAttribute('aria-live'),
    ).toEqual('off')
  })
})

describe('Component: RadioButton', () => {
  it('should render component and display label', () => {
    render(<RadioButton value={'test value'} label={'Radio Button'} />)
    expect(screen.getByText('Radio Button')).toBeVisible()
  })

  it('Should capture onChange events from individual radio buttons and emit it as one event', () => {
    const onChange: jest.Mock = jest.fn()
    render(
      <RadioButton
        onChange={onChange}
        value="test value"
        label="Radio button"
      />,
    )
    fireEvent.click(screen.getByText('Radio button'))
    expect(onChange).toBeCalled()
  })

  it('Should not fire onchange when disabled', () => {
    const onChange: jest.Mock = jest.fn().mockImplementation((value) => value)
    render(
      <RadioButton
        onChange={onChange}
        value="test value"
        label="Radio button"
        disabled
      />,
    )
    fireEvent.click(screen.getByText('Radio button'))
    expect(onChange).not.toBeCalled()
  })

  it('Should render validator: invalid', () => {
    const { container } = render(
      <RadioButton
        label="Radio button"
        value=""
        validator={{ message: 'Error', indicator: 'error' }}
      />,
    )
    expect(container.querySelectorAll('.is-invalid')).toHaveLength(1)
  })
  it('gets the correct ref', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<RadioButton ref={ref} label="label" value="true" />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})

describe('Validation: text, number and email component', () => {
  const MockComponent = () => (
    <>
      <TextInput
        label="Input label"
        validator={{ message: 'valid message', indicator: 'success' }}
      />
      <NumberInput
        label="Input label"
        validator={{ message: 'valid message', indicator: 'success' }}
      />
      <EmailInput
        label="Input label"
        validator={{ message: 'valid message', indicator: 'success' }}
      />
    </>
  )
  it('Should render validation: valid', () => {
    render(<MockComponent />)
    expect(screen.getAllByText('valid message')).toHaveLength(3)
  })
})
