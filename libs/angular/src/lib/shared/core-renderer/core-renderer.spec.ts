import { Component, RendererFactory2 } from '@angular/core'
import { TestBed } from '@angular/core/testing'

import { NggCoreRendererFactory } from './core-renderer'

@Component({
  template: '<gds-button></gds-button>',
})
class TestComponent {}

jest.mock('@sebgroup/green-core/scoping', () => ({
  getScopedTagName: jest.fn((name) => name + '-scoped'),
}))

describe('NggCoreRenderer', () => {
  let component: TestComponent
  let parent: HTMLElement

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      providers: [
        {
          provide: RendererFactory2,
          useClass: NggCoreRendererFactory,
        },
      ],
    })
    const fixture = TestBed.createComponent(TestComponent)
    parent = fixture.debugElement.nativeElement
    fixture.detectChanges()
  })

  it('should create an element with the scoped tag name', () => {
    expect(parent.querySelector('gds-button-scoped')).toBeTruthy()
  })
})
