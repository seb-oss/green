import { InputHTMLAttributes, VFC } from 'react'
import { useInput } from './hooks'
import { CheckboxProps, InputListener, TextInputProps } from './types'

type Renderer = <T>(
  type: string,
  props: InputHTMLAttributes<HTMLInputElement>,
  evaluator: (target: HTMLInputElement) => T | undefined,
  label?: string,
  listener?: InputListener<T>,
) => JSX.Element

const renderInput: Renderer = (type, props, evaluator, label, listener) => {
  const {value, ...inputProps} = useInput(props, evaluator, listener)
  return (
    <>
      { label && <label htmlFor={inputProps.id}>{label}</label> }
      <input type={type} value={value} {...inputProps} />
    </>
  )
}

export const TextInput: VFC<TextInputProps<string>> = ({ label, onChangeText, ...props }) => (
  renderInput<string>('text', props, (e) => e.value, label, onChangeText)
)

export const EmailInput: VFC<TextInputProps<string>> = ({ label, onChangeText, ...props }) => (
  renderInput<string>('email', props, (e) => e.value, label, onChangeText)
)

export const NumberInput: VFC<TextInputProps<number>> = ({ label, onChangeText, ...props }) => (
  renderInput<number>('number', props, (e) => e.value.length ? parseInt(e.value, 10) : undefined, label, onChangeText)
)

export const Checkbox: VFC<CheckboxProps> = ({ label, onChecked, ...props }) => {
  const inputProps = useInput(props, (e) => e.checked, onChecked)

  return (
    <label htmlFor={inputProps.id} className="form-control">{label}
      <input type="checkbox" {...inputProps} />
      <span></span>
    </label>
  )
}
