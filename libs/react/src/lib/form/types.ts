import { HTMLProps } from 'react'
import { IndicatorType } from '@sebgroup/extract'

export interface TextInputProps extends HTMLProps<HTMLInputElement> {
  type?: 'text' | 'email' | 'number'
  label?: string
  info?: string
  validator?: IValidator
  onChangeInput?: (value: string) => string
}

export interface NumberInputProps extends TextInputProps {
  min?: number
  max?: number
  step?: number
}

export interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  validator?: IValidator
}

export interface RadioButtonProps extends HTMLProps<HTMLInputElement> {
  label: string
  validator?: string
  value: string
}

export type InputListener<T> = (newValue?: T) => unknown

export interface IValidator {
  message: string
  indicator: IndicatorType
}
