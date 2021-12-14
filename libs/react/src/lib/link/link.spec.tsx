import { render, screen } from '@testing-library/react'
import Link from './link'

describe('Link', () => {
  it('renders', () => {
    render(<Link text="Foo" />)
    expect(screen.getByText('Foo')).toBeVisible()
  })

  it('renders', () => {
    render(<Link text="Foo" link="test.com" />)
    const link: HTMLAnchorElement = screen.getByText('Foo') as HTMLAnchorElement
    expect(link.href).toBe('http://localhost/test.com')
  })
})
