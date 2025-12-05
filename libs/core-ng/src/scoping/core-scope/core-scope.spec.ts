import { Component } from '@angular/core'
import { TestBed } from '@angular/core/testing'

import { SCOPE_RESOLVER } from '../scope-resolver'
import { GdsCoreScopeDirective } from './core-scope.directive'

@Component({
    template: '<div *gdsCoreScope><p></p></div>',
    standalone: false
})
class TestComponent {}

jest.mock('@sebgroup/green-core/scoping', () => ({
  getScopedTagName: jest.fn((name) => name + '-scoped'),
}))

describe('GdsCoreScopeDirective', () => {
  let component: TestComponent
  let parent: HTMLElement

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, GdsCoreScopeDirective],
    })
    const fixture = TestBed.createComponent(TestComponent)
    parent = fixture.debugElement.nativeElement
    fixture.detectChanges()
  })

  it('should create an element with the scoped tag name', () => {
    expect(parent.querySelector('div-scoped')).toBeTruthy()
  })

  it('should create a child element with the scoped tag name', () => {
    expect(parent.querySelector('p-scoped')).toBeTruthy()
  })
})

describe('GdsCoreScopeDirective with scope resolver', () => {
  let component: TestComponent
  let parent: HTMLElement

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, GdsCoreScopeDirective],
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
