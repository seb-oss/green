import React, { ReactElement } from 'react'
import { IValidator, RadioButtonProps } from '../types'
import { IndicatorType, validateClassName } from '@sebgroup/extract'

export interface RadioGroupProps {
  title?: string
  description?: string
  validator?: IValidator
  onChangeRadio?: (value: string) => string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
}

export const RadioGroup = ({ description, title, validator, onChangeRadio, onChange, name, children }: React.PropsWithChildren<RadioGroupProps>) => {
  const [checked, setChecked] = React.useState<string>()
  const validatorClassName: string = validateClassName(validator?.indicator as IndicatorType)

  const onChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value)
    onChangeRadio && onChangeRadio(event.target.value)
    onChange && onChange(event)
  }

  return (
    <div className="form-group">
      <fieldset className={validatorClassName}>
        <legend>{title}</legend>
        <span className="form-info">{description}</span>
        {React.Children.map(children as React.ReactElement, (Child: React.ReactElement<RadioButtonProps>) => {
          return React.isValidElement<React.FC<RadioButtonProps>>(Child)
            ? React.cloneElement(Child, { validator: validatorClassName, onChange: onChanges, checked: checked === Child.props.value, name })
            : Child
        })}
      </fieldset>
      {validator?.message && <span className="form-info">{validator?.message}</span>}
    </div>
  )
}

export default RadioGroup
