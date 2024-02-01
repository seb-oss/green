import { act, render, RenderResult, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dropdown, DropdownProps } from './dropdown'

const tick = (t = 0) => new Promise<void>((r) => setTimeout(r, t))
jest.setTimeout(50000)

describe('Dropdown', () => {
  let props: DropdownProps
  let component: RenderResult
  let options: HTMLElement[]
  beforeEach(async () => {
    props = {
      options: [
        { label: 'A', value: 1 },
        { label: 'B', value: 2 },
        { label: 'C', value: 3 },
      ],
    }
    component = render(<Dropdown {...props} />)
    await act(() => tick())
  })
  afterEach(() => component.unmount())
  it('renders', () => {
    expect(component.baseElement).toBeTruthy()
  })
})
