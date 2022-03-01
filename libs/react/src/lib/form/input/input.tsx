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
import React from 'react'

export type Renderer = <T>(
  type: string,
  props: InputHTMLAttributes<HTMLInputElement>,
  evaluator: (target: HTMLInputElement) => T | undefined,
  label?: string,
  info?: string,
  listener?: InputListener<T>,
  validator?: IValidator,
  ref?: React.ForwardedRef<HTMLInputElement>
) => JSX.Element

export const RenderInput: Renderer = (
  type,
  props,
  evaluator,
  label,
  info,
  listener,
  validator,
  ref
) => {
  const { value, ...inputProps } = useInput(props, evaluator, listener)
  const propsWithDescription = info
    ? { ...inputProps, 'aria-describedby': `${inputProps.id}_info` }
    : inputProps

  // Render naked
  if (!label && !info)
    return (
      <input type={type} value={value} {...propsWithDescription} ref={ref} />
    )

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
        ref={ref}
      />
      {validator && <span className="form-info">{validator.message}</span>}
    </div>
  )
}

export const TextInput = React.forwardRef(
  (
    { label, info, onChangeText, ...props }: TextInputProps<string>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return RenderInput<string>(
      'text',
      props,
      (e) => e.value,
      label,
      info,
      onChangeText,
      props.validator,
      ref
    )
  }
)

export const EmailInput = React.forwardRef(
  (
    { label, info, onChangeText, ...props }: TextInputProps<string>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) =>
    RenderInput<string>(
      'email',
      props,
      (e) => e.value,
      label,
      info,
      onChangeText,
      props.validator,
      ref
    )
)

export const NumberInput = React.forwardRef(
  (
    { label, info, onChangeText, ...props }: NumberInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) =>
    RenderInput<number>(
      'number',
      props,
      (e) => (e.value.length ? parseInt(e.value, 10) : undefined),
      label,
      info,
      onChangeText,
      props.validator,
      ref
    )
)

export const Checkbox = React.forwardRef(
  (
    { label, onChecked, ...props }: CheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const inputProps = useInput(props, (e) => e.checked, onChecked)

    return (
      <label htmlFor={inputProps.id} className="form-control">
        {label}
        <input type="checkbox" {...inputProps} ref={ref} />
        <span></span>
        <i />
      </label>
    )
  }
)

export const RadioButton = React.forwardRef(
  (
    { label, onChangeRadioBtn, validator, ...props }: RadioButtonProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
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
          ref={ref}
        />
        <span>{label}</span>
        <i />
      </label>
    )
  }
)
