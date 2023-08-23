import { DropdownArgs } from '@sebgroup/extract'
import { render, RenderResult } from '@testing-library/angular'
import { NggDropdownComponent } from './dropdown.component'

describe('Dropdown', () => {
  let component: RenderResult<NggDropdownComponent>
  let props: DropdownArgs
  beforeEach(async () => {
    props = {
      options: [
        { label: 'A', value: 1 },
        { label: 'B', value: 2 },
        { label: 'C', value: 3 },
      ],
    }
    component = await render(NggDropdownComponent, {
      componentProperties: { ...props },
    })
  })
  it('renders', () => {
    expect(component.fixture.componentInstance).toBeTruthy()
  })
})
