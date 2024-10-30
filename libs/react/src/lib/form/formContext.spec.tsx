import { fireEvent, render, screen } from '@testing-library/react'

import { FormItems, TextInput } from '.'
import { FormProvider } from './formContext'

const MockComponent = () => {
  return (
    <div>
      <FormItems
        name="text"
        validate={{
          message: 'fill in',
          indicator: 'error',
          rules: { type: 'Required' },
        }}
      >
        <TextInput label="Text input" />
      </FormItems>
      <button type="submit">submit</button>
      <button type="reset">reset</button>
    </div>
  )
}

describe('FormContext', () => {
  it('Should render', () => {
    render(
      <FormProvider>
        <MockComponent />
      </FormProvider>,
    )
    expect(screen.getByText('Text input')).not.toBeNull()
  })

  it('Should call validateInput and setError when click submit', () => {
    render(
      <FormProvider>
        <MockComponent />
      </FormProvider>,
    )
    expect(screen.queryByText('fill in')).toBeNull()
    fireEvent.click(screen.getByText('submit'))
    expect(screen.queryByText('fill in')).not.toBeNull()
  })

  it('Should remove error after text onchange', () => {
    const { container } = render(
      <FormProvider>
        <MockComponent />
      </FormProvider>,
    )
    fireEvent.click(screen.getByText('submit'))
    expect(screen.queryByText('fill in')).not.toBeNull()
    fireEvent.change(container.querySelector('input') as HTMLInputElement, {
      target: { value: 'i am value' },
    })
    expect(screen.queryByText('fill in')).toBeNull()
  })

  it('Should reset form', () => {
    render(
      <FormProvider>
        <MockComponent />
      </FormProvider>,
    )
    fireEvent.click(screen.getByText('submit'))
    expect(screen.queryByText('fill in')).not.toBeNull()
    fireEvent.click(screen.getByText('reset'))
    expect(screen.queryByText('fill in')).toBeNull()
  })
})
