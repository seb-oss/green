import { InputHTMLAttributes } from 'react'
import useInput from '../useInput'
import { CheckboxProps, NumberInputProps, RadioButtonProps, TextInputProps } from '../types'
import { IValidator, IndicatorType, validateClassName } from '@sebgroup/extract'
import React from 'react'
import Button from "../button/button";

export type Renderer = (
  type: string,
  props: InputHTMLAttributes<HTMLInputElement>,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeInput?: (value: string) => string,
  label?: string,
  info?: string,
  validator?: IValidator,
  expandableInfo?: string,
) => JSX.Element

export const RenderInput: Renderer = (type, props, onChange, onChangeInput, label, info, validator, expandableInfo) => {
  const { value, ...inputProps } = useInput(props, onChange, onChangeInput)
  const propsWithDescription = info ? { ...inputProps, 'aria-describedby': `${inputProps.id}_info` } : inputProps

  // Render naked
  if (!label && !info && !expandableInfo) return <input type={type} value={value} {...propsWithDescription} />

  return (
    <div className="form-group">
      { expandableInfo && <div className="form-group_backdrop"></div> }
      <div className="form-group_head">
        <div className="form-group_labels">
          { label && <label htmlFor={inputProps.id}>{label}</label> }
          { info && <span className="form-info" id={`${inputProps.id}_info`}> {info} </span> }
          { expandableInfo &&  <span> { expandableInfo } </span> }
        </div>
        { expandableInfo && <Button variant="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"/></svg>
        </Button> }
      </div>
      <input type={type} value={value} {...propsWithDescription} className={validator && validateClassName(validator?.indicator as IndicatorType)} />
      { validator && <span className="form-info">{validator.message}</span> }
    </div>
  )
}

export const TextInput = ({ label, info, onChange, onChangeInput, validator, expandableInfo, ...props }: TextInputProps) => RenderInput('text', props, onChange, onChangeInput, label, info, validator, expandableInfo)

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
