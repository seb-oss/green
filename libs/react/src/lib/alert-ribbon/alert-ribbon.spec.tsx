import { render, screen } from '@testing-library/react'
import AlertRibbon from './alert-ribbon'
import Button from '../form/button/button'

describe('AlertRibbon', () => {
  const Header = () => <h3>Card Headline</h3>

  const Footer = () => <Button>Default Button</Button>

  it('renders', () => {
<<<<<<< feature/alert-react
    const {container} = render(<AlertRibbon>AlertRibbon</AlertRibbon>)

    expect(container.getElementsByClassName('alert-ribbon')[0]).toBeTruthy()
  })
  it('sets type class', () => {
    render(<AlertRibbon type="warning" role="alert">AlertRibbon</AlertRibbon>)
=======
    render(<AlertRibbon>AlertRibbon</AlertRibbon>)

    expect(screen.getByRole('alert')).toBeTruthy()
  })
  it('sets type class', () => {
    render(<AlertRibbon type="warning">AlertRibbon</AlertRibbon>)
>>>>>>> main

    expect(screen.getByRole('alert').classList.contains('warning')).toEqual(true)
  })
  it('renders content', () => {
    render(<AlertRibbon>AlertRibbon</AlertRibbon>)

    expect(screen.getByText('AlertRibbon').tagName).toEqual('P')
    expect(screen.getByText('AlertRibbon').textContent).toEqual('AlertRibbon')
  })
  it('renders heading', () => {
    render(
      <AlertRibbon header={<Header />}>
        AlertRibbon
      </AlertRibbon>
    )

    expect(screen.getByRole('heading').textContent).toEqual('Card Headline')
  })

  it('renders heading with h3 styling if just string', () => {
    render(
      <AlertRibbon header={'header'}>
        AlertRibbon
      </AlertRibbon>
    )

    expect(screen.getByText('header').tagName).toEqual('SPAN')
<<<<<<< feature/alert-react
    expect(screen.getByText('header').classList.contains('header')).toEqual(true)
=======
    expect(screen.getByText('header').classList.contains('h3')).toEqual(true)
>>>>>>> main
  })

  it('renders footer', () => {
    render(
      <AlertRibbon footer={<Footer />}>
        AlertRibbon
      </AlertRibbon>
    )

    expect(screen.getByText('Default Button')).toBeTruthy()
  })

  it('should not render close button', () => {
    render(
      <AlertRibbon isCloseable={false} role="alert" header={<Header />}>
        AlertRibbon
      </AlertRibbon>
    )

    expect(screen.getByRole('alert')).not.toContain(<button />)
  })
<<<<<<< feature/alert-react

  it('should show the passed aria-label for close button', () => {
    render(
      <AlertRibbon isCloseable={true} closeAriaLabel={'Close message'}>
        AlertRibbon
      </AlertRibbon>
    )

    expect(screen.getByLabelText("Close message").tagName).toEqual('BUTTON')
    expect(screen.getByLabelText("Close message").classList.contains('close')).toEqual(true)
  })
=======
>>>>>>> main
})
