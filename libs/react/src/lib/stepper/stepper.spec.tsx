import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Stepper, StepperProps } from './stepper'
import { ChangeEvent } from 'react'

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
        'input',
      )[0] as HTMLInputElement
      return {
        component,
        buttonDown,
        buttonUp,
        input,
      }
    }
    it('goes up', async () => {
      const onIncrease = jest.fn()
      const user = userEvent.setup()
      const { buttonUp } = await renderComponent({ onIncrease })

      await user.click(buttonUp)

      expect(onIncrease).toHaveBeenCalledTimes(1)
    })
    it('goes down', async () => {
      const onDecrease = jest.fn()
      const user = userEvent.setup()
      const { buttonDown } = await renderComponent({ onDecrease })

      await user.click(buttonDown)

      expect(onDecrease).toHaveBeenCalledTimes(1)
    })
    it('calls onChange', async () => {
      const onChange = jest.fn()
      const user = userEvent.setup()
      const { input } = await renderComponent({
        value: 0,
        onChange,
      })

      await user.type(input, '1')

      expect(onChange).toHaveBeenCalledTimes(1)
    })
  })
})
