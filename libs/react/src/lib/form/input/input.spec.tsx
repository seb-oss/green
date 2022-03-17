/* eslint-disable jsx-a11y/no-redundant-roles */
import { render, screen, fireEvent } from '@testing-library/react'
import { TextInputProps } from '../types'
import { Checkbox, EmailInput, NumberInput, TextInput, RadioButton } from './input'

describe('Inputs', () => {
  describe('Checkbox', () => {
    it('renders', () => {
      render(<Checkbox checked />)

      expect(screen.getByRole('checkbox')).toBeVisible()
    })
    it('has the correct value', () => {
      render(<Checkbox checked />)

      expect(screen.getByRole('checkbox')).toBeChecked()
    })
    it('has the correct label', () => {
      render(<Checkbox label="Input" checked />)

      expect(screen.getByLabelText('Input')).toBeChecked()
    })
    it('resets correctly', async () => {
      render(
        <form role="form">
          <Checkbox label="Input" />
        </form>
      )

      const input = screen.getByRole('checkbox') as HTMLInputElement
      input.checked = true
      expect(screen.getByLabelText('Input')).toBeChecked()

      const form = screen.getByRole('form') as HTMLFormElement
      form.reset()

      expect(screen.getByLabelText('Input')).not.toBeChecked()
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
        </form>
      )

      const input = screen.getByRole('textbox') as HTMLInputElement
      input.value = 'foo@bar.baz'
      expect(screen.getByLabelText('Input')).toHaveValue('foo@bar.baz')

      const form = screen.getByRole('form') as HTMLFormElement
      form.reset()

      expect(screen.getByLabelText('Input')).toHaveValue('')
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
        </form>
      )

      const input = screen.getByRole('spinbutton') as HTMLInputElement
      input.value = '1337'
      expect(screen.getByLabelText('Input')).toHaveValue(1337)

      const form = screen.getByRole('form') as HTMLFormElement
      form.reset()

      expect(screen.getByLabelText('Input')).toHaveValue(null)
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

    it('Should fire onChangeInput', () => {
      const mockFn: jest.Mock = jest.fn().mockImplementation((value: string) => value)
      render(<TextInput placeholder="text field" onChangeInput={mockFn} />)
      fireEvent.change(screen.getByPlaceholderText('text field'), { target: { value: 'cat' } })
      expect(mockFn).toBeCalled()
      expect(mockFn).lastReturnedWith('cat')
    })

    it('resets correctly', async () => {
      render(
        <form role="form">
          <TextInput label="Input" />
        </form>
      )

      const input = screen.getByRole('textbox') as HTMLInputElement
      input.value = 'Hello'
      expect(screen.getByLabelText('Input')).toHaveValue('Hello')

      const form = screen.getByRole('form') as HTMLFormElement
      form.reset()

      expect(screen.getByLabelText('Input')).toHaveValue('')
    })
  })
})

describe('Component: RadioButton', () => {
  it('should render component and display label', () => {
    render(<RadioButton value={'test value'} label={'Radio Button'} />)
    expect(screen.getByText('Radio Button')).toBeVisible()
  })

  it('Should capture onChange events from individual radio buttons and emit it as one event', () => {
    const onChange: jest.Mock = jest.fn()
    render(<RadioButton onChange={onChange} value="test value" label="Radio button" />)
    fireEvent.click(screen.getByText('Radio button'))
    expect(onChange).toBeCalled()
  })

  it('Should not fire onchange when disabled', () => {
    const onChange: jest.Mock = jest.fn().mockImplementation((value) => value)
    render(<RadioButton onChange={onChange} value="test value" label="Radio button" disabled />)
    fireEvent.click(screen.getByText('Radio button'))
    expect(onChange).not.toBeCalled()
  })

  it('Should render validator: valid', () => {
    const { container } = render(<RadioButton label="Radio button" value="" validator="is-valid" />)
    expect(container.querySelectorAll('.is-valid')).toHaveLength(1)
  })

  it('Should render validator: invalid', () => {
    const { container } = render(<RadioButton label="Radio button" value="" validator="is-invalid" />)
    expect(container.querySelectorAll('.is-invalid')).toHaveLength(1)
  })
})

describe('Validation: text, number and email component', () => {
  const MockComponent = () => (
    <>
      <TextInput label="Input label" validator={{ message: 'valid message', indicator: 'success' }} />
      <NumberInput label="Input label" validator={{ message: 'valid message', indicator: 'success' }} />
      <EmailInput label="Input label" validator={{ message: 'valid message', indicator: 'success' }} />
    </>
  )
  it('Should render validation: valid', () => {
    render(<MockComponent />)
    expect(screen.getAllByText('valid message')).toHaveLength(3)
  })
})
