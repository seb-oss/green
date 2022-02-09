import { render, screen, fireEvent } from '@testing-library/react'
import { RadioButton } from '..'

describe('Component: RadioButton', () => {
  it('should render component and display label', () => {
    render(<RadioButton value={'test value'} label={'Radio Button'} />)

    expect(screen.getByText('Radio Button')).toBeVisible()
  })

  it('Should capture onChange events from individual radio buttons and emit it as one event', () => {
    const onChange: jest.Mock = jest.fn().mockImplementation((value) => value)

    render(
      <RadioButton
        onChange={onChange}
        value="test value"
        label="Radio button"
      />
    )
    fireEvent.click(screen.getByText('Radio button'))
    expect(onChange).toBeCalledWith({ value: 'test value', checked: true })
  })
})
