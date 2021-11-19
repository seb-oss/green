import {
  ChangeDetectorRef,
  ContentChildren,
  Directive,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
} from '@angular/core'
import { filter, skip, switchMap, takeUntil, tap } from 'rxjs/operators'
import { Instance } from '@popperjs/core/lib/types'
import { EMPTY, fromEvent, merge, Subject } from 'rxjs'
import { NggPopoverOptionDirective } from './popover-option.directive'
import { NggPopoverDirective } from './popover.directive'
import { createPopper } from '@popperjs/core'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

@Directive({
  selector: '[nggPopoverElement]',
})
export class NggPopoverElementDirective implements OnInit, OnDestroy {
  _popper?: Instance | null
  _container?: ElementRef | null
  $unsubscribe = new Subject()
  sm = window.innerWidth <= 576
  @ContentChildren(NggPopoverOptionDirective, { descendants: true }) options:
    | QueryList<NggPopoverOptionDirective>
    | undefined

  @HostBinding('class.popover') class = true
  @HostBinding('attr.role') role = 'listbox'
  @HostBinding('attr.id') id = null
  @HostBinding('class.active') show = this.popover.state.$isOpen.value
  @HostBinding('attr.aria-activedescendant') activeDescendant: string | null =
    null
  // TODO: refactor and move to general size/device service
  @HostListener('window:resize', ['$event']) onResize(event: UIEvent) {
    // determine if small screen size i.e less than or equal to 576 pixels which is the breakpoint for small screens
    this.sm = (event.target as Window).innerWidth <= 576
    if (this.sm) {
      // remove popper
      this.removePopper()
    } else if (!this._popper) {
      // add popper
      this.addPopper()
    }
  }

  handleClickEvent(event: Event) {
    // if click inside popover element...
    if (this._elRef.nativeElement.contains(event.target)) {
      this.popover.close()
    } else if (this.popover.state.$isOpen.value) {
      // else if click outside popover element...
      this.popover.close()
    }
  }
  handleKeydownEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.popover.close()
      return
    }
    let next = 0 // Used for home key
    const currentSelection =
      this.options?.find((option) => !!option.selected)?.index || 0
    if (event.key === 'End') {
      // set next to last option
      next = (this.options?.length || 1) - 1
    } else if (event.key === 'ArrowUp') {
      // next can't be less than zero
      next = Math.max(0, currentSelection - 1)

      // prevent container from scrolling
      event.preventDefault()
    } else if (event.key === 'ArrowDown') {
      // next can't be greater than number of options
      next = Math.min((this.options?.length || 1) - 1, currentSelection + 1)

      // prevent container from scrolling
      event.preventDefault()
    }
    // select next option
    this.options?.get(next)?.select(event)
  }

  constructor(
    @Inject(forwardRef(() => NggPopoverDirective))
    public popover: NggPopoverDirective,
    private _elRef: ElementRef,
    private _renderer: Renderer2,
    private _cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.id = /^ngg_dropdownTrigger/.test(
      this.popover.triggerElement?.nativeElement.id
    )
      ? this.popover.triggerElement?.nativeElement.id.replace(
          /dropdownTrigger/,
          'popover'
        )
      : this.popover.triggerElement?.nativeElement.id + '_popover'
    this.popover.state.$isOpen
      .pipe(
        skip(1), // skip initial value
        tap((isOpen) => {
          this.show = isOpen // toggle visibility

          if (isOpen) {
            this.activeDescendant =
              this.options?.find((option) => !!option.selected)?.id || null

            // if use body scroll lock
            if (this.popover.config.useBodyScrollLock) {
              this.disableBodyScrollLock()
            }
            // if popover is configured to use a container...
            if (this.popover.config.container !== '') {
              // ...add container
              this.addContainer()
            }
            // if popover is configured to use popper.js...
            if (this.popover.config.usePopper) {
              this.addPopper()
            }
          } else {
            this.activeDescendant = null
            if (this.popover.config.useBodyScrollLock) {
              this.enableBodyScrollLock()
            }
            this.removeContainer()
            this.removePopper()
          }
        }),
        switchMap((isOpen) =>
          isOpen
            ? merge(
                // listen to click events
                fromEvent(document, 'click').pipe(
                  tap((event) => this.handleClickEvent(event))
                ),
                // listen to keydown events
                fromEvent(document, 'keydown').pipe(
                  // filter keys
                  filter(
                    (event) =>
                      ['ArrowDown', 'ArrowUp', 'Escape', 'Home', 'End'].indexOf(
                        (event as KeyboardEvent).key
                      ) !== -1
                  ),
                  tap((event) =>
                    this.handleKeydownEvent(event as KeyboardEvent)
                  )
                )
              )
            : EMPTY
        ),
        takeUntil(this.$unsubscribe)
      )
      .subscribe()
  }

  ngOnDestroy() {
    this.removePopper()
    this.disableBodyScrollLock()

    // remove container if declared
    if (this._container) {
      this.removeContainer()
    }
    this.$unsubscribe.next()
    this.$unsubscribe.complete()
  }

  enableBodyScrollLock() {
    enableBodyScroll(this._elRef.nativeElement)
  }

  disableBodyScrollLock() {
    disableBodyScroll(this._elRef.nativeElement)
  }

  addPopper() {
    if (this.sm) {
      return
    }
    if (!this._popper) {
      // ...create popper instance for anchoring popover with trigger element
      this._popper = createPopper(
        this.popover.triggerElement?.nativeElement,
        this._elRef.nativeElement,
        {
          placement: 'bottom-start',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 4],
              },
            },
          ],
        }
      )
      // detect changes once element and popper is initiated to update initial position
      this._cdr.detectChanges()
    } else {
      this._popper.state.elements.reference =
        this.popover.triggerElement?.nativeElement
      this._popper.update().then((_) => this._cdr.detectChanges())
    }
  }
  removePopper() {
    // destroy popper if declared
    if (this._popper) {
      this._popper?.destroy()
      this._popper = null
    }
  }
  addContainer() {
    // create global container for popover if not already present
    if (!this._container) {
      this._container = this._renderer.createElement('div')
    }
    this._renderer.appendChild(this._container, this._elRef.nativeElement)
    this._renderer.appendChild(document.body, this._container)
  }

  removeContainer() {
    if (this._container) {
      // remove container from DOM tree
      this._renderer.removeChild(document.body, this._container)

      // clear container
      this._container = null
    }
  }
}
