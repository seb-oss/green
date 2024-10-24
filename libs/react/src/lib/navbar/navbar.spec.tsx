import { render, screen } from '@testing-library/react'

import Navbar from './navbar'

describe('Navbar', () => {
  const title = 'Header'

  it('renders', () => {
    render(<Navbar></Navbar>)

    expect(screen.getByRole('navigation')).toBeVisible()
  })
  it('renders content', () => {
    render(<Navbar title={title}></Navbar>)

    expect(screen.getByRole('navigation')).toHaveTextContent('Header')
  })

  it('renders children', () => {
    render(<Navbar title={title}>Test Data</Navbar>)
    expect(screen.getByRole('navigation')).toHaveTextContent('Test Data')
  })

  it('should have render variant bg-light', () => {
    render(<Navbar title={title} variant="bg-light" />)
    expect(screen.getByRole('navigation')).toHaveClass('bg-light')
  })

  it('should have render variant bg-dark', () => {
    render(<Navbar title={title} variant="bg-dark" />)
    expect(screen.getByRole('navigation')).toHaveClass('bg-dark')
  })

  it('should have render variant transparent', () => {
    render(<Navbar title={title} />)
    expect(screen.getByRole('navigation').classList.length).toBe(0)
  })

  it('should render default title', () => {
    const { container } = render(<Navbar title={title} />)
    expect(container.querySelectorAll('a')[1]).toBeFalsy()
    expect(container.querySelector('h1')?.textContent).toBe('Header')
  })

  it('should render linkable title', () => {
    const { container } = render(<Navbar title={title} titleLink="#" />)
    const anchorElement: HTMLAnchorElement = container.querySelectorAll('a')[1]
    expect(anchorElement).toBeTruthy()
    expect(anchorElement.href).toBe('http://localhost/#')
    expect(anchorElement.textContent).toBe('Header')
  })

  it('should have custom brand link and aria-label', () => {
    const { container } = render(
      <Navbar
        title={title}
        brandLink="www.random.com"
        brandAriaLabel="Opens random com"
      />,
    )
    const anchorElement: HTMLAnchorElement = container.querySelectorAll('a')[0]
    expect(anchorElement).toBeInTheDocument()
    expect(anchorElement.getAttribute('href')).toBe('www.random.com')
    expect(anchorElement.getAttribute('aria-label')).toBe('Opens random com')
  })
})
