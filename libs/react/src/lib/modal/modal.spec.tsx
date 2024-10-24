import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Modal from './modal'

describe('Modal', () => {
  const MockModal = () => {
    const [toggle, setToggle] = useState(true)
    return (
      <Modal
        isOpen={toggle}
        onClose={() => setToggle(false)}
        dismiss="Dismiss"
        confirm="Confirm"
      >
        This is a modal body
      </Modal>
    )
  }

  it('renders', () => {
    render(<Modal isOpen={true}>Hello</Modal>)
    expect(screen.getByText('Hello')).toBeVisible()
  })

  it('Should render modal header, body and footer', () => {
    render(
      <Modal
        header="This is modal header"
        isOpen={true}
        dismiss="Nope"
        confirm="Ok"
      >
        modal body
      </Modal>,
    )
    expect(screen.getByRole('heading').textContent).toBe('This is modal header')
    expect(screen.getByText('modal body')).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(3)
    expect(screen.getByText('Nope')).toBeInTheDocument()
    expect(screen.getByText('Ok')).toBeInTheDocument()
  })

  it('Should close modal with header close button click', () => {
    render(<MockModal />)
    expect(screen.getByText('This is a modal body')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Close'))
    expect(screen.queryByText('This is a modal body')).toBe(null)
  })

  it('Should close modal when footer confirm button click', () => {
    render(<MockModal />)
    expect(screen.getByText('This is a modal body')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Confirm'))
    expect(screen.queryByText('This is a modal body')).toBe(null)
  })

  it('Should close modal when footer dismiss button click', () => {
    render(<MockModal />)
    expect(screen.getByText('This is a modal body')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Dismiss'))
    expect(screen.queryByText('This is a modal body')).toBe(null)
  })

  it('Should render slide-out modal', () => {
    const { container } = render(
      <Modal header="This is modal header" isOpen={true} type="slideout">
        modal body
      </Modal>,
    )
    expect(container.querySelector('aside')).toBeInTheDocument()
  })
  it('Should render take-over modal', () => {
    const { container } = render(
      <Modal header="This is modal header" isOpen={true} type="takeover">
        modal body
      </Modal>,
    )
    expect(container.querySelector('main')).toBeInTheDocument()
  })

  it('Should fire onComfirm function', () => {
    const mockOnConfirm: jest.Mock = jest.fn()
    render(
      <Modal
        isOpen={true}
        dismiss="Nope"
        confirm="Ok"
        onConfirm={mockOnConfirm}
      >
        modal body
      </Modal>,
    )
    fireEvent.click(screen.getByText('Ok'))
    expect(mockOnConfirm).toBeCalled()
  })
  it('Should fire onDismiss function', () => {
    const mockOnDismiss: jest.Mock = jest.fn()
    render(
      <Modal
        isOpen={true}
        dismiss="Nope"
        confirm="Ok"
        onDismiss={mockOnDismiss}
      >
        modal body
      </Modal>,
    )
    fireEvent.click(screen.getByText('Nope'))
    expect(mockOnDismiss).toBeCalled()
  })

  it('Should close modal with backdrop grey area clicked', () => {
    render(<MockModal />)
    expect(screen.getByText('This is a modal body')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('modal-backdrop'))
    expect(screen.queryByText('This is a modal body')).toBe(null)
  })
})
