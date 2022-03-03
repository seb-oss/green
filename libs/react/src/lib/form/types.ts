import { ChangeEventHandler, FocusEventHandler } from 'react'
import { IndicatorType } from '@sebgroup/extract'

export interface InputProps {
  id?: string
  label?: string
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  validator?: IValidator
  disabled?: boolean
}
export interface TextInputProps<T> extends InputProps {
  type?: 'text' | 'email' | 'number'
  value?: T
  info?: string
  onChangeText?: (text?: T) => unknown
}
export interface NumberInputProps extends TextInputProps<number> {
  min?: number
  max?: number
  step?: number
}
export interface CheckboxProps extends InputProps {
  checked?: boolean
  value?: string
  onChecked?: (checked: boolean | undefined) => unknown
}

export interface OnChangeRadioButton {
  value?: string
  checked?: boolean
}
export interface RadioButtonProps {
  label?: string
  value?: string
  disabled?: boolean
  validator?: string
  checked?: boolean
  onChangeRadioBtn?: (checked: OnChangeRadioButton | undefined) => unknown
}

export type InputListener<T> = (newValue?: T) => unknown

export interface IValidator {
  message: string
  indicator: IndicatorType
  rules: ValidatorRules
}

export interface ValidatorRules {
  type: ValidatorType
  custom?: () => string | undefined
}

export type ValidatorType = 'Required' | 'Email'
