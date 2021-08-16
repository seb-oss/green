import { render, screen } from '@testing-library/react'
import Group from './group'

describe('Group', () => {
  it('renders', () => {
    render(<Group>Hello</Group>)

    expect(screen.getByText('Hello')).toBeVisible()
  })
})
