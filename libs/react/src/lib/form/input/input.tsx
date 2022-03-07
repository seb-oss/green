import { InputHTMLAttributes } from 'react'
import useInput from '../useInput'
import { CheckboxProps, InputListener, IValidator, NumberInputProps, RadioButtonProps, TextInputProps } from '../types'
import { IndicatorType, validateClassName } from '@sebgroup/extract'
import React from 'react'

export type Renderer = (
  type: string,
  props: InputHTMLAttributes<HTMLInputElement>,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  label?: string,
  info?: string,
  validator?: IValidator,
  ref?: React.ForwardedRef<HTMLInputElement>
) => JSX.Element

export const RenderInput: Renderer = (type, props, onChange, label, info, validator, ref) => {
  const { value, ...inputProps } = useInput(props, onChange)
  const propsWithDescription = info ? { ...inputProps, 'aria-describedby': `${inputProps.id}_info` } : inputProps

  // Render naked
  if (!label && !info) return <input type={type} value={value} {...propsWithDescription} ref={ref} />

  return (
    <div className="form-group">
      {label && <label htmlFor={inputProps.id}>{label}</label>}
      {info && (
        <span className="form-info" id={`${inputProps.id}_info`}>
          {info}
        </span>
      )}
      <input type={type} value={value} {...propsWithDescription} className={validator && validateClassName(validator?.indicator as IndicatorType)} ref={ref} />
      {validator && <span className="form-info">{validator.message}</span>}
    </div>
  )
}

export const TextInput = React.forwardRef(({ label, info, onChange, ...props }: TextInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  return RenderInput('text', props, onChange, label, info, props.validator, ref)
})

export const EmailInput = React.forwardRef(({ label, info, onChange, ...props }: TextInputProps, ref: React.ForwardedRef<HTMLInputElement>) =>
  RenderInput('email', props, onChange, label, info, props.validator, ref)
)

export const NumberInput = React.forwardRef(({ label, info, onChange, ...props }: NumberInputProps, ref: React.ForwardedRef<HTMLInputElement>) =>
  RenderInput('number', props, onChange, label, info, props.validator, ref)
)

export const Checkbox = React.forwardRef(({ label, onChange, ...props }: CheckboxProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  const inputProps = useInput(props, onChange)

  return (
    <label htmlFor={inputProps.id} className="form-control">
      {label}
      <input type="checkbox" {...inputProps} ref={ref} />
      <span></span>
      <i />
    </label>
  )
})

export const RadioButton = React.forwardRef(({ label, onChange, validator, ...props }: RadioButtonProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  const inputProps = useInput(props, onChange)

  return (
    <label htmlFor={inputProps.id} className="form-control">
      <input type="radio" name="default" {...inputProps} className={validator} ref={ref} />
      <span>{label}</span>
      <i />
    </label>
  )
})
