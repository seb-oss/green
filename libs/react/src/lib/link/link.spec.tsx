import { render, screen } from '@testing-library/react'
import { notDeepEqual } from 'assert'
import Link from './link'

describe('Link', () => {
  it('renders text', () => {
    render(<Link>Foo</Link>)
    expect(screen.getByText('Foo')).toBeVisible()
  })
  it('renders id', () => {
    render(<Link id="foo">Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.id).toEqual('foo')
  })
  it('renders href', () => {
    render(<Link href="https://test.com/">Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.href).toEqual('https://test.com/')
  })
  it('renders target', () => {
    render(<Link href="https://test.com/" target="_blank">Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.target).toEqual('_blank')
  })
  it('renders non role', () => {
    render(<Link href="https://test.com/">Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.getAttribute('role')).not.toBeTruthy()
  })
  it('renders role', () => {
    render(<Link href="https://test.com/" role="menuitem">Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.getAttribute('role')).toEqual('menuitem')
  })
  it('renders boolean button prop', () => {
    render(<Link button>Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.className).toEqual('button')
  })
  it('renders named button prop', () => {
    render(<Link button="ghost">Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.className).toEqual('button ghost')
  })
  it('sets role button', () => {
    render(<Link button>Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.getAttribute('role')).toEqual('button')
  })
  it('renders rel', () => {
    render(<Link rel="noreferrer">Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.rel).toEqual('noreferrer')
  })
  it('handles external', () => {
    render(<Link external>Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.rel).toEqual('external')
  })
  it('handles rel and external', () => {
    render(<Link rel="noreferrer" external>Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.rel).toEqual('noreferrer external')
  })
  it('handles multiple rels and external', () => {
    render(<Link rel={['alternate', 'author', 'bookmark', 'external']} external>Foo</Link>)
    const link: HTMLAnchorElement = screen.getByText('Foo')
    expect(link.rel).toEqual('alternate author bookmark external')
  })
})
