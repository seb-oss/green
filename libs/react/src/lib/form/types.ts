import { IValidator } from '@sebgroup/extract'
import { HTMLProps } from 'react'

export interface TextInputProps extends HTMLProps<HTMLInputElement> {
  type?: 'text' | 'email' | 'number'
  label?: string
  info?: string
  expandableInfo?: string
  expandableInfoButtonLabel?: string
  validator?: IValidator
  onChangeInput?: (value: string) => string
}

export interface NumberInputProps extends TextInputProps {
  min?: number
  max?: number
  step?: number
  expandableInfo?: string
  expandableInfoButtonLabel?: string
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
