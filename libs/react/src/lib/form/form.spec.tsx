import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Button } from '.'
import Form from './form'

describe('Form', () => {
  it('renders', () => {
    render(<Form>Hello</Form>)
    expect(screen.getByText('Hello')).toBeVisible()
  })

  it('Should render correct form directiom', () => {
    const { container } = render(<Form direction="horizontal">i am form</Form>)
    expect(
      container.querySelector('form')?.className.includes('horizontal')
    ).toBe(true)
  })

  it('Should render larger form size', () => {
    const { container } = render(<Form formSize="lg">i am form</Form>)
    expect(container.querySelector('form')?.className.includes('lg')).toBe(true)
  })

  it('Should pass extended props to forms', () => {
    const mockFunction: jest.Mock = jest
      .fn()
      .mockImplementation((event: React.ChangeEvent<HTMLFormElement>) =>
        event.preventDefault()
      )
    const { container } = render(
      <Form onSubmit={mockFunction} autoComplete="on">
        <Button type="submit">I am submit</Button>
      </Form>
    )
    fireEvent.click(screen.getByText('I am submit'))
    expect(
      container
        .querySelector<HTMLFormElement>('form')
        ?.getAttribute('autoComplete')
    ).toBe('on')
    expect(mockFunction).toBeCalled()
  })
})
