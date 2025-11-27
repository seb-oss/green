import {
  AfterViewInit,
  Directive,
  ElementRef,
  InjectionToken,
  OnDestroy,
} from '@angular/core'
import { fromEvent, interval, Subject } from 'rxjs'
import { takeUntil, throttle } from 'rxjs/operators'

export const ON_SCROLL_TOKEN = new InjectionToken<string>('ON_SCROLL_TOKEN')

@Directive({
    selector: '[nggOnScroll]',
    providers: [
        {
            provide: ON_SCROLL_TOKEN,
            useFactory: (component: NggOnScrollDirective): Subject<unknown> => component?.onScroll$,
            deps: [NggOnScrollDirective],
        },
    ],
    standalone: false
})
export class NggOnScrollDirective implements AfterViewInit, OnDestroy {
  onScroll$ = new Subject()
  destroy$ = new Subject()

  constructor(private elementRef: ElementRef) {}

  public ngAfterViewInit(): void {
    if (this.elementRef) {
      fromEvent(this.elementRef?.nativeElement, 'scroll')
        .pipe(
          takeUntil(this.destroy$),
          throttle(() => interval(30)),
        )
        .subscribe(() => {
          this.onScroll$.next(null) // Changes: added null due to TS error
        })
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null)
    this.destroy$.complete()
  }
}
