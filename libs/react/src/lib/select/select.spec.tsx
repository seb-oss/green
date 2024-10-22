import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Option, OptionGroup, Select } from './select'

describe('Select', () => {
  it('renders ', function () {
    render(
      <Select>
        <Option value={'first-value'}>First value</Option>
        <Option value={'second-value'}>Second value</Option>
      </Select>,
    )
    expect(screen.getByText('First value')).toBeTruthy()
    expect(screen.getByText('Second value')).toBeTruthy()
  })

  it('should render option groups', function () {
    const { container } = render(
      <Select>
        <OptionGroup label="first-group">
          <Option value={'first-value'}>First value</Option>
          <Option value={'second-value'}>Second value</Option>
        </OptionGroup>
        <OptionGroup label="second-group">
          <Option value={'second-first-value'}>Second first value</Option>
          <Option value={'second-second-value'}>Second second value</Option>
        </OptionGroup>
      </Select>,
    )

    expect(container.querySelector('[label="second-group"]')?.tagName).toEqual(
      'OPTGROUP',
    )
  })

  it('should trigger onChange when user changes select option', async function () {
    const onChangeMock = jest.fn()

    const { container } = render(
      <Select
        testId="test-select-id"
        defaultValue={'first-value'}
        onChange={(event) => {
          onChangeMock(event)
        }}
      >
        <Option value={'first-value'}>First value</Option>
        <Option value={'second-value'}>Second value</Option>
      </Select>,
    )

    const select = await screen.findByTestId('test-select-id')

    await userEvent.selectOptions(select, 'second-value')
    await userEvent.selectOptions(select, 'first-value')

    expect(onChangeMock).toBeCalledTimes(2)
  })
})
