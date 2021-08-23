import { render, screen } from '@testing-library/react'
import Card from './card'

describe('Card', () => {
  it('renders', () => {
    render(<Card>Hello</Card>)

    expect(screen.getByText('Hello')).toBeVisible()
  })
  it('renders headline', () => {
    render(<Card headline="Headline">Hello</Card>)

    expect(screen.getByRole('heading')).toHaveTextContent('Headline')
  })
})
