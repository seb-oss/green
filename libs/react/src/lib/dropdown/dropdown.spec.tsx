import { render, act } from '@testing-library/react'
import { Dropdown, DropdownProps } from './dropdown'
describe('Dropdown', () => {
  let props: DropdownProps
  beforeEach(() => {
    props = {
      options: [
        {key: 'A', value: 1},
        {key: 'B', value: 2},
      ]
    }
  })
  it('renders', () => {
    const { baseElement } = render(<Dropdown {...props} />)

    expect(baseElement).toBeTruthy()
  })
  it('renders options', async () => {
    const { findAllByRole } = render(<Dropdown {...props} />)
    const options = await findAllByRole('option')

    expect(options).toHaveLength(2)
  })
})
