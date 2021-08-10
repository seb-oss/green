import { render, screen } from '@testing-library/react'
import Text from './Text'

describe('Text', () => {
  it('renders', () => {
    render(<Text>Hello</Text>)

    expect(screen.getByText('Hello')).toBeVisible()
  })
})
