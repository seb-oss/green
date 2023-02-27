import { fireEvent, render, screen } from '@testing-library/react'
import RadioGroup from './radioGroup'
import { RadioButton } from '../input/input'
import { IValidator } from '@sebgroup/extract'

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
      )
    )}
  </RadioGroup>
)

describe('RadioButton Group Component', () => {
  it('Should render component with title and description', () => {
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
    render(<MockComponent onChangeRadio={mockFn} />)
    fireEvent.click(screen.getByText('Car 1'))
    expect(mockFn).toBeCalled()
    expect(mockFn).lastCalledWith('Car 1')
    expect(mockFn).toBeCalledWith('Car 1')
  })

  it('Should render validator: invalid', () => {
    const { container } = render(
      <MockComponent
        validator={{ message: 'invalid message', indicator: 'error' }}
      />
    )
    expect(screen.getByText('invalid message')).toBeVisible()
    expect(container.querySelectorAll('.is-invalid')).toHaveLength(3)
  })

  it('Should reset radio values when form reset', () => {
    const { container } = render(
      <form>
        <MockComponent
          validator={{ message: 'invalid message', indicator: 'error' }}
        />
        <button type="reset">reset</button>
      </form>
    )
    expect(
      container.querySelector<HTMLInputElement>("input[type='radio']")?.checked
    ).toBe(false)
    fireEvent.click(screen.getByText('Car 1'))
    expect(
      container.querySelector<HTMLInputElement>("input[type='radio']")?.checked
    ).toBe(true)
    fireEvent.click(screen.getByText('reset'))
    expect(
      container.querySelector<HTMLInputElement>("input[type='radio']")?.checked
    ).toBe(false)
  })
})
