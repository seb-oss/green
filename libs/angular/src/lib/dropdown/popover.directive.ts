import {
  ChangeDetectorRef,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
} from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { BehaviorSubject, EMPTY, fromEvent, merge, Subject } from 'rxjs'
import { filter, skip, switchMap, takeUntil, tap } from 'rxjs/operators'
import { createPopper } from '@popperjs/core'
import { Instance } from '@popperjs/core/lib/types'

@Directive({
  selector: '[nggPopoverTrigger]',
})
export class GreenPopoverTriggerDirective implements OnInit, OnDestroy {
  $unsubscribe = new Subject()
  get options(): Array<any> {
    return this._options
  }

  @Input() set options(value: Array<any>) {
    this._options = value.map((option, index) => ({
      ...option,
      id: `${this._elRef?.nativeElement.id || ''}_dropdownOption_${index}`,
    }))
  }
  get control(): AbstractControl | undefined {
    return this._control
  }

  @Input() set control(value: AbstractControl | undefined) {
    this._control = value
  }

  @HostBinding('class') class = 'dropdown-toggle'
  @HostBinding('attr.aria-haspopup') haspopup = 'listbox'
  @HostBinding('attr.aria-owns') owns: string | null = null
  @HostBinding('attr.aria-expanded') expanded = this.popover.state.$isOpen.value
  private _control?: AbstractControl
  private _options: Array<any> = []

  @HostListener('keydown.arrowdown', ['$event'])
  @HostListener('click', ['$event'])
  toggle = (event: Event | KeyboardEvent) => {
    if ('key' in event && event.key === 'ArrowDown') {
      // open popover on arrow down by not stopping event propagation
      if (this.popover.state.$isOpen.value) {
        return
      } else {
        // prevent container from scrolling
        event.preventDefault()
      }
    }
    event.stopPropagation()
    this.popover.toggle()
  }
  constructor(
    @Inject(forwardRef(() => GreenPopoverDirective))
    public popover: GreenPopoverDirective,
    private _elRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // if trigger element does not have an id...
    if (!this._elRef.nativeElement.id) {
      // ...add a unique id
      this._elRef.nativeElement.id = `ngg_dropdownTrigger_${new Date().getTime()}`
      this.owns = this._elRef.nativeElement.id.replace(
        /dropdownTrigger/,
        'popover'
      )
    } else {
      this.owns = this._elRef.nativeElement.id + '_popover'
    }

    this.options = this.options.map((option, index) => ({
      ...option,
      id: `${this._elRef?.nativeElement.id}_dropdownOption_${index}`,
    }))
    this.popover.control = this.control
    this.popover.triggerElement = this._elRef
    if (this.control?.value) {
      this.popover.state.$selected?.next(
        this.options
          .filter((option) => option.value === this.control?.value)
          .map((option) => option.id)
      )
    }

    this.control?.valueChanges
      .pipe(
        tap((value) => {
          this.popover.state.$selected?.next(
            this.options
              .filter((option) => option.value === value)
              .map((option) => option.id)
          )
        }),
        takeUntil(this.$unsubscribe)
      )
      .subscribe()
    this.popover.state.$isOpen
      .pipe(
        tap((isOpen) => (this.expanded = isOpen)),
        takeUntil(this.$unsubscribe)
      )
      .subscribe()
  }

  ngOnDestroy() {
    this.$unsubscribe.next()
    this.$unsubscribe.complete()
  }
}

@Directive({
  selector: '[nggPopoverOption]',
})
export class GreenPopoverOptionDirective implements OnInit, OnDestroy {
  $unsubscribe = new Subject()

  @Input() nggPopoverOption: any
  @Input() index: number | undefined
  @HostBinding('attr.role') role = 'option'
  @HostBinding('attr.aria-selected') selected: null | boolean = null
  @HostBinding('attr.id') id = ''
  @HostListener('click') clickHandler = (event: Event) => {
    this.select(event)
  }

  select = (event: Event) => {
    this.popover.control?.setValue(this.nggPopoverOption)
    this.popover.state.$focusedElement?.next(this.id)
  }
  constructor(
    @Inject(forwardRef(() => GreenPopoverDirective))
    public popover: GreenPopoverDirective,
    private cdr: ChangeDetectorRef,
    public elRef: ElementRef
  ) {}

  ngOnInit() {
    this.id = `${this.popover.triggerElement?.nativeElement.id}_dropdownOption_${this.index}`
    this.popover.state.$selected
      .pipe(
        tap(
          (selection) =>
            (this.selected =
              !!selection.find((option) => option === this.id) || null)
        ),
        takeUntil(this.$unsubscribe)
      )
      .subscribe()
  }

  ngOnDestroy() {
    this.$unsubscribe.next()
    this.$unsubscribe.complete()
  }
}

@Directive({
  selector: '[nggPopover]',
})
export class GreenPopoverDirective {
  get config(): { usePopper?: boolean; container?: '' | 'body' } {
    return this._config
  }

  @Input() set config(config: {
    usePopper?: boolean
    container?: '' | 'body'
  }) {
    this._config = { ...this.config, ...config }
  }
  triggerElement?: ElementRef
  private _config: {
    usePopper?: boolean
    container?: '' | 'body'
  } = {
    usePopper: true,
    container: '',
  }
  state: {
    $isOpen: BehaviorSubject<boolean>
    $selected: BehaviorSubject<Array<string>>
    $focusedElement: BehaviorSubject<string | null>
  } = {
    $isOpen: new BehaviorSubject<boolean>(false),
    $selected: new BehaviorSubject<Array<string>>([]),
    $focusedElement: new BehaviorSubject<string | null>(null),
  }
  //options: Array<{ id: string; value: any }> = []
  control: AbstractControl | undefined
  @ContentChild(GreenPopoverTriggerDirective, { static: false })
  private _trigger: GreenPopoverTriggerDirective | undefined
  close() {
    // unselect focused element on close
    this.state.$focusedElement.next(null)
    this.state.$isOpen.next(false)
  }
  open() {
    if (this.state.$selected.value) {
      this.state.$focusedElement.next(this.state.$selected.value[0])
    }
    this.state.$isOpen.next(true)
  }
  toggle() {
    // unselect focused element on close
    if (this.state.$isOpen.value) {
      this.state.$focusedElement.next(null)
    } else if (this.state.$selected.value) {
      this.state.$focusedElement.next(this.state.$selected.value[0])
    }
    this.state.$isOpen.next(!this.state.$isOpen.value)
  }
}

@Directive({
  selector: '[nggPopoverElement]',
})
export class GreenPopoverElementDirective implements OnInit, OnDestroy {
  _popper?: Instance
  _container?: ElementRef | null
  $unsubscribe = new Subject()
  @ContentChildren(GreenPopoverOptionDirective) options:
    | QueryList<GreenPopoverOptionDirective>
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
    @Inject(forwardRef(() => GreenPopoverDirective))
    public popover: GreenPopoverDirective,
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
