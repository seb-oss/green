import { isMobileViewport$ } from '../common/viewport-size'
import { filter, take, takeUntil, tap } from 'rxjs/operators'
import {
  addSwipeEvents,
  resetScroll,
  scrollElementIntoView,
} from '../common/helper-functions'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { fromEvent, merge, of } from 'rxjs'
import { createPopper } from '@popperjs/core'
import { Datepicker } from '../datepicker'

const _mobileViewHandler = (
  dp: Datepicker,
  datepickerElRef: HTMLElement,
  datepickerDialogElRef: HTMLElement
) =>
  isMobileViewport$.pipe(
    tap((isMobileViewport) => {
      // if viewport size is mobile...
      if (isMobileViewport) {
        //  ...and popper instance exists...
        if (dp._popper) {
          // ...remove popper
          dp._popper.destroy()
          dp._popper = undefined
        }

        // ...if mobile viewport
        addSwipeEvents()
        scrollElementIntoView(datepickerElRef)
        disableBodyScroll(datepickerDialogElRef)

        // listen to swipe down event TODO: check if device has touch capabilities
        fromEvent(document, 'swiped-down')
          .pipe(
            take(1),
            takeUntil(dp.active$.pipe(filter((active) => !active)))
          )
          .subscribe(() => {
            dp.close()
          })
      }
      // ...else if desktop and no existing popper instance...
      else if (!isMobileViewport) {
        if (!dp._popper) {
          // ...create popper instance (attach calendar to trigger element)
          dp._popper = createPopper(datepickerElRef, datepickerDialogElRef, {
            placement: 'bottom-start',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 4],
                },
              },
              {
                name: 'computeStyles',
                options: {
                  gpuAcceleration: false, // true by default
                },
              },
            ],
          })
        }
        // ...if not mobile viewport i.e. if desktop
        enableBodyScroll(datepickerDialogElRef)
      }
    })
  )

const _keyEventHandler = (dp: Datepicker) =>
  fromEvent<KeyboardEvent>(document, 'keydown').pipe(
    tap((keyboardEvent) => {
      // TODO: handle shift + page up/down
      switch (keyboardEvent?.key) {
        case 'Escape':
          dp.close()
          break
        case 'ArrowRight':
          dp.add(1, 'days', true)
          break
        case 'ArrowLeft':
          dp.sub(1, 'days', true)
          break
        case 'ArrowUp':
          dp.sub(1, 'weeks', true)
          keyboardEvent.preventDefault()
          break
        case 'ArrowDown':
          dp.add(1, 'weeks', true)
          keyboardEvent.preventDefault()
          break
        case 'PageUp':
          dp.sub(4, 'weeks', true)
          break
        case 'PageDown':
          dp.add(4, 'weeks', true)
          break
        case 'Home':
          // TODO: go to first day of week
          break
        case 'End':
          // TODO: go to last day of week
          break
        case ' ':
        case 'Enter':
          // eslint-disable-next-line no-case-declarations
          const targetTagName = (keyboardEvent.target as HTMLElement).tagName
          if (targetTagName === 'BODY' || targetTagName === 'TD') {
            dp.close(true)
            keyboardEvent.preventDefault()
          }
          break
      }
    })
  )

/** onActiveHandler - Handler for when datepicker becomes active
 * Unsubscribes when datepicker becomes inactive
 * @param dp - Datepicker instance
 * @param datepickerElRef - HTML element for datepicker
 * @param datepickerDialogElRef - HTML dialog containing calendar
 */
export const onActiveHandler = (
  dp: Datepicker,
  datepickerElRef: HTMLElement,
  datepickerDialogElRef: HTMLElement
) =>
  merge(
    _mobileViewHandler(dp, datepickerElRef, datepickerDialogElRef),
    _keyEventHandler(dp)
  ).pipe(takeUntil(dp.active$.pipe(filter((active) => !active))))

/** onInactiveHandler - Handler for when datepicker becomes inactive
 * Unsubscribes directly using take(1)
 * @param dp - Datepicker instance
 * @param datepickerDialogElRef - HTML dialog containing calendar
 */
export const onInactiveHandler = (
  dp: Datepicker,
  datepickerDialogElRef: HTMLElement
) =>
  of(dp).pipe(
    tap(() => {
      resetScroll()
      enableBodyScroll(datepickerDialogElRef)
    }),
    take(1)
  )
