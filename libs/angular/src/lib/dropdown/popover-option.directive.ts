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
import { takeUntil, tap } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { NggPopoverDirective } from './popover.directive'

@Directive({
  selector: '[nggPopoverOption]',
})
export class NggPopoverOptionDirective implements OnInit, OnDestroy {
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
    @Inject(forwardRef(() => NggPopoverDirective))
    public popover: NggPopoverDirective,
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
