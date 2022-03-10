import { fireEvent, render, screen } from '@testing-library/react'
import RadioGroup from './radioGroup'
import { RadioButton } from '../input/input'
import { IValidator, RadioButtonProps } from '../types'

describe('RadioButton Group Component', () => {
  const radioBtnValues: RadioButtonProps[] = [
    {
      value: 'Car 1',
      label: 'Car 1',
    },
    {
      value: 'Car 2',
      label: 'Car 2',
    },
  ]

  type MockComponentProps = { validator?: IValidator; onChangeRadio?: (value: string) => string }

  const MockComponent = (props: MockComponentProps) => (
    <RadioGroup title="Radio Group title" description="Description" {...props}>
      {radioBtnValues.map((value: RadioButtonProps, index: number) => (
        <RadioButton key={index} {...value} />
      ))}
    </RadioGroup>
  )
  it('Should render component with title and description', () => {
    render(<MockComponent />)
    expect(screen.getByText('Radio Group title')).toBeVisible()
    expect(screen.getByText('Description')).toBeVisible()
    expect(screen.getAllByText(/Car/)).toHaveLength(2)
  })

  it('Should render any non radio button components', () => {
    render(<RadioGroup>test</RadioGroup>)
    expect(screen.getByText('test')).toBeVisible()
  })

  it('Should fire onChangeRadio', () => {
    const mockFn: jest.Mock = jest.fn().mockImplementation((value: string) => value)
    render(<MockComponent onChangeRadio={mockFn} />)
    fireEvent.click(screen.getByText('Car 1'))
    expect(mockFn).toBeCalled()
    expect(mockFn).lastCalledWith('Car 1')
    expect(mockFn).toBeCalledWith('Car 1')
  })

  it('Should render validator: valid', () => {
    const { container } = render(<MockComponent validator={{ message: 'valid message', indicator: 'valid' }} />)
    expect(screen.getByText('valid message')).toBeVisible()
    expect(container.querySelectorAll('.is-valid')).toHaveLength(3)
  })

  it('Should render validator: invalid', () => {
    const { container } = render(<MockComponent validator={{ message: 'invalid message', indicator: 'invalid' }} />)
    expect(screen.getByText('invalid message')).toBeVisible()
    expect(container.querySelectorAll('.is-invalid')).toHaveLength(3)
  })
})
