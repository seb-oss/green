import type { LitElement } from 'lit'

import { isServer } from '../helpers/platform'

type Handler = (matches: boolean) => void

/**
 * Media queries expressing standard breakpoints.
 * TODO: These should probably be imported from somehere, so that they are always in sync with CSS.
 */
export const standardBreakpoints = {
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
}

/**
 * Runs when the match state of the specified media query changes.
 *
 * @param q The media query to watch.
 *
 * Usage:
 * ```javascript
 * \@watchMediaQuery('(max-width: 576px)')
 * handleMobileLayout(matches) {
 *  if (matches) {
 *   // Do something when the media query matches
 *  } else
 *   // Do something when the media query no longer matches
 *  }
 * }
 * ```
 */
export function watchMediaQuery(q: string) {
  return <ElemClass extends LitElement>(
    proto: ElemClass,
    _propertyKey: string,
    descriptor: TypedPropertyDescriptor<Handler>,
  ) => {
    if (isServer) return
    const mediaQuery = window.matchMedia(q)

    const connectedCallback = proto.connectedCallback
    const disconnectedCallback = proto.disconnectedCallback

    proto.connectedCallback = function (this: ElemClass) {
      connectedCallback?.call(this)

      const listener = (e: MediaQueryListEvent) => {
        descriptor.value?.call(this, e.matches)
      }

      mediaQuery.addEventListener('change', listener)

      this.disconnectedCallback = function (this: ElemClass) {
        disconnectedCallback?.call(this)
        mediaQuery.removeEventListener('change', listener)
      }

      descriptor.value?.call(this, mediaQuery.matches)
    }
  }
}
