import { Component } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { NggScopedElementDirective } from './scoped-element.directive'

@Component({
  template: '<div *gdsScopedElement></div>',
})
class TestComponent {}

jest.mock('@sebgroup/green-core', () => ({
  getScopedTagName: jest.fn((name) => name + '-scoped'),
}))

describe('NggScopedElementDirective', () => {
  let component: TestComponent
  let parent: HTMLElement

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NggScopedElementDirective],
    })
    const fixture = TestBed.createComponent(TestComponent)
    parent = fixture.debugElement.nativeElement
    fixture.detectChanges()
  })

  it('should create an element with the scoped tag name', () => {
    expect(parent.querySelector('div-scoped')).toBeTruthy()
  })
})
