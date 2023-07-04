import { Component } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { fireEvent } from '@testing-library/angular'
import { Subject } from 'rxjs'
import { NggScopedElementDirective } from './scoped-element.directive'

@Component({
  template: '<div *gdsScopedElement></div>',
})
class TestComponent {}

describe('NggScopedElementDirective', () => {
  let component: NggScopedElementDirective
  let parent: HTMLElement

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NggScopedElementDirective],
    })
    const fixture = TestBed.createComponent(TestComponent)
    parent = fixture.debugElement.nativeElement
    fixture.detectChanges()
    component = fixture.debugElement
      .query(By.directive(NggScopedElementDirective))
      .injector.get(NggScopedElementDirective)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should add scoping to element name', () => {
    const spy = jest.fn()

    fireEvent.scroll(parent)

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
