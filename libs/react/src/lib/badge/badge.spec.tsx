import { render, screen } from '@testing-library/react'
import Badge from './badge'

describe('Badge', () => {
  it('Should render badge with title', () => {
    render(<Badge title="title" />)

    expect(screen.getByText('title')).toBeVisible()
  })
  it('Should set badge type class', () => {
    render(<Badge title="title" badgeType="success" />)

    expect(document.body.querySelector('.success')).not.toBeNull()
  })
  it('Should render close button', () => {
    render(<Badge title="title" badgeType="success" isCloseable />)

    expect(screen.getByRole('button')).toHaveClass('close')
  })
})
