import { render, screen } from '@testing-library/react'
import RadioGroup from './radioGroup'
import RadioButton, { RadioButtonProps } from './radioButton'

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

  const MockComponent = () => (
    <RadioGroup title="Radio Group title" description="Description">
      {radioBtnValues.map((value: RadioButtonProps, index: number) => (
        <RadioButton key={index} value={value.value} label={value.label} />
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
})
