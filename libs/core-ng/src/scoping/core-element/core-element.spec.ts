import { Component } from '@angular/core'
import { TestBed } from '@angular/core/testing'

import { SCOPE_RESOLVER } from '../scope-resolver'
import { GdsCoreElementDirective } from './core-element.directive'

@Component({
    template: '<div *gdsCoreElement></div>',
    standalone: false
})
class TestComponent {}

jest.mock('@sebgroup/green-core/scoping', () => ({
  getScopedTagName: jest.fn((name) => name + '-scoped'),
}))

describe('NggCoreElementDirective', () => {
  let component: TestComponent
  let parent: HTMLElement

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, GdsCoreElementDirective],
    })
    const fixture = TestBed.createComponent(TestComponent)
    parent = fixture.debugElement.nativeElement
    fixture.detectChanges()
  })

  it('should create an element with the scoped tag name', () => {
    expect(parent.querySelector('div-scoped')).toBeTruthy()
  })
})

describe('NggCoreElementDirective with scope resolver', () => {
  let component: TestComponent
  let parent: HTMLElement

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, GdsCoreElementDirective],
      providers: [
        {
          provide: SCOPE_RESOLVER,
          useValue: { getScopedTagName: (t: string) => 'div-scoped' },
        },
      ],
    })
    const fixture = TestBed.createComponent(TestComponent)
    parent = fixture.debugElement.nativeElement
    fixture.detectChanges()
  })

  it('should create an element with the scoped tag name', () => {
    expect(parent.querySelector('div-scoped')).toBeTruthy()
  })
})
