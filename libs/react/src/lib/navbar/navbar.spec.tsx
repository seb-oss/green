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
})
