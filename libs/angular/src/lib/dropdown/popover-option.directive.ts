import {
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import { NggPopoverDirective } from './popover.directive'

@Directive({
  selector: '[nggPopoverOption]',
})
export class NggPopoverOptionDirective implements OnInit {
  @Input() nggPopoverOption: any
  @Input() index: number | undefined
  @Input() selected = false
  @Output() selectedChanged = new EventEmitter()
  @HostBinding('attr.role') role = 'option'
  @HostBinding('attr.aria-selected')
  public get ariaSelected(): null | boolean {
    return this.selected || null
  }
  @HostBinding('attr.id') id = ''
  @HostListener('click') clickHandler = (event: Event) => {
    this.select(event)
  }

  constructor(
    @Inject(forwardRef(() => NggPopoverDirective))
    public popover: NggPopoverDirective,
    public elRef: ElementRef
  ) {}

  ngOnInit() {
    this.id = `${this.popover.triggerElement?.nativeElement.id}_dropdownOption_${this.index}`
  }

  select = (event: Event) => {
    this.selectedChanged.emit(this.nggPopoverOption)
  }
}
