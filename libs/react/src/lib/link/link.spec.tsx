import { render, screen } from '@testing-library/react'

import Link from './link'

describe('Link', () => {
  it('renders text', () => {
    render(<Link>Foo</Link>)
    expect(screen.getByText('Foo')).toBeVisible()
  })
  it('renders href', () => {
    render(<Link href="https://test.com/">Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.href).toEqual('https://test.com/')
  })
  it('renders role', () => {
    render(
      <Link href="https://test.com/" role="menuitem">
        Foo
      </Link>,
    )
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.getAttribute('role')).toEqual('menuitem')
  })
  it('renders boolean button prop', () => {
    render(<Link button>Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.className).toEqual('gds-button')
  })
  it('renders named button prop', () => {
    render(<Link button="ghost">Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.className).toEqual('gds-button ghost')
  })
  it('sets role button', () => {
    render(<Link button>Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.getAttribute('role')).toEqual('button')
  })
  it('renders boolean secondary prop', () => {
    render(<Link secondary>Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.className).toEqual('gds-link gds-link-arrow')
  })
})
