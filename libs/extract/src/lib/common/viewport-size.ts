import { fromEvent, Observable } from 'rxjs'
import {
  distinctUntilChanged,
  map,
  shareReplay,
  startWith,
} from 'rxjs/operators'

export type ViewportSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

/** viewportSize$ - Observable for viewport size
 *  @returns Observable<ViewportSize> - viewport size based on breakpoints eg.
 *  xs: 0,
 *  sm: 576px,
 *  md: 768px,
 *  lg: 992px,
 *  xl: 1200px,
 *  xxl: 1400px
 */
export const viewportSize$ =
  typeof window === 'undefined'
    ? // If `window` is undefined (server side render for example),
      // return empty observable, cause there's nothing to observe here.
      new Observable()
    : // Otherwise, continue as normal
      fromEvent<UIEvent>(window, 'resize').pipe(
        map((event) => (event.target as Window).innerWidth),
        startWith(window.innerWidth),
        map((viewportWidth): ViewportSize => {
          if (viewportWidth < 576) {
            return 'xs'
          } else if (viewportWidth < 768) {
            return 'sm'
          } else if (viewportWidth < 992) {
            return 'md'
          } else if (viewportWidth < 1200) {
            return 'lg'
          } else if (viewportWidth < 1400) {
            return 'xl'
          } else {
            return 'xxl'
          }
        }),
        distinctUntilChanged(),
        shareReplay(1),
      )

/** isMobileViewport$ - Observable for mobile viewport based on screen size
 * @returns Observable<boolean>
 */
export const isMobileViewport$ = viewportSize$.pipe(
  map((viewportSize) => viewportSize === 'xs'),
  distinctUntilChanged(),
)
