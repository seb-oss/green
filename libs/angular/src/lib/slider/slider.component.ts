import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

import {
  getSliderTrackBackground,
  randomId,
  sliderColors,
} from '@sebgroup/extract'

interface SliderStyle {
  background?: string
}

@Component({
    selector: 'ngg-slider',
    templateUrl: './slider.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: NggSliderComponent,
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class NggSliderComponent
  implements ControlValueAccessor, OnInit, OnChanges
{
  @Input() name = `${randomId()}-slider`
  @Input() min = 0
  @Input() max = 100
  @Input() step = 1
  @Input() label = ''
  @Input() instruction = ''
  @Input() placeholder = ''
  @Input() errorMessage = ''
  @Input() hasTextbox = false
  @Input() unitLabel = 'kr'
  @Input() disabled = false
  @Input() value = 0
  @Input() enterkeyhint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send'

  @Output() sliderChange = new EventEmitter<number>()
  @Output() sliderTouch = new EventEmitter<boolean>()

  onChangeFn?: (val: number) => void
  onTouchedFn?: VoidFunction
  style: SliderStyle = {}

  ngOnInit(): void {
    this.setTrackBackground()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      ['min', 'max', 'value'].some((x: string) =>
        Object.prototype.hasOwnProperty.call(changes, x),
      )
    ) {
      this.setTrackBackground()
    }
  }

  onBlur(): void {
    this.sliderTouch.emit(true)
    this.onTouchedFn && this.onTouchedFn()
  }

  handleChange(): void {
    this.value =
      this.value && this.value.toString() !== '' ? this.value : this.min
    this.setTrackBackground()
    this.sliderChange.emit(this.value)
    this.onChangeFn && this.onChangeFn(this.value)
  }

  setTrackBackground(): void {
    if (this.disabled) {
      this.style.background = sliderColors.disabled
      return
    }

    const percent =
      (Math.round((this.value - this.min) / this.step) /
        ((this.max - this.min) / this.step)) *
      100
    this.style.background = getSliderTrackBackground(percent)
  }

  /** control value accessor functions */
  writeValue(val: number): void {
    if (this.value !== val) {
      this.value = val ?? 0
      this.handleChange()
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn
  }
}
