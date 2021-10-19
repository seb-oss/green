import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core'
import { Subject } from 'rxjs'
import { takeUntil, tap } from 'rxjs/operators'
import { AbstractControl } from '@angular/forms'
import { NggPopoverDirective } from './popover.directive'

@Directive({
  selector: '[nggPopoverTrigger]',
})
export class NggPopoverTriggerDirective implements OnInit, OnDestroy {
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
    @Inject(forwardRef(() => NggPopoverDirective))
    public popover: NggPopoverDirective,
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
