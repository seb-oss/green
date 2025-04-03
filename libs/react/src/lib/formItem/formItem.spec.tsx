import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { IValidator } from '@sebgroup/extract'
import { FormItem } from './formItem'

const formItemProps = {
  label: 'Number of installments',
  labelInformation: 'How many installments you want to pay of your loan with',
  expandableInfo: 'This is longer information that is expandable',
  validator: {
    message: 'This is an error message',
    indicator: 'error',
  } as IValidator,
  inputId: '12345',
  expandableInfoButtonLabel: 'Button label',
  role: 'radiogroup',
}

describe('FormItem', () => {
  it('should display label', function () {
    render(
      <FormItem {...formItemProps}>
        <input type="text" />
      </FormItem>,
    )
    expect(screen.getByLabelText(formItemProps.label)).toBeInTheDocument()
  })

  it('should display label information', function () {
    render(
      <FormItem {...formItemProps}>
        <input type="text" />
      </FormItem>,
    )
    expect(screen.getByText(formItemProps.labelInformation)).toBeInTheDocument()
  })

  it('should display expandable information button', function () {
    render(
      <FormItem {...formItemProps}>
        <input type="text" />
      </FormItem>,
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(
      screen.getByRole('button').getAttribute('aria-controls'),
    ).toBeTruthy()
    expect(screen.getByRole('button').classList.contains('icon')).toEqual(true)
  })

  it('should display expandable information when expandable info button is pressed', async function () {
    render(
      <FormItem {...formItemProps}>
        <input type="text" />
      </FormItem>,
    )
    expect(screen.queryByText(formItemProps.expandableInfo)).toBeNull()

    await act(async () => {
      await userEvent.click(screen.getByRole('button'))
    })

    expect(await screen.findByText(formItemProps.expandableInfo)).toBeVisible()
  })

  it('should get correct role from prop', function () {
    render(
      <FormItem {...formItemProps}>
        <input type="text" />
      </FormItem>,
    )
    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
  })

  it('should set correct classes when validated', function () {
    const { container } = render(
      <FormItem {...formItemProps}>
        <input type="text" />
      </FormItem>,
    )
    expect(container.querySelectorAll('.is-invalid').length).toEqual(1)
    expect(
      container
        .querySelectorAll('.is-invalid')[0]
        .classList.contains('gds-form-item'),
    ).toEqual(true)
    expect(
      screen.getByText(formItemProps.validator.message),
    ).toBeInTheDocument()
    expect(
      screen
        .getByText(formItemProps.validator.message)
        .classList.contains('form-info'),
    ).toEqual(true)
  })
})
