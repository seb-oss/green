import { ChangeDetectionStrategy } from '@angular/compiler'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
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
})
export class NggSliderComponent implements ControlValueAccessor, OnInit {
  private _value = 0
  @Input() name = `${randomId}-slider`
  @Input() min = 0
  @Input() max = 100
  @Input() step = 1
  @Input() label = ''
  @Input() errorMessage = ''
  @Input() hasTextbox = false
  @Input() disabled = false
  @Input() set value(val: number) {
    this._value = val ?? 0
    this.handleChange()
  }
  get value(): number {
    return this._value
  }
  @Output() sliderChange = new EventEmitter<number>()
  @Output() sliderTouch = new EventEmitter<boolean>()
  onChangeFn?: (val: number) => void
  onTouchedFn?: VoidFunction
  style: SliderStyle = {}

  ngOnInit(): void {
    this.setTrackBackground()
  }

  onBlur(): void {
    this.sliderTouch.emit(true)
    this.onTouchedFn && this.onTouchedFn()
  }

  handleChange(): void {
    this.setTrackBackground()
    this.sliderChange.emit(this.value)
    this.onChangeFn && this.onChangeFn(this.value)
  }

  setTrackBackground(): void {
    if (this.disabled) {
      this.style.background = sliderColors.disabled
      return
    }

    const _value = ((this.value - this.min) / (this.max - this.min)) * 100
    this.style.background = getSliderTrackBackground(_value)
  }

  /** control value accessor functions */
  writeValue(val: number): void {
    if (this.value !== val) {
      this._value = val ?? 0
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
