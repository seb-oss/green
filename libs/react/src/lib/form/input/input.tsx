import { InputHTMLAttributes } from 'react'
import useInput from '../useInput'
import {
  CheckboxProps,
  InputListener,
  IValidator,
  NumberInputProps,
  RadioButtonProps,
  TextInputProps,
} from '../types'
import { IndicatorType, validateClassName } from '@sebgroup/extract'

type Renderer = <T>(
  type: string,
  props: InputHTMLAttributes<HTMLInputElement>,
  evaluator: (target: HTMLInputElement) => T | undefined,
  label?: string,
  info?: string,
  listener?: InputListener<T>,
  validator?: IValidator
) => JSX.Element

const RenderInput: Renderer = (
  type,
  props,
  evaluator,
  label,
  info,
  listener,
  validator
) => {
  const { value, ...inputProps } = useInput(props, evaluator, listener)
  const propsWithDescription = info
    ? { ...inputProps, 'aria-describedby': `${inputProps.id}_info` }
    : inputProps

  // Render naked
  if (!label && !info)
    return <input type={type} value={value} {...propsWithDescription} />

  return (
    <div className="form-group">
      {label && <label htmlFor={inputProps.id}>{label}</label>}
      {info && (
        <span className="form-info" id={`${inputProps.id}_info`}>
          {info}
        </span>
      )}
      <input
        type={type}
        value={value}
        {...propsWithDescription}
        className={
          validator && validateClassName(validator?.indicator as IndicatorType)
        }
      />
      {validator && <span className="form-info">{validator.message}</span>}
    </div>
  )
}

export const TextInput = ({
  label,
  info,
  onChangeText,
  ...props
}: TextInputProps<string>) =>
  RenderInput<string>(
    'text',
    props,
    (e) => e.value,
    label,
    info,
    onChangeText,
    props.validator
  )

export const EmailInput = ({
  label,
  info,
  onChangeText,
  ...props
}: TextInputProps<string>) =>
  RenderInput<string>(
    'email',
    props,
    (e) => e.value,
    label,
    info,
    onChangeText,
    props.validator
  )

export const NumberInput = ({
  label,
  info,
  onChangeText,
  ...props
}: NumberInputProps) =>
  RenderInput<number>(
    'number',
    props,
    (e) => (e.value.length ? parseInt(e.value, 10) : undefined),
    label,
    info,
    onChangeText,
    props.validator
  )

export const Checkbox = ({ label, onChecked, ...props }: CheckboxProps) => {
  const inputProps = useInput(props, (e) => e.checked, onChecked)

  return (
    <label htmlFor={inputProps.id} className="form-control">
      {label}
      <input type="checkbox" {...inputProps} />
      <span></span>
      <i />
    </label>
  )
}

export const RadioButton = ({
  label,
  onChangeRadioBtn,
  validator,
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
      <input
        type="radio"
        name="default"
        {...inputProps}
        className={validator}
      />
      <span>{label}</span>
      <i />
    </label>
  )
}
