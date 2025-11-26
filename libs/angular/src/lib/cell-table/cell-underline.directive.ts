import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'

@Directive({
    selector: '[nggSlidingUnderline]',
    standalone: false
})
export class SlidingUnderlineDirective implements OnInit, OnChanges {
  constructor(private element: ElementRef<HTMLElement>) {}

  @Input() public nggSlidingUnderline: any
  @Input() public key?: any
  @Input() public disabled?: boolean

  ngOnInit(): void {
    if (this.element?.nativeElement) {
      this.element.nativeElement.classList.add('slider')

      this.element.nativeElement.addEventListener('animationend', () => {
        this.element.nativeElement.classList.remove(
          'left',
          'slider-positive',
          'slider-negative',
        )
      })
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.disabled) {
      if (
        changes.slidingUnderline &&
        changes.key &&
        !changes.slidingUnderline.isFirstChange() &&
        !changes?.key?.isFirstChange()
      ) {
        if (changes.key.currentValue === changes.key.previousValue) {
          this.addAnimation(
            changes.slidingUnderline.currentValue,
            changes.slidingUnderline.previousValue,
          )
        }
      } else {
        if (
          changes.slidingUnderline &&
          !changes.slidingUnderline.isFirstChange()
        ) {
          this.addAnimation(
            changes.slidingUnderline.currentValue,
            changes.slidingUnderline.previousValue,
          )
        }
      }
    }
  }

  addAnimation(current: any, previous: any) {
    if (current > previous)
      this.element.nativeElement.classList.add('slider-positive')
    else this.element.nativeElement.classList.add('slider-negative')
    this.element.nativeElement.classList.add('left')
  }
}
