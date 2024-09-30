import { render, screen } from '@testing-library/react'
import Badge from './badge'

describe('Badge', () => {
  it('Should render badge with title', () => {
    render(<Badge>title</Badge>)

    expect(screen.getByText('title')).toBeDefined()
  })
  it('Should set badge type class', () => {
    render(<Badge badgeType="success">title</Badge>)

    expect(document.body.querySelector('.success')).not.toBeNull()
  })
  it('Should render close button', () => {
    render(
      <Badge badgeType="success" isCloseable>
        title
      </Badge>,
    )

    expect(screen.getByRole('button').classList.contains('close')).toBe(true)
  })
})
