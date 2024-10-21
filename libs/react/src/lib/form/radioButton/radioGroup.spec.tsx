import { fireEvent, render, screen } from '@testing-library/react'
import RadioGroup from './radioGroup'
import { RadioButton } from '../input/input'
import { IValidator } from '@sebgroup/extract'
import userEvent from '@testing-library/user-event'

const radioBtnValues: Array<{ label: string; value: string }> = [
  {
    value: 'Car 1',
    label: 'Car 1',
  },
  {
    value: 'Car 2',
    label: 'Car 2',
  },
]

type MockComponentProps = {
  validator?: IValidator
  valueSelected?: string
  defaultSelected?: string
  onChangeRadio?: (value: string) => string
}

const MockComponent = (props: MockComponentProps) => (
  <RadioGroup
    label="Radio group label"
    labelInformation="Radio group label information"
    {...props}
  >
    {radioBtnValues.map(
      (value: { label: string; value: string }, index: number) => (
        <RadioButton key={index} {...value} />
      ),
    )}
  </RadioGroup>
)

describe('RadioButton Group Component', () => {
  it('Should render component with label and label information', () => {
    render(<MockComponent />)
    expect(screen.getByText('Radio group label')).toBeVisible()
    expect(screen.getByText('Radio group label information')).toBeVisible()
    expect(screen.getAllByText(/Car/)).toHaveLength(2)
  })

  it('Should render any non radio button components', () => {
    render(<RadioGroup>test</RadioGroup>)
    expect(screen.getByText('test')).toBeVisible()
  })

  it('Should fire onChangeRadio', () => {
    const mockFn: jest.Mock = jest
      .fn()
      .mockImplementation((value: string) => value)
    const { container } = render(<MockComponent onChangeRadio={mockFn} />)
    fireEvent.click(screen.getByText('Car 1'))
    expect(mockFn).toBeCalled()
    expect(mockFn).lastCalledWith('Car 1')
    expect(mockFn).toBeCalledWith('Car 1')
    expect(
      container.querySelectorAll<HTMLInputElement>("input[type='radio']")[0]
        ?.checked,
    ).toEqual(true)
    fireEvent.click(screen.getByText('Car 2'))
    expect(mockFn).lastCalledWith('Car 2')
    expect(mockFn).toBeCalledWith('Car 2')
    expect(
      container.querySelectorAll<HTMLInputElement>("input[type='radio']")[1]
        ?.checked,
    ).toEqual(true)
  })

  it('Should render validator: invalid', () => {
    const { container } = render(
      <MockComponent
        validator={{ message: 'invalid message', indicator: 'error' }}
      />,
    )
    expect(screen.getByText('invalid message')).toBeVisible()
    expect(container.querySelectorAll('.is-invalid')).toHaveLength(3)
    expect(
      screen.getByText('invalid message').classList.contains('form-info'),
    ).toEqual(true)
  })

  it('Should reset radio values when form reset', () => {
    const { container } = render(
      <form>
        <MockComponent
          validator={{ message: 'invalid message', indicator: 'error' }}
        />
        <button type="reset">reset</button>
      </form>,
    )
    expect(
      container.querySelector<HTMLInputElement>("input[type='radio']")?.checked,
    ).toBe(false)
    fireEvent.click(screen.getByText('Car 1'))
    expect(
      container.querySelector<HTMLInputElement>("input[type='radio']")?.checked,
    ).toBe(true)
    fireEvent.click(screen.getByText('reset'))
    expect(
      container.querySelector<HTMLInputElement>("input[type='radio']")?.checked,
    ).toBe(false)
  })

  it('should select correct input when using default selected', async function () {
    const { container } = render(<MockComponent defaultSelected={'Car 2'} />)

    expect(
      container.querySelectorAll<HTMLInputElement>("input[type='radio']")[1]
        ?.checked,
    ).toBe(true)
  })

  it('should be able to set value programmatically', async function () {
    const { container, rerender } = render(
      <MockComponent defaultSelected={'Car 1'} />,
    )

    rerender(
      <MockComponent defaultSelected={'Car 1'} valueSelected={'Car 2'} />,
    )

    expect(
      container.querySelectorAll<HTMLInputElement>("input[type='radio']")[0]
        ?.checked,
    ).toBe(false)
    expect(
      container.querySelectorAll<HTMLInputElement>("input[type='radio']")[1]
        ?.checked,
    ).toBe(true)

    rerender(
      <MockComponent defaultSelected={'Car 1'} valueSelected={'Car 1'} />,
    )

    expect(
      container.querySelectorAll<HTMLInputElement>("input[type='radio']")[0]
        ?.checked,
    ).toBe(true)
  })
})
