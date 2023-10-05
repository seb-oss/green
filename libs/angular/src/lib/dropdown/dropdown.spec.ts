import { render, RenderResult } from '@testing-library/angular'
import { NggDropdownComponent } from './dropdown.component'

import { getScopedTagName } from '@sebgroup/green-core'

describe('Dropdown', () => {
  let component: RenderResult<NggDropdownComponent>
  let props: Partial<NggDropdownComponent>
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
