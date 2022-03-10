import React, { ReactElement } from 'react'
import { IValidator, RadioButtonProps } from '../types'
import { IndicatorType, validateClassName } from '@sebgroup/extract'

export interface RadioGroupProps {
  title?: string
  description?: string
  validator?: IValidator
  onChangeRadio?: (value: string) => string
}

export const RadioGroup = ({ description, title, validator, onChangeRadio, children }: React.PropsWithChildren<RadioGroupProps>) => {
  const [checked, setChecked] = React.useState<string>()
  const validatorClassName: string = validateClassName(validator?.indicator as IndicatorType)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value)
    onChangeRadio && onChangeRadio(event.target.value)
  }

  return (
    <div className="form-group">
      <fieldset className={validatorClassName}>
        <legend>{title}</legend>
        <span className="form-info">{description}</span>
        {React.Children.map(children as React.ReactElement, (Child: React.ReactElement<RadioButtonProps>) => {
          return React.isValidElement<React.FC<RadioButtonProps>>(Child) ? React.cloneElement(Child, { validator: validatorClassName, onChange, checked: checked === Child.props.value }) : Child
        })}
      </fieldset>
      {validator?.message && <span className="form-info">{validator?.message}</span>}
    </div>
  )
}

export default RadioGroup
