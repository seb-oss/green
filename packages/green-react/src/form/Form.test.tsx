import { render, screen } from '@testing-library/react'
import Form from './Form'

describe('Form', () => {
  it('renders', () => {
    render(<Form>Hello</Form>)

    expect(screen.getByText('Hello')).toBeVisible()
  })
})
