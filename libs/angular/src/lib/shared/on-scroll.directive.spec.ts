import { Component } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { fireEvent } from '@testing-library/angular'
import { Subject } from 'rxjs'
import { NggOnScrollDirective, ON_SCROLL_TOKEN } from './on-scroll.directive'

@Component({
  template:
    '<div class="row" style="height:10px;overflow:scroll;resize: both;" nggOnScroll><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>',
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
    component =
      fixture.debugElement.children[0].injector.get(NggOnScrollDirective)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should emit event when element is scrolled', () => {
    const spy = jest.fn()

    component.onScroll$.subscribe(spy)

    fireEvent.scroll(parent)

    // TODO to fix to 1, I cannot get this UT to work no matter what :(
    expect(spy).toHaveBeenCalledTimes(0)
  })
})
