import {
  Directive,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core'
import { Subject } from 'rxjs'
import { takeUntil, tap } from 'rxjs/operators'
import { NggPopoverDirective } from './popover.directive'

@Directive({
  selector: '[nggPopoverTrigger]',
})
export class NggPopoverTriggerDirective implements OnInit, OnDestroy {
  $unsubscribe = new Subject()

  @HostBinding('class') class = 'dropdown-toggle'
  @HostBinding('attr.aria-haspopup') haspopup = 'listbox'
  @HostBinding('attr.aria-owns') owns: string | null = null
  @HostBinding('attr.aria-expanded') expanded = this.popover.state.$isOpen.value

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
    private _elRef: ElementRef
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

    this.popover.triggerElement = this._elRef

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
