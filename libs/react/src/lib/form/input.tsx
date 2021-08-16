import { InputHTMLAttributes, VFC } from 'react'
import useInput from './useInput'
import { CheckboxProps, InputListener, TextInputProps } from './types'

type Renderer = <T>(
  type: string,
  props: InputHTMLAttributes<HTMLInputElement>,
  evaluator: (target: HTMLInputElement) => T | undefined,
  label?: string,
  listener?: InputListener<T>
) => JSX.Element

const RenderInput: Renderer = (type, props, evaluator, label, listener) => {
  const { value, ...inputProps } = useInput(props, evaluator, listener)
  return (
    <>
      {label && <label htmlFor={inputProps.id}>{label}</label>}
      <input type={type} value={value} {...inputProps} />
    </>
  )
}

export const TextInput = ({
  label,
  onChangeText,
  ...props
}: TextInputProps<string>) =>
  RenderInput<string>('text', props, (e) => e.value, label, onChangeText)

export const EmailInput = ({
  label,
  onChangeText,
  ...props
}: TextInputProps<string>) =>
  RenderInput<string>('email', props, (e) => e.value, label, onChangeText)

export const NumberInput = ({
  label,
  onChangeText,
  ...props
}: TextInputProps<number>) =>
  RenderInput<number>(
    'number',
    props,
    (e) => (e.value.length ? parseInt(e.value, 10) : undefined),
    label,
    onChangeText
  )

export const Checkbox = ({ label, onChecked, ...props }: CheckboxProps) => {
  const inputProps = useInput(props, (e) => e.checked, onChecked)

  return (
    <label htmlFor={inputProps.id} className="form-control">
      {label}
      <input type="checkbox" {...inputProps} />
      <span></span>
    </label>
  )
}
