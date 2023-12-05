import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Stepper, StepperProps } from './stepper'

jest.setTimeout(50000)

describe('Stepper', () => {
  let props: StepperProps
  beforeEach(() => {
    props = {}
  })
  it('renders', () => {
    const component = render(<Stepper {...props} />)
    expect(component.baseElement).toBeTruthy()
  })
  it('sets value', () => {
    props.value = 10
    const component = render(<Stepper {...props} />)
    const input = component.baseElement.getElementsByTagName('input')[0]
    expect(input.value).toEqual('10')
  })
  it('renders label', async () => {
    props.label = 'Label'
    const { findByText } = render(<Stepper {...props} />)

    expect(await findByText('Label')).toBeTruthy()
  })
  it('renders description', async () => {
    props.description = 'Description'
    const { findByText } = render(<Stepper {...props} />)

    expect(await findByText('Description')).toBeTruthy()
  })
  it('renders status message', async () => {
    props.validator = {
      message: 'Status',
      indicator: 'error',
    }
    const { findByText } = render(<Stepper {...props} />)

    expect(await findByText('Status')).toBeTruthy()
  })
  describe('mouse interactions', () => {
    const renderComponent = async (props: StepperProps = {}) => {
      const component = render(<Stepper {...props} />)
      const [buttonDown, buttonUp] = await component.findAllByRole('button')
      const input = component.baseElement.getElementsByTagName(
        'input'
      )[0] as HTMLInputElement
      return {
        component,
        buttonDown,
        buttonUp,
        input,
      }
    }
    it('goes up', async () => {
      const user = userEvent.setup()
      const { buttonUp, input } = await renderComponent()

      await user.click(buttonUp)
      await waitFor(() => expect(input.value).toEqual('1'))
    })
    it('goes down', async () => {
      const user = userEvent.setup()
      const { buttonDown, input } = await renderComponent()

      await user.click(buttonDown)
      await waitFor(() => expect(input.value).toEqual('-1'))
    })
    it('respects max', async () => {
      const user = userEvent.setup()
      const { buttonUp, input } = await renderComponent({ value: 8, max: 10 })

      await user.click(buttonUp)
      expect(input.value).toEqual('9')

      await user.click(buttonUp)
      expect(input.value).toEqual('10')

      await user.click(buttonUp)
      expect(input.value).toEqual('10')
    })
    it('respects min', async () => {
      const user = userEvent.setup()
      const { buttonDown, input } = await renderComponent({ value: 2, min: 0 })

      await user.click(buttonDown)
      expect(input.value).toEqual('1')

      await user.click(buttonDown)
      expect(input.value).toEqual('0')

      await user.click(buttonDown)
      expect(input.value).toEqual('0')
    })
    it('calls onChange', async () => {
      const onChange = jest.fn()
      const user = userEvent.setup()
      const { buttonDown, buttonUp } = await renderComponent({
        value: 0,
        onChange,
      })

      await user.click(buttonUp)
      expect(onChange).toHaveBeenCalledWith(1)

      await user.click(buttonDown)
      await user.click(buttonDown)
      expect(onChange).toHaveBeenCalledWith(-1)
    })
  })
})
