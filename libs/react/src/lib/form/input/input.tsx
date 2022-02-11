import { InputHTMLAttributes } from 'react'
import useInput from '../useInput'
import {
  CheckboxProps,
  InputListener,
  RadioButtonProps,
  TextInputProps,
} from '../types'

type Renderer = <T>(
  type: string,
  props: InputHTMLAttributes<HTMLInputElement>,
  evaluator: (target: HTMLInputElement) => T | undefined,
  label?: string,
  info?: string,
  listener?: InputListener<T>
) => JSX.Element

const RenderInput: Renderer = (
  type,
  props,
  evaluator,
  label,
  info,
  listener
) => {
  const { value, ...inputProps } = useInput(props, evaluator, listener)
  const propsWithDescription = info
    ? { ...inputProps, 'aria-describedby': `${inputProps.id}_info` }
    : inputProps
  return (
    <div className="form-field">
      {label && <label htmlFor={inputProps.id}>{label}</label>}
      {info && (
        <span className="form-info" id="{inputProps.id}_info">
          {info}
        </span>
      )}
      <input type={type} value={value} {...propsWithDescription} />
    </div>
  )
}

export const TextInput = ({
  label,
  info,
  onChangeText,
  ...props
}: TextInputProps<string>) =>
  RenderInput<string>('text', props, (e) => e.value, label, info, onChangeText)

export const EmailInput = ({
  label,
  info,
  onChangeText,
  ...props
}: TextInputProps<string>) =>
  RenderInput<string>('email', props, (e) => e.value, label, info, onChangeText)

export const NumberInput = ({
  label,
  info,
  onChangeText,
  ...props
}: TextInputProps<number>) =>
  RenderInput<number>(
    'number',
    props,
    (e) => (e.value.length ? parseInt(e.value, 10) : undefined),
    label,
    info,
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

export const RadioButton = ({
  label,
  onChangeRadioBtn,
  ...props
}: RadioButtonProps) => {
  const inputProps = useInput(
    props,
    (e) => {
      return { value: e.value, checked: e.checked }
    },
    onChangeRadioBtn
  )

  return (
    <label htmlFor={inputProps.id} className="form-control">
      <input type="radio" name="default" {...inputProps} />
      <span>{label}</span>
      <i />
    </label>
  )
}
