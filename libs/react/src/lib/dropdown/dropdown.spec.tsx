import { render, screen} from '@testing-library/react'
import { Dropdown, DropdownProps } from './dropdown'
describe('Dropdown', () => {
  let props: DropdownProps
  beforeEach(() => {
    props = {}
  })
  it('renders', () => {
    const { baseElement } = render(<Dropdown {...props} />)

    expect(baseElement).toBeTruthy()
  })
})
