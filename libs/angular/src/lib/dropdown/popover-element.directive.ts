import {
  ChangeDetectorRef,
  ContentChildren,
  Directive,
  ElementRef,
  forwardRef,
  HostBinding,
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

@Directive({
  selector: '[nggPopoverElement]',
})
export class NggPopoverElementDirective implements OnInit, OnDestroy {
  _popper?: Instance
  _container?: ElementRef | null
  $unsubscribe = new Subject()
  @ContentChildren(NggPopoverOptionDirective) options:
    | QueryList<NggPopoverOptionDirective>
    | undefined

  @HostBinding('class.popover') class = true
  @HostBinding('attr.role') role = 'listbox'
  @HostBinding('attr.id') id = null
  @HostBinding('class.d-block') show = this.popover.state.$isOpen.value
  @HostBinding('attr.aria-activedescendant') activeDescendant: string | null =
    null

  handleClickEvent(event: Event) {
    // if click inside popover element...
    if (this._elRef.nativeElement.contains(event.target)) {
      this.popover.state.$isOpen.next(false)
    } else if (this.popover.state.$isOpen.value) {
      // else if click outside popover element...
      this.popover.state.$isOpen.next(false)
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
            // if popover is configured to use a container...
            if (this.popover.config.container !== '') {
              // ...add container
              this.addContainer()
            }
            // if popover is configured to use popper.js...
            if (this.popover.config.usePopper) {
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
            }
          } else {
            this.removeContainer()
            this._popper?.destroy()
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
    // update focused option
    this.popover.state.$focusedElement
      .pipe(
        tap((elmentId) => (this.activeDescendant = elmentId)),
        takeUntil(this.$unsubscribe)
      )
      .subscribe()
  }

  ngOnDestroy() {
    // destroy popper if declared
    if (this._popper) {
      this._popper?.destroy()
    }

    // remove container if declared
    if (this._container) {
      this.removeContainer()
    }
    this.$unsubscribe.next()
    this.$unsubscribe.complete()
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
