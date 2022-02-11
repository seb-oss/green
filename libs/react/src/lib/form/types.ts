import { ChangeEventHandler, FocusEventHandler } from 'react'
import { IndicatorType } from './radioButton/radioGroup'

export interface InputProps {
  id?: string
  label?: string
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
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
  validator?: IndicatorType
  onChangeRadioBtn?: (checked: OnChangeRadioButton | undefined) => unknown
}

export type InputListener<T> = (newValue?: T) => unknown
