/* eslint-disable jsx-a11y/no-redundant-roles */
import { render, screen, fireEvent, act } from '@testing-library/react'
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
})
