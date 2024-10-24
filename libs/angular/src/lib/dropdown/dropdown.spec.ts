import { fakeAsync } from '@angular/core/testing'
import { render, RenderResult } from '@testing-library/angular'

import { NggDropdownComponent } from './dropdown.component'

describe('Dropdown', () => {
  let component: RenderResult<NggDropdownComponent>
  let props: Partial<NggDropdownComponent>
  beforeEach(async () => {
    props = {
      options: [
        { label: 'A', value: 1 },
        { label: 'B', value: 2, selected: true },
        { label: 'C', value: 3 },
      ],
    }
    component = await render(NggDropdownComponent, {
      componentProperties: { ...props },
    })

    component.fixture.detectChanges()
  })
  it('renders', () => {
    expect(component.fixture.componentInstance).toBeTruthy()
  })

  it('returns correct display value', fakeAsync(() => {
    expect(
      (component.fixture.componentInstance as any).displayTextByValue(2),
    ).toBe('B')
  }))

  it('returns correct option by value', () => {
    expect(
      (component.fixture.componentInstance as any).optionByValue(3),
    ).toEqual({ label: 'C', value: 3 })
  })

  it('uses correct default slected value', async () => {
    expect(component.fixture.componentInstance.value).toEqual(2)
  })

  it('return correct selected option', () => {
    expect((component.fixture.componentInstance as any).selectedOption).toEqual(
      { label: 'B', value: 2, selected: true },
    )
  })
})
