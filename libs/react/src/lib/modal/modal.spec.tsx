import { render, screen } from '@testing-library/react'
import Modal from './Modal'

describe('Modal', () => {
  it('renders', () => {
    render(<Modal>Hello</Modal>)

    expect(screen.getByText('Hello')).toBeVisible()
  })
})
