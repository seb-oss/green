import { render, screen } from '@testing-library/react'

import Group from './group'

describe('Group', () => {
  it('renders', () => {
    render(<Group>Hello</Group>)

    expect(screen.getByText('Hello')).toBeVisible()
  })

  it('Should have groupBorder', () => {
    render(<Group groupBorder> Hello World </Group>)
    expect(screen.getByText('Hello World')).toHaveClass('gds-group-border')
  })

  it('Should render error message (string)', () => {
    render(<Group error="Invalid text"> Hello World </Group>)
    expect(screen.getByText('Invalid text')).toBeVisible()
  })

  it('Should render error message (Error object)', () => {
    const mockError: Error = new Error('Failed')
    mockError.message = 'Invalid text'
    render(<Group error={mockError}> Hello World </Group>)
    expect(screen.getByText('Invalid text')).toBeVisible()
  })
})
