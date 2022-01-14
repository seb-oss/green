import { render, screen } from '@testing-library/react'
import Modal from './modal'

describe('Modal', () => {
  it('renders', () => {
    render(<Modal isOpen={true}>Hello</Modal>)

    expect(screen.getByText('Hello')).toBeVisible()
  })
})
