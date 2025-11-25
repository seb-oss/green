import { isPlatformServer } from '@angular/common'
import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Optional,
  PLATFORM_ID,
  Renderer2,
  Self,
} from '@angular/core'
import {
  AbstractControl,
  ControlValueAccessor,
  NgControl,
  Validator,
} from '@angular/forms'
import _Inputmask from 'inputmask'

import type Inputmask from 'inputmask'

import { INPUT_MASK_CONFIG, InputMaskConfig } from './config'

import type { InputmaskOptions } from './input-mask.types'

const InputmaskConstructor =
  (_Inputmask as unknown as { default?: Inputmask.Static }).default ||
  _Inputmask

@Directive({
    selector: '[nggvInputMask]',
    standalone: false
})
export class NggvInputMaskDirective<T = any>
  implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor, Validator
{
  /** Input settings of directive */
  @Input() nggvInputMask: InputmaskOptions<T> = {}

  inputMaskPlugin: Inputmask.Instance | undefined
  nativeInputElement: HTMLInputElement | undefined
  defaultInputMaskConfig = new InputMaskConfig()

  private mutationObserver: MutationObserver | undefined

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    @Inject(INPUT_MASK_CONFIG) config: InputMaskConfig,
    @Inject(PLATFORM_ID) private platformId: string,
    private elementRef: ElementRef<HTMLInputElement | any>,
    private renderer: Renderer2,
    private ngZone: NgZone,
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this
    }
    this.setNativeInputElement(config)
  }

  @HostListener('input', ['$event.target.value'])
  onInput = (_: any) => {
    // Empty method
  }

  @HostListener('blur', ['$event.target.value'])
  onTouched = (_: any) => {
    // Empty method
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    // Trigger "onInput" when pressing delete or backspace, when input is focused
    if (['Delete', 'Backspace'].includes(event.key)) {
      this.elementRef.nativeElement.dispatchEvent(
        new Event('input', {
          bubbles: true,
          cancelable: true,
        }),
      )
    }
  }

  ngOnInit() {
    if (this.control) {
      this.control.setValidators(
        this.control.validator
          ? [this.control.validator, this.validate]
          : [this.validate],
      )

      this.control.updateValueAndValidity()
    }
  }

  ngOnDestroy(): void {
    this.inputMaskPlugin?.remove()
    this.mutationObserver?.disconnect()
  }

  initInputMask() {
    if (
      isPlatformServer(this.platformId) ||
      !this.nativeInputElement ||
      !Object.keys(this.nggvInputMask ?? {}).length
    ) {
      return
    }

    this.inputMaskPlugin = this.ngZone.runOutsideAngular(() =>
      new InputmaskConstructor(this.inputMaskOptions).mask(
        this.nativeInputElement as HTMLInputElement,
      ),
    )

    if (this.control) {
      setTimeout(() => {
        this.control!.updateValueAndValidity()
      })
    }
  }

  ngAfterViewInit() {
    this.initInputMask()
  }

  get inputMaskOptions(): Inputmask.Options {
    const { parser, ...options } = this.nggvInputMask
    return options
  }

  writeValue(value: string): void {
    if (this.nativeInputElement) {
      this.renderer.setProperty(this.nativeInputElement, 'value', value ?? '')
    }
  }

  registerOnChange(fn: (_: T | null) => void): void {
    // Use injected parser from settings to modify value
    // of users desire
    this.onInput = (value) => {
      const parser = this.nggvInputMask?.parser
      const newValue = parser && value ? parser(value) : value
      fn(newValue)
    }
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  validate = (control: AbstractControl): { [key: string]: any } | null =>
    !control.value || !this.inputMaskPlugin || this.inputMaskPlugin.isValid()
      ? null
      : { invalidformat: true }

  setDisabledState(disabled: boolean): void {
    if (this.nativeInputElement) {
      this.renderer.setProperty(this.nativeInputElement, 'disabled', disabled)
    }
  }

  private get control(): AbstractControl | null | undefined {
    return this.ngControl?.control
  }

  private setNativeInputElement(config: InputMaskConfig) {
    if (this.elementRef.nativeElement.tagName === 'INPUT') {
      this.nativeInputElement = this.elementRef.nativeElement
    } else {
      this.defaultInputMaskConfig = {
        ...this.defaultInputMaskConfig,
        ...config,
      }
      if (this.defaultInputMaskConfig.isAsync) {
        // Create an observer instance linked to the callback function
        this.mutationObserver = new MutationObserver((mutationsList) => {
          for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
              const nativeInputElement =
                this.elementRef.nativeElement.querySelector(
                  this.defaultInputMaskConfig.inputSelector,
                )
              if (nativeInputElement) {
                this.nativeInputElement = nativeInputElement
                this.mutationObserver?.disconnect()
                this.initInputMask()
              }
            }
          }
        })

        // Start observing the target node for configured mutations
        this.mutationObserver.observe(this.elementRef.nativeElement, {
          childList: true,
          subtree: true,
        })
      } else {
        this.nativeInputElement = this.elementRef.nativeElement.querySelector(
          this.defaultInputMaskConfig.inputSelector,
        )
      }
    }
  }
}
