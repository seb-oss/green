import React from 'react'
import { RadioButton, RadioButtonProps } from '..'

export interface OnChangeRadioButton {
  value?: string
  checked?: boolean
}

export interface RadioGroupProps {
  title?: string
  description?: string
}

export const RadioGroup = ({
  description,
  title,
  children,
}: React.PropsWithChildren<RadioGroupProps>) => {
  return (
    <div className="form-group">
      <fieldset>
        <legend>{title}</legend>
        <span className="form-info">{description}</span>
        {React.Children.toArray(children).map(
          (value: React.ReactNode) => value
        )}
      </fieldset>
    </div>
  )
}

export default RadioGroup
