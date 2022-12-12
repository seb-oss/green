import { InputHTMLAttributes } from 'react'
import useInput from '../useInput'
import { CheckboxProps, NumberInputProps, RadioButtonProps, TextInputProps } from '../types'
import { IValidator, IndicatorType, validateClassName } from '@sebgroup/extract'
import React from 'react'

export type Renderer = (
  type: string,
  props: InputHTMLAttributes<HTMLInputElement>,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeInput?: (value: string) => string,
  label?: string,
  info?: string,
  validator?: IValidator
) => JSX.Element

export const RenderInput: Renderer = (type, props, onChange, onChangeInput, label, info, validator) => {
  const { value, ...inputProps } = useInput(props, onChange, onChangeInput)
  const propsWithDescription = info ? { ...inputProps, 'aria-describedby': `${inputProps.id}_info` } : inputProps

  // Render naked
  if (!label && !info) return <input type={type} value={value} {...propsWithDescription} />

  return (
    <div className="form-group">
      {label && <label htmlFor={inputProps.id}>{label}</label>}
      {info && (
        <span className="form-info" id={`${inputProps.id}_info`}>
          {info}
        </span>
      )}
      <input type={type} value={value} {...propsWithDescription} className={validator && validateClassName(validator?.indicator as IndicatorType)} />
      {validator && <span className="form-info">{validator.message}</span>}
    </div>
  )
}

export const TextInput = ({ label, info, onChange, onChangeInput, validator, ...props }: TextInputProps) => RenderInput('text', props, onChange, onChangeInput, label, info, validator)

export const EmailInput = ({ label, info, onChange, onChangeInput, validator, ...props }: TextInputProps) => RenderInput('email', props, onChange, onChangeInput, label, info, validator)

export const NumberInput = ({ label, info, onChange, onChangeInput, validator, ...props }: NumberInputProps) => RenderInput('number', props, onChange, onChangeInput, label, info, validator)

export const Checkbox = ({ label, onChange, validator, ...props }: CheckboxProps) => {
  const inputProps = useInput(props, onChange)
  const validatorClassName: string = validateClassName(validator?.indicator as IndicatorType)

  return (
    <>
      <div className="form-group">
        <label htmlFor={inputProps.id} className={`form-control ${validatorClassName}`}>
          {label}
          <input type="checkbox" {...inputProps} className={validatorClassName} />
          <i />
        </label>
        {validator && <span className="form-info">{validator.message}</span>}
      </div>
    </>
  )
}

export const RadioButton = React.forwardRef(({ label, validator, ...props }: RadioButtonProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  const { id } = useInput(props)

  return (
    <label htmlFor={id} className="form-control">
      <input id={id} type="radio" {...props} className={validator} ref={ref} />
      <span>{label}</span>
      <i />
    </label>
  )
})
