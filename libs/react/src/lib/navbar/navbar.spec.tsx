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
})
