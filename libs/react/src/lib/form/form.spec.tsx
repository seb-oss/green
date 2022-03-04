import { fireEvent, render, screen } from '@testing-library/react'
import { FormItems, TextInput } from '.'
import Form from './form'

type MockComponentProps = {
  mockOnSubmit?: (values: any) => void
}

const MockComponent = ({ mockOnSubmit }: MockComponentProps) => (
  <Form onFormSubmit={mockOnSubmit}>
    <FormItems
      name="text"
      validate={{
        message: 'fill in blank',
        indicator: 'error',
        rules: { type: 'Required' },
      }}
    >
      <TextInput label="Text field" />
    </FormItems>
    <button type="submit">submit</button>
    <button type="reset">reset</button>
  </Form>
)

describe('Form component', () => {
  it('Should renders', () => {
    render(<MockComponent />)
    expect(screen.getByText('Text field')).toBeVisible()
  })

  it('Should render correct form direction', () => {
    const { container } = render(<Form direction="horizontal">i am form</Form>)
    expect(container.querySelector('form')?.className.includes('horizontal')).toBe(true)
  })

  it('Should render larger form size', () => {
    const { container } = render(<Form formSize="lg">i am form</Form>)
    expect(container.querySelector('form')?.className.includes('lg')).toBe(true)
  })

  it('Should show error message when input value is empty', () => {
    const { container } = render(<MockComponent />)
    expect(screen.queryByText('fill in blank')).toBeNull()
    fireEvent.change(container.querySelector('input') as HTMLInputElement, { target: { value: 'value' } })
    fireEvent.change(container.querySelector('input') as HTMLInputElement, { target: { value: '' } })
    expect(screen.queryByText('fill in blank')).toBeVisible()
  })

  it('Should validate when form is submitted', () => {
    render(<MockComponent />)
    expect(screen.queryByText('fill in blank')).toBeNull()
    fireEvent.click(screen.getByText('submit'))
    expect(screen.queryByText('fill in blank')).toBeVisible()
  })

  it('Should reset forms input value', () => {
    const { container } = render(<MockComponent />)
    fireEvent.change(container.querySelector('input') as HTMLInputElement, { target: { value: 'value' } })
    expect(container.querySelector('input')?.value).toBe('value')
    fireEvent.click(screen.getByText('reset'))
    expect(container.querySelector('input')?.value).toBe('')
  })

  it('Should reset forms input error', () => {
    render(<MockComponent />)
    expect(screen.queryByText('fill in blank')).toBeNull()
    fireEvent.click(screen.getByText('submit'))
    expect(screen.queryByText('fill in blank')).not.toBeNull()
    fireEvent.click(screen.getByText('reset'))
    expect(screen.queryByText('fill in blank')).toBeNull()
  })

  it('Should call onSubmitForm fn', () => {
    const mockFn: jest.Mock = jest.fn().mockImplementation((value: any) => value)
    const { container } = render(<MockComponent mockOnSubmit={mockFn} />)
    fireEvent.change(container.querySelector('input') as HTMLInputElement, { target: { value: 'value' } })
    fireEvent.click(screen.getByText('submit'))
    expect(mockFn).toBeCalled()
    expect(mockFn).toBeCalledWith({ text: 'value' })
  })

  it('Should call not onSubmitForm fn when input empty', () => {
    const mockFn: jest.Mock = jest.fn().mockImplementation((value: any) => value)
    render(<MockComponent mockOnSubmit={mockFn} />)
    fireEvent.click(screen.getByText('submit'))
    expect(mockFn).not.toBeCalled()
  })
})
