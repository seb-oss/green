import React, { InputHTMLAttributes } from 'react'
import { IValidator, IndicatorType, validateClassName } from '@sebgroup/extract'
import {
  CheckboxProps,
  NumberInputProps,
  RadioButtonProps,
  TextInputProps,
} from '../types'
import { FormItem } from '../../formItem'
import useInput from '../useInput'
import classNames from 'classnames'

export type Renderer = (
  type: string,
  props: InputHTMLAttributes<HTMLInputElement>,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeInput?: (value: string) => string,
  label?: string,
  info?: string | React.ReactNode,
  validator?: IValidator,
  expandableInfo?: React.ReactNode,
  expandableInfoButtonLabel?: string,
  testId?: string
) => JSX.Element

export const RenderInput: Renderer = (
  type,
  props,
  onChange,
  onChangeInput,
  label,
  info,
  validator,
  expandableInfo,
  expandableInfoButtonLabel,
  testId
) => {
  const { value, ...inputProps } = useInput(props, onChange, onChangeInput)

  const propsWithDescription = info
    ? { ...inputProps, 'aria-describedby': `${inputProps.id}_info` }
    : inputProps

  // Render naked
  if (!label && !info && !expandableInfo)
    return (
      <input
        type={type}
        value={value}
        data-testid={testId}
        {...propsWithDescription}
      />
    )

  return (
    <FormItem
      validator={validator}
      labelInformation={info}
      label={label}
      expandableInfo={expandableInfo}
      expandableInfoButtonLabel={expandableInfoButtonLabel}
      inputId={inputProps.id}
    >
      <div className="gds-input-wrapper">
        <input
          type={type}
          value={value}
          {...propsWithDescription}
          className={
            validator &&
            validateClassName(validator?.indicator as IndicatorType)
          }
          data-testid={testId}
        />
      </div>
    </FormItem>
  )
}

export const TextInput = ({
  label,
  info,
  testId,
  onChange,
  onChangeInput,
  validator,
  expandableInfo,
  expandableInfoButtonLabel,
  ...props
}: TextInputProps) =>
  RenderInput(
    'text',
    props,
    onChange,
    onChangeInput,
    label,
    info,
    validator,
    expandableInfo,
    expandableInfoButtonLabel,
    testId
  )

export const EmailInput = ({
  label,
  info,
  onChange,
  onChangeInput,
  validator,
  testId,
  ...props
}: TextInputProps) =>
  RenderInput(
    'email',
    props,
    onChange,
    onChangeInput,
    label,
    info,
    validator,
    testId
  )

export const NumberInput = ({
  label,
  info,
  onChange,
  onChangeInput,
  validator,
  expandableInfo,
  expandableInfoButtonLabel,
  testId,
  ...props
}: NumberInputProps) =>
  RenderInput(
    'number',
    props,
    onChange,
    onChangeInput,
    label,
    info,
    validator,
    expandableInfo,
    expandableInfoButtonLabel,
    testId
  )

export const Checkbox = ({
  label,
  onChange,
  validator,
  testId,
  ...props
}: CheckboxProps) => {
  const inputProps = useInput(props, onChange)

  const labelClassNames = classNames(
    'form-control',
    validator && validateClassName(validator?.indicator)
  )

  const inputClassNames = classNames(
    validator && validateClassName(validator?.indicator)
  )

  return (
    <div className="form-group">
      <label htmlFor={inputProps.id} className={labelClassNames}>
        {label}
        <input
          type="checkbox"
          data-testid={testId}
          {...inputProps}
          className={inputClassNames}
        />
        <i />
      </label>
      {validator && <span className="form-info">{validator.message}</span>}
    </div>
  )
}

export const RadioButton = React.forwardRef(
  (
    { label, validator, testId, ...props }: RadioButtonProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const { id } = useInput(props)

    const inputClassNames = classNames(validator)

    return (
      <label htmlFor={id} className="form-control">
        <input
          id={id}
          type="radio"
          data-testid={testId}
          {...props}
          className={inputClassNames}
          ref={ref}
        />
        <span>{label}</span>
        <i />
      </label>
    )
  }
)
