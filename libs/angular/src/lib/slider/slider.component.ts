import { ChangeDetectionStrategy } from '@angular/compiler'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { randomId } from '@sebgroup/extract'

interface SliderStyle {
  background?: string
}

const SLIDER_TRACK_COLOR = '#007ac7'
const SLIDER_DISABLED_COLOR = '#dedede'

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
  private _value: number = 0
  @Input() name: string = `${randomId}-slider`
  @Input() min: number = 0
  @Input() max: number = 100
  @Input() step: number = 1
  @Input() errorMessage: string = ''
  @Input() hasTextbox: boolean = false
  @Input() disabled: boolean = false
  @Input() set value(val: number) {
    this._value = val ?? 0
    this.setTrackBackground()
    this.onTouchedFn && this.onTouchedFn()
    this.onChangeFn && this.onChangeFn(this.value)
  }
  get value(): number {
    return this._value
  }
  @Output() change = new EventEmitter()
  onChangeFn?: (val: number) => void
  onTouchedFn?: VoidFunction
  style: SliderStyle = {}

  ngOnInit(): void {
    this.setTrackBackground()
  }

  setTrackBackground(): void {
    if (this.disabled) {
      this.style.background = SLIDER_DISABLED_COLOR
      return
    }

    const _value = ((this.value - this.min) / (this.max - this.min)) * 100
    this.style.background = `
      linear-gradient(
        to right,
        ${SLIDER_TRACK_COLOR} 0%,
        ${SLIDER_TRACK_COLOR} ${_value}%,
        ${SLIDER_DISABLED_COLOR} ${_value}%,
        ${SLIDER_DISABLED_COLOR} 100%
      )`
  }

  /** control value accessor functions */
  writeValue(val: number): void {
    this.value = val
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn
  }

  registerOnTouched(fn: any): void {
    console.log("HERE")
    this.onTouchedFn = fn
  }
}
