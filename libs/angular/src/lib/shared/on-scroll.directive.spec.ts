import { Component } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { fireEvent } from '@testing-library/angular'
import { Subject } from 'rxjs'

import { NggOnScrollDirective, ON_SCROLL_TOKEN } from './on-scroll.directive'

@Component({
    template: '<div nggOnScroll><</div>',
    standalone: false
})
class TestComponent {}

describe('NggOnScrollDirective', () => {
  let component: NggOnScrollDirective
  let parent: HTMLElement
  const onScroll$ = new Subject<void>()

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NggOnScrollDirective],
      providers: [
        {
          provide: ON_SCROLL_TOKEN,
          useValue: onScroll$,
        },
      ],
    })
    const fixture = TestBed.createComponent(TestComponent)
    parent = fixture.debugElement.nativeElement
    fixture.detectChanges()
    component = fixture.debugElement
      .query(By.directive(NggOnScrollDirective))
      .injector.get(NggOnScrollDirective)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should emit event when element is scrolled', () => {
    const spy = jest.fn()

    component.onScroll$.subscribe(spy())

    fireEvent.scroll(parent)

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
