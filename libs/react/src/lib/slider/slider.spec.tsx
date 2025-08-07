/* eslint-disable jsx-a11y/no-redundant-roles */
import { act, fireEvent, render, screen } from '@testing-library/react'

import { Slider } from './slider'

describe('Slider', () => {
  it('should render', () => {
    const { container } = render(<Slider />)
    expect(container.querySelector('input')?.getAttribute('type')).toBe('range')
  })

  it('should render with value', () => {
    const { container } = render(<Slider value={10} />)
    expect(container.querySelector('input')?.getAttribute('value')).toBe('10')
  })

  it('should render with min', () => {
    const { container } = render(<Slider min={10} />)
    expect(container.querySelector('input')?.getAttribute('min')).toBe('10')
  })

  it('should render with max', () => {
    const { container } = render(<Slider max={10} />)
    expect(container.querySelector('input')?.getAttribute('max')).toBe('10')
  })

  it('should render with step', () => {
    const { container } = render(<Slider step={10} />)
    expect(container.querySelector('input')?.getAttribute('step')).toBe('10')
  })

  it('should render with disabled', () => {
    const { container } = render(<Slider disabled />)
    expect(container.querySelector('input')?.getAttribute('disabled')).toBe('')
  })

  it('should render with label', () => {
    render(<Slider label="Test label" />)
    expect(screen.getByText('Test label')).not.toBeNull()
  })

  it('should update value', () => {
    const { container, rerender } = render(<Slider />)
    const input = container.querySelector('input') as HTMLInputElement
    act(() => {
      rerender(<Slider value={10} />)
    })
    expect(input.value).toBe('10')
  })

  it('should fire onChange', () => {
    const onChange = jest.fn()
    const { container } = render(<Slider onChange={onChange} />)
    const input = container.querySelector('input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 10 } })
    expect(onChange).toBeCalled()
  })

  it('should clamp to max value', () => {
    const { container, rerender } = render(<Slider />)
    const input = container.querySelector('input') as HTMLInputElement
    act(() => {
      rerender(<Slider value={200} />)
    })
    expect(input.value).toBe('100')
    expect(input.getAttribute('aria-valuenow')).toEqual('100')
  })

  it('should clamp to min value', () => {
    const { container, rerender } = render(<Slider />)
    const input = container.querySelector('input') as HTMLInputElement
    act(() => {
      rerender(<Slider value={-10} />)
    })
    expect(input.value).toBe('0')
    expect(input.getAttribute('aria-valuenow')).toEqual('0')
  })

  it('should fire onClamp', () => {
    const onClamp = jest.fn()
    const { rerender } = render(<Slider onClamp={onClamp} />)
    act(() => {
      rerender(<Slider onClamp={onClamp} value={200} />)
    })
    expect(onClamp).toBeCalled()
  })

  it('should emit min value when input field is set to empty', () => {
    const onChange = jest.fn()
    const { container } = render(
      <Slider
        label={'label'}
        hasTextbox={true}
        value={50}
        min={10}
        max={60}
        onChange={onChange}
      />,
    )
    const inputField = container.querySelector(
      'input[type=text]',
    ) as HTMLInputElement
    fireEvent.blur(inputField, { target: { value: '' } })
    expect(onChange).toBeCalledWith(10)
  })

  it('should have same aria value when input field is set without following the step', () => {
    const onChange = jest.fn()
    const { container } = render(
      <Slider
        label={'label'}
        hasTextbox={true}
        value={50}
        min={0}
        max={1000}
        step={100}
        onChange={onChange}
      />,
    )
    const slider = container.querySelector(
      'input[type=range]',
    ) as HTMLInputElement
    expect(slider.getAttribute('aria-valuenow')).toEqual('50')
    expect(slider.value).toEqual('50')
  })
})
