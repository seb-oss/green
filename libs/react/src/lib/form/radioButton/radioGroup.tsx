import React from 'react'
import { RadioButtonProps } from '../types'
import { IndicatorType, validateClassName } from '@sebgroup/extract'

interface IValidator {
  message: string
  indicator: IndicatorType
}
export interface RadioGroupProps {
  title?: string
  description?: string
  validator?: IValidator
}

export const RadioGroup = ({
  description,
  title,
  validator,
  children,
}: React.PropsWithChildren<RadioGroupProps>) => {
  const validatorClassName: string = validateClassName(
    validator?.indicator as IndicatorType
  )
  return (
    <div className="form-group">
      <fieldset className={validatorClassName}>
        <legend>{title}</legend>
        <span className="form-info">{description}</span>
        {React.Children.toArray(children).map((child: React.ReactNode) => {
          return React.isValidElement<React.FC<RadioButtonProps>>(child)
            ? React.cloneElement<any>(child, {
                validator: validatorClassName,
              })
            : child
        })}
      </fieldset>
      {validator?.message && (
        <span className="form-info">{validator?.message}</span>
      )}
    </div>
  )
}

export default RadioGroup
