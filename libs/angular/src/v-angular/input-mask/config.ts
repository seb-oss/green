import { InjectionToken } from '@angular/core'

export class InputMaskConfig {
  isAsync = false
  inputSelector = 'input'
}

export const INPUT_MASK_CONFIG = new InjectionToken<InputMaskConfig>(
  'InputMaskConfig',
)
